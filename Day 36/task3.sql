use new_sql;

create table student_name(
	id int primary key,
    name varchar(30)
);

insert into student_name values (1,'SaROja'),(2,'teJU'),(3,'laTHA');

select upper(name) as caps_name, lower(name) as small_name from student_name;