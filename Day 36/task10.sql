delimiter //
create procedure countdownapp(in a_day date)
begin
	 select timestampdiff(day,a_day,now()) as day_diff;
end //
delimiter ;

call company_db.countdownapp('2005-03-11');
