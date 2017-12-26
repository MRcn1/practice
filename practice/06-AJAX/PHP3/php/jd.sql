set names utf8;

DROP DATABASE IF EXISTS jd;

CREATE DATABASE jd CHARACTER SET UTF8;

use jd;

create table udisk(uid int primary key auto_increment,uname varchar(25),pic varchar(50),price float,addedTime bigint);

INSERT INTO udisk VALUES(NULL,'金士顿','img/1.jpg','50','1231231231');
INSERT INTO udisk VALUES(NULL,'华顿','img/2.jpg','55','1131231231');
INSERT INTO udisk VALUES(NULL,'金顿','img/3.jpg','60','1331231231');