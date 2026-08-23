
-- View untuk Market (Barang berharga/dijual dengan agregasi JSON array kategori)
CREATE OR REPLACE VIEW vw_market_catalog AS
SELECT 
    i.id,
    i.title,
    i.description,
    i.price,
    i.stock,
    i.image_url,
    i.status,
    i.create_at,
    COALESCE(
        json_agg(
            json_build_object('id', c.id, 'name', c.cat_name, 'type', c.cat_type)
        ) FILTER (WHERE c.id IS NOT NULL), 
        '[]'
    ) AS categories
FROM items i
LEFT JOIN item_categories ic ON i.id = ic.item_id
LEFT JOIN categories c ON ic.category_id = c.id
WHERE i.price IS NOT NULL AND i.status = 'active'
GROUP BY i.id;

-- View untuk Media (Dokumentasi/Media tanpa harga, khusus tipe media)
CREATE OR REPLACE VIEW vw_media_catalog AS
SELECT 
    i.id,
    i.title,
    i.description,
    i.image_url,
    i.status,
    i.create_at,
    COALESCE(
        json_agg(
            json_build_object('id', c.id, 'name', c.cat_name, 'type', c.cat_type)
        ) FILTER (WHERE c.id IS NOT NULL AND c.cat_type = 'media'), 
        '[]'
    ) AS categories
FROM items i
LEFT JOIN item_categories ic ON i.id = ic.item_id
LEFT JOIN categories c ON ic.category_id = c.id
WHERE i.price IS NULL AND i.status = 'active'
GROUP BY i.id;
