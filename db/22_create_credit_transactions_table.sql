-- ============================================================
-- CREDIT_TRANSACTIONS TABLE
-- ============================================================

CREATE TABLE credit_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    amount INTEGER NOT NULL,
    balance_after_volunteer INTEGER,
    balance_after_membership INTEGER,
    credit_source TEXT,
    transaction_type TEXT NOT NULL,
    description TEXT,

    related_membership_id UUID REFERENCES user_memberships(id),
    related_timesheet_id UUID REFERENCES volunteer_timesheets(id),

    metadata JSONB
);

CREATE INDEX idx_credit_transactions_user_id ON credit_transactions(user_id);
CREATE INDEX idx_credit_transactions_type ON credit_transactions(transaction_type);
CREATE INDEX idx_credit_transactions_created_at ON credit_transactions(created_at);
CREATE INDEX idx_credit_transactions_credit_source ON credit_transactions(credit_source);

COMMENT ON TABLE credit_transactions IS 'Complete history of all credit transactions with source tracking';
COMMENT ON COLUMN credit_transactions.credit_source IS 'Which credit pool: volunteer (never expire), membership (max 20 carryover), or both (when spending)';
