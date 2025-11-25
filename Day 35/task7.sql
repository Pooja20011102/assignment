-- Tenure Buckets: Build a query that groups employees into tenure buckets (<1 year, 1–3 years, 3–5, 5+) using TIMESTAMPDIFF(YEAR,...) and CASE, and show counts per bucket.

create view tenure_bucket as (select emp_id, concat(first_name,' ' ,last_name) as full_name , case 
when timestampdiff(year,hire_date,now()) < 1 then '<1 year'
when timestampdiff(year,hire_date,now()) between 1 and 3 then '1-3 years'
when timestampdiff(year,hire_date,now()) between 3 and 5 then '3-5 years'
when timestampdiff(year,hire_date,now()) > 5 then '+5 year' end
as  tenure
from employees);

select tenure,count(*) as tenure_count from tenure_bucket group by tenure;