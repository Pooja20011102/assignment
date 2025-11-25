
-- Compute DATEDIFF(NOW(), hire_date) for employee id 1 and interpret the result.

select datediff(now(),hire_date) as tenure from employees where emp_id = 1;
-- emp_id = 1 has worked for 1364 days