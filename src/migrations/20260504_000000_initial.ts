import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE IF NOT EXISTS "users" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "name" text,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "email" text NOT NULL,
    "reset_password_token" text,
    "reset_password_expiration" text,
    "salt" text,
    "hash" text,
    "login_attempts" numeric DEFAULT 0,
    "lock_until" text
  )`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS "users_sessions" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "id" text PRIMARY KEY NOT NULL,
    "created_at" text,
    "expires_at" text
  )`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS "media" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "alt" text NOT NULL,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "url" text,
    "thumbnail_u_r_l" text,
    "filename" text,
    "mime_type" text,
    "filesize" numeric,
    "width" numeric,
    "height" numeric,
    "focal_x" numeric,
    "focal_y" numeric,
    "sizes_thumbnail_url" text,
    "sizes_thumbnail_width" numeric,
    "sizes_thumbnail_height" numeric,
    "sizes_thumbnail_mime_type" text,
    "sizes_thumbnail_filesize" numeric,
    "sizes_thumbnail_filename" text,
    "sizes_card_url" text,
    "sizes_card_width" numeric,
    "sizes_card_height" numeric,
    "sizes_card_mime_type" text,
    "sizes_card_filesize" numeric,
    "sizes_card_filename" text
  )`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS "posts" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "title" text NOT NULL,
    "slug" text NOT NULL,
    "status" text DEFAULT 'draft' NOT NULL,
    "category" text,
    "excerpt" text,
    "content" text,
    "cover_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
    "published_at" text,
    "read_time" text,
    "author" text,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  )`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS "payload_preferences" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "key" text,
    "value" text,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  )`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL REFERENCES "payload_preferences"("id") ON DELETE CASCADE,
    "path" text NOT NULL,
    "users_id" integer REFERENCES "users"("id") ON DELETE CASCADE
  )`)

  await db.run(sql`CREATE TABLE IF NOT EXISTS "payload_migrations" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "name" text,
    "batch" numeric,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  )`)

  await db.run(sql`CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email")`)
  await db.run(sql`CREATE UNIQUE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" ("slug")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "users_sessions_order_idx" ON "users_sessions" ("_order")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "users_sessions_parent_id_idx" ON "users_sessions" ("_parent_id")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" ("updated_at")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" ("updated_at")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" ("updated_at")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" ("created_at")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" ("updated_at")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id")`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path")`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE IF EXISTS "payload_preferences_rels"`)
  await db.run(sql`DROP TABLE IF EXISTS "payload_preferences"`)
  await db.run(sql`DROP TABLE IF EXISTS "posts"`)
  await db.run(sql`DROP TABLE IF EXISTS "media"`)
  await db.run(sql`DROP TABLE IF EXISTS "users_sessions"`)
  await db.run(sql`DROP TABLE IF EXISTS "users"`)
  await db.run(sql`DROP TABLE IF EXISTS "payload_migrations"`)
}
