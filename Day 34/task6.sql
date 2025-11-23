-- Create a report: number of employees per department (GROUP BY).

select dept_id,count(*) as total_emp_per_dep from employees group by dept_id;
