-- Create a function that returns total price = qty * price.

delimiter //
create function total(qty int, price decimal(6,2))
returns int
deterministic
begin
	return qty*price;
end  //
delimiter ;
