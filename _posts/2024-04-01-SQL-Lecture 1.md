 project structure
 advanced topic: imporove data processing using DB, Link python program to manage DB server
## Information System
step 1 : Data collection,sensing
step 2 : Data management , database
step 3 : Data Analyzing ,machine learning
## Data Storage: 
Local RAM, Files, Database, Distributed storage, cloud and blockchain
## Why Database? 
Shareable, Transportable, Accurate, speed, secure and privacy
## Database Systems
## Challenges of DM
Redundancy, poor interface, lack of data intergration, lack of scalability
# Single Entity
## What is a database?
A coherent collection of data and the data is searchable
- collection of data: related tables
- Searchable : DBMS
## Basic Structure of DataBase
rows: things
columns : attributes
## Definitions of Database
Entity
Instance
Primary Key
## Entity-Relationship Diagrams(ERD)
ERD shows the relationships of entity
## Manage Database
Structured Query Language(SQL) 
create a database
query a database
## Define a Table
CREATE TABLE
PRIMARY KEY
## Insert Rows into a Table
INSERT INTO
VALUES
## Query a Database
SELECT
FROM
WHERE
GROUP BY
ORDER BY
### Select
SELECT
FROM

WHERE: SELECT * FROM share ==WHERE== shrpe <12 ==and== shrpe >8
GROUP BY
ORDER BY
### Order by
SELECT* FROM share
WHERE shrpe >= 10
ORDER BY shrpe DESC(从大到小), shrfirm ASC;
### Update
UPDATA share
==SET ==shrfirm = ' Canadian Super Sugar'
==WHERE== shrcode = 'CS'
### Delete
==DELETE FROM== share
==WHERE== shrcode = 'BS'
(we can just use the primary key)
### Expressions
SELECT shrfirm, shrprice, shrqty, ==shrdiv/shrprice* 100 AS yield==
FROM share;

SELECT AVG(shrdiv) AS avgdiv
FROM share;
the calculation result is always table
#### Regular Expressions
SELECT * FROM nation WHERE natnamae ==REGEXP== 'ni'
#### Wildcard
SELECT shrfirm FROM share WHERE shrfirm ==REGEXP 'Geese$'==(at the end of the string)
^ : begining of string
REGEXP '[KD]'




