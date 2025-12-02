-- Create a function to calculate tax based on price.

CREATE FUNCTION gettax(price INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE tax DECIMAL(10,2);

    CASE 
        WHEN price BETWEEN 100 AND 1000 THEN 
            SET tax = price * 1.10;   -- 10% increase

        WHEN price BETWEEN 1000 AND 25000 THEN 
            SET tax = price * 1.50;   -- 50% increase

        WHEN price > 50000 THEN 
            SET tax = price * 1.80;   -- 80% increase

        ELSE 
            SET tax = price;          -- default no change
    END CASE;

    RETURN tax;
END //

DELIMITER ;