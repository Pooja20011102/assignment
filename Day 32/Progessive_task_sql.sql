-- Table: employees
-- Columns:
-- No int 
-- First Name text 
-- Last Name text 
-- Gender text 
-- Start Date text 
-- Years int 
-- Department text 
-- Country text 
-- Center text 
-- Monthly Salary int 
-- Annual Salary int 
-- Job Rate int 
-- Sick Leaves int 
-- Unpaid Leaves int 
-- Overtime Hours int

-- Fetch all employees from the Manufacturing department.

-- Show First Name, Last Name, Country of all female employees.

-- Get all employees whose Annual Salary is more than 30,000.

-- Fetch employees who have more than 100 Overtime Hours.



-- List the total number of employees in each Department.

-- Find the average Monthly Salary for each Country.

-- Show employees who have taken any Sick Leaves or Unpaid Leaves.

-- Get employees whose Job Rate is either 1 or 2.


-- Find the employee(s) with the highest Annual Salary.

-- Calculate total Overtime Hours grouped by Department and Center.

-- Find employees who joined before 2019 and have Annual Salary > 20,000.

-- List employees whose Start Date month is March or April (ANY YEAR)


select * from employees;

select * from employees where department = "Manufacturing";


select `First Name`,`last Name`,Country from employees where Gender = "Female"; 

select * from employees where `Annual Salary` > 30000;

select * from employees where `Overtime Hours` > 100;

select Department,count(*) from employees group by Department;

select Country,avg(`Monthly Salary`) from employees group by Country;

select * from employees where `Sick Leaves` > 1 or `Unpaid Leaves` > 1;

select * from employees where `Job Rate` in (1,2);

select * from employees order by `Annual Salary` desc limit 1;

select Department , Center , sum(`Overtime Hours`) as sum_oh from employees group by Department, Center;

select * from employees where substring(`Start Date`,-4) < '2019' and `Annual Salary` > 20000;

select *  from employees where substring_index(substring_index(`Start Date`,'/',2),'/',1) in (3,4);