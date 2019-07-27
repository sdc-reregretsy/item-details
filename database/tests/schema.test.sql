DROP DATABASE IF EXISTS test_reregretsy_database;
CREATE DATABASE test_reregretsy_database;

\connect test_reregretsy_database;

CREATE TABLE products (
  id text unique,
  product_name text,
  product_price real,
  img_url text,
  seller_name text,
  seller_username text,
  seller_avatar text
);

INSERT INTO products VALUES
('1213d10e-b6b5-4d6d-af44-2b10d334ed52','Small Soft Ball',131.00,'http://lorempixel.com/640/480/nature','Colleen Hand','Madaline_Greenholt','https://s3.amazonaws.com/uifaces/faces/twitter/bpartridge/128.jpg'),
('14914197-1762-4f6e-a424-5d5bebb7695c','Small Fresh Car',855.00,'http://lorempixel.com/640/480/city','Rose Leannon','Kamryn_Hansen9','https://s3.amazonaws.com/uifaces/faces/twitter/hota_v/128.jpg'),
('06be9a5c-9ea2-4868-9ba2-53989f119d68','Licensed Concrete Tuna',85.00,'http://lorempixel.com/640/480/technics','Vern Skiles','Antonetta_Champlin67','https://s3.amazonaws.com/uifaces/faces/twitter/matkins/128.jpg');