-- Get employees whose hire_date is between 2020 and 2022.

select * from employees where year(hire_date) between 2020 and 2022;
