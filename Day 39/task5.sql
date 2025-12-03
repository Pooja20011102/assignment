-- Create a procedure that updates a student’s phone number.

delimiter //
create procedure update_phone(in phone_no int,in id int)
begin
	update users set phone = phone_no where rollno = id;
end //
delimiter ;