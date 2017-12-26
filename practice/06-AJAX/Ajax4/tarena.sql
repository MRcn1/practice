SET NAMES UTF8;

DROP DATABASE IF EXISTS tarena;

CREATE DATABASE tarena CHARACTER SET UTF8;

USE tarena;

CREATE TABLE student(sid int primary key auto_increment,sname varchar(20),pic varchar(25),scoreGrade varchar(10));

INSERT INTO student VALUES(NULL,'³ÂÒ»','img/1.jpg','A');
INSERT INTO student VALUES(NULL,'³Â¶þ','img/2.jpg','B');
INSERT INTO student VALUES(NULL,'³ÂÈý','img/3.jpg','C');
INSERT INTO student VALUES(NULL,'³ÂËÄ','img/4.jpg','D');
INSERT INTO student VALUES(NULL,'³ÂÎå','img/5.jpg','D');
INSERT INTO student VALUES(NULL,'³ÂÁù','img/6.jpg','A');
INSERT INTO student VALUES(NULL,'³ÂÆß','img/7.jpg','C');
INSERT INTO student VALUES(NULL,'³Â°Ë','img/8.jpg','B');