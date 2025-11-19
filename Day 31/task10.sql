"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe" -u root -p pooja > pooja.sql;

CREATE DATABASE edu_platform;


"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p edu_platform < pooja.sql


DROP DATABASE pooja;

--use data export and data import

