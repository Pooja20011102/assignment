-- Practical Tasks (Mini Projects)
-- Normalize Contacts Script: Write an SQL script that standardizes email (trim & lower), cleans phone to digits only, and writes cleaned values into a new table employee_contacts_clean.

use company_db;

select * from employees;

select concat(first_name,' ',last_name) as full_name,year(hire_date) as hire_year , 
month(hire_date) as hire_month from employees where year(hire_date) = 2022;

select datediff(now(),hire_date) as tenure from employees where emp_id = 1;
-- emp_id = 1 has worked for 1364 days

select email as raw_email,trim(email) as trimmed_email,(email = trim(email)) as equality
 from employees;
 
 select lpad(emp_id,4,'0')  as emp_code
,concat(first_name,' ' , last_name) as full_name from employees;

select phone as raw_phone , replace(phone,'-','') as replaced_phone from employees;

create table employee_contacts_clean as (
select emp_id,concat(first_name,' ' ,last_name) as full_name,trim(lower(email)) as trimmed_email,
trim((replace(replace(replace(replace(replace(phone,'-',''),'.',''),'(',''),')',''),'+91','')))
 as phone_no
from employees
);

SELECT 
    phone,
    RIGHT(REGEXP_REPLACE(phone, '[^0-9]', ''), 10) AS clean_phone_10
FROM employees;
select * from employees where emp_id in (26,20,10,11,6);
create view tenure_bucket as (select emp_id, concat(first_name,' ' ,last_name) as full_name , case 
when timestampdiff(year,hire_date,now()) < 1 then '<1 year'
when timestampdiff(year,hire_date,now()) between 1 and 3 then '1-3 years'
when timestampdiff(year,hire_date,now()) between 3 and 5 then '3-5 years'
when timestampdiff(year,hire_date,now()) > 5 then '+5 year' end
as  tenure
from employees);

select tenure,count(*) as tenure_count from tenure_bucket group by tenure;

alter table employees
add column emp_username varchar(300);
 



UPDATE employees
SET emp_username = CONCAT(
        SUBSTRING(first_name, 1, 2),
        last_name,
        LPAD(emp_id, 2, '0')
    );


select * from employees;

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
