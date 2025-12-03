-- Create a procedure that returns total sales for a given month.


delimiter //
create procedure total_sales_per_month(in cust_id int)
begin
select sum(price*quantity) from orders o inner join products p on o.product_id = p.product_id
where customer_id = cust_id;
end //
delimiter ;

call total_sales_per_month(6)