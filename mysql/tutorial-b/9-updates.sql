# The update statement is used to modify the existing records in a table.

# update syntax:
# update table_name
# set column1 = value1, column2 = value2, ...
# where condition;

use bookstore_db;

# update table example:
update customer_tb
	set contactName = "Alfred Schmidt", city = "Frankfurt"
	where id = 1;

# update multiple records example:
update customer_tb
	set contactName = "Juan"
	where country = "Mexico";

# update all records example:
update customer_tb
	set contactName = "Juan";