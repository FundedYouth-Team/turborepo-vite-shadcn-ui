-- ============================================================
-- APPS TABLE - Application/Service Catalog
-- ============================================================

CREATE TABLE apps (
    -- Primary Key: Unique identifier for each app
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Timestamps: Track when records are created/modified
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- App Information
    name TEXT NOT NULL,                   -- Display name (e.g., "Admin Portal")
    slug TEXT NOT NULL UNIQUE,            -- URL-friendly identifier (e.g., "admin-portal")
    description TEXT,                     -- Optional: What this app does

    -- Soft Delete Flag
    is_active BOOLEAN NOT NULL DEFAULT true
);

-- Create indexes for faster lookups
CREATE INDEX idx_apps_slug ON apps(slug);
CREATE INDEX idx_apps_is_active ON apps(is_active);

-- Add helpful comments
COMMENT ON TABLE apps IS 'Catalog of available applications/services in the platform';
COMMENT ON COLUMN apps.slug IS 'URL-friendly identifier used for routing (e.g., admin-portal)';
COMMENT ON COLUMN apps.name IS 'Human-readable display name (e.g., Admin Portal)';