DELIMITER //

CREATE PROCEDURE capitalize_first_letter(IN my_name VARCHAR(30))
BEGIN
    SELECT CONCAT(
        UPPER(LEFT(TRIM(my_name), 1)),
        LOWER(SUBSTRING(TRIM(my_name), 2))
    ) AS trim_cap_name;
END //

DELIMITER ;


call company_db.capitize_first_letter(' praveen');