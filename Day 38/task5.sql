-- Use your function inside a SELECT query.

select c.name,total(c.quantity,p.price) as total_price from
 products p inner join 
 customers c on p.product_id = c.product_id;

-- total is a function 