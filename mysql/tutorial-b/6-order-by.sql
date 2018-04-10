# ORDER BY syntax:
# SELECT column1, column2, ...
# FROM table_name
# ORDER BY column1, column2, ... ASC|DESC;

# ASC	ascending order
# DESC	descending order

# ORDER BY example:
SELECT "SELECT * FROM customer_tb ORDER BY country;";
SELECT * FROM customer_tb
ORDER BY country;

# ORDER BY DESC example:
SELECT "SELECT * FROM customer_tb ORDER BY country DESC;";
SELECT * FROM customer_tb
ORDER BY country DESC;

# ORDER BY several columns example:
SELECT "SELECT * FROM customer_tb ORDER BY country, customerName;";
SELECT * FROM customer_tb
ORDER BY country, customerName;

# ORDER BY first column ascending and second column descending:
SELECT "SELECT * FROM customer_tb ORDER BY country ASC, customerName DESC;";
SELECT * FROM customer_tb
ORDER BY country ASC, customerName DESC;