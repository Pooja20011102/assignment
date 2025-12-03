-- Create a procedure that accepts a department ID and shows all employees.
delimiter //

create procedure get_employee(in id int)
begin
	select * from employees e inner join departments d on e.dept_id = d.dept_id where d.dept_id = id;
end //
delimiter ;