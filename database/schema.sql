DROP DATABASE IF EXISTS regretsy_items;

CREATE DATABASE regretsy_items;

USE regretsy_items;

CREATE TABLE items (
    listing_id BIGINT PRIMARY KEY,
    title VARCHAR(500),
    description TEXT,
    price DECIMAL(10,2) 
);