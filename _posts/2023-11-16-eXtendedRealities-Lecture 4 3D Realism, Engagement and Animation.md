---
layout: post
title: eXtendedRealities｜ Lecture 4 3d realism, engagement and animation
categories: [eXtendedRealities]
description: None
keywords:  3d realism, engagement and animation
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---
# Part 1 Creating Realism
## XR Realism
3D environment: 3D Assets, Particle Effects, Lighting/Lights, Animations, Texturing/ Materials
## Material Explained
make 3D models look realistic
glossiness and reflection
### Complex material >> Layers
### Classes of Materials
Bitmap texture: Old Wall Texture
Procedural maps: Procedural Wood Texture
### General Concepts of Light Maps
Diffuse
Ambience
Specular
![[cd0066a2b1a3020289607c36f3c5771.png]]
### Combining Types of Materials
### Diffuse Color
Diffuse – Light spread evenly across the surface.
there is no black line in your photo no shadow
### Specular Maps
Specular Map
Specular Color Map
Specular Level Map
### Glossiness Map
affect the specular region of a shiny object
### Luminance Map
brightness of a surface based on the map's grayscale intensity
### Opacity Map
use grayscale bitmap images to control opacity and transparency
reflect
### Bump Map
The different intensities of light and dark tones of the grayscale bitmap

Texture only change detail, but don't shape the item
### Refraction Map
simulates the properties of glass,water , or other transparent material
## UVW Unwrap(tranditional)
flattening out 3D to 2D
just like layers cover with each others
## Lighting
Lighting adds the next layer of realism – allowing you to create shadows,  
reflections and enhance the texturing
### Lighting Theory
Light can be direct (more details )or indirect
light will behave in different ways
#### Point Lights
simulating lamps
#### Spot lights
flashlights, car headlights and searchlights
#### Directional lights
position outside the range of the game world
#### Baking
Calculate all the lighting values, which turns them into textures and overlays them onto your assets
### Foveated Rendering注视点渲染
uses an eye tracker integrated with a virtual reality headset to reduce the rendering workload fixed foveated rendering
# Part 2 Animation for XR Engagement
let user be an active participant
Persistence of vision>> illusion of motion
## Traditional Animation
Flipbook
stop motion
## Cel-animation: 
Background and static objects are drawn onopaque paper.
opaque paper, sheet of transparent cellophane
## Keyframe
- Key-frame represents the starting or ending points (positions of all objects).
- Key-framing is the process of defining all the points which define all the major pose/position for all object in the scene.
### In-betweening
linear interpolation, but not realistice results
### Interpolation in 3D software
## Animation Curves
Curve Editing
## Kinematics and Hierarchical Kinematic Modeling
Forward Kinermatics>> 3D model
Inverse Kinermatics>> realised
### Skeletal Animation
Skin
Skeleton
### Rigging(skeletal) and Skinning(attaching)
- Rigging - refers to the creation of skeletal system(hierarchy of bones) that represents your 3D character.
- Skinning - refers to the process of attaching the skin to the skeletal system.

envelope mirroring
### Pose-to-Pose
the link between these two positions(keyframes)


