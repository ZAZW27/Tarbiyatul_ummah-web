
CREATE ROLE staff_panti LOGIN PASSWORD ''; 

GRANT SELECT ON vw_market_catalog TO staff_panti; 
GRANT SELECT ON categories TO staff_panti; 

GRANT INSERT, SELECT ON items TO staff_panti; 

REVOKE UPDATE, DELETE ON items FROM staff_panti;