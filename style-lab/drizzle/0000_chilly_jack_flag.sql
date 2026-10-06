CREATE TABLE `image_reviews` (
	`user_id` text NOT NULL,
	`image_id` text NOT NULL,
	`batch_id` text NOT NULL,
	`verdict` text NOT NULL,
	`ratings_json` text NOT NULL,
	`notes` text NOT NULL,
	`updated_at` text NOT NULL,
	PRIMARY KEY(`user_id`, `image_id`)
);
--> statement-breakpoint
CREATE TABLE `round_reviews` (
	`user_id` text NOT NULL,
	`batch_id` text NOT NULL,
	`brief` text NOT NULL,
	`submitted_at` text NOT NULL,
	PRIMARY KEY(`user_id`, `batch_id`)
);
