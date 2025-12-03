-- Create a procedure with two IN parameters (min_salary, max_salary).

delimiter //
create procedure getminmaxsalary (in max_salary int, in min_salary int)
begin
	select * from employees1 where salary > min_salary and salary < max_salary;
end //
delimiter ;

call getminmaxsalary (40000,50000);