
create trigger trg_audit_items
after update or delete on items
for each row execute function log_item_audits(); 
