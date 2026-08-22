select * from vw_market_catalog; -- test view

update items set price = 2000 where id = 1; -- test trigger func

select * from audit_logs; -- test anu trigger funky



-- test procedure
call process_purchase(1, 3); 

select stock from items where id = 1; 

select * from transactions; 

select * from cash_balance; 

call process_purchase(1, 1000000); 