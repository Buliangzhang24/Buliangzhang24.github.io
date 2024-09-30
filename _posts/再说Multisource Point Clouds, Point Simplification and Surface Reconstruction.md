
多种表面重建方法，包括Alpha形状、屏幕化泊松重建（SPR）、Crust算法和代数点集表面（APSS Marching Cubes）
In addition, well-known surface reconstruction methods, i.e., Alpha shapes, Screened Poisson
reconstruction (SPR), the Crust, and Algebraic point set surfaces (APSS Marching Cubes), were
utilized for object reconstruction

The idea of our point cloud simplification method is to separate the key characteristics of an
object from the least important points by using Principal Component Analysis (PCA) and multi-view
projection geometry and to resample these points using different grid sizes (e.g., key characteristics use
a small grid size, while the least important points use a big grid size) to minimize the loss of accuracy