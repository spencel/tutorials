use bookstore_db;

# select top limits records returned

# MySQL select limit syntax:
# select column_name(s)
# 	from table_name
#	where condition;
#	limit number;

# MySQL select limit example:
select * from customer_tb
	limit 3;

# MySQL select limit with where clause example:
select * from customer_tb
	where country = "Germany"
	limit 1;