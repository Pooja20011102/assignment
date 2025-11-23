

-- Show only departments with more than 5 employees (HAVING).

select dept_id,count(*) as total_emp_per_dep from employees group by dept_id having count(*) > 5;
