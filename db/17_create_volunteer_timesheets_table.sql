-- ============================================================
-- VOLUNTEER_TIMESHEETS TABLE - Digital Punch Card
-- ============================================================

CREATE TABLE volunteer_timesheets (
    -- Primary Key: Unique identifier for each shift
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Timestamps: Track when records are created/modified
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- Foreign Key: Which volunteer
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Clock In/Out Times
    check_in TIMESTAMPTZ NOT NULL,                   -- When they clocked in
    check_out TIMESTAMPTZ,                           -- When they clocked out (NULL = still working)

    -- Auto-Calculated Hours
    total_hours DECIMAL(5,2) GENERATED ALWAYS AS (
        CASE
            WHEN check_out IS NOT NULL
            THEN EXTRACT(EPOCH FROM (check_out - check_in)) / 3600.0
            ELSE NULL
        END
    ) STORED,

    -- Optional Notes
    notes TEXT                                       -- Shift notes (optional)
);

-- Create indexes for faster lookups
CREATE INDEX idx_volunteer_timesheets_user_id ON volunteer_timesheets(user_id);
CREATE INDEX idx_volunteer_timesheets_check_in ON volunteer_timesheets(check_in);
CREATE INDEX idx_volunteer_timesheets_check_out ON volunteer_timesheets(check_out);

-- Add helpful comments
COMMENT ON TABLE volunteer_timesheets IS 'Digital punch card for volunteer time tracking';
COMMENT ON COLUMN volunteer_timesheets.check_out IS 'NULL means volunteer is currently clocked in';
COMMENT ON COLUMN volunteer_timesheets.total_hours IS 'Auto-calculated from check_in and check_out timestamps';