# INSERT INTO syntax:
# INSERT INTO table_name (column1, column2, ...)
# VALUES (value1, value2, ...);

# If adding values to all columns:
# INSERT INTO table_name
# VALUES (value1, value2, ...);

# INSERT INTO example:
INSERT INTO customer_tb (customerName, contactName, address, city, postalCode, country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

# Insert data only in specified columns:
INSERT INTO customer_tb (customerName, city, country)
VALUES ('Cardinal', 'Stavanger', 'Norway')