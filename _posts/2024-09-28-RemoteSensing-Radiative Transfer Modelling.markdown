---
layout: post
title: RemoteSensing｜Radiative Transfer Modelling
categories: [RemoteSensing]
description: None
keywords: Radiative Transfer Modelling
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---

# 1.Radiative Transfer Modelling
## Exercise 1

### Goal
which biophysical parameters have largest influence on spectral signatures and in which part of the spectrum
PORSAIL = PROSPECT(leaf) + SAIL(canopy)
## Change 
soil brightness factor(moisture>> brighter= lower)
Cab the leaf chlorophyll content >>> BRF
Cw the leaf water content >>> BRF
N internal structure parameter >>> BRF
LAI ,check the changing in NIR /VIS
LIDF leaf inclination angle distribution functions>>> canopy reflectance spectra

## Part 1(Leaf Parameters)

#### Cab: 
1. BRF is higher for lower chlorophyll concentrations. 
The more chlorophyll, the more light is used for photosynthesis, resulting in less reflection in Blue and Red. Therefore, lower BRF values can be observed for higher chlorophyll concentrations. 
2.  For Green (550 nm), there is a maximum difference between the Cab quantities.
#### Cw:
1. the near infra-red and middle infra-red part of the spectrum (800 nm to 2500 
nm) is sensitive to changes to this parameter. 
2. The larger the water content, the more light is absorbed, resulting in lower BFR values. 
#### N:
1. 如果N大，随着波长的变化更剧烈，但不能说 the more/less leaf layers, the higher /lower BRF value
## Part 2 (Canopy Level)
1. 变化最大的是水平For planophile and spectral LIDFs the linearity is noticeable in increase in reflectance in the near infrared with greater vegetation density. In the middle infrared the linearity is noticeable in the absorption of light by denser vegetation. 
2. planophile LIDFs has higher BRF values than spherical and erectophile（最小） LIDFs, as more light is reflected directly from the horizontal surface of the leaf.
## Part 3( Soil background)

1. The linearity is noticeable in the increasing canopy reflectance with greater soil brightness values. 
2.  LAI lower, the more visible soil , the more mix in the spectrum
3. the more moisture , the darker soil
#### C is defining the slope of the soil line
Using the simulated spectrum with LAI = 0.0 and soil brightness = 0.5, assuming that 0.5 is the average across all soil brightness values. The slope is the value of NIR (870 nm) divided by the value of Red (670 nm). 
### WDVI vs NIR
1. WDVI is meant to extract vegetation and reduce influence of the soil.
2. 就是叶片层数越多的时候，土壤越不可见，所以WDVI的作用再减小。
3. The influence of soil brightness is noticeable in the NIR region because of slightly higher Std Dev for both LAIs.
4. WDVI values are lower for LAI = 0.5 compared to LAI = 4.0, because higher values of WDVI equal to denser vegetation。
5. The WDVI value increases with greater values for soil brightness, because the dry soil reflects higher the NIR spectrum.
## Part 4(BRDF双向反射分布函数)

### Wavelength
Towards the periphery of the circle, the value of BRF gets higher. For the Green and NIR bands, the changes are relatively obvious, while for the red band, the changes are not significant.
### VZA and Psi
 VZA stands for the angle between the reference surface and the sensor. 
 Psi 通常指逆向散射函数（Backscattering Function）。逆向散射函数描述了在反射方向上相对于入射方向的辐射强度。
### Principal Plane and Cross Principal Plane

![[db573e3318d3cb05f61de5bc455ccb6.png]]
1. On the principal plane, the illuminated area by the sun is located, with a peak in BRF for the hotspot which can be observed from the vertical zenith angle by the sensor. 
2. On the cross-principal plane the BRF on viewing plane is plotted, illumination on both sides of the sensor.

The value of VZA of the hotspot is always negative, which is clockwise, because the direction of the principal plane is from top to bottom, the hotspot only happens on the upside of the graph.
### Solar Zenith Angle 
The larger the solar zenith angle, the further away the hotspot is from the sensor. 
### Hotspot Parameter
#### Hotspot = 0
1. Hotspot = 0 : the edges of the plane will be illuminated the most.
2. The position of the camera right underneath the sun will record no illumination (in the shadow)
3. whereas sideways from the camera the areas further away would be illuminated the most
#### The size of the hotspot depends on the leaf area that is illuminated. 
Narrow leaf will result in a smaller hotspot, whereas larger leaf will illuminate a greater area.
####  more Hotspot values ,broader VZA range. 
#### larger solar zenith angle, wider the hotspot range is in the viewing angle of the sensor as seen in the principal plane plot. 



## Radiative Transfer Equation
### two factors : loss and gain
extinction coefficient of a medium
scattering 
Probability /Radiance of direction
## Scattering properties of soils 
### is affected by three factors
#### soil moisture content
essentially proportional (成正比) across all wavelengths
enhanced in water absorption bands
#### soil type/texture
#### soil surface roughness

moisture is most important
## Soil spectral signature
MARMIT soil reflectance model

## Leaves
### Scattering properties of leaves
折射系数（refractive index）
### Absorption properties of leaves
chlorophy a+b , water and dry matter
Beer-Lambert law: there is an exponential extinction 
function, the deeper you go the more will be absorbed and that's an e power, an 
exponent by multiplying this absorption coefficient times the distance that is 
being traveled in some materials.
### ==PROSPECT model==

![[15b0a37f93060f9cd9d7406eb97d862.png]]


#### Forward Mode(转换)
input: N,Cab,Cw,Cdm
这四个参数解释了90%的变化
output: reflectance and transmisstance

Sensitivity: 400 >>> lab, not outside( water vapor in the atmosphere blocks almost all radiation coming to the earth)
### SAIL (scattering properties of canopy)
Leaf reflectance and transmittance can be obtained as output from the PROSPECT model.
##### Case considered(3个因素): 有点像假设的前提
● horizontally infinite but vertically finite plane parallel medium (air) embedded with infinitesimal oriented scattering objects at low density
● canopy lies over soil surface (lower boundary)
● assume horizontal homogeneity
##### Building blocks
● Canopy structure
● Leaf scattering
● Soil scattering
### Canopy structure
● LAI(Leaf Area Index)
● LAD(Leaf Angle Distribution)
● LIDF( 叶片角度的概率密度函数probability density function of leaf angles)
erectophile: 垂直
planophile：水平
spherical：球形

## Observation Geometry
tts: solar zenith angle (天顶角)
tto: observer zenith angle （观察顶角）
psi: relative azimuth angle(方位角)

## Hotspot Parameter
1. **Hotspot 角度** 是指sun behind observer.在这个角度，观察者能够看到植被表面的最大亮度，因为光线直接照射在植被表面，阴影较少。Hotspot: illumination and viewing are from the same direction (theoretical case): no shadows visible.
2. 相反的就是sun opposite observer.树中心会有阴影，然后树冠变化有transmission of light
3. **Hotspot** 通常指图像中最亮的区域
4.  Measure for the size of leaves: It is typically the ratio of leaf size to canopy height. Small leaves(shadows quickly become visible and rapid decrease in reflectance)and Large leaves(shadows slowly become visible and slow decrease in reflectance)
## BRDF(Bidirectional Reflectance Distribution Function)
![[e3f3c19810db25086c1ce0ea9fbf2f8.png]]
## Sampling techniques
### Sampling goal
High number of illumination and viewing angles
### Sampling methods(3)
instantaneous multi-angular（MISR）瞬时
multiple-day composities(MODIS) 多日合成
daily composites(Meteosat) 每日合成
### BRDF from drone
无人机可以旋转(悬停)来改变视野方位(view azimuth)
### Usefulness of BRDF
1. **correction** of surface reflectance: to given illumination/view geometry, increase accuracy of atmospheric correction
2. estimate **structural properties**  : determine canopy heterogeneity, improved parameter estimation accuracies 
3. **Albedo**  calculation: interpolate and extrapolate to angles not observed,对没有观察到的角度进行插值
Most other surface reflectance products are not corrected for illumination and view angle effects. Be especially careful with multi-temporal analysis (changing sun angle) and when working in mountainous areas!
## Goal Radiative Transfer Models(3)
### Perform sensitivity analysis
N, Cab
### Testing statistical relationships
indices
### Model inversion
模型反演，就是原本是生物估计物理变量，但是反过来




