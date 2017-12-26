drop database if exists tarena;

create database tarena character set utf8;

use tarena;

create table msg(mid int primary key auto_increment,uname varchar(25),phone varchar(20),pubtime date,content varchar(1000));

