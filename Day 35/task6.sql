-- Practical Tasks (Mini Projects)
-- Normalize Contacts Script: Write an SQL script that standardizes email (trim & lower), cleans phone to digits only, and writes cleaned values into a new table employee_contacts_clean.

create table employee_contacts_clean as (
select emp_id,concat(first_name,' ' ,last_name) as full_name,trim(lower(email)) as trimmed_email,
trim((replace(replace(replace(replace(replace(phone,'-',''),'.',''),'(',''),')',''),'+91','')))
 as phone_no
from employees
);










