create database newcompanydb;

create table employees(
	id int primary key auto_increment,
    first_name varchar (30),
    last_name varchar(30),
    salary decimal(10,2),
    place varchar(30),
    hire_date date,
    dept_id int,
    active boolean
);


insert into employees values (1,"Abishek","Sharma",50000,"Patna","2021-11-20",1,1),(2,"Tanya","Tope",60000,"Bangalore","2020-02-21",2,1),(3,"Ritika","Saran",45000,"Chennai","2022-03-02",3,0);