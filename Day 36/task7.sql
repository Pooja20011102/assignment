 
 delimiter //
 create procedure small_date_calculator(in birth_date date)
 begin 
 
 select timestampdiff(year,birth_date,now()) as year_tenure,
 timestampdiff(month,birth_date,now())as month_tenure,
 timestampdiff(day,birth_date,now()) as days_tenure;
 end //
 
 delimiter ;