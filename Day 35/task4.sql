-- Use LPAD to display emp_code as 4-digit zero-padded strings.

 select lpad(emp_id,4,'0')  as emp_code
,concat(first_name,' ' , last_name) as full_name from employees;