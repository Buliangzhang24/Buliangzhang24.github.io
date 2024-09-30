---
layout: post
title: MachineLearning｜ ExamNotes2
categories: [MachineLearning]
description: None
keywords: Exam
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
1. F>>T Adding more variables to a model will most likely decrease the training errors  增加P,会减少training errors
2. T K=n应该是最少bias
3. ? T>>F Adding more data in the training set will likely decrease the total sum of squares (TSS) 不变  增加n，TSS不变
4. T >>F The likelihood function gives the probability of the model parameters given the data.似然函数是在<mark class="hltr-green">给定模型参数</mark>的情况下观察到<mark class="hltr-green">数据的概率</mark>，而不是给定数据的情况下模型参数的概率
5. F？LDA 不止用于普通二项分布
6. ? F 加data of training set 对TSS，没有变化
7. T?For a problem with p features, any separating hyperplane has p+1 parameters.
8. F?Weight decay regularizes neural networks by minimizing the number of errors Weight decay是通过惩罚模型的权重大小来正则化神经网络
9. <mark class="hltr-green">T For a model of the form y= β0+ β1x1 + β2x2 it holds that β-> 2β implies y->2y. In other words,doubling the parameter vector will double the explained variable </mark>
10. The linear SVC (support vector classifier) just has a single user-defined parameter. T
11. The curse of dimensionality states that the more features, the more computation is required. F而是说他精度会减少
12. Bayesian classification assigns the label of the class with the highest prior 这个应该是后验probability. F
13. F We have 2 models with the same number of variables, but with a different training error. The model with the highest training error is more likely to have the smallest test error of the 2.

    T    We have 2 models with the same number of variables, but with a different training error. The model with the highest training error is more likely to have the largest test error of the 2. 
    <mark class="hltr-red">就是有同样的数量的p， 有最大的training error的就有最大的test error</mark>
14. F   We have 2 models with the same training error, but with a different number of variables. The model with the smallest number of variables is more likely to have the largest test error of the 2.因此，两个具有相同训练误差的模型中，较少变量的模型更可能在测试集上表现更好，因为它更可能避免过度拟合，具有更好的泛化能力。<mark class="hltr-red">就是有相同的training error，p的数量越小，test errror 越小。</mark>
15. The Akaike Information Criterion is suitable for model selection, in case no test data is available. T
16. In classification, the <mark class="hltr-green">Bayes error rate</mark> is the lowest error rate one can theoretically obtain. T
17. T》F就算K无限大，这个分类误差也不一定always exceed 50%
18. T》F On a linear dataset, LDA will have a better training MSE than QDA.
19. In a classification problem (assuming that cases with identical feature values have identical labels), it is always possible for a classification tree to reduce training error to zero.对于分类树来说，误差降到0是always的
20. T The separating hyperplane formula is the same for the SVM and for the perceptron.
21. T The perceptron is a linear classifier.
22. Bias relates to underfitting and variance to overfitting
23. A. When the p-value for the F-statistic is <0.05不是，是F大于1是推翻H0
     (C.) When the p-value for the t-statistic is < 0.05

24. Regression Linear cannot work with a <mark class="hltr-green">qualitative response</mark>

25. When a sample has a completely different response value compared to the other samples, it has A high studentized residual当一个样本的Y与其他样本完全不同时，可能会导致高的学生化残差。
26. When a sample has a completely different predictor value compared to the other samples, it has A high leverage
27. LDA 和QDA的区别： same covariance 和different covariance

28. What is true for a kNN classifier:(C.) Training error is 0 when k=1
    因为当 k = 1 时，模型会完全记住训练数据，因此每个训练样本都将与其最近的邻居匹配，从而产生 0 的训练误差

29. A decision tree(C.) is sensitive to noise
30. <mark class="hltr-red"> Decision tree 不基于不放回抽样来选择点</mark>，但是RF和bagging 都是bootstrap

Which TWO things are true about Ridge regression (RR) on a noise dataset?
A. RR will likely increase the test MSE
(B.) RR will likely decrease the test MSE     Ridge会减少test上的错误
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

<mark class="hltr-red">31.  logistic 的fuction是e，但是decision boundary是linear 同时两个classes的概率是相等的。</mark>

32. What is the meaning of “margin” in the maximal margin classifier?
    The minimal distance from the observations to a given separating hyperplane

The Lasso
<mark class="hltr-red">(A.) Lasso产生稀疏模型。</mark>
Lasso回归倾向于产生稀疏模型，即只有少数几个预测变量的系数不为零，而其他的系数都为零
B. Lasso将不会包括最终模型中的所有预测变量。有些就直接是0 了
C.随着lambda值的增加，Lasso回归会施加更强的正则化惩罚，导致许多参数的值变得更小甚至为零。但并不是所有参数的值都会降低，因为对于某些重要的预测变量，它们的系数可能会保持在一个较大的非零值。
D. Lasso只能应用于p >> n的情况。
这个说法也是错误的。虽然Lasso对于高维数据（即预测变量数量远远大于样本数量）特别有用，但并不是只有在这种情况下才能应用。Lasso可以应用于任何数量的预测变量，但它在处理高维数据时尤为有效，因为它可以帮助排除不相关的预测变量，从而提高模型的泛化能力

The Ridge regression
<mark class="hltr-red">(B.) 岭回归将在最终模型中包含所有的预测变量。</mark>
这个说法是正确的。与Lasso回归不同，岭回归通过L2正则化来惩罚系数的平方和，但不将系数减少到零
岭回归在处理高维数据时尤为有效，但它并不是只能应用于这种情况下。
随着lambda值的增加，岭回归会施加更强的正则化惩罚，导致系数的大小减小，但并不是所有参数的值都会降低。某些重要的预测变量可能会保持较大的非零值。

n很大，p很小的时候，flexible
n很小，p很大，inflexible

1. K= n 是最小的bias, 因为每次验证的数据更多，所以K-1，bias会上升
2. Add training data 的数量，TSS会上升或者不变
3. P 相同， training error 上升， test error 上升
4. training error相同， P上升， test error上升
5. twice parameter 就是2P
6. logistic regression: log(p/1-p) = b0+b1*X1 + b2 *X2
7. 在1D的时候，LDA与nearest mean classifier就是一样的
8. cross conditional 就是f(x),记得要平方
9. 减枝的时候会， variance 下降，因为variance is sensitive to noise
10. Cross Validation的问题是： bias， 因为没有用全部数据，overestimate CV error了；X不是独立的，underestimate CV error.
11. 怎么看一个tree 好不好？ the prediction at every tree÷ tree的数量
12. M step： 就是最大化： mixture coeffient, density parameter are recalculated
