-- Write a query to use a view that joins two tables.

create view employees_dept as
select e.emp_id , e.name , e.dept_id ,d.dept_name from
employees e inner join departments d on e.dept_id = e.dept_id;
