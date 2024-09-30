---
layout: post
title: SQL｜Lecture 2 One-to-Many Relstionship
categories: [SQL]
description: None
keywords: One-to-Many Relstionship
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
# Chapter 4: One-to-Many Relstionship
Link multiple entities together
Relationship between one instance of an entity to many  instances of another entity
## Why we need multiple tables?
redundant data and redundant operation
### Potential Problems
insert: need to duplicate exchange rate
delete: delete the compony, we also remove the india
update
### How to solve this problem
Split: the redundant info
Link: the two tables>> Foreign Key is same as the PK of another table

CONSTRAINT fk_has_nation FOREIGN KEY(natcode) REFERENCE nation(natcode);
### 1: m Relationship E-R(Entity- Relationship) Diagrams
a diagram is not a table. It's a story with relations.
the difference between the 1:1 and 1:m
- label(relationship descriptor)
### FK and PK
are both a column or ==collection of columns==
### Could PK use multiple attributes?
Yes
PRIMARY KEY(stkcode, stkfirm)
## Query on 1:m(How to use these)
### Join
step1: combine all the rows
==SELECT * FROM(就是选择了所有的rows) Table1 , Table2;==
step2: restrict the values of some columns
==WHERE Table1.ID +100 =Table2.ID;==

SELECT * FROM stock JOIN nation
ON stock.natcode = nation.natcode;
not only equal, but other operation
(显式连接)

这个Query是错的，为什么？
SELECT natname, ==natcode==, stkfirm, stkprice, stkqty, exchrate, stkprice*stkqty*exchrate AS stkvalue  
FROM stock, nation  
WHERE stock.natcode = nation.natcode
(隐式连接)
因为： 这个在两个表里面都有，所以要进一步指定这个是属于哪个的

### Group by
SELECT natcode, COUNT(natcode) FROM stock
WHERE stkprice >10
GROUP BY natcode;
#### Group by可以用于两个columns， 把两个columns都当做new table的PK来进行分类
![[64330f7bb4f6a7b968e385fd97f9f1b.png]]
### Having
SELECT natname, SUM(stkprice*stkqty*exchrate) AS stkvalue  
FROM stock, nation WHERE stock.natcode = nation.natcode  
==GROUP BY natname  
HAVING COUNT( * ) > 2==
## View of Database
for different people give them different tables
Beneifits:
restrict access to parts of a table
save memory space
simplify query writing

就是创建了一个新表
CREATE ==VIEW== stkvalue (nation, firm, price, qty, exchrate, value)  
AS  
SELECT natname, stkfirm, stkprice, stkqty, exchrate, stkprice*stkqty*exchrate  
FROM stock, nation  
WHERE stock.natcode = nation.natcode;
下一次我们就可以直接用SELECT * FROM stkvalue
## Subqueries
就是有点像普通就执行一次，搞一整个表，correlated就是一行一行的搞
![[9a9f6c7ea251685632bde7d3ca4b494.png]]
### Normal Subquery
Use brackets to specify subquery

SELECT shrfirm, shrpe FROM share  
WHERE shrpe > (SELECT AVG(shrpe) FROM share);
### Correlated Subquery
that country : we don't know the compony belong to which coutry

SELECT natname, stkfirm, stkqty FROM stock, nation  
WHERE stock.natcode = nation.natcode  
AND stkqty >  
==(SELECT avg(stkqty) FROM stock  
WHERE stock.natcode = nation.natcode)==
