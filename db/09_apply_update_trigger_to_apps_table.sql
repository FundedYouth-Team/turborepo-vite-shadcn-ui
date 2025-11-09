-- Apply the same trigger function
CREATE TRIGGER update_apps_updated_at
    BEFORE UPDATE ON apps
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();