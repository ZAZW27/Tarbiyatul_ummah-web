create database panti; 

create table categories(
	id SERIAL primary key, 
	cat_name varchar(100) unique not null, 
	cat_type varchar(50) not null check(cat_type in ('media', 'market'))
); 


create table items(
	id serial primary key, 
	title varchar(255) not null, 
	description text, 
	price numeric(12, 2) check (price>=0), 
	stock integer default 0 check(stock>=0), 
	category_id integer references category(id)	on delete restrict, 
	image_url text not null, 
	status varchar(20) default 'active' check(status in ('active', 'sold', 'hidden')),
	create_at timestamp default CURRENT_TIMESTAMP, 
	updated_at timestamp default CURRENT_TIMESTAMP
); 

create table audit_logs(
	id serial primary key, 
	item_id integer not null, 
	action varchar(20) not null, 
	old_data JSONB, 
	changed_at timestamp default current_timestamp
); 


--CASH BALANCE
create table cash_balance(
	id SERIAL primary key, 
	total_amount numeric(15, 2) default 0, 
	last_updated timestamp default current_timestamp
); 

insert into cash_balance (total_amount) values(0); 

create table transactions(
	id SERIAL primary key, 
	item_id integer references item(id) on delete set null, 
	quantity integer not null check(quantity > 0),
	total_price numeric(15, 2) not null, 
	transaction_date timestamp default current_timestamp
); 


create table roles (
	id serial primary key, 
	role_name varchar(50) unique not null, 
	description text
); 

create table users(
	id serial primary key, 
	username varchar(100) unique not null, 
	password_hash varchar(255) not null, 
	role_id integer references roles(id) on delete restrict, 
	last_login timestamp, 
	created_at timestamp default current_timestamp
); 


-- Insert Roles & Users
INSERT INTO roles (role_name, description) VALUES ('Admin', 'Full Access');
INSERT INTO users (username, password_hash, role_id) VALUES ('zharif', 'hashed_pass_123', 1);

-- Insert Category
INSERT INTO category (cat_name, cat_type) VALUES ('Kerajinan', 'market');
INSERT INTO category (cat_name, cat_type) VALUES ('Dokumentasi Kegiatan', 'media');

-- Insert Items
INSERT INTO item (title, description, price, stock, category_id, image_url, status) 
VALUES ('Gantungan Kunci Kayu', 'Karya anak panti', 15000, 10, 1, 'url_image_1', 'active');

INSERT INTO item (title, description, price, stock, category_id, image_url, status) 
VALUES ('Foto Buka Puasa', 'Buka puasa bersama donatur', NULL, 0, 2, 'url_image_2', 'active');











