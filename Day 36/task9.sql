delimiter //
create procedure separate_names(in fullname varchar(30))
begin
	 select substring_index(fullname, ' ' ,1),
 substring_index(substring_index(fullname, ' ' ,2),' ',-1),
 substring_index(fullname,' ' ,-1);
end //
delimiter ;

call company_db.separate_names('bs as J');