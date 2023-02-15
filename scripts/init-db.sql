DROP DATABASE IF EXISTS peopledb;
CREATE DATABASE peopledb;
USE peopledb;

DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `people` VALUES (1,'John'), (2, 'Bob'), (3, 'Marta');
