/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `nom` (text) - Contact name
      - `email` (text) - Contact email
      - `telephone` (text) - Contact phone number
      - `message` (text) - Contact message
      - `type` (text) - Type of submission (contact, candidature)
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting submissions (public access for form submissions)
    - Add policy for viewing submissions (authenticated users only)

  3. Notes
    - This table stores all contact form submissions and candidate applications
    - Public can insert (submit forms) but only authenticated users can view
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  email text NOT NULL,
  telephone text NOT NULL,
  message text NOT NULL,
  type text NOT NULL DEFAULT 'contact',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
