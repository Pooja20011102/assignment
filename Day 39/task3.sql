
-- Write a procedure that returns the highest salary (use OUT).

DELIMITER //
CREATE PROCEDURE get_high_salary(OUT high_price INT)
BEGIN
    SELECT salary 
    INTO high_price
    FROM employees1
    ORDER BY salary DESC
    LIMIT 1;
END //
DELIMITER ;

CALL get_high_salary(@max_sal);
SELECT @max_sal;
