-- ============================================================
-- USER_APPS TABLE - Junction Table (Multiple Apps Per User)
-- ============================================================

CREATE TABLE user_apps (
    -- Primary Key: Unique identifier for each assignment
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Timestamps: Track when records are created/modified
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- Foreign Keys: Connect to users and apps
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    app_id UUID NOT NULL REFERENCES apps(id) ON DELETE CASCADE,

    -- Enable/Disable Access Flag
    is_active BOOLEAN NOT NULL DEFAULT true,

    -- Prevent duplicate assignments
    UNIQUE(user_id, app_id)
);

-- Create indexes for faster lookups
CREATE INDEX idx_user_apps_user_id ON user_apps(user_id);
CREATE INDEX idx_user_apps_app_id ON user_apps(app_id);
CREATE INDEX idx_user_apps_is_active ON user_apps(is_active);

-- Add helpful comments
COMMENT ON TABLE user_apps IS 'Grants users access to specific apps - users can have multiple apps';
COMMENT ON COLUMN user_apps.is_active IS 'Enable/disable access without deleting the record';