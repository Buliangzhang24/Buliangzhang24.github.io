---
layout: post
title: Evaluating the effectiveness of different vegetation indices for LAI estimation
categories: [LAI]
description: None
keywords: LAI, vegetation indices
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
topmost: false
---

# INTRODUCTION {#INTRODUCTION}

LAI is defined as a one-sided leaf area per unit area of soil
background. LAI is a critical variable of vegetation at the canopy
level, and an essential indicator for crop growth status monitoring
[@fu2013]. However, the traditional field measurement of LAI could be
time-consuming and uncertain, which cannot satisfy the requirements of
quickly monitoring and analyzing on a large scale. Traditional remote
sensing methods involve extracting LAI from spectral curves by analyzing
changes or absorption in sensitive bands. This process often combines
empirical models, creating relationships that rely on specific site,
time, and sample characteristics [@liang2015].

The utilization of remote sensing data in estimating LAI has been
explored in the past few years [@fang2019].Several methodologies, rooted
in the PROSAIL radiative transfer model, are extensively employed for
estimating LAI. Iterative optimization, lookup table, and hybrid
inversion are noteworthy approaches among them[@liang2015]. However,
hybrid inversion is the most efficient and easy method due to the
computational complexity of iterative methods and the uncertainty of
lookup tables. This method determines the relationship between spectral
features and canopy features, the relationship between vegetation
indices and LAI in this paper, by the regression method [@liang2015]. In
addition, using the full spectrum estimation may lead to computational
complexity and susceptibility to atmospheric interference factors.
Therefore, this study used vegetation indices to simplify calculations
and improve robustness to atmospheric impacts.

Furthermore, with a dedicated focus on the research question, this paper
endeavors to meticulously investigate the correlation between vegetation
indices and LAI. The study utilizes Bidirectional Reflectance Factor
(BRF) and employs hyperspectral sensor datasets to enhance the
assessment of vegetation variables through the strategic application of
vegetation indices. This method, poised to offer a comprehensive
understanding of the nuanced relationship between these variables, forms
the crux of our research.

# MATERIALS AND METHODS {#sec:MATERIALS&METHODS}

This paper seeks to leverage the simulated spectral dataset produced by
the PROSAIL model for the generation of diverse simulated vegetation
indices. The primary objective is to develop model-fitting equations
that correlate various vegetation indices with LAI values. Subsequently,
this study used RMSE and $R^{2}$ to evaluate the goodness of fit of
regression models.

## PROSAIL {#sec:PROSAIL}

The estimation of this paper is based on the PROSAIL radiative transfer
model to analyze crops' structural and biochemical properties.The
PROSAIL model (leaf-canopy model) is the combination of the PROSPECT
model (leaf model) and the SAIL model (canopy model). PROSPECT simulates
leaf properties by building the connection between Chlorophyll II
content, structural parameters, water content, and reflectance and
transmittance spectra. The SAIL model sets several input parameters,
encompassing leaf-related factors, such as LAI, Leaf Inclination Angle
Distribution Function, Leaf Reflectance, and Transmittance.
Additionally, it considers variables, such as solar Zenith Angle, Zenith
View Angle, hot spot size parameter, sun-view azimuth difference, and
soil reflection. These parameters collectively facilitate the simulation
of canopy reflectance [@allen1968].

This paper exclusively delves into the precision of vegetation indices
concerning their accuracy in LAI estimation. To maintain consistency in
our analyses, other parameters for the PROSAIL model were uniformly set
during our investigation. For leaf-related parameters, we adopted
reasonable default settings as follows: Chlorophyll content = 40,
structure parameter N = 1.5, Equivalent water thickness = 0.01,
carotenoid content = 8, dry matter content = 0.009, brown pigment
content = 0. Concerning atmospheric parameters, the values were chosen
as follows: hotspot parameter = 0.01, solar zenith angle = 30, observer
zenith angle = 10, and relative azimuth angle = 0. To mitigate the
influence of soil background on spectral data, soil brightness was set
to 0.5. Additionally, LIDF (the Leaf Inclination Distribution Function)
was configured as 'spherical' to enhance the accuracy of our analysis.

## Selected Vegetation Indices {#sec:Selected Vegetation Indices}

To explore which vegetation index is most suitable for estimating LAI,
many different types of vegetation indices need to be used, including
simple ratio of calculation, normalized difference ratio, triangular
vegetation index, modified versions for these three ratios, and
derivative spectral index [@liang2015]. The required wavelengths are all
from the visible to near-infrared part of spectra. This paper
selectively selected a representative from each type of vegetation index
and added TCARI and OSAVI due to their excellent performance in previous
papers [@liang2015].

The following six vegetation indices have been selected: SR (Simple
Ratio), NDVI (Normalized Difference Vegetation Index), TVI (Triangular
Vegetation Index), MTVI1 (Modified Triangular Vegetation Index), TCARI
(Transformed Chlorophyll Absorption in Reflectance Index), and OSAVI
(Optimized Soil-adjusted Vegetation Index). Table 1 provides the
specific formulations and references for their sources. In these
formulations, the subscript of R represents the wavelength (in nm) of
hyperspectral data. However, this article will use BRF instead of
reflectance to calculate.

This study employs the simulated dataset to depict the variation curves
of six distinct vegetation indices across LAI values spanning from 1 to
10. The values of various vegetation indices are computed using the
formulations outlined in Table 1, with the vegetation index designated
as the dependent variable (y) and the LAI value as the independent
variable (x). Employing optimal curve-fitting techniques, this article
endeavors to establish linear regression, exponential regression,
logarithmic regression, and power regression models [@liang2015],
adjusting the regression orders to identify the most fitting formulas
for diverse vegetation indices, as summarized in Figure 1.

## $R^{2}$ and NRMSE

To evaluate the accuracy of the fitted curves in simulating trend
changes, this paper computes $R^{2}$ and NRMSE to assess the performance
of each fitted model. The $R^{2}$ value, ranging from 0 to 1, signifies
the model's fit quality, with closer proximity to 1 indicating better
fitting. Conversely , NRMSE, a non-negative value, increases with a
poorer fit.

$R^{2}$ and Root Mean Square Error (RMSE) are widely recognized metrics
for evaluating the precision of predictive models, particularly in the
field of regression analysis. Furthermore, this paper adopts NRMSE
instead of RMSE. NRMSE, as the standardized counterpart, offers a
normalized perspective by accounting for the inherent scale of the data.
Consequently, NRMSE emerges as a pivotal tool for a more nuanced and
comprehensive evaluation of model performance.

# RESULTS {#sec:RESULTS}

Figure 1 illustrates the variations in six different vegetation indices
in response to the increase in LAI. The equations of the best-fitting
curves can be observed in the graph. Meanwhile, with the increase of
LAI, the value of vegetation index reaches a saturation state when LAI =
6. Meanwhile, while LAI=5, there is a decline in the vegetation index
value for each image, contrary to the expected pattern.

$R^{2}$ and RMSE serve as indicators of the accuracy of fit for the
fitted curves, providing a means to assess the effectiveness of
different vegetation indices in estimating LAI. Based on the findings
from Figure 2 and Figure 3, certain conclusions can be drawn. SR and
NDVI perform average in both evaluation metrics. The vegetation indices
with the highest $R^{2}$ values are TVI and MTVI1, while the lowest
$R^{2}$ values is TCARI, which is extremely lower than other vegetation
indices. The vegetation indices with the highest NRMSE values are TCARI
, while TVI and MTVI1 exhibit the lowest RMSE values. MTVI1 and TVI
consistently receive the highest evaluation in both metrics. Conversely,
TCARI demonstrates the smallest $R^{2}$ value and simultaneously a large
NRMSE.

# DISCUSSION {#sec:DISCUSSION}

The primary objective of this paper is to develop model-fitting
equations that correlate various vegetation indices with LAI values.
Although result of analysis of the simulated dataset in this study
suggests that MTVI1 and TVI hold promise as vegetation indices for
estimating, it cannot be pointed out that they are the best. Due to the
multitude of intervening factors, such as variations in leaf content and
structure, geometric parameters, and the influence of soil brightness,
the optimal selection of a vegetation index necessitates a demonstration
of robust resistance to the fluctuations induced by these interfering
elements. After identifying vegetation indices in this study, the
subsequent conduct of sensitivity analysis on these vegetation indices
can yield higher accuracy in LAI estimation. Because of comparative
analysis of selected vegetation indices, LAI estimation can be carried
out by fully leveraging the advantages of vegetation indices in
providing a sensitive, quantitative representation of changes in
vegetation growth status.

Simultaneously, at higher LAI values---specifically, in this study, when
LAI reaches 6---the vegetation structure is likely to be already
sufficiently dense, and leaf cover may be ample. Further increments in
LAI may not lead to a significant rise in the vegetation index. During
the estimation of LAI values, it is crucial to exclude this non-linearly
growing curve area from being incorporated as part of the estimation
model to ensure the accuracy and interpretability of the model.
Meanwhile, when LAI is equal to 5, there is a certain decrease in the
vegetation index value for each image, which goes against normal
expectations. Typically, with an increase in vegetation density, the
vegetation index should exhibit a linear growth. Due to the
aforementioned saturation phenomenon, in subsequent estimations, the
value corresponding to LAI=5 can be deemed an outlier and thus excluded
from the analysis.

Compared to existing studies, Liang's work involved the computation of
43 different vegetation indices [@liang2015]. The optimal vegetation
indices obtained were SR, OSAVI, and MTVI2. In their subsequent
sensitivity verification, the SR vegetation index was excluded. In Fu's
research, OSAVI was also identified as one of the well-performing
vegetation indices [@fu2013]. Interestingly, this differs from the
present study's findings, where MTVI and TVI emerged as the optimal
vegetation indices. In this paper, OSAVI performed well in both
vegetation types, its performance was consistently below that of MTVI1.
The significance of this study lies firstly in establishing the
credibility of our results and, secondly, in emphasizing the importance
of conducting sensitivity analyses on various factors. Moreover, the
different optimal vegetation indices identified in our research
underscore the importance of considering diverse factors and datasets in
vegetation index selection. These nuances contribute to developing and
refining scientific understanding in this domain. Expanding on these
foundations, the next logical step would be to compare the estimated LAI
values with actual measurements. Accomplishing this comparison will
validate the feasibility of utilizing vegetation indices for estimating
LAI values.

# CONCLUSION {#sec:CONCLUSION}

MTVI1 and TVI consistently receive the highest evaluation in both
metrics, establishing it as the most suitable vegetation index in this
study. Conversely, TCARI demonstrates the smallest $R^{2}$ value and
simultaneously a large RMSE, indicating it is the least suitable
vegetation index for LAI estimation in the simulated dataset of this
research. Subsequently,sensitivity analysis on these indices may enhance
accuracy of LAI estimation. Leveraging these vegetation indices, LAI
estimation can be achieved with precision, showcasing the potential of
selected indices in capturing dynamic vegetation changes.
