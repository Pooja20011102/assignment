-- Write a stored procedure to insert a new employee into a table.

delimiter //
create procedure add_employee(in empid int,in firstname varchar(40),in lastname
 varchar(30),in newsalary int, in deptid int)
begin
 insert into employees  (emp_id,first_name,last_name,salary,dept_id) values
 (empid,firstname,lastname,newsalary,deptid);
 end //
delimiter ;

DELIMITER //