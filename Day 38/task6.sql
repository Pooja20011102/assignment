-- Build a view that summarizes total orders per customer.

create view total_customer_order as 
select name,count(*) as order_count from customers c 
inner join orders o on c.id = o.customer_id 
group by name;

select * from total_customer_order