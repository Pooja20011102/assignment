-- Create a procedure to calculate bill = price * quantity and return it using OUT.

DELIMITER //

CREATE PROCEDURE calculate_bill(
    IN cust_id INT,
    OUT bill DECIMAL(10,2)
)
BEGIN
    SELECT SUM(price * quantity)
   INTO bill
    FROM orders o
    INNER JOIN products p 
        ON o.product_id = p.product_id
    WHERE o.customer_id = cust_id;
END //
delimiter ;