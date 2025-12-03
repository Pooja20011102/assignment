-- Build a procedure to insert a new order into an orders table.


delimiter //

create procedure calculate_bill(in id int,out bill int)
begin 
	select sum(price*quantity) as bill from orders o 
    inner join products p on o.product_id = p.product_id 
    where customer_id = id
    group by customer_id;
end //
delimiter ;

call calculate_bill(5, @bill);