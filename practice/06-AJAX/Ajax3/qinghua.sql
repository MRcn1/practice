SET NAMES UTF8;
DROP DATABASE IF EXISTS qinghua;
CREATE DATABASE qinghua character set utf8;
USE qinghua;
CREATE TABLE qh_class(cid int,cname varchar(25),count int);
INSERT INTO qh_class VALUES(10,'计算机工程',50);
INSERT INTO qh_class VALUES(20,'电子商务',52);
INSERT INTO qh_class VALUES(30,'商务英语',51);

CREATE TABLE qh_student(sid int primary key auto_increment,sname varchar(25),score float,classId int);
INSERT INTO qh_student VALUES(NULL,'陈一','90',10);
INSERT INTO qh_student VALUES(NULL,'陈二','92',10);
INSERT INTO qh_student VALUES(NULL,'陈三','91',10);
INSERT INTO qh_student VALUES(NULL,'陈四','94',20);
INSERT INTO qh_student VALUES(NULL,'陈五','95',20);
INSERT INTO qh_student VALUES(NULL,'陈六','96',30);
INSERT INTO qh_student VALUES(NULL,'陈七','95',30);
INSERT INTO qh_student VALUES(NULL,'陈八','98',30);

CREATE TABLE qh_type(tid int ,tname varchar(25));
INSERT INTO qh_type VALUES(10,'相机');
INSERT INTO qh_type VALUES(20,'洗衣机');
INSERT INTO qh_type VALUES(30,'手机');

CREATE TABLE qh_producer(pid int primary key,pname varchar(25),typeId int);
INSERT INTO qh_producer VALUES(40,'康佳','10');
INSERT INTO qh_producer VALUES(50,'索尼','10');
INSERT INTO qh_producer VALUES(60,'康宁','10');
INSERT INTO qh_producer VALUES(70,'康佳2','20');
INSERT INTO qh_producer VALUES(80,'索尼2','20');
INSERT INTO qh_producer VALUES(90,'康宁2','20');
INSERT INTO qh_producer VALUES(100,'康佳3','30');
INSERT INTO qh_producer VALUES(110,'索尼3','30');
INSERT INTO qh_producer VALUES(120,'康宁3','30');

CREATE TABLE qh_user(uid int primary key  auto_increment,uname varchar(25),upwd varchar(25));