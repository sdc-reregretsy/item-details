DROP DATABASE IF EXISTS items;

CREATE DATABASE items;

USE items;

CREATE TABLE items (
    listing_id BIGINT PRIMARY KEY,
    title VARCHAR(500),
    description TEXT,
    price DECIMAL(10,2) 
);