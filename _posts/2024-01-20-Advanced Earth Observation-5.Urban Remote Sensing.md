## SDG(Sustainable Development Goals) 11
5 main areas: 
1. Social development
2. Economic development
3. Environmental sustainability
4. Peaceful, just and inclusive societies
5. Partnership
Make cities and human settlements inclusive, safe, resilient and sustainable
urban : population/building density
## Urban areas defined
### Degree of urbanization
- based on geographical contiguity邻里临近度 and population density人口密度把地方行政单位划分为cities, towns and suburbs and rural areas
- 基于 1km^2 的population grid cells>> 其用于分类行政>> urban center, urban cluster, rural grid cells
## Urban Themes
Urban land change, Urban Green Space, Urban Heat Island, Urban Nighttime Lights
### Urban Land Change
- How :Growing, shrinking, intensifying, restructuring
#### Global products (4)
- Global Urban Footprint
- Global Rural-Urban Mapping Project
- GlobalLand30
- Global Human Settlements Layer

发展： Increasing spatial resolution. Increasing accuracy.
但是：Useful at global and regional level, less useful for measuring local level land use change.
in general >> in local
#### Qualitative VS categorical change
- Qualitative change: changes in density or intensity.
- Categorical change: changes from one land cover or land use category to another
#### Directional urban land cover change
#### Studies Focus
China, USA; urban land change, one urban class
### Methods of Urban Change
- **Post classification change detection**: Detect LCLUC by comparing independently produced classification of images from different intervals.
- **Layer arithmetic**:  Image radiance or derivative features are numerically compared to identify change (e.g. image differing, image regression, image ratioing, etc.).
- **Direct classification**: Multitemporal data stack is classified, directly identifying both statistic and dynamic land covers. 
- **Transformation**: Principal component analysis, minimum noise fraction, tasseled cap, change vector analysis.
-  **Hybrid change detection / advanced methods**: Multiple comparison methods. E.g., spectral mixture analysis, CCDC, data fusion, deep learning neural networks, etc.
Classification>> careful error
### Urban Green Space
Public and private green spaces. 
#### Vegetation fragmentation is a global threat to urban green spaces:
-  Biodiversity conservation
-  Environmental quality
-  Urban micro-climates
#### Importance
-  Make cities more livable and sustainable
-  Green vegetation provides a cooling effect through evapotranspiration and shading>>>Lowering air and surface temperatures
- Urban vegetation plays an essential part in local carbon cycle
- Urban vegetation provides wildlife resources: Birds, mammals, insects
#### Studies Focus
### Urban Heat Islands
- In many (but not all!) cities, urban areas experience higher temperatures in outlying areas. Difference in temperature is what constitutes an urban heat island (UHI).
- Temperature difference ==because==: Radiative and thermal properties of impervious surfaces (i.e. buildings and roads absorb heat).不透水面和自然面
- Can ==form== in day or night, small or large cities, any season.
- ==Types== of urban heat islands:● Surface Urban Heat Islands● Atmospheric (i.e. air) Urban Heat Islands
- Surface temperatures:● Vary more than ==air temperatures==

==What do we measure with remotely sensed data?  Surface Urban Heat Islands, or Atmospheric Urban Heat Islands?==
Surface Urban Heat Islands.不透水面和自然面
This is because the UHI effect is primarily caused by the built environment, such as buildings, roads, and other artificial surface features during the urbanization process, which influences the temperature in the surrounding areas.
![[41cbf04f2a8eb39397471cff1bd6173.png]]


### Surface Urban Heat Islands
#### Radiative temperature difference between impervious and natural surfaces.（不透水面和自然面）
- Most intense during the day when the sun is shining.
- Magnitude varies by seasons, largest in the summer.
- Primarily measured by remote sensing in the thermal infrared (TIR) of the electromagnetic spectrum.
#### What causes urban heat islands?
- Albedo & Infrastructure
- Reduced vegetation in urban areas
- Anthropogenic heat
- Urban geometry
- Weather
- Geography
#### Why are urban heat islands a problem?
- Increased risk of heat-related mortality and morbidity (more than 4% of deaths during summer months in 93 European cities are attributed to urban heat islands)..
-  Increased energy consumption. 
- Elevated emissions of air pollutants and greenhouse gases.
-  Water quality.

ecostress LST
difficult to detect the land surface temperature?
most of evladate the only the water
#### Remote Sensing of Land Surface Temperatures
-  various spatial and temporal scales
-  top of the atmosphere radiation emitted by the Earth’s surface and atmosphere>>>受到三个因素影响：
     ● Surface emissivity (built-up areas, vegetation, bare soil)
     ● Atmospheric attenuation (water vapor and aerosols)
     ● Angle at which a satellite sensor receives the radiation.
==Can we detect any temperatures in blue, green and red? Is there no temperature emission in other wavelengths?==
In the visible range, remote sensing is more concerned with capturing the reflective properties of surfaces rather than their temperature.

Temperature, as measured by remote sensing instruments, is typically detected in the thermal infrared portion of the electromagnetic spectrum.
The atmosphere has what is known as an "atmospheric window" in the thermal infrared region, where certain wavelengths are not strongly absorbed by atmospheric gases. This allows thermal radiation (heat) emitted by the Earth's surface to pass through the atmosphere and be detected by sensors on satellites.

Atmosphere window >>absorbed by atmosphere
#### Satellites and Sensors for Estimating LST
Landsat MODIS and Combination
#### Urban Heat Islands, where are they studied?
Asia, Europe
### Urban Nighttime Lights
- NTL (Nighttime Light) data can help with understanding urbanization.
- Not just spatial extent, but also human activity.
- Strongly correlated to socio-economic variables
#### Stable Sources of Nighttime Lights: 
cities and human, gas flares, and industrial sites
#### Moon Reflectance
- 过滤了：VIIRS Day Night Band is filtered to exclude impact by stray light, lunar illumination, and cloud-cover.
- 没过滤：Data has NOT been filtered to screen out lights from aurora, fires, boats, and other temporal lights. 
#### 产品
##### VIIRS DNB(day night bands)近乎恒定的产品>near-constant contrast products
- DNB operates day and night --> expected radiation measurements based on the sun and the moon.
- DNB also detects radiation from other sources: lightning, auroras, city lights, fires.
##### Nighttime data need to be ==Corrected==
moon light, aerosols and surface albedo.
##### Black Marble Product
- Nightlight product 
- Black Marble HD is generated through the synergistic use of daily NASA Black marble standard product with data from Landsat 8 and Sentinel 2.
- Only available on demand
##### VIIRS stray light corrected nighttime day/night band on Earth Engine
- Monthly
- Filtered for stray light, lightning, lunar illumination, and cloud-cover
- Auroras, fires, boats and other temporal lights are not filtered out. 
#### City impact on thunderstorm evolution
就是说城市扩张那个图长得像雷电一样 results>>> objective
## Gaps in Knowledge
### Urban Change
- More and different cities:● Attention to the Global South● Smaller and medium – sized cities: 32% of world total population lives in settlements with less than 1million people. 
- Improved reproducibility and replicability – open data and methods where appropriate. 
### Urban vegetation fragmentation
- Location not uniform: cities in Latin America and Africa are understudied.没研究清楚
-  Impact of urban sprawl on vegetation fragmentation **not** well understood. 没懂
- SAR and LiDAR data hold great potential and can help understand **3D** landscape configurations. 3D模型
### Nightlights
- Scale effects between the grain size of NTL data and socio-economic data (common problem in RS but emphasized with nightlight data).粒度规模
- Better understand on what is recorded. Disaggregating of sources of detected NTL still difficult. 分解来源
- Better integration of NTL with other geospatial data. 整合
- More research on the global south (same for all urban studies!).南多北少
