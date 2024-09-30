---
layout: post
title: Advanced Earth Observation｜Radiative Transfer Modelling
categories: [Advanced Earth Observation]
description: None
keywords: Radiative Transfer Modelling
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---

## Exercise 1
### Goal
哪些生物物理参数对光谱特征影响最大，在光谱的哪一部分。
PORSAIL = PROSPECT(leaf) + SAIL(canopy)
## Change 
- soil brightness factor(moisture>> brighter= lower)
    Increasing the soil brightness factor will increase the reflectance (soil looks brighter, probably because the moisture content is lower).
    增加土壤亮度系数会增加反射率(土壤看起来更亮，可能是因为含水量更低)。
Cab the leaf chlorophyll content >>> BRF
Cw the leaf water content >>> BRF
N internal structure parameter >>> BRF
- LAI ,check the changing in NIR /VIS
- LIDF leaf inclination angle distribution functions>>> canopy reflectance spectra
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
#### Sensitivities are more pronounced at ==high LAI== because there simply is more leaf mass 
present.
==答案版：== 
叶片叶绿素含量对可见光部分的影响可达750 nm左右。
叶片含水量(Cw)在1000nm以上的红外部分有影响。
叶片结构参数(N)对整个光谱都有影响，但其影响不如其他两个参数那么明显(至少对于所选的设置)。
The leaf chlorophyll content has an effect in the visible part up to about 750 nm.
The leaf water content (Cw) has influence in the infrared part beyond 1000 nm.
The leaf structure parameter (N) has an effect over the whole spectrum, but its 
influenced is less pronounced as that of the other two parameters (at least for the 
settings chosen).
## Part 2 (Canopy Level)
### 不同的波长上
- In the ==visible== part of the spectrum the highest reflectance is obtained at low LAI
     because most soil still is visible and the ==soil is brighter than the green leaves.==
- In the ==NIR== part of the spectrum ==lowest reflectance is obtained at low LAI== (except for the erectophile LIDF)
    because leaves reflect more than the soil and this effect is enlarged due to ==multiple reflectance== between the leaf layers (leaves are partly transparent for NIR radiation). For the very vertical leaves (erectophile LIDF) the NIR reflectance at low and high LAI is quite similar (there is a cross-over point at about 1000 nm).
- In the ==MIR== part the effect of absorption of water increases. As a result, ==the low LAI (less leaves, less water absorption) gives the highest reflectance== like in the visible part (although in the visible part it is the chlorophyll that is important).
### 不同的LIDF
- 水平A planophile LIDF means leaves are oriented more horizontally. 
     So, you observe relatively more leaf area from nadir and the above effects are very pronounced. 
     ==The reflectance in the NIR also is highest.==
- 垂直An erectophile LIDF means leaves are oriented more vertically, 
    and the influence of the soil is larger at the lower LAI values. Also more shadows will be visible in the canopy. 
    ==Overall the reflectance in the NIR is lower.==
- A spherical LIDF is in-between the planophile and erectophile LIDF.
**您能否通过比较LAI从低到中与从中到高的阶跃，得出LAI在不同光谱区域灵敏度的线性关系?**
For all three LIDFs the difference between LAI 0.5 and 2.5 is larger than the difference between LAI 2.5 and 4.5. 
This underlines the asymptotic nature of the LAI effect on reflectance. This is most pronounced in the visible and middle infrared part of the spectrum.
## Part 3( Soil background)
### LAI 的数值影响土壤对LAI的影响
-  At an LAI of 0.5 there is a clear effect of soil brightness/moisture, meaning that the soil influence still is significant. A lower brightness reduces the reflectance due to increased absorption. 
-  At an LAI of 4.0 this effect has nearly completely disappeared, meaning that the soil background has no effect anymore.
基础
-   LAI lower, the more visible soil , the more mix in the spectrum
-  the more moisture , the darker soil
#### C is defining the slope of the soil line
Using the simulated spectrum with LAI = 0.0 and soil brightness = 0.5, assuming that 0.5 is the average across all soil brightness values. The slope is the value of NIR (870 nm) divided by the value of Red (670 nm). 
### WDVI vs NIR
1. WDVI is meant to extract vegetation and ==reduce influence of the soil.==
2. 就是叶片层数越多的时候，土壤越不可见，所以WDVI的作用再减小。
3. The influence of soil brightness is noticeable in the NIR region because of slightly higher Std Dev for both LAIs.
4. WDVI values are lower for LAI = 0.5 compared to LAI = 4.0, because higher values of WDVI equal to denser vegetation。
5. The WDVI value increases with greater values for soil brightness, because the dry soil reflects higher the NIR spectrum.
## Part 4(BRDF双向反射分布函数)
![](/images/posts/ba3bb73a81727c3dfb799e66b6bdbcd.png)
上面的大图
On top we see a so-called polar plot, showing the BRF for all combinations of ==view 
zenith and azimuth angles== at the set solar zenith angle. Bottom left we see a BRF 
profile in the ==principal plane== (psi = 0º), and bottom right we see a BRF profile in the 
==cross-principal plane== (psi = 90º or -90º).
下面的两个小图
On the x-axis the viewing angle is plotted. The reflectance show a narrow peak in 
reflectance at -30º. With a solar zenith angle of 30º, this is the backscatter observation position (looking with the sun at our back). ==At this position we do not see any shadows, and the reflectance has a maximum.==也就是： With a solar zenith angle of 10 degrees a hot-spot at 10 degrees viewing angle in the backward direction is observed. 
### Wavelength的变化，引起的BRF的变化
- Towards the periphery边缘 of the circle, the value of BRF gets higher. 
- For the Green and NIR bands, the changes are relatively obvious, while for the red band, the changes are not significant. 
### hot-spot parameter (hspot) 的变小
Moving out of the principal plane, the hot-spot effect becomes less pronounced. In the cross-principal plane no hot-spot can be observed anymore and the BRF is mirrored around nadir viewing.
### Hot-spot parameter设成0和0.5
A hot-spot parameter of 0 means no hot-spot effect is included in the model and the 
peak has disappeared. However, the angular dependency (anisotropy) still is visible.

A hot-spot parameter of 0.5 shows a broader peak at the hot-spot position than a 
parameter of 0.01. Further away from the hot-spot differences are less pronounced.
### Hotspot = 0
1. Hotspot = 0 : the edges of the plane will be illuminated the most.
2. The position of the camera right underneath the sun will record no illumination (in the shadow)
3. whereas sideways from the camera the areas further away would be illuminated the most
#### The size of the hotspot depends on the leaf area that is illuminated.
Narrow leaf will result in a smaller hotspot, whereas larger leaf will illuminate a greater area.
### Solar Zenith Angle 
The larger the solar zenith angle, the further away the hotspot is from the sensor. 
The larger solar zenith angle, wider the hotspot range is in the viewing angle of the sensor as seen in the principal plane plot.
### VZA and Psi
 VZA stands for the angle between the reference surface and the sensor. 
 The more Hotspot values ,the broader VZA range. 
 Psi 通常指逆向散射函数（Backscattering Function）。逆向散射函数描述了在反射方向上相对于入射方向的辐射强度。
### Principal Plane and Cross Principal Plane
![](/images/posts/db573e3318d3cb05f61de5bc455ccb6.png)

1. On the principal plane, the illuminated area by the sun is located, with a peak in BRF for the hotspot which can be observed from the vertical zenith angle by the sensor. 
2. On the cross-principal plane the BRF on viewing plane is plotted, illumination on both sides of the sensor.

The value of VZA of the hotspot is always negative, which is clockwise, because the direction of the principal plane is from top to bottom, the hotspot only happens on the upside of the graph.
## Part 5 Model inversion
# PPT
辐射传输方程，土壤光谱，PROSPECT,SAIL,反射各向异性
## Radiative Transfer Equation
### two factors : loss and gain
extinction coefficient of a medium  scattering Probability /Radiance of direction
![](/images/posts/daf0bb5b8158f61b0b965c955d83e09.png)
## Scattering properties of soils 
is affected by 3 factors
#### 1. soil moisture content
- essentially proportional (成正比) across all wavelengths
- enhanced in water absorption bands
- moisture is most important
#### 2. soil type/texture
#### 3. soil surface roughness
## Soil spectral signature
MARMIT soil reflectance model>>亮度和湿度
![](/images/posts/97b39272ed78ca9d3ebdb93f6e1acdd.png)
## Leaves
### Scattering properties of leaves
折射系数（refractive index）
### Absorption properties of leaves
比较了chlorophy a+b , water and dry matter之后
Beer-Lambert law: there is an exponential extinction function指数消光函数, the deeper you go the more will be absorbed and that's an e power, an exponent by multiplying this absorption coefficient times the distance that is being traveled in some materials.

### ==PROSPECT model==
![](/images/posts/15b0a37f93060f9cd9d7406eb97d862.png)
#### Forward Mode(转换模式)
##### Input: 
- N：leaf structure parameter (optical shickness)
- Cab：chlorophyll a+b concentration (g.cm−2)
- Cw：equivalent water thickness (g.cm−2 or cm)
- Cdm：dry matter content (g.cm−2)
这四个参数解释了90%的变化
##### output: 
- reflectance 
- transmisstance

Sensitivity: 400 >>> 为什么是在lab里？
因为not outside( water vapor in the atmosphere blocks almost all radiation coming to the earth)
### SAIL (scattering properties of canopy)
Leaf reflectance and transmittance can be obtained as output from the PROSPECT model.
![](/images/posts/2ff4f48e659cf7478117d3a03c7c88c.png)
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
erectophile: 垂直 horizontal
planophile：水平 vertical
spherical：球形
## Observation Geometry
![](/images/posts/bcd1608030949f86c6769d6b18d1d78.png)
tts: solar zenith angle (天顶角)(with vertical/nadir)
tto: observer zenith angle （观察顶角）
psi: relative azimuth angle(方位角)
## Hotspot Parameter
1. **Hotspot 角度** 是指sun behind observer.在这个角度，观察者能够看到植被表面的最大亮度，因为光线直接照射在植被表面，阴影较少。Hotspot: illumination and viewing are from the same direction (theoretical case): no shadows visible.
2. 相反的就是sun opposite observer.树中心会有阴影，然后树冠变化有transmission of light
3. **Hotspot** 通常指图像中最亮的区域
4.  Measure for the ==size of leaves==: It is typically the ratio of leaf size to canopy height. 
     - Small leaves(shadows quickly become visible and rapid decrease in reflectance)
     - Large leaves(shadows slowly become visible and slow decrease in reflectance)
### Backscattering 和Forward scattering
左:后向散射(太阳在观察者后面);注意所有阴影被隐藏的明亮区域(热点)。
右:前向散射(太阳对面观测者);注意树木的阴影中心和通过树冠边缘的光透射。
## BRDF(Bidirectional Reflectance Distribution Function)
![](/images/posts/e3f3c19810db25086c1ce0ea9fbf2f8.png)
## Measurements-Sampling techniques抽样
### Sampling goal
High number of illumination and viewing angles
### Sampling methods(3)
instantaneous multi-angular（MISR）瞬时
multiple-day composities(MODIS) 多日合成
daily composites(Meteosat) 每日合成
### BRDF from drone
无人机可以旋转(悬停)来改变视野方位(view azimuth)
### Usefulness of BRDF用处
1. **correction** of surface reflectance: to given illumination/view geometry, increase accuracy of atmospheric correction
2. estimate **structural properties**  : determine canopy heterogeneity, improved parameter estimation accuracies 
3. **Albedo**  calculation: interpolate and extrapolate to angles not observed,对没有观察到的角度进行插值
Most other surface reflectance products are not corrected for illumination and view angle effects. Be especially careful with **multi-temporal analysis (changing sun angle)** and when working in mountainous areas!
## Goal Radiative Transfer Models辐射传输模型的目的
### Perform sensitivity analysis
N, Cab
### Testing statistical relationships
indices
### Model inversion
模型反演，就是原本是生物估计物理变量，但是反过来




