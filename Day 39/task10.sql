

-- Build a procedure that increases product price by a percentage.

delimiter //
create procedure get_new_price (in id int)

begin
	select price,1.2*price as new_price from products where product_id = id;
end //
delimiter ;
 -- 20% increase