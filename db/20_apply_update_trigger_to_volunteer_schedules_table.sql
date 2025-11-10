-- ⬇️ Volunteer Schedules Trigger ⬇️
CREATE TRIGGER update_volunteer_schedules_updated_at
    BEFORE UPDATE ON volunteer_schedules
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();