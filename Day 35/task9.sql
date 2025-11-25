
-- Monthly Hiring Report: Use MONTH() & YEAR() to produce a report of hires per month/year for the last 24 months, including totals.

select month(hire_date) as tenure_month ,count(*) as no_of_hire_per_month
from employees group by month(hire_date) order by month(hire_date);

select year(hire_date) as tenure_month ,count(*) as no_of_hire_per_year
from employees group by year(hire_date) order by year(hire_date);

select year(hire_date) as hire_year , monthname(hire_date) as hire_month , 
count(*) as total_count from employees where year(hire_date) in (2023,2022) group by 
year(hire_date) , monthname(hire_date) , month(hire_date) 
order by year(hire_date) , month(hire_date);
