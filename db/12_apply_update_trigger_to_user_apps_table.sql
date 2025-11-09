-- Apply the same trigger function
CREATE TRIGGER update_user_apps_updated_at
    BEFORE UPDATE ON user_apps
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();