-- ============================================================
-- MEMBERSHIPS TABLE - Membership Tier Definitions
-- ============================================================

CREATE TABLE memberships (
    -- Primary Key: Unique identifier for each tier
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Timestamps: Track when records are created/modified
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- Membership Information
    name TEXT NOT NULL,                       -- Display name (e.g., "Tier 1")
    slug TEXT NOT NULL UNIQUE,                -- URL-friendly (e.g., "tier-1")
    description TEXT,                         -- What's included in this tier

    -- Pricing & Credits
    price_cents INTEGER NOT NULL DEFAULT 0,   -- Price in cents (1500 = $15.00)
    credits_per_month INTEGER NOT NULL DEFAULT 0,  -- Monthly credit allocation

    -- Payment Integration
    stripe_price_id TEXT,                     -- Stripe or Paddle price ID

    -- Soft Delete Flag
    is_active BOOLEAN NOT NULL DEFAULT true
);

-- Create indexes for faster lookups
CREATE INDEX idx_memberships_slug ON memberships(slug);
CREATE INDEX idx_memberships_is_active ON memberships(is_active);
CREATE INDEX idx_memberships_stripe_price_id ON memberships(stripe_price_id);

-- Add helpful comments
COMMENT ON TABLE memberships IS 'Membership tier definitions with pricing and benefits';
COMMENT ON COLUMN memberships.price_cents IS 'Price stored in cents to avoid decimal issues (1500 = $15.00)';
COMMENT ON COLUMN memberships.stripe_price_id IS 'Stripe or Paddle price ID for payment integration';