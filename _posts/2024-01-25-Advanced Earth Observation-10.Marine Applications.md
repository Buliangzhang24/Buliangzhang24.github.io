---
layout: post
title: Advanced Earth Observation｜10.Marine Applications
categories: [Advanced Earth Observation]
description: None
keywords: Marine Applications
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
## Harmful Algal Blooms有害藻华
### What is algal blooms
Algal blooms are the rapid growth of algae藻类 or cyanobacteria蓝藻
光合作用photosynthesis，真核生物eukaryotic organisms， 海洋微型有机物marine 
microorganisms 
### Why it is harmful?
recreational uses, toxins, ecosystem health
## What causes Algal Blooms
- Warm temperature
- Nitrogen and Phosphorus氮和磷
- No wind
## How can RS help？
find algal blooms >> detectable 
Most sensors have limitations>>Resolution trade-offs: spatial, spectral, temporal
#### True color is useful but not best
#### Spectral library of cyanobacterial蓝藻 in a laboratory setting
- Chlorophyll-a & Phycocyanin (PC)藻蓝蛋白 unique for Cyano
- 内共生理论endosymbiotic theory：植物和藻类的叶绿体都是起源于一种蓝藻的内共生体
### What causes Red-edge in terrestrial vegetation?
1. absorption of blue (400 nm) and red (700nm) due to CHL-a/b>> palisade: main site of photosynthetic absorption of red and blue light
2. reflectance of near-infrared (>750nm) due to leaf scattering >> spongy: cell geometries scatter and reflect near infrared light
### Why is there only little red-edge in cyanobacteria?
没有2，只有1，就是上一步的1,2
### Compared to vegetation
==there is no NIR reflectance==这句话意思就是没有2
NDCI： Normalized difference chlorophy II index
### Spectral Shape(SS) Indices
**Floating Algae Index(FAI)**
**Fluorescence Line Height (FLH)荧光线高度：**
1. FLH is a measure of the absolute amount of energy released by phytoplankton in the form of fluorescence. 
2. function of the radiation absorbed by phytoplankton and the probability for a given absorbed photon to be re-emitted as fluorescence.
indicators for CHL-a and Phycocyanin(PC)
which bands needed will be based on sensers and types
Cyano Index(CI)
## Marine Litter Detection
### Scales of marine plastics
Macroplastics (> 2.5 cm) 
Mesoplastics (5mm – 2.5cm) 
Microplastics (< 5mm)
Marine Plastics are part of Marine Litter
- Marine Litter：垃圾 consists of solid materials that have been made or used by people and deliberately discarded or unintentionally lost in in marine and coastal environments, such as wood, metals, glass, rubber, textiles, paper and plastics (UNEP, 2005).
- Marine Debris：废弃物 as any aggregation of floating materials on the sea surface that may or may not contain marine litter of anthropogenic人为 origins. 
#### The impact of Marine Plastics on the Ecosystem
Marine micro-plastics can have a toxic effect on fish and other aquatic life:
reducing food intake, delaying growth, causing oxidative damage and abnormal behavior.
### Scales of Monitoring of Marine Litter with Remote Sensing
- In-situ studies: counting and measuring individual objects macro and meso-plastics
- UAV-based surveys: counting of individual macro plastic objects 
- Satellite Earth Observation: detection of agglomerations of generic “marine debris” that can contain marine litter.
##### River Plastic Monitoring
##### Citizen Science-based beach surveys
##### UAV Monitoring of Debris
### ==Remote Sensing Scales==各种尺度的优缺点
#### UAV-based
Pro: High spatial resolution(detection of individual objects)
Contra: expensive to scale, usually single acquisition, usually only RGB
#### Satellite-based 
Pro: daily or weekly monitoring, multi-spectral signals
Contra: low spatial resolution, complex mixed pixels (especially on beaches) 
#### Monitoring of Agglomerations聚集 through surface currents
为什么：
1. Most objects are much smaller than the pixel size of available satellites
2. Debris agglomerate in ==windrows== and ocean fronts废弃物聚集在==风堆==和海洋前缘
#### Remote Sensing Limitation: 
Trade-off between spatial and spectral resolution
#### Floating Debris Index
Floating Debris Index (FDI) as a Spectral Shape (SS) index designed for various heterogeneous marine debris.
