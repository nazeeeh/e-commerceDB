USE ecommercedb;
 CREATE TABLE `categories`(
	`category_id` INT(11) AUTO_INCREMENT NOT NULL,
    `category_name` VARCHAR(50) NOT NULL,
     PRIMARY KEY(category_id)
 );
 CREATE TABLE `customers`(
	`customer_id` INT(11) AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `street` VARCHAR(50) NOT NULL,
    `city` VARCHAR(30) NOT NULL,
    `zip_code` VARCHAR(15) NOT NULL,
     PRIMARY KEY (customer_id)
 );
 CREATE TABLE `products`(
	`product_id` INT(11) AUTO_INCREMENT NOT NULL,
    `category_id` INT(11) NOT NULL,
    `product_name` VARCHAR(50) NOT NULL,
    `quantity` INT(15) NOT NULL,
    `price` DECIMAL(6,2) NOT NULL,
    PRIMARY KEY(product_id),
    FOREIGN KEY(`category_id`) REFERENCES categories(`category_id`)
 );
 CREATE TABLE `orders`(
	`order_id` INT(11) AUTO_INCREMENT NOT NULL,
    `customer_id` INT(11) NOT NULL,
    `product_id` INT(11) NOT NULL,
    `order_status` TINYINT(1),
    `order_date` DATETIME,
    `shipped_date` DATETIME,
    PRIMARY KEY(order_id),
	FOREIGN KEY(`customer_id`) REFERENCES customers(`customer_id`),
    FOREIGN KEY(`product_id`) REFERENCES products(`product_id`)
 );

 

 