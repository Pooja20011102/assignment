-- Practice Tasks (Simple)
-- Use YEAR() and MONTH() to list employees hired in 2022.

select concat(first_name,' ',last_name) as full_name,year(hire_date) as hire_year , 
month(hire_date) as hire_month from employees where year(hire_date) = 2022;