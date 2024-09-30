The relational model is a meta-model
described as E-R model
domain, intergrity and operators to retrieve, derive, modify data

A relation is a set of attributes(columns) and tuples(rows)
relational database is a collection of relations or tables: intergrity rules(entity, referential)

SQL
How to make a SQL query
steps:
a. understand question (what tables / columns?)
b. make query space (=data to test query)
c. make query (=SQL)
d. test query (does it yield what you expected?)

SQL Syntax
condition, operator, expression
SQL constraints
NOT NULL Constraint

SQL IN operater:
To specify multiple values in a WHERE clause
Shorthand for multiple OR conditions

JOIN
INNER JOIN
![[e5062a920fff6aa6dc6dca4b4828f26.png]]
Group By
aggregate functions: COUNT(), MAX(), MIN(), SUM(), AVG()
## SQL Routines
RETURNS
![[dade562868293319f3aef8d959967b3.png]]
## Triggers
这是在讲SQL中的触发器。触发器是一种特殊类型的存储过程，它会在表上发生特定事件时自动执行，比如插入、更新或删除行。

在你提供的例子中，描述了创建一个触发器，将更新记录到单独的 `stock_log` 表中。这个触发器会在 `stock` 表上执行更新操作时自动执行，并将一条记录插入到 `stock_log` 表中，记录股票代码、旧股价、新股价、旧股票数量、新股票数量以及更新的时间戳等详情。

## Security
GRANT command is used to provide access or privileges on the database
REVOKE command removes user access rights or privileges to the database objects

## Melt:
Melt操作将数据框（dataframe）从宽格式（wide format）转换为长格式（long format），即将列中的值转换为行中的值。
在这个例子中，通过UNION ALL将游戏分数数据表（game_scores）中的两个球员（Player1和Player2）以及他们的得分（TeamScore）合并到一个新的数据表中。
这个操作使得每个球员都有对应的得分，从而方便计算每个球员的平均得分。
![[8bffd88c03f21fc0830865a0f4c200a.png]]
## Cast:
Cast操作是Melt的逆操作，它将数据从长格式转换回宽格式，通常涉及聚合操作。
在这个例子中，没有直接展示Cast操作，但可以想象，如果想要将每个球员的平均得分重新转换为某种汇总形式（例如，每个球员的平均得分作为列而不是行），那么就可以使用Cast操作来实现。

SQL weakness: loops