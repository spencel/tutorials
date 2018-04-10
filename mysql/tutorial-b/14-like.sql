use bookstore_db;

# The 'like' operator in a 'where' clause is used to search for a pattern
# wildcards: % - zero, one or multiple characters
#			 _ - a single character

# syntax:
# select column1, column2 ... from table_name where columnN like pattern;

# Select records or columns that start with 'a':
select * from customer_tb where customerName like 'a%';

# Select records or columns that end with 'e':
select customerName, contactName from customer_tb where customerName like '%e';

# Select records or columns that contain 'tt':
select * from customer_tb where customerName like '%tt%';

# Select records or columns that contain 'l' in the second position:
select * from customer_tb where customerName like '_r%';