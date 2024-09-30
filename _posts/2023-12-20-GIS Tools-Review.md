---
layout: post
title: GIS Tools｜Review
categories: [GIS Tools]
description: None
keywords:  Review
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
## IAaPreProcessingModel: module 1-5

1. 切范围： Create Fishnet
2. 根据这个extent去选择地物 Clip Raster和Clip
3. 制作一个LookUpTable: Frequency, Delete Field, Add Field, Calculate Field , Merge, Join Field, Alter Field 
4. 根据这个整合之后的LookUpTable去suitablity value，形成最后的LookUpTable
5. 通过网络数据得到人口数，计算每个neighbour 里面的人口数： WFS, Select layer by location
## IAbComputeLightrailNetworlAndCorridor
1. 把建筑，基础设施，landuse和水的数据用LUT来赋Suitability Values : Join Field
2. 对主路和分路分别做buffer， 把他们从一整个分开成好多个不同的polygon， 为了删除一些小的区域： Buffer( Side Type: Full/ Exclude the input polygon from buffer; Dissolve Type: No/ Dissolve all/ Dissolve using LR_WGT ), Multipart to Single part , select
    对路的Buffer 加了WGT: Get Field Value, Calculate Value, Calculate Field
3. 简化建筑物，减少vertex: Simplify Building( why not Simplify Polygon) 
    
    1. 把之前的道路buffer作为barrier features来简化建筑物与后院之间的区域，然后继承字段，加入WGT，最后得到的就是简化完了之后的建筑与后院之间的区域： Aggregate Polygon, join field 
    
    2. 把建筑都合并成一个polygon，然后在之前道路的buffer上，把建筑物给擦掉。这里要erase两次，一次是擦建筑区域，一次是擦建筑与后院之间的区域（unsuitable region）
    
    3. 只把临近道路的polygon选出来（就是删除零碎的，不临近道路的区域区域） 同时还把这个结果做成了一个layer： Multipart to Singlepart , Make Feature Layer, Select Layer By Location(引入道路来intersect)
4. 建立DEM的各种衍生的栅格： 陡坡栅格，湿地栅格， 径流栅格
    1. 先Fill填一下栅格
    2. 陡坡栅格： 用Slope,选择一定坡度Con, 确定Unique Area用Region Group,计算唯一区域的面积 Zonal Geometry,再通过面积选择一下这个陡坡栅格Con
    3. 湿地栅格： 用Fill之前的栅格减去Fill之后的栅格，用Minus， 选择，确定唯一区域，计算唯一区域的最大高度差Zonal Statistic,再选择
    4. 径流栅格： 在Fill之后，计算Flow Direction 栅格， 计算Flow Accumulation栅格，选择， Expand展开选择的栅格并创建一个10米的栅格缓冲区
5. 创建这个SuitabilityRaster
    1. 栅格： 陡坡栅格，径流栅格，湿地栅格
    2. 矢量： 建筑， 基础设施， Landuse, 水体， 除去限制建筑区域的区域，Polygon to Raster(注意这个Cell size 用Project的栅格来做条件)
    3. 最后合并用Mosaic To New Raster
6. 创建Corridor和Route
    1. 把Station 的点搞成Raster,作为这个input of Cost Connectivity->用Cost Connectivity来创建Path和Route
        Corridor是Path,就是Output feature class of neighboring connections，就是路径的多种选项
        
        Route是Output feature class, 就是唯一的路径
    2. Route ： Add Fields-> Calculate Fields-> Dissolve-> Multipart To Singlepart
    3. Corridor: 
        1. 用corridor和suitabilityraster来创建Cost Distance
        2. 然后用Slice 来根据这个cost distance栅格上来创建100个相等面积的区域，主要是为了更专注一点。
        3. 再在这些切片上选择小于5距离的
        4. 最后把corridor转换成polygon,为了可以然后新的属性，这个属性就是把适宜的区域再通过之前生成path的时候生成的数字序号，转换为一个对适宜性的描述
        5. Dissolve只选择Code和Description，就是把这个两个值相同的这个polygon合并到一起
## IAcComputeLightrailStopsAndLightrailRoute

就是修正这个Route，同时生成一些车站

1. 修正Route: remove冗余， 伪节点； 减少节点，变得光滑一些
     integrate: 对于冗余
     Collapse Road Detail: 简化路线，包括删除小规模的道路
     Unsplit Line 和 Simplify Line ：拓扑错误
2. 第一步应该把这些折叠和错误选出来了，所以这个就是delete identical 然后dissolve
3. 拆分这个线段Split Line at Point (就是个multipart to singlepart 那种)，加入这个corridor的number和描述
4. 生成这个walkingdistance，就是最开始的在5分钟到10分钟的路程内可以到达车站们
5. 生成新的站点： generate points along lines用到之前的walkingdistance作为这个工具的distance 的选项。
6. 除去在特定位置的站点： select , erase
7. 之前是用integrate 加delete identical 除去了道路的冗余，这次再用一次除去站点的冗余
8. 加入站点的编号和描述

## IAdComputePopulationPercentageWithinWalkingZone

1. 计算这个neighbourhood 里面的人口，并且把这个neighbourhood和wa
