-- Apply the same trigger function
CREATE TRIGGER update_volunteer_timesheets_updated_at
    BEFORE UPDATE ON volunteer_timesheets
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();