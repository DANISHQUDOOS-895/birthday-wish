/*
  # Create birthday videos table

  1. New Tables
    - `birthday_videos`
      - `id` (uuid, primary key)
      - `video_url` (text) - URL of the birthday video
      - `created_at` (timestamp)
      - `active` (boolean) - Flag to control which video is currently active
  
  2. Security
    - Enable RLS on `birthday_videos` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS birthday_videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  active boolean DEFAULT false
);

ALTER TABLE birthday_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Birthday videos are viewable by everyone"
  ON birthday_videos
  FOR SELECT
  TO public
  USING (true);