'use client';
import { useEffect, useRef, useState } from 'react';
import { batches, latestBatch, studyNumber, blankReview, makeBrief, traitKey, type Review, type Study, type Submission } from './data';

export default function Lab({userId}:{userId:string}) {
 const [batchId,setBatchId]=useState(latestBatch.id), [reviews,setReviews]=useState<Record<string,Review>>({});
 const [submissions,setSubmissions]=useState<Submission[]>([]), [filter,setFilter]=useState('all'), [compare,setCompare]=useState<string[]>([]);
 const [focus,setFocus]=useState<string|null>(null), [showCompare,setShowCompare]=useState(false), [ready,setReady]=useState(false);
 const [status,setStatus]=useState('Loading feedback…'), [error,setError]=useState(''), [intention,setIntention]=useState('');
 const [briefOpen,setBriefOpen]=useState(false), [busy,setBusy]=useState(false), [toast,setToast]=useState('');
 const current=useRef<Record<string,Review>>({}), pending=useRef<Record<string,Review>>({}), chain=useRef(Promise.resolve());
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null), dialog=useRef<HTMLDialogElement>(null), closeButton=useRef<HTMLButtonElement>(null);
 const storageKey=`lcl-style-lab:${userId}`, batch=batches.find(b=>b.id===batchId)!;
 const count=batch.studies.filter(s=>reviews[s.id]?.verdict).length;
 const selected=batch.studies.filter(s=>['keep','mix'].includes(reviews[s.id]?.verdict));
 const submission=submissions.find(s=>s.batchId===batchId), brief=makeBrief(batch,reviews,intention);
 function stash() { try {localStorage.setItem(storageKey,JSON.stringify(pending.current));} catch { /* Server save remains available. */ } }
 async function saveOne(r:Review) {
  const res=await fetch('/api/reviews',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(r)});
  if(!res.ok) {const body=await res.json().catch(()=>({})) as {error?:string}; throw new Error(body.error||'Save failed. Your browser draft is retained.');}
  if(JSON.stringify(pending.current[r.imageId])===JSON.stringify(r)) delete pending.current[r.imageId];
  stash();
 }
 function flush() {
  const snapshot=Object.values(pending.current);
  if(!snapshot.length) return chain.current;
  setStatus('Saving…');
  chain.current=chain.current.catch(()=>{}).then(async()=>{
   try {for(const r of snapshot) await saveOne(r); setError(''); setStatus(Object.keys(pending.current).length?'Draft pending…':'Image feedback saved');}
   catch(e) {setStatus('Draft saved on this device'); setError((e as Error).message); throw e;}
  });
  return chain.current;
 }
 useEffect(()=>{
  let active=true;
  async function load() {
   let drafts:Record<string,Review>={};
   try {drafts=JSON.parse(localStorage.getItem(storageKey)||'{}');} catch { /* Ignore malformed local drafts. */ }
   try {
    const res=await fetch('/api/reviews'); if(!res.ok) throw new Error('Unable to load saved feedback. Retry before reviewing.');
    const data=await res.json() as {reviews:Review[];submissions:Submission[]}; if(!active) return;
    const rows:Record<string,Review>={}; data.reviews.forEach((r:Review)=>{rows[r.imageId]=r;});
    const known=new Set(batches.flatMap(b=>b.studies.map(s=>s.id)));
    for(const [id,r] of Object.entries(drafts)) if(known.has(id)) {rows[id]=r; pending.current[id]=r;}
    current.current=rows; setReviews(rows); setSubmissions(data.submissions); let direction=data.submissions.find(s=>s.batchId===latestBatch.id)?.intention||latestBatch.direction; try {direction=localStorage.getItem(storageKey+':direction:'+latestBatch.id)??direction;} catch {} setIntention(direction); setReady(true); setStatus('Image feedback saved');
    if(Object.keys(pending.current).length) await flush();
   } catch(e) {if(active) {setError((e as Error).message); setStatus('Feedback unavailable');}}
  }
  void load();
  return ()=>{active=false; if(timer.current) clearTimeout(timer.current);};
 },[storageKey]);
 useEffect(()=>{
  const beforeUnload=(e:BeforeUnloadEvent)=>{if(Object.keys(pending.current).length){e.preventDefault();e.returnValue='';}};
  window.addEventListener('beforeunload',beforeUnload); return ()=>window.removeEventListener('beforeunload',beforeUnload);
 },[]);
 useEffect(()=>{if(!toast)return; const id=setTimeout(()=>setToast(''),3000); return()=>clearTimeout(id);},[toast]);
 useEffect(()=>{
  if(focus || showCompare) {dialog.current?.showModal(); closeButton.current?.focus();}
  else dialog.current?.close();
 },[focus,showCompare]);
 function update(s:Study,patch:Partial<Review>) {
  if(!ready) return;
  const r={...(current.current[s.id]||blankReview(s,batch.id)),...patch};
  current.current={...current.current,[s.id]:r}; setReviews(current.current); pending.current[s.id]=r; stash();
  setStatus('Draft pending…'); if(timer.current)clearTimeout(timer.current);
  timer.current=setTimeout(()=>{void flush().catch(()=>{});},450);
 }
 function rate(s:Study,key:string) {
  const r=current.current[s.id]||blankReview(s,batch.id), v=r.ratings[key]||0;
  update(s,{ratings:{...r.ratings,[key]:v===0?1:v===1?-1:0}});
 }
 function toggleCompare(id:string) {setCompare(c=>c.includes(id)?c.filter(x=>x!==id):c.length<2?[...c,id]:[c[1],id]);}
 async function finish() {
  setBusy(true);
  try {
   if(timer.current)clearTimeout(timer.current);
   await flush(); await chain.current;
   if(Object.keys(pending.current).length) throw new Error('Some changes are still pending. Retry saving first.');
   const res=await fetch('/api/rounds',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({batchId,intention})});
   const data=await res.json() as Submission & {error?:string}; if(!res.ok)throw new Error(data.error||'Could not finish this review.');
   setSubmissions(s=>[...s.filter(x=>x.batchId!==batchId),data]); setBriefOpen(true); setToast('Round saved. Ready for the next conversation.');
  } catch(e) {setError((e as Error).message);} finally {setBusy(false);}
 }
 async function copy() {try{await navigator.clipboard.writeText(brief);setToast('Brief copied');}catch{setToast('Copy unavailable. Download the review instead.');}}
 function download() {
  const payload={batchId,exportedAt:new Date().toISOString(),reviews:batch.studies.map(s=>reviews[s.id]||blankReview(s,batchId)),intention,brief};
  const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'})), a=document.createElement('a');
  a.href=url;a.download=`lcl-${batchId}-review.json`;a.click();URL.revokeObjectURL(url);
 }
 function controls(s:Study,compact=false) {
  const r=reviews[s.id]||blankReview(s,batchId);
  return <div className={'controls '+(compact?'compact':'')}>
   {s.question&&<p className="world-question">{s.question}</p>}
   <div className="verdicts" aria-label={'Overall verdict for '+s.title}>
    {(['keep','mix','pass'] as const).map(v=><button key={v} disabled={!ready} aria-pressed={r.verdict===v} className={'verdict '+(r.verdict===v?'active '+v:'')} onClick={()=>update(s,{verdict:r.verdict===v?'':v})}>{v==='keep'?'✓ Keep':v==='mix'?'↗ Mix':'— Pass'}</button>)}
   </div>
   <div className="traits">{s.traits.map(t=>{const key=traitKey(t),v=r.ratings[key]||0;return <button key={key} disabled={!ready} className={'trait '+(v===1?'more':v===-1?'less':'')} aria-label={`${s.title}, ${key}. ${v===1?'More of this':v===-1?'Less of this':'Neutral'}. Click to cycle more, less, neutral.`} onClick={()=>rate(s,key)}><span>{t.category}</span><strong>{t.value}</strong><i>{v===1?'+':v===-1?'−':'·'}</i></button>;})}</div>
   <label className="note-label">Your notes<textarea disabled={!ready} maxLength={4000} rows={2} value={r.notes} placeholder="What works? What feels wrong? Anything missing?" onChange={e=>update(s,{notes:e.target.value})}/></label>
  </div>;
 }
 const visible=batch.studies.filter(s=>filter==='all'||(filter==='shortlist'?['keep','mix'].includes(reviews[s.id]?.verdict):!reviews[s.id]?.verdict));
 const positives=batch.studies.flatMap(s=>s.traits.filter(t=>reviews[s.id]?.ratings[traitKey(t)]===1).map(t=>({title:s.title,...t})));
 return <>
  <header className="topbar"><a href="/" className="brand"><span className="brand-symbol">↗</span><b>LCL</b><span className="brand-divider"/><span>STYLE LAB</span></a><div className="top-status" role="status"><span className={'status-dot '+(error?'warning':'')}/>{status}</div><a className="signout" href="/signout-with-chatgpt?return_to=%2F" target="_top">Sign out ↗</a></header>
  <div className="workspace">
   <aside className="sidebar"><div className="eyebrow">EXPLORATION JOURNAL</div><h2>Finding<br/>our world.</h2><p>Try widely. Notice precisely.<br/>Keep what feels like LCL.</p><div className="side-label">ROUNDS</div>{batches.map(b=><button key={b.id} className={'round-tab '+(batchId===b.id?'active':'')} onClick={()=>{setBatchId(b.id);setCompare([]);setFilter('all');setBriefOpen(false);let direction=submissions.find(s=>s.batchId===b.id)?.intention||b.direction;try {direction=localStorage.getItem(storageKey+':direction:'+b.id)??direction;} catch {} setIntention(direction);}}><span>{b.title}</span><small>{submissions.some(s=>s.batchId===b.id)?'Reviewed':'Exploring'}</small></button>)}<div className="next-round"><span>{String(batches.length+1).padStart(2,'0')}</span><p>Shaped by your choices<small>Refinements · hybrids · new ideas</small></p></div><div className="side-guide"><div className="eyebrow">THE LOOP</div><ol><li>Review the images</li><li>Save the round</li><li>Ask Codex for the next batch</li><li>Compare, combine, repeat</li></ol><p>Earlier experiments remain part of the conversation. Nothing becomes canon just because it wins a round.</p></div></aside>
   <main>
    <section className="intro"><div className="eyebrow">ROUND {batchId.replace('round-','')} / {batch.focus.toUpperCase()} <span>TRIMETRIC STUDIES</span></div><h1>{batch.premise}</h1><p>{batch.description}</p><div className="scene-lock"><span>⌁</span><div><strong>{batch.sceneTitle||(batch.id==='round-01'?'The scene stays fixed':'The station anchors stay fixed')}</strong><p>{batch.sceneSummary||<>An occupied rail station: human care on the left, automated freight on the right. Elevated oblique / trimetric view, three people and a closed gate.{batch.id==='round-02'&&' Wash is a freer redraw with some layout drift.'}{batch.id==='round-03'&&' Three studies follow Wash’s layout; Paper redraws the scene more freely. See each scene check.'}</>}</p></div><a href={batch.referenceImage||'/images/reference.png'} target="_blank" rel="noreferrer">{batch.referenceLabel||'View reference ↗'}</a></div></section>
    {error&&<div className="error" role="alert">{error} <button onClick={()=>ready?void flush().catch(()=>{}):window.location.reload()}>{ready?'Retry save':'Reload'}</button></div>}
    <section className="toolbar"><div className="filters">{[['all','All studies'],['shortlist','Keep + mix'],['unreviewed','Unreviewed']].map(([id,label])=><button key={id} onClick={()=>setFilter(id)} className={filter===id?'active':''}>{label}</button>)}</div><div className="review-count"><span>{count} / {batch.studies.length} reviewed</span><div className="progress"><i style={{width:`${count/batch.studies.length*100}%`}}/></div></div><button className="compare-button" disabled={compare.length!==2} onClick={()=>setShowCompare(true)}>Compare ({compare.length}/2) ↔</button></section>
    <div className="rating-guide"><span><b className="plus">+</b> More of this</span><span><b className="minus">−</b> Less of this</span><span>Click a label to cycle: neutral → more → less.</span></div>
    <section className="gallery" aria-label="Style studies">{visible.map((s,i)=><article className="study" key={s.id}><div className="image-frame"><button className="image-button" aria-label={'Enlarge '+s.title} onClick={()=>{setFocus(s.id);setShowCompare(false);}}><img src={s.image} alt={`${s.title}: ${batch.sceneName||'the same occupied trimetric station'}, ${s.traits[0].value.toLowerCase()}, ${s.traits[2].value.toLowerCase()} palette`} loading={i<2?'eager':'lazy'} width="1672" height="941"/><span className="enlarge">↗ Inspect</span></button><button className={'compare-toggle '+(compare.includes(s.id)?'active':'')} aria-pressed={compare.includes(s.id)} onClick={()=>toggleCompare(s.id)}>{compare.includes(s.id)?'✓ Selected':'↔ Compare'}</button></div><div className="study-body"><div className="study-heading"><span className="study-number">{studyNumber(s)}</span><div><h3>{s.title}</h3><p>{s.subtitle}</p></div>{reviews[s.id]?.verdict&&<span className={'badge '+reviews[s.id].verdict}>{reviews[s.id].verdict}</span>}</div>{controls(s)}<details className="provenance"><summary>Inspiration & scene check</summary><p>{s.inspiration}</p><p>{s.drift}</p></details></div></article>)}</section>
    {!visible.length&&<div className="empty">{filter==='shortlist'?'Keep or mix an image to add it here.':'Every image has an overall verdict.'}</div>}
    <section className="round-summary"><div><div className="eyebrow">WHAT COMES NEXT</div><h2>Keep the thread.<br/>Leave room for surprise.</h2><p>The next batch can refine favourites, mix preferred traits, and test new directions. Your notes steer the balance.</p><div className="selection-summary">{selected.length?selected.map(s=><span key={s.id}>{s.title} · {reviews[s.id].verdict}</span>):<span>No reference candidates selected yet</span>}</div>{positives.length>0&&<details><summary>{positives.length} traits marked “more of this”</summary><ul>{positives.map((t,i)=><li key={i}>{t.title} · {t.category}: {t.value}</li>)}</ul></details>}</div><div className="finish-panel"><label>Direction for the next round<textarea maxLength={4000} value={intention} onChange={e=>{setIntention(e.target.value);try{localStorage.setItem(storageKey+':direction:'+batchId,e.target.value);}catch{}}} placeholder="e.g. Rain texture + Midnight lights, stronger ink outlines, less haze…" rows={3}/></label><button className="primary" disabled={!ready||count!==batch.studies.length||busy} onClick={()=>void finish()}>{busy?'Saving round…':submission?'Update round review ↗':'Finish review & save brief ↗'}</button><p>{count<batch.studies.length?`Give ${batch.studies.length-count} more images an overall verdict. Trait ratings are optional.`:'Save this round, then return to Codex and say “generate the next batch.”'}</p><div className="export-actions"><button onClick={download}>Download review</button><button onClick={()=>setBriefOpen(v=>!v)}>Preview next brief</button></div>{submission&&<span className="submitted">✓ Round saved {new Date(submission.submittedAt).toLocaleDateString()}</span>}</div></section>
    {briefOpen&&<section className="brief-panel"><div><h3>Next-round brief</h3><button onClick={()=>void copy()}>Copy brief</button></div><pre>{brief}</pre><p>Image generation happens in our Codex conversation. The website saves your choices; it does not start a generation job.</p></section>}
    <footer><span>LCL / THE HUSH</span><span>Exploration, not canon · {batch.date}</span><span>{batch.studies.length} hypotheses, no predetermined winner.</span></footer>
   </main>
  </div>
  <dialog ref={dialog} onCancel={()=>{setFocus(null);setShowCompare(false);}} onClick={e=>{if(e.target===dialog.current){setFocus(null);setShowCompare(false);}}}><div className="dialog-header"><span>{showCompare?'Side-by-side comparison':'Full study'}</span><button ref={closeButton} onClick={()=>{setFocus(null);setShowCompare(false);}} aria-label="Close image inspection">Close ×</button></div><div className={showCompare?'comparison':'focus-study'}>{(showCompare?batch.studies.filter(s=>compare.includes(s.id)):batch.studies.filter(s=>s.id===focus)).map(s=><div key={s.id}><h3>{studyNumber(s)} / {s.title}</h3><img src={s.image} alt={s.title+' full study'} width="1672" height="941"/>{controls(s,true)}</div>)}</div></dialog>
  {toast&&<div className="toast" role="status">{toast}</div>}
 </>;
}
