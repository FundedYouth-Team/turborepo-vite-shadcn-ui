-- ============================================================
-- USERS TABLE - Complete Script with Auto-Generated Username
-- ============================================================

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
    username TEXT UNIQUE,                 -- Auto-generated: {first_initial}{last_name}{index+100}
    first_name TEXT NOT NULL,             -- Required
    last_name TEXT NOT NULL,              -- Required
    phone TEXT,                           -- Optional (E.164 format)
    pin_passcode TEXT,                    -- For your timesheet kiosk
    -- Password Handled by Supabase: Abstracts and Secures this information

    -- Soft Delete Flag
    is_active BOOLEAN NOT NULL DEFAULT true,

    -- Constraints
    CONSTRAINT valid_phone CHECK (phone ~ '^\+[1-9]\d{1,14}$' OR phone IS NULL)
);

-- Create indexes for faster lookups
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_is_active ON users(is_active);

-- Add helpful comments
COMMENT ON TABLE users IS 'User profile information - auth handled by Supabase Auth';
COMMENT ON COLUMN users.username IS 'Auto-generated username: {first_initial}{last_name}{index+100}. Example: jdoe101';
COMMENT ON COLUMN users.pin_passcode IS 'Used for timesheet kiosk authentication';
COMMENT ON COLUMN users.phone IS 'Phone number in E.164 format (e.g., +15551234567)';

-- ============================================================
-- USERNAME GENERATION FUNCTION
-- ============================================================

CREATE OR REPLACE FUNCTION generate_username()
RETURNS TRIGGER AS $$
DECLARE
    base_username TEXT;
    final_username TEXT;
    user_count INTEGER;
    counter INTEGER := 1;
BEGIN
    -- Only generate if username is NULL (not provided)
    IF NEW.username IS NULL THEN
        -- Count existing users to get index
        SELECT COUNT(*) INTO user_count FROM users;

        -- Generate base username: first_initial + last_name + (count + 100)
        base_username := LOWER(
            SUBSTRING(NEW.first_name FROM 1 FOR 1) ||
            REGEXP_REPLACE(NEW.last_name, '[^a-zA-Z]', '', 'g') ||
            (user_count + 100)::TEXT
        );

        final_username := base_username;

        -- Check if username exists, if so, increment
        WHILE EXISTS (SELECT 1 FROM users WHERE username = final_username) LOOP
            final_username := base_username || counter::TEXT;
            counter := counter + 1;
        END LOOP;

        NEW.username := final_username;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply username generation trigger (runs BEFORE INSERT)
CREATE TRIGGER generate_username_trigger
    BEFORE INSERT ON users
    FOR EACH ROW
    EXECUTE FUNCTION generate_username();

-- ============================================================
-- AUTO-UPDATE TRIGGER FOR updated_at
-- ============================================================

-- Create the trigger function (reusable for all tables)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to users table
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();