DROP DATABASE IF EXISTS `enigma21_aldo_keppel`;

CREATE DATABASE `enigma21_aldo_keppel`;
USE `enigma21_aldo_keppel`;

CREATE TABLE candidate (
`id` bigint NOT NULL AUTO_INCREMENT,
`username` varchar(15) NOT NULL,
`name` varchar(100) NOT NULL,
`gender` varchar(5) NOT NULL,
`phone` varchar(14) NOT NULL,
`password` varchar(500) NOT NULL,
primary key (`id`)
) engine = InnoDB;

CREATE TABLE team (
`id` bigint NOT NULL AUTO_INCREMENT,
`teamName` varchar(15) NOT NULL,
`captain` varchar(100) NOT NULL,
`captainName` varchar(100) NOT NULL,
`captainGender` varchar(5) NOT NULL,
`captainPhone` varchar(14) NOT NULL,
`member` varchar(100) NOT NULL,
`memberName` varchar(100) NOT NULL,
`memberGender` varchar(5) NOT NULL,
`memberPhone` varchar(14) NOT NULL,
primary key (`id`)
) engine = InnoDB;