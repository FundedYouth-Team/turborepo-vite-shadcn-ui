-- ============================================================
-- USER_CREDITS TABLE
-- ============================================================

CREATE TABLE user_credits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,

    -- Separate credit pools
    volunteer_credits INTEGER NOT NULL DEFAULT 0,
    membership_credits INTEGER NOT NULL DEFAULT 0,

    -- Lifetime totals
    total_earned INTEGER NOT NULL DEFAULT 0,
    total_allocated INTEGER NOT NULL DEFAULT 0,
    total_spent INTEGER NOT NULL DEFAULT 0,
    total_forfeited INTEGER NOT NULL DEFAULT 0,

    -- Tracking
    last_refresh_date DATE,
    is_active BOOLEAN NOT NULL DEFAULT true,

    -- Constraints
    CONSTRAINT positive_volunteer_credits CHECK (volunteer_credits >= 0),
    CONSTRAINT positive_membership_credits CHECK (membership_credits >= 0),
    CONSTRAINT max_membership_carryover CHECK (membership_credits <= 20)
);

CREATE INDEX idx_user_credits_user_id ON user_credits(user_id);

COMMENT ON TABLE user_credits IS 'Tracks credit balances with separate accounting for volunteer vs membership credits';
COMMENT ON COLUMN user_credits.volunteer_credits IS 'Credits earned from volunteering - NEVER expire, unlimited carry over';
COMMENT ON COLUMN user_credits.membership_credits IS 'Credits from membership tier - MAX 20 carry over each month';
COMMENT ON COLUMN user_credits.total_forfeited IS 'Total membership credits lost due to 20-credit carry over cap';
