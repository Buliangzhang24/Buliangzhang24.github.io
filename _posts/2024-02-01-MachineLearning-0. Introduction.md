---
layout: post
title: MachineLearning｜0. Introduction
categories: [Advanced Earth Observation]
description: None
keywords: Introduction
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---

# What is machine learning?
## 分类
supervised learning : classification and regression
unsupervised learning: cluastering and structure
## Supervised learning
- the <mark class="hltr-pink">relationship</mark> f between input <mark class="hltr-yellow">X(predictor,independent variable,feature)</mark> and output<mark class="hltr-yellow"> Y(response, dependent variable, predicted value) </mark>based on training data> Y= f(X)
- Classification and regression区别
      1. tomato ripe> regression
         methods for regression: linear regression, decision trees/random forest/neural networks
      2. object database> representation/object featrues> feature space(distance measure to deteccted object)> when new image poped up, we can use this model to detect object
         methods for classification:
         Logistic regression
         K-Nearest Neighbors
         Linear/Quadratic Discriminant Analysis线性、二次判别分析
         Decision Trees/Random Forest
         Support Vector Machines
         Neural Networls
## Unsupervised learning
- learning structure, no Y, only X
- 分为：clustering example(K-Means Clustering, Expectation Maximization,Hierarchical Clustering )
      dimensionality reduction(Principal Component Analysis)
## Which model is the best？
Model and feature selection
## How to optimally use the training /test data?
Resampling methods 
- Cross-validation
- Bootstrapping



fte35306.machinelearning@wur.nl

F
F>>T <mark class="hltr-red">Adding more variables to a model will most likely decrease the training errors </mark> 增加P,会减少training errors
F 
T K=n应该是最少bias
T


? T>>F Adding more data in the training set will likely decrease the total sum of squares (TSS) 不变  增加n，TSS不变

F >>T  We have 2 models with the same number of variables, but with a different training error. The model with the highest training error is more likely to have the largest test error of the 2. 

F》We have 2 models with the same training error, but with a different number of variables. The model with the smallest number of variables is more likely to have the largest test error of the 2.因此，两个具有相同训练误差的模型中，较少变量的模型更可能在测试集上表现更好，因为它更可能避免过度拟合，具有更好的泛化能力


?T  If there is a highly non-linear and complex relationship between the features and the response,then decision trees would be expected to outperform linear approaches.

T >>F The likelihood function gives the probability of the model parameters given the data.似然函数是在给定模型参数的情况下观察到数据的概率，而不是给定数据的情况下模型参数的概率
T



T
T
F？LDA 不止用于普通二项分布
T
F



T
? F 加data of training set 对TSS，没有变化
F
T
F


T?For a problem with p features, any separating hyperplane has p+1 parameters.
F?Weight decay regularizes neural networks by minimizing the number of errors
Weight decay是通过惩罚模型的权重大小来正则化神经网络
T
F
T

F >T  For a model of the form y= β0+ β1x1 + β2x2 it holds that β-> 2β implies y->2y. In other words,doubling the parameter vector will double the explained variable
T？
F？
T>F
T> F
26. For a model of the form y= β0+ β1x1 + β2x2 it holds that β-> 2β implies y->2y. In other words,doubling the parameter vector will double the explained variable T

27. The linear SVC (support vector classifier) just has a single user-defined parameter. T

28. The curse of dimensionality states that the more features, the more computation is required. F而是说他精度会减少

29. Bayesian classification assigns the label of the class with the highest prior probability. F

30. 
F We have 2 models with the same number of variables, but with a different training error. The model with the highest training error is more likely to have the smallest test error of the 2.

T    We have 2 models with the same number of variables, but with a different training error. The model with the highest training error is more likely to have the largest test error of the 2. 

F   We have 2 models with the same training error, but with a different number of variables. The model with the smallest number of variables is more likely to have the largest test error of the 2.因此，两个具有相同训练误差的模型中，较少变量的模型更可能在测试集上表现更好，因为它更可能避免过度拟合，具有更好的泛化能力


1. The Akaike Information Criterion is suitable for model selection, in case no test data is available. T

2. In classification, the Bayes error rate is the lowest error rate one can theoretically obtain. T

T?
?T
T
T
F


T》F就算K无限大，这个分类误差也不一定always exceed 50%
T?
T》F On a linear dataset, LDA will have a better training MSE than QDA.
T
F


T
T
T
F》T
In a classification problem (assuming that cases with identical feature values have identical labels), it is always possible for a classification tree to reduce training error to zero.对于分类树来说，误差降到0是always的

F?》T

T The separating hyperplane formula is the same for the SVM and for the perceptron.
T The perceptron is a linear classifier.

F

Bias relates to underfitting and variance to overfitting

A. When the p-value for the F-statistic is <0.05不是，是F大于1是推翻H0
(C.) When the p-value for the t-statistic is < 0.05

Regression Linear cannot work with a qualitative response

When a sample has a completely different response value compared to the other samples, it has A high studentized residual当一个样本的响应值与其他样本完全不同时，可能会导致高的学生化残差。
When a sample has a completely different predictor value compared to the other samples, it has A high leverage
LDA 和QDA的区别： same covariance 和different covariance

What is true for a kNN classifier:(C.) Training error is 0 when k=1
因为当 k = 1 时，模型会完全记住训练数据，因此每个训练样本都将与其最近的邻居匹配，从而产生 0 的训练误差

 A decision tree(C.) is sensitive to noise
Decision tree 不基于不放回抽样来选择点，但是RF和bagging 都是bootstrap

Which TWO things are true about Ridge regression (RR) on a noise dataset?
A. RR will likely increase the test MSE
(B.) RR will likely decrease the test MSE会减少test上的错误
(C.) RR will likely increase the training MSE
D. RR will likely decrease the training MSE

When you want to simplify a linear regression model using fewer predictors, one should NOT use
A. The Lasso适合
(B.) Ridge regression不适合少量数据
C. Forward selection
D. Backward selection

 Consider a dataset composed of five samples. In the figure below, the visual distance between the points represents the actual distance.
Which of the following value of K will have least leave-one-out cross validation accuracy?
(A.) 1NN
B. 3NN
C. 4NN
D. All have same leave one out error
对于1NN，每个样本的最近都是它自己，所以没有样本都会被分类错


Consider a dataset composed of five samples. In the figure below, the visual distance between the points represents the actual distance.
Which of the following is leave-one-out cross-validation accuracy for 3-NN (3 nearest neighbor)?
A. 0.0
B. 0.4
(C.) 0.8
D. 1.0
五个样本四个分对了

logistic 的fuction是e，但是decision boundary是linear 同时两个classes的概率是相等的。

What is the meaning of “margin” in the maximal margin classifier?
The minimal distance from the <mark class="hltr-red">observations</mark> to a given separating <mark class="hltr-red">hyperplane</mark>
