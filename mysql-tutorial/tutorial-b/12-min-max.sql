use bookstore_db;

# min() returns the smallest value in the selected column.
# max() returns the largest value in the select column.

# min() syntax:
# select min(column_name)
# from table_name
# where condition;

# example:
select min( price ) as smallestPrice from product_tb;

# max() syntax:
# select max(column_name)
# from table_name
# where condition;

# example:
select max( price ) as largestPrice from product_tb;