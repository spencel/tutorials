# AND syntax:
# SELECT column1, column2, ...
# FROM table_name
# WHERE condition1 AND condition2 AND condition3 ...;

# OR syntax:
# SELECT column1, column2, ...
# FROM table_name
# WHERE condition1 OR condition2 OR condition3 ...;

# NOT syntax:
# SELECT column1, column2, ...
# FROM table_name
# WHERE NOT condition;

# AND
SELECT "SELECT * FROM customer_tb WHERE country='Germany' AND city='Berlin';";
SELECT * FROM customer_tb
WHERE country='Germany' AND city='Berlin';

# OR
SELECT "SELECT * FROM customer_tb WHERE city='Berlin' OR city='Munchen';";
SELECT * FROM customer_tb
WHERE city='Berlin' OR city='Munchen';

# NOT
SELECT "SELECT * FROM customer_tb WHERE NOT country='Germany';";
SELECT * FROM customer_tb
WHERE NOT country='Germany';

# AND, OR, NOT
SELECT "SELECT * FROM customer_tb WHERE country='Germany' AND (city='Berlin' OR city='Munchen');";
SELECT * FROM customer_tb
WHERE country='Germany'
AND (city='Berlin' OR city='Munchen');

SELECT * FROM customer_tb
WHERE NOT country='Germany' AND NOT country='USA';