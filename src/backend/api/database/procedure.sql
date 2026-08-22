create or replace procedure process_purchase(
	p_item_id integer, 
	p_quantity integer
)
language plpgsql
as $$ 
declare 
	v_current_stock integer; 
	v_price numeric; 
	v_total_cost numeric; 
begin
	select stock, price into v_current_stock, v_price
	from items
	where id = p_item_id for update; 
	
	if v_current_stock < p_quantity then 
		raise exception 'Insufficient stock. Current stock: %', v_current_stock; 
	end if; 
	
	v_total_cost := v_price * p_quantity; 
	
	update items set stock = stock - p_quantity where id = p_item_id; 
	
	insert into transactions(item_id, quantity, total_price)
	values (p_item_id, p_quantity, v_total_cost); 
	
	update cash_balance set total_amount = total_amount + v_total_cost; 
	
	commit; 
end; 
$$
