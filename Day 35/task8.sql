-- Username Generator: Create a stored procedure (or a single UPDATE statement) that builds unique usernames using CONCAT, SUBSTRING, and LPAD (append numeric suffix if collision).

alter table employees
add column emp_username varchar(300);
 



UPDATE employees
SET emp_username = CONCAT(
        SUBSTRING(first_name, 1, 2),
        last_name,
        LPAD(emp_id, 2, '0')
    );