import { sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
export const reviews = sqliteTable('image_reviews', {
 userId: text('user_id').notNull(), imageId: text('image_id').notNull(), batchId: text('batch_id').notNull(),
 verdict: text('verdict').notNull(), ratings: text('ratings_json').notNull(), notes: text('notes').notNull(), updatedAt: text('updated_at').notNull(),
}, t => [primaryKey({ columns: [t.userId, t.imageId] })]);
export const submissions = sqliteTable('round_reviews', {
 userId: text('user_id').notNull(), batchId: text('batch_id').notNull(), brief: text('brief').notNull(), intention:text('intention').notNull().default(''), submittedAt: text('submitted_at').notNull(),
}, t => [primaryKey({ columns: [t.userId, t.batchId] })]);
