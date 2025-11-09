-- ============================================================
-- ROLES TABLE - Lookup/Reference Table
-- ============================================================

CREATE TABLE roles (
    -- Primary Key: Unique identifier for each role
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Timestamps: Track when records are created/modified
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- Role Information
    name TEXT NOT NULL UNIQUE,            -- Role name (admin, editor, etc.)
    description TEXT,                     -- Optional: What this role can do

    -- Soft Delete Flag
    is_active BOOLEAN NOT NULL DEFAULT true
);

-- Create index for faster lookups by name
CREATE INDEX idx_roles_name ON roles(name);
CREATE INDEX idx_roles_is_active ON roles(is_active);

-- Add helpful comment
COMMENT ON TABLE roles IS 'Available roles for user access control';
COMMENT ON COLUMN roles.name IS 'Unique role identifier (admin, editor, manager, user, public)';
COMMENT ON COLUMN roles.description IS 'Human-readable explanation of role permissions';