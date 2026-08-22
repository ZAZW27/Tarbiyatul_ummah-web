
create or replace view vw_market_catalog as
select 
	i.id as item_id, i.title, c.cat_name as category, 
	i.status, i.price, i.stock, i.image_url
from items i 
join categories c on i.category_id = c.id 
where c.cat_type = 'market'; 


