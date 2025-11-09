-- Enable UUID generation (only need to do this once)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the users table
CREATE TABLE users (
    -- Primary Key: Unique identifier for each user
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Timestamps: Track when records are created/modified
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- User Information
    email TEXT NOT NULL UNIQUE,           -- Must be unique, required
    first_name TEXT NOT NULL,             -- Required
    last_name TEXT NOT NULL,              -- Required
    phone TEXT,                           -- Optional
    pin_passcode TEXT,                    -- For your timesheet kiosk
    -- Password Handles by Supabase: Abstracts and Secures this information

    -- Soft Delete Flag
    is_active BOOLEAN NOT NULL DEFAULT true,

    -- Optional: Add constraint to ensure valid E.164 format
    CONSTRAINT valid_phone CHECK (phone ~ '^\+[1-9]\d{1,14}$' OR phone IS NULL)
);

-- Create indexes for faster lookups
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_is_active ON users(is_active);

-- Add helpful comments
COMMENT ON TABLE users IS 'User profile information - auth handled by Supabase Auth';
COMMENT ON COLUMN users.pin_passcode IS 'Used for timesheet kiosk authentication';
COMMENT ON COLUMN users.phone IS 'Phone number in E.164 format (e.g., +15551234567)';