---
layout: post
title: SQL｜Lecture 3 Many-to-Many Relstionship
categories: [SQL]
description: None
keywords: Many-to-Many Relstionship
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
## What is Many to Many
A sale includes many items
An item can appear in many sales
## How to link the tables with m:m relationship
we can not link them directly
PK are saleno and lineno or itemno
# Query
## Join for Multiple Tables
## Set Operator: UNION
List all items that 
A) were sold on 1995-01-16, or B) are brown
比OR多了一个unique
They are same.
![](/images/posts/c873212748e2587151b5f2fadd9515a.png)
UNION doesn't check the information is logical or not,just put them together
## INTERSECT
List all items that A) were sold on 1995-01-16, and B) are brown
INTERSECT is not supported by MySQL

SELECT itemname FROM item_w, lineitem, sale  
WHERE item_w.itemno = lineitem.itemno  
AND lineitem.saleno = sale.saleno  
AND saledate = "1995-01-16"  
INTERSECT 
SELECT itemname FROM item WHERE itemcolor = 'Brown’;
## IN (replace INTERSECT in MySQL)

SELECT itemname FROM item_w, lineitem, sale  
WHERE item_w.itemno = lineitem.itemno  
AND lineitem.saleno = sale.saleno  
AND saledate = "1995-01-16“  
AND itemname IN 
(SELECT itemname FROM item WHERE itemcolor = 'Brown');
## EXISTS
## NOT EXISTS
SELECT COUNT(* ) FROM item_w 
WHERE EXISTS (SELECT * FROM item_w WHERE itemtype = 'E')；

return 20
## Forall by Double Not-Exists
Find instance from one table that are in every instance of another table
### Template
target sources target-source
![](/images/posts/9474b1ed799913ba6158606e180a393.png)
# Chapter 6: One-to-One and Recursive Relatioships
## What is recursive?
An entity is part of another entity
these entities have the same features
## Recursive 1:1 Relationship
REFERENCES is table itself
## Recursive 1 : m Relationship
PRIMARY KEY(empno),  
CONSTRAINT fk_has_boss foreign key (bossno) REFERENCES emp(empno));
## JOIN
![](/images/posts/570dcfb14d5a1199061480cd4723656.png)