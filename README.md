# Water.js

An animation library based on scroll. This library is dependency free and still in development. A demo can be found at: [kevinbai0.github.io/waterjs/](https://kevinbai0.github.io/waterjs/ "WaterJS Homepage").

## Usage

To use in project, download `water.minimized.js` in the `/build` directory and add it to your project. In your html file, include: 

`<script src="path-to-file/water.minimized.js type="text/javascript"></script>`

## Guide

Water.js is extremely easy to use. Begin by instantiating an instance of Water: 
`var water = new Water()`
Next, add each target you want to animate: 

        water.add({
            target: document.getElementById('id'),
            keyframes: {
                translateX: [0,100],
                ...
            }
        })

Finally, mount the Water component with: `water.mount()`.

Add the animations in the keyframes object. Each keyframe needs to values: a start value (when the element first enters a screen) and a final value (when the element exits the screen). The values in-between are interpolated linearly. Animations must be contained within `[]` brackets with only 2 values specified. Units may also be specified in the string format such as: `["20deg", "40deg"]`.

Currently, the animatable properties are: `translateX`, `translateY`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY` and `opacity`.

## Future Development

More animatable properties are being added in the future such as `color`, `background-color`, `box-shadow`, `border` and most of the animatable CSS properties. Custom easing functions will be added to support different interpolations with multiple endpoints. An option to threshold animations rather than a percentage of scroll will also be added.