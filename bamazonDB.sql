DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,4) NULL,
stock_quantity DECIMAL(10,4) NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cell phone case", "cell phone accessories", 7.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2013 Mac Book Pro", "electronics", 567.50, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hyao Mirazaki's Ultimate Collection", "movies", 21.50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amythest Crystal Necklace", "jewelry", 17.50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("14K White Gold Hoop Earrings", "jewelry", 97.50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2019 Kindle Fire HD 32GB", "electronics", 147.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cosyzone Car Windshield Sunshade Four Seasons", "automotive", 10.49, 5);

NSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Copper Chef Electric Egg Cooker Set 7 or 14", "Home & Kitchen", 17.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cocori Air Fryer, 5.8 QT", "Home $ Kithcne", 117.50, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Top Plaza Antique Silver Flowers Wrapped Natural Rose Quartz", "Jewlry", 8.99, 10);

SELECT * FROM products;
