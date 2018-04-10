# delete syntax:
# delete from table_name
# where condition;

use bookstore_db;

# delete example:
delete from customer_tb
	where customerName = "Alfreds Futterkiste";
select * from customer_tb; # show results

# delete all records example:
delete from customer_tb;
select * from customer_tb; # show results: empty set