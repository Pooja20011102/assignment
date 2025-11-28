delimiter //
create function month_calculator(birth_date date)
returns int
deterministic
begin
	return timestampdiff(month,birth_date,now());
end //
delimiter ;

select month_calculator('2001-02-11') as next_birthday_month;