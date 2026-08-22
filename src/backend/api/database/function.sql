create or replace function log_item_audits()
returns trigger as $$
begin
	if (TG_OP = 'UPDATE' or TG_OP = 'DELETE') then 
		insert into audit_logs (item_id, action, old_data)
		values(old.id, TG_OP, row_to_json(OLD)::jsonb); 
	end if; 
	return null; 
end; 
$$ language plpgsql; 
