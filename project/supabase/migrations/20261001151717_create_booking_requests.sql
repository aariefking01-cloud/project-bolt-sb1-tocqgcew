/*
# Create booking_requests table (single-tenant, no auth)

1. New Tables
- `booking_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person requesting security
  - `phone` (text, not null) — contact phone number
  - `email` (text, nullable) — contact email
  - `event_type` (text, not null) — type of event (wedding, party, nightclub, etc.)
  - `event_date` (date, nullable) — date of the event
  - `event_time` (text, nullable) — time of the event
  - `location` (text, nullable) — event location/venue
  - `guest_count` (text, nullable) — expected number of guests
  - `security_requirement` (text, nullable) — description of security needs
  - `bouncer_count` (text, nullable) — number of bouncers requested
  - `additional_requirements` (text, nullable) — any extra requirements
  - `contact_preference` (text, nullable) — preferred contact method (call, whatsapp, email)
  - `status` (text, not null, default 'new') — booking status: new, contacted, confirmed, completed, cancelled
  - `created_at` (timestamptz, default now()) — when the request was submitted

2. Security
- Enable RLS on `booking_requests`.
- Allow anon + authenticated INSERT so the public booking form can submit requests.
- No SELECT/UPDATE/DELETE for anon — booking data must not be publicly readable.
  Only authenticated admin users can read/update/delete bookings.
*/

CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  event_type text NOT NULL,
  event_date date,
  event_time text,
  location text,
  guest_count text,
  security_requirement text,
  bouncer_count text,
  additional_requirements text,
  contact_preference text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) to INSERT new booking requests
DROP POLICY IF EXISTS "anon_insert_bookings" ON booking_requests;
CREATE POLICY "anon_insert_bookings"
ON booking_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can SELECT (for admin dashboard)
DROP POLICY IF EXISTS "auth_select_bookings" ON booking_requests;
CREATE POLICY "auth_select_bookings"
ON booking_requests FOR SELECT
TO authenticated
USING (true);

-- Only authenticated users can UPDATE (for admin status changes)
DROP POLICY IF EXISTS "auth_update_bookings" ON booking_requests;
CREATE POLICY "auth_update_bookings"
ON booking_requests FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Only authenticated users can DELETE (for admin archive/delete)
DROP POLICY IF EXISTS "auth_delete_bookings" ON booking_requests;
CREATE POLICY "auth_delete_bookings"
ON booking_requests FOR DELETE
TO authenticated
USING (true);
