DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS cash_balance CASCADE;
DROP TABLE IF EXISTS audit_logs CASCADE;
DROP TABLE IF EXISTS item_categories CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- 1. Categories Table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY, 
    cat_name VARCHAR(100) UNIQUE NOT NULL, 
    cat_type VARCHAR(50) NOT NULL CHECK(cat_type IN ('media', 'market'))
); 

-- 2. Items Table
CREATE TABLE items (
    id SERIAL PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT, 
    price NUMERIC(12, 2) CHECK (price >= 0), 
    stock INTEGER DEFAULT 0 CHECK(stock >= 0), 
    image_url TEXT NOT NULL, 
    status VARCHAR(20) DEFAULT 'active' CHECK(status IN ('active', 'sold', 'hidden')),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

-- 3. Item Categories Junction Table 
CREATE TABLE item_categories (
    item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (item_id, category_id)
);

-- 4. Audit Logs Table
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY, 
    item_id INTEGER NOT NULL, 
    action VARCHAR(20) NOT NULL, 
    old_data JSONB, 
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

-- 5. Cash Balance Table
CREATE TABLE cash_balance (
    id SERIAL PRIMARY KEY, 
    total_amount NUMERIC(15, 2) DEFAULT 0, 
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

INSERT INTO cash_balance (total_amount) VALUES (0); 

-- 6. Transactions Table
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY, 
    item_id INTEGER REFERENCES items(id) ON DELETE SET NULL, 
    quantity INTEGER NOT NULL CHECK(quantity > 0),
    total_price NUMERIC(15, 2) NOT NULL, 
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

-- 7. Roles & Users Tables
CREATE TABLE roles (
    id SERIAL PRIMARY KEY, 
    role_name VARCHAR(50) UNIQUE NOT NULL, 
    description TEXT
); 

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(100) UNIQUE NOT NULL, 
    password_hash VARCHAR(255) NOT NULL, 
    role_id INTEGER REFERENCES roles(id) ON DELETE RESTRICT, 
    last_login TIMESTAMP, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

INSERT INTO roles (role_name, description) VALUES ('Admin', 'Full Access');
INSERT INTO users (username, password_hash, role_id) VALUES ('zharif', 'hashed_pass_123', 1);

-- Insert Categories
INSERT INTO categories (cat_name, cat_type) VALUES ('Kerajinan', 'market');
INSERT INTO categories (cat_name, cat_type) VALUES ('Dokumentasi Kegiatan', 'media');

-- Insert Items
INSERT INTO items (id, title, description, price, stock, image_url, status) 
OVERRIDING SYSTEM VALUE
VALUES (1, 'Gantungan Kunci Kayu', 'Karya anak panti', 15000, 10, 'url_image_1', 'active');

INSERT INTO items (id, title, description, price, stock, image_url, status) 
OVERRIDING SYSTEM VALUE
VALUES (2, 'Foto Buka Puasa', 'Buka puasa bersama donatur', NULL, 0, 'url_image_2', 'active');

-- Relasikan Items ke Categories (Many-to-Many)
INSERT INTO item_categories (item_id, category_id) VALUES (1, 1);
INSERT INTO item_categories (item_id, category_id) VALUES (2, 2);