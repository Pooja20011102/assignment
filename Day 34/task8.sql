
-- Salary analytics: SUM, AVG, MIN, MAX for each department.

select dept_id,sum(salary) as total_salary,avg(salary) as avg_salary, min(salary) as min_salary,max(salary) as max_salary from employees group by dept_id;