CREATE TABLE volunteer_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    scheduled_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status TEXT NOT NULL DEFAULT 'scheduled',

    notes TEXT
);

CREATE INDEX idx_volunteer_schedules_user_id ON volunteer_schedules(user_id);
CREATE INDEX idx_volunteer_schedules_date ON volunteer_schedules(scheduled_date);
CREATE INDEX idx_volunteer_schedules_status ON volunteer_schedules(status);

COMMENT ON TABLE volunteer_schedules IS 'Volunteer shift scheduling';
COMMENT ON COLUMN volunteer_schedules.status IS 'scheduled, confirmed, completed, cancelled';