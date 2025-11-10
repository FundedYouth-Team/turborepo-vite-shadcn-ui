-- ============================================================
-- USER_MEMBERSHIPS TABLE - Subscription Tracking
-- ============================================================

CREATE TABLE user_memberships (
    -- Primary Key: Unique identifier for each subscription
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Timestamps: Track when records are created/modified
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- Foreign Keys: Connect to users and memberships
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    membership_id UUID NOT NULL REFERENCES memberships(id) ON DELETE RESTRICT,

    -- Subscription Period
    start_date DATE NOT NULL,                    -- When subscription begins
    end_date DATE,                               -- When it expires (NULL = active/no expiration)

    -- Payment Integration
    stripe_subscription_id TEXT,                 -- Stripe/Paddle subscription ID

    -- Subscription Status
    status TEXT NOT NULL DEFAULT 'active',       -- active, cancelled, expired, past_due

    -- Soft Delete Flag
    is_active BOOLEAN NOT NULL DEFAULT true
);

-- Create indexes for faster lookups
CREATE INDEX idx_user_memberships_user_id ON user_memberships(user_id);
CREATE INDEX idx_user_memberships_membership_id ON user_memberships(membership_id);
CREATE INDEX idx_user_memberships_status ON user_memberships(status);
CREATE INDEX idx_user_memberships_end_date ON user_memberships(end_date);
CREATE INDEX idx_user_memberships_stripe_subscription_id ON user_memberships(stripe_subscription_id);

-- Add helpful comments
COMMENT ON TABLE user_memberships IS 'Tracks user subscription to membership tiers';
COMMENT ON COLUMN user_memberships.end_date IS 'NULL means active with no expiration date';
COMMENT ON COLUMN user_memberships.status IS 'active, cancelled, expired, past_due';
COMMENT ON COLUMN user_memberships.stripe_subscription_id IS 'Stripe/Paddle subscription ID for webhook processing';