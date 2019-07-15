DROP DATABASE IF EXISTS regretsy_items;

CREATE DATABASE regretsy_items;

USE regretsy_items;

CREATE TABLE items (
    listing_id BIGINT PRIMARY KEY,
    title VARCHAR(500),
    description TEXT,
    price VARCHAR(20),
    quantity INT,
    seller VARCHAR(500),
    avgRating INT,
    cartImage VARCHAR(500)
);

-- Execute this file from the command line by typing:
-- mysql -u root -p < schema.sql
-- to create the database and the tables.
