
-- Create a procedure that prints all students.

delimiter //
create procedure getstudents()
begin 
    select * from students;
end //
delimiter ;