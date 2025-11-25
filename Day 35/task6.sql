-- Practical Tasks (Mini Projects)
-- Normalize Contacts Script: Write an SQL script that standardizes email (trim & lower), cleans phone to digits only, and writes cleaned values into a new table employee_contacts_clean.

create table employee_contacts_clean as (
select emp_id,concat(first_name,' ' ,last_name) as full_name,trim(lower(email)) as trimmed_email,
trim((replace(replace(replace(replace(replace(phone,'-',''),'.',''),'(',''),')',''),'+91','')))
 as phone_no
from employees
);








-- hires per month
select month(hire_date) as tenure_month ,count(*) as no_of_hire_per_month
from employees group by month(hire_date) order by month(hire_date);

select year(hire_date) as tenure_month ,count(*) as no_of_hire_per_year
from employees group by year(hire_date) order by year(hire_date);

select year(hire_date) as hire_year , monthname(hire_date) as hire_month , 
count(*) as total_count from employees where year(hire_date) in (2023,2022) group by 
year(hire_date) , monthname(hire_date) , month(hire_date) 
order by year(hire_date) , month(hire_date);

select phone as raw_phone , replace(replace(phone,'-',''),'.','') as e164_phone
from employees;

SELECT 
    phone AS raw_phone,
    CASE 
        WHEN phone LIKE '+91%' THEN
            CONCAT('+', REGEXP_REPLACE(phone, '[^0-9]', ''))
        ELSE
            CONCAT('+91', REGEXP_REPLACE(phone, '[^0-9]', ''))
    END AS e164_phone
FROM employees;
