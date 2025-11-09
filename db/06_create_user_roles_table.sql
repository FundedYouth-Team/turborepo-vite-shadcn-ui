-- ============================================================
-- USER_ROLES TABLE - Junction Table (One Role Per User)
-- ============================================================

CREATE TABLE user_roles (
    -- Primary Key: Unique identifier for each assignment
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Timestamps: Track when records are created/modified
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- Foreign Keys: Connect to users and roles
    user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE RESTRICT
);

-- Create indexes for faster lookups
CREATE INDEX idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX idx_user_roles_role_id ON user_roles(role_id);

-- Add helpful comments
COMMENT ON TABLE user_roles IS 'Assigns ONE role per user';
COMMENT ON COLUMN user_roles.user_id IS 'UNIQUE constraint ensures each user has exactly one role';