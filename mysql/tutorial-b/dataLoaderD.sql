DROP DATABASE IF EXISTS bookstore_db;
CREATE DATABASE bookstore_db;
USE bookstore_db;

# Add customer data
DROP TABLE IF EXISTS customer_tb;
CREATE TABLE customer_tb
(
  id	int unsigned NOT NULL auto_increment, # does not need to exist in table to be loaded
  customerName	longtext NOT NULL,
  contactName	longtext NOT NULL,
  address		longtext NOT NULL,
  city			longtext NOT NULL,
  postalCode	longtext NOT NULL,
  country		longtext NOT NULL,

  PRIMARY KEY     (id)
);

# Load data
LOAD
	DATA 
	LOCAL	# gives error if absent for some reason 
	INFILE 'D:/Tutorials/mysql-tutorial/tutorial-b/customerData.txt'
INTO TABLE customer_tb
FIELDS TERMINATED BY '\t'	# necessary - tab delimited fields
LINES TERMINATED BY '\r\n' # necessary - newline/carriage return delimited records
( @customerName, @contactName, @address, @city, @postalCode, @country ) # map field names in order they appear in the file to be imported
SET
customerName = NULLIF(@customerName,''),
contactName = NULLIF(@contactName,''),
address = NULLIF(@address,''),
city = NULLIF(@city,''),
postalCode = NULLIF(@postalCode,''),
country = NULLIF(@country,'');

# Add person data
DROP TABLE IF EXISTS person_tb;
CREATE TABLE person_tb
(
  id  int unsigned NOT NULL auto_increment, # does not need to exist in table to be loaded
  lastName  longtext DEFAULT NULL,
  firstName longtext DEFAULT NULL,
  address   longtext DEFAULT NULL,
  city      longtext DEFAULT NULL,

  PRIMARY KEY     (id)
);

# Load data
LOAD
  DATA 
  LOCAL # gives error if absent for some reason 
  INFILE 'D:/Tutorials/mysql-tutorial/tutorial-b/personData.txt'
INTO TABLE person_tb
FIELDS TERMINATED BY '\t' # necessary - tab delimited fields
LINES TERMINATED BY '\r\n'  # necessary - newline/carriage return delimited records
( @lastName, @firstName, @address, @city ) # map field names in order they appear in the file to be imported
SET 
lastName = NULLIF(@lastName,''),
firstName = NULLIF(@firstName,''),
address = NULLIF(@address,''),
city = NULLIF(@city,'');