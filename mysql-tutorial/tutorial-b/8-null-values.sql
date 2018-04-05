# If a field in a table is optional, it is possible to insert a new record or update a record without adding a a vlue to this field. Then, the field will be saved with a NULL value.

# IS NULL syntax:
# SELECT column_names
# FROM table_name
# WHERE column_name IS NULL;

# IS NOT NULL syntax:
# SELECT column_names
# FROM table_name
# WHERE column_name IS NOT NULL;

USE bookstore_db;

# The IS NULL operator:
SELECT lastName, firstName, address FROM person_tb
WHERE address IS NULL;

# The IS NOT NULL operator:
SELECT lastName, firstName, address FROM person_tb
WHERE address IS NOT NULL;