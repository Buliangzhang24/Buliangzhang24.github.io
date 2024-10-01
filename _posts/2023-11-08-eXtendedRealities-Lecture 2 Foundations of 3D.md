---
layout: post
title: eXtendedRealities｜ Lecture 2 foundations of 3d
categories: [eXtendedRealities]
description: None
keywords:  foundations of 3d
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
# Introduction
design,blueprints, 3D modelling, game engine, VR/XR
# Part 1 Softwave Types
3D asset creation tools can be further categorised one of 4 groups: 

- Modelling 简单的景物
- Animation： rigging and skinning
- Sculpting: 复杂的provide more advanced features  to sculpt models and produce various texture maps
- Rendering – For generating image or video (usually built into 3D modelling  software and available as plugin too 
- Texturing: (covered later in the course) for adding realism to assets and the 3D environments
### Modelling Tools
- 3D Studio Max, Maya, Blender: Digital media production,Modelling and Animation,Game asset development;
- Solidadge: engineers
- Sketchup: modelling and design
- Revit: architects and construction industy
### Sculpting Tools
zbrush
mudbox
### Posing and Animation Tools
Daz Studio, Valve's Source : Character animation, Character posing
### Rendering Tools
renderman
### Texturing Tools
substance painter
### Game Engines
procedural generation
# Part 2 3D Terminologies

==What is a 3D model comprised of ?==
Ploygons 就是面cube have 6 ploygons
Ploygons are made from edges and vertices:edges, vertices, face
### 2D Square vs 3D Cube
WireFrame 
game engine like triangles
## Primitives基元
3D environments are just mathematical constructs.
Every 3D space has dimensions
The most basic 3D shapes are called Primitives.
![[3107a700453d52d94693141e31d9e4e.png]]
### Polygon
Recap - a polygon is a many-sided shape which has a set of vertices and edges
FBX is used as an export to game engine

### Triangles are always Convex
Concave polygons are often difficult to process
Simple linear equations
Any polygon can be decomposed into triangles;
triangle shape 

How many vertices, edges, & triangles to make a cube?
• 8 vertices
• 18 edges
• 12 triangles
### 3D Graphics Data Representation
Vertex coordinates list, polygon table and (maybe) edge table
# Part 3 3D Modeling and Communication
3D objects 
3 axis  objects need to have volumn
the structure and poly count
vertices
## Volume: Values and emotions
Shpere : cute and friendly
Cube: Strong and Sturdy
Pyramid: Fast and aggressive
### Realism : 
Anatomical
Geographical
Structure
Mathematical (Mandelbox)
Particles
Mechanical
# Part4 Computer Modeling Principles and Techniques for XR
## Modelling Approach
Top-down
Bottom-Up 
Made up of triangles
![[09f12b1993611fe94a85b461bd76467.png]]
### Primitives
2-D primitives include: rectangles, circles, triangles, and other polygons.
3-D primitives include: blocks, cylinders, prisms, spheres, and cones.
### Top-Down Modelling Boolean Operations
Boolean operations - combinations of geometric entities: add, subtract, intersect, divide, glue, and overlap, etc.
### Boolean CSG operations
Union 
Intersection
Difference
### Quads
quads is for the modelling process
easier to sub-divide the model if you use quads
### Bottom-Up Modelling
Open Spline
Close Spline
### Joining Splines
You can join 2 or more splines together using Boolean operation.
## Ngons
a polygon with more than four vertices and edges
should be avoided
Sometimes modelling with Ngons is quicker – but always avoid it!
### Low vs High Poly
Low poly challenges: retopology or decimation
the details from high poly can be baked into texture maps
