-- Build a view that summarizes total orders per customer.

create view total_summary as 
select o.order_id,o.order_date,c.name as cutomer_name,p.name as product_name,
(p.price*c.quantity)as total_price
from customers c inner join products p on  c.product_id = p.product_id
join orders o  on c.id = o.customer_id;

select * from total_summary;