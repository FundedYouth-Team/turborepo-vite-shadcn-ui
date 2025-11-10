-- Apply the same trigger function
CREATE TRIGGER update_user_memberships_updated_at
    BEFORE UPDATE ON user_memberships
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();