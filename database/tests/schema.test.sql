DROP DATABASE IF EXISTS test_reregretsy_database;

CREATE DATABASE test_reregretsy_database;

USE regretsy_items;

CREATE TABLE items (
    listing_id BIGINT PRIMARY KEY,
    title VARCHAR(500),
    description TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    price VARCHAR(20),
    quantity INT,
    sellerName VARCHAR(500),
    sellerUsername VARCHAR(500),
    sellerAvatar VARCHAR(500),
    avgRating INT,
    cartImage VARCHAR(500),
    mainImage VARCHAR(500)
);