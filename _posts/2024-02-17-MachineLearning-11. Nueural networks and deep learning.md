---
layout: post
title: MachineLearning｜11. Nueural networks and deep learning
categories: [MachineLearning]
description: None
keywords: Nueural networks and deep learning
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
# Neurons and gradient descent
- Neural nets are <mark class="hltr-yellow">interconnected networks</mark> of simple processing units, a.k.a neurons
- It remains just a parallel, the artificial neuron is just an approximation!
![](/images/posts/e1854a76c71801fa05b63cdcc8df20e.png)
The output y was modelled as a weighted linear combination of 
inputs xj. Moreover, a transfer function, or activation function was used to make a decision.
## Gradient descent--how to find the right weights?
![](/images/posts/fcd04d013b82d719b47394c807468bf.png)
- We want to find the minimum of an error function
- We start with an initial guess of the parameter b
-  We change its value in the direction of <mark class="hltr-cyan">maximal slope</mark> (导数Derivatives are slopes)
-  We continue until reaching a minimum
### Steps
![](/images/posts/406563f7a1612cd22c7d022a03ec8bf.png)
- To update a weight b, we remove to <mark class="hltr-cyan">its value the derivative</mark>
- a is called a <mark class="hltr-cyan">learning rate</mark>>>It decides by how much you multiply the step vector>>Large a can lead to faster convergence than small>> too large a can lead to disaster
- r is the <mark class="hltr-cyan">iteration</mark>
- Why the minus sign? Because we want to move towards a minimum!
### Momentum
![](/images/posts/180660bff8543cd83c9572f963619a1.png)
### Numerical example
Learning rate controls oscillation and speed
Momentum uses a bit of the previous step
![](/images/posts/3d375e4b508a68b06aee5e1f50e64cd.png)
![](/images/posts/42d9ae86c4a881a9763de2dfe7a21a9.jpg)
#  the models using them multi-layer perceptron convolutional neural networks ( deep learning)
##  Multilayer perceptron (MLP) 
(from linear classifier to nonlinear version)
- It’s a feed forward network: it goes from inputs to outputs, without loops
- Every <mark class="hltr-yellow">neuron</mark> includes an activation function (e.g. sigmoid, see earlier slides)
![](/images/posts/3948b8cc0b8edb04747f9b1872eb42e.png)
### Chain rule
- How to compute gradient descent on a cascade级联 of operations?
- How to reach all trainable weights?
![](/images/posts/7f0b6cde9605e7be94f1fef714e9d67.png)
![](/images/posts/245f99775be317ce5f517f38306268d.png)
1. The forward pass: you put a data point in and obtain the prediction
2. The Backward pass: you update parameters by back-propagating errors
**exercise**
Describe the architecture of the following network.
● How many layers are there? 2
● How many neurons per layer? 3,1
● How many trainable parameters (weights and biases)?10
## Convolutional Neural Networks(CNN)
 - they proposed a network learning spatial filters on top of spatial filters. They were (and are) called convolutional neural networks
- The CNN was considered interesting, but very hard to train. It needed● Loads of training data > nobody had them● A lot of computational power > same
### Change
big data
graphic processing
### How to work 
- They are conceptually very similar to MLPs
- But their weights (b) are <mark class="hltr-green">2D convolutional</mark> filters
- For this, they are very well suited for images
![](/images/posts/d46bfe4432033414ed2e96953c55ef5.png)
![](/images/posts/4fb227f9d791d464005deebfb4d4eea.png)
- In convolutional neural networks, the filters are spatial (on 2D grids). ● local : they convolve the values of the image in a local window● shared: the same filter is applied everywhere in the image: why shared? “Recycling” the same operation allows to have much less parameters to learn!
### Learn
- By “learns”, I mean adapt filters weights to minimize prediction error (i.e. backpropagation)
### Steps
- Convolutional filters start with random numbers 
- Iteratively they are improved: each coefficient is updated <mark class="hltr-yellow">in the direction of largest gradient of the cost function</mark>
- At the end, the filters become quite meaningful!
# Summary
- Perceptrons are “neuron-inspired” linear discriminants
- <mark class="hltr-cyan">Multilayer perceptrons</mark> are trainable, <mark class="hltr-cyan">nonlinear</mark> discriminants
-  <mark class="hltr-cyan">Feed-forward neural networks</mark> in general can be used for <mark class="hltr-cyan">classification, regression and feature extraction</mark>
-  There is a large body of alternative neural nets
-  Key problems in the application of ANNs are choosing the right size and good training parameters
- Convolutional neural networks have a constrained architecture encoding prior knowledge of the problem
- Deep learning is concerned with constructing extremely large neural networks that depend on:● special hardware (GPUs), to be able to train them● specific tricks (e.g. rectified linear units) to prevent overfitting