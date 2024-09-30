# Chapter 7 how to model and design a database
# Data Modelling 
= the art of database design
## Find out 
which facts : things (entiy). keep what (attribute), model what might happen, how the facts link (relationship)
## Not 
process, data flow, experimental design
## Make a database metadata
identify the facts to be stored in the database
client and analysit
## Building Blocks
entity
attribute
relationship
identifiers
(+ and frim'boss 是什么？)
Q
## Aim 1 a well formed data model
Construction rules obeyed
No ambiguity
## Aim 2 a high fidelity image
faithfully describes the world
relationships
data model is complete, understandable and accurate
make sense
## 7 habits of highly effective data modellers
![[89dbf2d2857a9aeb9f5809da2b3896a.png]]

### Integrate

more than one capital
same name cities
label these relationship
# Normalization
Bottom-up
Grouping the attributes in tables so that Every non-PK 
attributes depends on 
– the PK, 
– the whole PK (if multi-attribute), 
– and nothing but the PK
## Generalize
man and woman can be generelized as person
child /// single marriage
## Cardinality and Modelity
cardinality range of instances
modelity participating instances
![[23527af291d9e98d666491360623ec0.png]]

![[a260e58eff2aaa7de24c1bb27931782.png]]
![[51a4710dd4e60f33c54b7672c477211.png]]