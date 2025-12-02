-- Create a view that shows student name and marks above 80.

create view topper_list as
select * from student where marks >= 80;

select * from topper_list;