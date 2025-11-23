

-- Show employees whose salary is NOT between 50000 and 80000.

select * from employees where not (salary between 50000 and 80000);

select * from employees where salary < 50000 or salary > 80000;