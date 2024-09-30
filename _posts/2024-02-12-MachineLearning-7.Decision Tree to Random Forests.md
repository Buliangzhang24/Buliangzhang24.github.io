---
layout: post
title: MachineLearning｜7.Decision Tree to Random Forests
categories: [MachineLearning]
description: None
keywords: Decision Tree to Random Forests
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
# Decision Trees
We categorize data through <mark class="hltr-orange">chain of simple decisions.</mark>
<mark class="hltr-orange">a binary tree,</mark> which is a graph data structure in which each node has at most two children
## Terminology
input features: data to be classified
root node: starts the decision process
decision nodes: 
Each decision node (split node) implements a test function with discrete outcomes
The test function of each decision node splits the input space into regions
leaf nodes:
A leaf node indicates the end of a sequence of decisions
A single (output) class is associated to each leaf node
## Algorithm to make predictions
![[66c68d76a596659140c2d38d0326bbb.png]]
## Increasing node purity
every decision should increase the node purity
### Quantifying Node Purity
Measuring Node Purity
- Low Entropy: more pure;Higher Entropy: less pure>>H(p) how flat
- Gini Index: higher gini index ,less pure
![[f365b77a8cb7cc4a22d13ad62d2231e.png]]
![[c4449526b1dcb9a2458ef1c41d9fc19.png]]
0.25* 0.75 4 times
0.45* 0.55  2 times + 0.05 * 0.95 2 times
## Regression Trees
leaf nodes return the average
sample variance as node purity,high variance before splitting, low variacne after splitting
## Classification versus Regression Trees
## How to find the thresholde t?
Try different thresholds
optimum as best recordede threshold![[f4313c7f3b7060b0b96d5e09bb6fc92.png]]
## Binary Splitting
we test as many thresholds as we have points
![[ab2533bf07de0f47d6c10fc874cc20f.png]]
## Growing a Decision tree with Recursive Binary Splitting: 
- perform binary splitting
- recursively for each decision node
- to maximize node purity
- We end uo with one sample per node = a 1-NN regressor/classifier
### Overfitting of DTs
- Tree fits training data perfectly (zero variance)
- Tree extremely large, and uninterpretable
### Regularization of DTs 
#### Restricting Depth
- Tree fits training data perfectly (zero variance)
- Tree extremely large, and uninterpretable
#### Tree Pruning
##### Slow Grows（限制生长，greedy）
<mark class="hltr-blue">Strategy</mark>: Grow first the tree slowly with additional checks during growing
• Simple checks: <mark class="hltr-blue">maximum depth</mark>,max number of <mark class="hltr-blue">leaf </mark>nodes.
• Add decision node only if<mark class="hltr-blue"> increase</mark> <mark class="hltr-blue">in node purity</mark> is above a certain threshold
##### Fast Cutters(先长再切, non-greedy)
<mark class="hltr-blue">Strategy</mark>: Grow the full tree and then remove not important nodes later.
<mark class="hltr-blue">• Cost complexity pruning</mark>: we identify the weakest link in the tree  to remove
##### Cost Complexity Pruning
- <mark class="hltr-blue">Remove leafs to reduce the complexity,</mark> while maintaining a low training error, i.e., cost. The hyperparameter 𝛼 balances both objectives.
- Clamada(T) = C(T) + lamada|T|就是cost(training error)+complexity(number leafs)
- higher alpha: produces shallower tree with less nodes
###### 如何利用 cost complexity pruning来构建树
![[638c2052311e5c539c5d454e45e1a73.png]]
## Advantages and Disadvantages of Trees
Advantages:
●<mark class="hltr-purple"> Inexpensive</mark> to construct
● Extremely<mark class="hltr-purple"> fast </mark>at classifying unknown records
● Easy to interpret <mark class="hltr-purple">for small-sized trees</mark>
● <mark class="hltr-purple">Robust to noise</mark> (especially when methods to avoid overfitting are employed)
● Can easily handle <mark class="hltr-purple">redundant or irrelevant attributes</mark> (unless the attributes are interacting)
Disadvantages: 
● Space of possible decision trees is <mark class="hltr-purple">exponentially large</mark>. Greedy approaches are often unable to find the <mark class="hltr-purple">best tree.</mark>
● Does not take into account <mark class="hltr-purple">interaction</mark>s between attributes
● Each <mark class="hltr-purple">decision boundary involves only a single attribute </mark>
●<mark class="hltr-purple"> too deep ,more sensitive to noise</mark>
# Bagging, Forest,Boosting
- Bagging是在干啥： we split the feature space into regions The modes(i.e., centers) of the data distributions are well assigned to the classes. But the uncertain overlapping region is a mess
 
- low bias each tree fiting vey well
- high variance > difference between different trees higher
## Bias - Variance Trade-off: Finding a balance between fitting and overfitting
for tree-like classifiiers
### Strategy 1: Reduce DT complexity
- Greedy (restrict DT complexity)
- Non-greedy (post-hoc pruning of the decision tree)
### Stragegy 2 Ensemble multiple Decision Trees together集成多个决策树：森林！！
#### Step 1 Bagging
- split different data subset: 
    randomly sampled subsets (bootstrap)
- ensemble prediction: 
     majority voting for classification
     output averaging for regression
-  effect:
     Decision boundaries become blurry: more realistic boundary
##### Out-of-Bag Error Estimation
Process: 
1. Fit decision tree DT_i on 𝒟_i , 
2. Test its performance on the out-of-bag set 𝒟_oob
3. Repeat for each tree in the bag 
Idea:
-<mark class="hltr-blue"> This OOB error approximates the test error. </mark>
- Similar idea to cross-validation, but for every DT separately
##### Re-gaining Interpretability
- Bagging trees <mark class="hltr-blue">improves accuracy</mark> over a single tree through increasing <mark class="hltr-blue">diversity in the decisions</mark> 意思就是随机性增加了，所以增加了精度
- But we <mark class="hltr-blue">loose interpretability</mark>: 
    Each tree has different decision rules
    Interpreting many decision rules in parallel is difficult
- Strategy: Measure the <mark class="hltr-blue">increase in node purity across trees </mark>
- ![[7010e107b505f8fef371cbe4e3f6219.png]] 就是看每个感兴趣点（橘色点）的node purity，然后求平均
##### if bagging trees are still highly correlated with each other
![[Pasted image 20240226091312.png]]

#### Step 2 Random forest
- Idea: increase diversity by removing features from individual trees (removing the root node , to increase diversity)
- Implementation:we take a random sample of predictors for each tree (usually 根号下 𝐹)(for instance, 4 features out of 15)
- for each decision tree : <mark class="hltr-blue">随机trained with a dataset subset和 subset of features</mark>
- Bags and Random Forest: 
    - each tree is trained on a different <mark class="hltr-blue">“bootstrapped</mark>” set of train data
    - trees are trained separately from each other<mark class="hltr-blue"> in parallel </mark>
- Random Forests:
    additionally each tree is trained with a different <mark class="hltr-blue">subset of features</mark>
## Boosting
### Random Forest versus Boosting Philosophy
- Random Forest: accuracy through classifier diversity all trees grown in parallel
- Boosting: many small “weak” classifiers trees grown sequentially
### Principles
- Train one classifier after another
- Reweight the data so that wrongly classified data is more important
(grow it one by one, there is order of importance)
### AdaBoost
#### Three Core Ideas:
- Combines many “weak learners”
- some stumps are weighted higher than others
- each stump takes the previous stumps into account
![[6122295845e0fc7d25e6f98889b33de.png]]
![[ffc41bc78dda2f930d891bd74eb8cdd.png]]
![[d7ec32aa303a927332cc68cfd93669e.png]]



