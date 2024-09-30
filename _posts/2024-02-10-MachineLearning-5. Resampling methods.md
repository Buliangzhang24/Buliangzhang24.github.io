# Motivation
## Bias and Variance
### Prediction errors are due to
- Bias: the inability of the model to capture essential interactions, processes, or dynamics of the true system. Bias is associated with ==non-flexibility==, or ==lacking information in the data set==
- Variance: sensitivity of coefficients towards errors or variations in the data. Variance is associated with ==flexibility.==
- Irreducible errors: measurement errors that cannot be predicted
为什么 test 会U形，training 随着flexibility 下降
- The challenge lies in finding a method for which both the variance and the squared bias are low.
### 两个评价方面
- Model assessment (performance)
- Model selection (flexibility)
### Test error and training error
- test error:used in its training
- training error: not used in its training
- 其实下面这个问题就是那个图
    The training error rate often is quite different from the test error rate, and in particular the training error can considerably ==underestimate== the test error
    - What is the most likely cause, bias or variance?
        Variance, a sensitivity towards the configuration of the data     			(training error is small, test error is large)
- Best estimation of test error: ==a large== designated test set. (大量的test set)
    Sometimes not available
- mathematical ==adjustment== to the training error rate in order to estimate the test error rate
    For example: R2adjusted. Others: Cp statistic, AIC and BIC 
In this lecture we consider a class of methods that estimate the test error by holding out a subset of the training observations from the fitting process, and then applying the statistical learning method to those held out observations
# The Validation Set Approach
Here we ==randomly== divide the available set of samples into two parts: a ==training set ==and a ==validation or hold-out set==
### Drawbacks
- test error is highly variable, and only half of the obsevations >> hence, the <mark class="hltr-blue">validation set error tends to overestimate the test error</mark>
    50% of the data: inability to incorporate all information from the data set (bias)
# Leave one out cross validation
## Steps
- spliting the set of ob into two parts
- single ob is used for the validation set
- remaining ob make up the training set
- prediction y^_1 ,using x_1
- Since (x1, y1) was not used in the fitting process, MSE1 = (y1 − y ̂1)2 provides an approximately unbiased estimate for the test error
- repeat  MSE1....MSEn
-<mark class="hltr-purple"> average these: CV(n)</mark>
## Advantages and Disadvantages
(compared to the validation set approach)
- It tends <mark class="hltr-blue">not to overestimate the test error rate as much as the validation se</mark>t (there is no randomness in the training/validation set splits)
- LOOCV has the potential to be ==expensive== to implement, since the model has to be fit n times (if n is large, and if each individual model is slow to fit)
# k-Fold Cross-Validation
## step
- divide data into K roughly equal-sized parts
- We leave out part k, fit the model to the otherK − 1 parts (combined), and then obtain predictions for the left-out kth part
- CV(K)
## Algorithm
![[ff05b5c22a054f8e811eee32315b7f9.png]]
- we are interested only in the location of the minimum point in the estimated test MSE curve
## K-fold cross-validation
- Since each training set is only (K − 1)/K as big as the original training set, the prediction error will typically be biased upwards. Why? 
     ==Bias is increased by reducing the data set ==
-  This ==bias is minimized when K = n (LOOCV), but this estimate has high variance ==(since all training sets are nearly equal, so the MSE’s are highly correlated, and depend much on which data set is used)
- K = 5 or 10 provides a good compromise for the bias-variance trade-off
![[8f1efdf723e520b4db9ecbbc0d4050b.png]]
# The Bootstrap
- data set is too small
- The bootstrap can be used to ==estimate the uncertainty associated with a given estimator== or statistical learning method
- The bootstrap works by==repeatedly== sampling from the same data set, thereby creating multiple data sets
就是有放回抽样
![[f6a78ccd91fcac3b53a4b82b8704b55.png]]
- minimize the risk (反正就有个公式)
### Time series
 if the data is a time series, we can’t simply sample the observations with replacement. Why not? 
- The data is correlated over time; this correlation represents the dynamics. Randomly resampling will completely alter the dynamics


- **exercise 5.3**
a) Spot the mistake: k-fold cross-validation is implemented by taking the set of n observations and randomly splitting into k nonoverlapping groups. Each of these groups acts as a validation set and the remainder as a training set. The test error is estimated by taking the largest of the k resulting MSE estimates
b) What are the (dis)advantages of LOOCV compared to a validation set approach
Regarding computational requirements?
Regarding bias?
c) What are the (dis)advantages of k-fold cross-validation relative to
The validation set approach?
LOOCV?

(a)False average not largest
(b) LOOCV computational more, <mark class="hltr-purple">bias less</mark>(using the more data to validate)
(c)  
1. validation error not overestimate test error
2. K fold easy to compute less expensive, <mark class="hltr-purple">K fold bias higher</mark>

- **Cross-validation: right and wrong**
Consider a simple classifier applied to a two-class data set:
1. Starting with 5000 predictors and 50 samples, find the 100 predictors having the largest correlation with the class labels
2. We choose a classifier, such as logistic regression, using only these 100 predictors
3. We apply cross-validation to estimate the MSE of this classifier

Is this allowed?
????

**exercise 5.1**
![[5d8d3fff1e9e95a10ae6e1c49182aeb.png]]
有个斜率为0， df(x)/dx
**exercise 5.2**
Suppose that we obtain a bootstrap sample from a set of n observations What is the probability that the first bootstrap observation is not the jth observation from the original sample?What is the probability that the second bootstrap observation is not the jth observation from the original sample?
1-1/n
1-(1/n-1)!!! not the same 有放回抽样

**Suppose that we obtain a bootstrap sample from a set of n observations 
Argue that the probability that the jth observation is not in the bootstrap sample is (1−1/n)^n**
？？？
When n=5, what is the probability that the jth observation is in the bootstrap sample?
排列组合


