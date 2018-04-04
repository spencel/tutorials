# WHERE clause:
# SELECT column1, column2, ...
# FROM table_name
# WHERE condition;

# Select columns
SELECT 'SELECT * FROM customer_tb WHERE country=\'Mexico\';';
SELECT * FROM customer_tb
WHERE country='Mexico';

# Text field vs numeric field
SELECT 'SELECT * FROM customer_tb WHERE id=1;';
SELECT * FROM customer_tb WHERE id=1;

# Operators in the WHERE clause
# = 		equal
# <>		no equal
# >			greater than
# <			less than
# >=		greater than or equal
# <=		less than or equal
# BETWEEN	between an inclusive range
# LIKE		search for a pattern
# IN		to specify multiple possible values for a column