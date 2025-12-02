-- Create a stored procedure that returns product details based on product_id.

delimiter //
create procedure get_price(in id int)
begin
select * from products where product_id = id;
end //
delimiter ;