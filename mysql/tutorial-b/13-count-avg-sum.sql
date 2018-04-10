use bookstore_db;

# count() returns the number of rows that matches a specified criteria.

# count() syntax:
# select count( column_name ) from table_name where condition;

# example:
select count( id ) from product_tb;


# avg() returns the average value of a numeric column

# avg() syntax:
# select avg( column_name ) from table_name where condition;

# example:
select avg( price ) from product_tb;


# sum() returns the total sum of a numeric column
# syntax:
# select sum( column_name ) from table_name where condition;
# example:
select sum( unit ) from product_tb;