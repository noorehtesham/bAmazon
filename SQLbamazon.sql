DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE products(
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30),
    department_name VARCHAR(100),
    price INTEGER(11),
    stock_quantity INTEGER(100),
    PRIMARY KEY(item_id)
    
    );
    
    INSERT INTO products(product_name, department, price, stock_quantity) values ('Workout resistance bands', '10', '12');
	INSERT INTO products(product_name, department, price, stock_quantity) values ('protein powder', '10', '8');
    INSERT INTO products(product_name, department, price, stock_quantity) values ('bed sheets', '15', '9');
    INSERT INTO products(product_name, department, price, stock_quantity) values ('assorted candy', '24', '10');
    INSERT INTO products(product_name, department, price, stock_quantity) values ('peanut butter', '5', '4');
    INSERT INTO products(product_name, department, price, stock_quantity) values ('food scale', '20', '3');
    INSERT INTO products(product_name, department, price, stock_quantity) values ('Beneful dog food', '13', '12');
    INSERT INTO products(product_name, department, price, stock_quantity) values ('Organic pizza', '12', '15');
    INSERT INTO products(product_name, department, price, stock_quantity) values ('almond milk', '4', '17');
    INSERT INTO products(product_name, department, price, stock_quantity) values ('blender bottle', '8', '4');
    
    
    