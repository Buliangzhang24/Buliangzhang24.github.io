# Quizzes 1
1. 一对多，哪个是FK？ The personid in CAR is the foreign key .
2. 如果这个attribute只在一个表里出现，就不需要item.color了
3. GROUP BY
    select max(sum(saleqty)) from qsale group by itemname (wrong)
    Nesting functions for 'group by' data is not allowed
    
    select count(* ) from qdel group by count(* ) order by splno desc;(wrong)
    'Group by count(* )' gives a syntax error, because the group by clause needs to target un-grouped attributes (and group them).
    If the argument of group by was changed to 'splno', the query would be correct.
4. 'FROM' should be followed by the name of a table or query, not of a column
5. ![[55ec30ef075580eb33903b05608fa49.png]]
6. ![[8cc3ca9aba4c005057b2fe55c135149.png]]
7. After 'or' there should be an expression, e.g. 'or itemcolor = 'white'. Instead, there is only a text string.

# Quizzes 2
![[1bac2467a36b027a7ffb3922a7db33d.png]]
1. well-formed:  tell the reader about the role of attributes
2. Waston don't show the FK, 但是还是有点别的要求。
![[d213a0e6ef04014d39455a01e81c5f3.png]]
3. Table Book copy has two primary keys.(wrong)
    每个表只能有一个PK，但是这个PK可以有很多个attribute
4. the FKs to the mother tables also need to be part of the PK
    就是loan表里的tile, copy和borrower是引自别的表的，LOAN的外键，但是同时也是LOAN主键的一部分
# Quizzes 3
1. 一个员工可以是很多个部门的头，但是一个部门只能有一个头，员工是多端
2. 就是不join还是不行![[bae67f2599a85455ffbcfa491adf4f8.png]]
3. <>就是不等于
4. ORDER BY 和GROUP BY
     Give sales in descending order of saleqty.
     select * from qsale  
     order by saleqty desc;
5.  COUNT() 和SUM（）
     Give the ==total number of deliveries== per item
     Count()只是计数行数， SUM()才是计算里面的
     select itemname, sum(delqty) from qdel  <br>group by itemname
6. group by - having
7. 就是是Head还是boss的问题![[ec812e4914cef8972c6a2aefe30104e.png]]
8. either or both black and white
     1. where itemcolor in ('Black', 'White')
     2. where itemcolor = 'Black' or itemcolor = 'White'
     3. select itemname from qitem  
        where itemcolor = "Black"
        union
        select itemname from qitem  
        where itemcolor = "White";
