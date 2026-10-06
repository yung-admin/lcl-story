import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {stripTypeScriptTypes} from 'node:module';

const root=new URL('../',import.meta.url);
const manifest=JSON.parse(await readFile(new URL('style-lab-source.json',root),'utf8'));
for(const file of manifest.files){
  const data=await readFile(new URL('style-lab/'+file.path,root));
  assert.equal(data.length,file.bytes,file.path+' size changed');
  assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256,file.path+' differs from handover snapshot');
}
const source=stripTypeScriptTypes(await readFile(new URL('style-lab/app/data.ts',root),'utf8'));
const {batches,makeBrief}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const studies=batches.flatMap(b=>b.studies);
assert.equal(new Set(studies.map(s=>s.id)).size,studies.length,'Duplicate study IDs');
for(const study of studies){
  assert.ok(study.image.startsWith('/images/'),study.id+' image path');
  assert.ok((await stat(new URL('style-lab/public'+study.image,root))).size>0);
  assert.equal(new Set(study.traits.map(t=>t.category+'|'+t.value)).size,study.traits.length,study.id+' duplicate traits');
}
for(const batch of batches)assert.ok(makeBrief(batch,{},'handover check').length>0);
for(const path of ['README.md','docs/index.md','docs/process/handover.md','docs/process/style-lab-operations.md','docs/process/git-transfer.md']){
  const url=new URL(path,root),text=await readFile(url,'utf8');
  for(const match of text.matchAll(/\]\(([^)]+)\)/g)){
    if(/^(https?:|#)/.test(match[1]))continue;
    await stat(new URL(match[1].split('#')[0],url));
  }
}
console.log(JSON.stringify({sourceFiles:manifest.files.length,sourceCommit:manifest.source_commit,rounds:batches.length,uniqueStudies:studies.length,snapshot:'byte-identical',galleryAssets:'present',handoverLinks:'valid'},null,2));
