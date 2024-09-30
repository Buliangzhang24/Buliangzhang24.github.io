---
layout: post
title: Advanced Earth Observation｜Exam Example
categories: [Advanced Earth Observation]
description: None
keywords: Exam Example
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
## Physical foundations
**(a) Draw a (triangular) prism and then draw the path of a beam of light that enters at an incidence angle of 30 degrees, travels through the prism and leaves it at the opposite wall.**
![[6b79016b130e7e212d52e31be2b2e50.png]]
**(b) Does red and blue light follow the same path? What is the reason for your 
answer?**

The path of light, including red and blue light, can be influenced by the phenomenon of dispersion色散. Dispersion occurs when different colors of light travel at different speeds through a medium, causing them to bend by different amounts when passing through a prism介质 or another refracting surface.

red light generally bends less than blue light when passing through the prism. This is because the refractive index折射率 of a material is slightly higher for blue light than for red light.
## RT modelling
**a) Why is the canopy reflectance in the NIR lower for an erectophile垂直 leaf angle distribution than for a planophile水平 leaf angle distribution when looking from nadir?**
Chlorophy II absorb light in vision bands and the NIR is more about reflection.
erectophile means that a significant portion of the leaves is oriented more vertically
In this case, when looking from nadir (directly overhead),  light penetrating the canopy more, the reflection between light and leaf is less.
planophile means that leaves are oriented more horizontally  
When looking from nadir, more leaves are visible, and there is more interaction between the incident light and the leaves, leading to higher NIR reflectance.

**b) Explain why vegetation mainly is a backward scatterer, whereas water and 
snow are forward scatterers.**
The complex internal structure of vegetation and the roughness of vegetation contributes to multiple scattering events, with the net result being a greater proportion of scattered light redirected backward.
Water and snow, are typically smoother and have simpler structures.
They tend to scatter light more evenly in all directions, including a significant proportion in the forward direction.
![[8436cdff01a5873f3ad42f2965ed7d1.png]]
## Time series analysis
**One of the methods to study time series of satellite data is BFAST.
Here you see three different NDVI time series of a pine forests in Australia 
based on MODIS. Which processes (or changes) are visible in each of these time series of different forest areas?**
![[b2c0b65710373122b731a77a40f95c7.png]]
The first image shows two breaks, the first in early 2002 and the second in early 2006. Both changes have increased the NDVI value, indicating that plants are becoming healthier and more prosperous.
The second graph shows a break at the end of 2004 and beginning of 2005, indicating a decrease in pine forest coverage, possibly due to logging. In early 2006, the NDVI value further decreased, but then it increased. By the end of 2008, the vegetation had almost recovered on its own
The third graph shows a certain periodic change, with three breaks that decreased in 2002 and then increased, causing vegetation to recover slightly. In 2006, it also decreased and vegetation to recover slightly. It may be periodic logging.
## Lidar
**a) What is considered the main advantage of using an airborne lidar in comparison to a traditional multispectral scanner when observing a forest?**

1. Highly Detailed 3D Forest Structure:
    - **LiDAR Advantage:** Airborne LiDAR systems emit laser pulses and measure the time it takes for the laser beams to return after hitting objects. This allows LiDAR to generate highly detailed and accurate three-dimensional (3D) point clouds of the forest canopy and terrain. 
    - Multispectral Scanner providing spectral data but lacking the ability to directly measure the vertical structure of the forest.
2. Detailed Canopy Height and Structure:
    - **LiDAR Advantage:** Airborne LiDAR provides precise information about canopy height, structure, and vertical distribution of vegetation. This is crucial for understanding forest biomass, species composition, and overall health.
    - Multispectral Scanner might not offer detailed insights into the vertical structure.
3. Enhanced Forest Inventory and Biomass Estimation:
    - **LiDAR Advantage:** LiDAR data can be used to derive accurate forest inventory metrics, such as tree heights, crown diameters, and biomass estimation. This information is valuable for forest management and carbon sequestration studies.
4. Penetration of Canopy Cover:
        weather, cloud, day and night
    - **LiDAR Advantage:** LiDAR can penetrate through forest canopies, capturing information on the underlying terrain and vegetation structure even in dense forests.
    - **Multispectral Scanner Limitation:** Multispectral data may be limited by the presence of dense vegetation, making it challenging to obtain information about the ground or the lower canopy layers.
5. Improved Accuracy in Terrain Modeling:
    - **LiDAR Advantage:** Airborne LiDAR can provide accurate digital terrain models (DTMs) by capturing ground elevations with high precision.
    - **Multispectral Scanner Limitation:** Traditional multispectral scanners may not provide the same level of accuracy in terrain modeling.

**b) A ground-based lidar can be used for calibration and validation purposes in 
forest monitoring. Can you explain this (e.g, which parameters are being 
measured)?**
为什么Ground-based LiDAR is employed for calibration and validation in forest monitoring for several reasons:
1. **High Accuracy and Precision:** offering a comprehensive representation of the forest structure.
2. **Reference Data for Remote Sensing:** This helps ensure the accuracy of remote sensing measurements.
3. **Detailed Forest Structural Information:** Ground-based LiDAR captures fine-scale details of the forest structure, including tree height, crown dimensions, and terrain characteristics. 
4. **Calibration of Remote Sensing Instruments:**
5. **Validation of Remote Sensing Products:** 
6. **Biomass and Carbon Stock Assessment:**

The parameters commonly measured include:
1. **Diameter at Breast Height (DBH):** 
    - Ground-based LiDAR is employed to accurately measure the diameter of tree trunks at breast height, providing a key parameter for tree size assessment.
2. **Total Height:**
    
    - LiDAR is used to measure the total height of trees, offering insights into the vertical structure of the forest.
3. **Crown Diameter:**
    
    - Ground-based LiDAR helps measure the crown diameter of trees, providing information about the lateral extent of tree canopies.
4. **Aboveground Biomass:**
    
    - By combining ground-based LiDAR measurements with other data, estimates of aboveground biomass can be derived, contributing to biomass assessment and carbon stock calculations.
#### In the forests
- Traditional fieldwork
     Pre-harvest : Diameter at breast height, total height
     Post-harvest: TLS-derived , crown diameter, aboveground biomass
- TLS scanning 
- Tree harvesting
- Reference measurements
## Photogrammetry
**What are the two major problems you will encounter when you want to 
create a 3D model of a forest canopy gap (which for example occurs when 
a tree has been logged) with the use of photogrammetry from a UAV, 
where the camera is pointing straight down? Feel free to make a sketch to 
illustrate your answer**  就是即树木被砍伐了，又相机垂直向下

1. 针对树木砍伐： **Lack of Image Features:缺乏图像特征：**

- **Issue:** In a forest canopy gap, especially after a tree has been logged, there might be a limited number of distinct features or reference points visible in the images captured from a UAV with a downward-facing camera.问题：在森林树冠间隙中，尤其是在树木被砍伐后，使用朝下摄像头的无人机捕获的图像中可能只能看到有限数量的明显特征或参考点。
- **Consequence:** Photogrammetry relies on identifying common features across multiple images to triangulate and create a 3D model. If there are not enough distinguishable features (such as unique points on the ground or remaining tree structures), the software may struggle to accurately match points and generate a detailed 3D model.结果：摄影测量依赖于识别多个图像的共同特征来进行三角测量并创建 3D 模型。如果没有足够的可区分特征（例如地面上的独特点或剩余的树结构），软件可能难以准确匹配点并生成详细的 3D 模型。
2. **Difficulty in Depth Perception:深度感知困难：**
- **Issue:** When the camera is pointing straight down, capturing images in a nadir view, it can be challenging to perceive depth accurately. In a forest gap, the lack of depth cues may make it difficult for the photogrammetry software to determine the relative distances between objects, leading to inaccuracies in the 3D reconstruction.问题：当相机笔直向下并在最低视图中捕获图像时，准确感知深度可能具有挑战性。在森林间隙中，缺乏深度线索可能会使摄影测量软件难以确定物体之间的相对距离，从而导致 3D 重建不准确。
- **Consequence:** Without reliable depth information, the resulting 3D model may lack precision, and the spatial relationships between objects, such as the ground and remaining vegetation, may not be accurately represented.结果：如果没有可靠的深度信息，生成的 3D 模型可能缺乏精度，并且可能无法准确表示物体（例如地面和剩余植被）之间的空间关系。





## Requirements可能遇见的问题
- Enough overlap (min 60%)
- Enough photo’s (min 6)重叠
- Distinctive features (many!)特征
- Stable objects during acquisition稳定
- Multiple camera positions多个相机位置
## Source of Error & Solution可能遇见的问题
- Lens Distortions (or properties)>>Calibrate camera
- Positions Estimation (XYZ) >> RTK GPS attached to camera and Use Ground control points and scale bars (for UAV measured with RTK)
- Camera orientation (roll, pitch, yaw) IMU? But this is technically challenging...
- Overlap Proper flight/image acquisition planning>>Stable image features Some objects just don’t work...(e.g. water, moving objects)
- Reconstructing very complex structures>> Some objects just don’t work...(don’t expect miracles, they don’t happen in photogrammetry)

