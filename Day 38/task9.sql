-- Build a stored procedure to update product stock.

ALTER TABLE products
ADD stock INT;

delimiter //
create procedure update_stock(in id int, in stocks int)
begin 
	update products set
    stock = stocks where product_id = product;
end //

