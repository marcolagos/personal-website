# Creating a Simple Yet Complicated Dark Mode Animation

###  A dark mode toggle animation should have some personality. Here's my take on a unique dark mode transition animation.

###### Dec 20, 2020 - 30 min read

Most dark mode animations on the web look the same. This is why I wanted to create my own. Don't get me 
wrong, there is nothing wrong with a simple color transition. It just doesn't feel unique when almost everyone on the
 web use the same thing. So, here is my take on it. I'll first explain everything in a YouTube video, and then try to
  provide more details in text.

- [Part 1 - Introduction and Basic Concepts](https://www.youtube.com/watch?v=oIHuvg38qLE)
- [Part 2 - Implementation](https://www.youtube.com/watch?v=dgXbpUxdv8I)

In very basic terms, this animation is just a HTML canvas that draws a shrinking circle. The circle shrinks or grows
 in size depending on if we want dark mode enabled or not. Plus, it integrates nicely with React's component states.

####1) What kind of animation do I want?

 <Media folder="article1" image="crescent-moon.jpeg"/>

**a.** When I click on the moon icon, the website should start drawing a circle that continuously shrinks until radius
 is zero. The center of the circle should be the moon icon.

**b.** When I click on the sun icon, the website should start drawing a circle that continuously grows until the circle
 covers the entire background of the page. The center of the circle should be the sun icon.

**c.** If the animation is still playing when I click the icon, the animation should continue playing in reverse.

**d.** The animation should stop when radius reaches zero, or when radius is bigger than the page width (animation
 is not visible anymore).

####2) What are my options?
 
 First option that comes to mind is to use a [HTML canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
  Canvas allows drawing an arbitrary shape on a webpage
  at any given time. I need to integrate this with React and the dark mode state on my blog. The performance
   needs to be good enough to create the illusion of a circle growing. I do not want skipped frames.
 
 Second option could be to use a div with 100% corner radius and resize it using javascript. However, this might be
  quite hacky and might introduce compatibility problems on older browsers, or maybe some newer browsers. Safari
   updates have caused several CSS bugs on my website before.
 
 My recommendation is to go with a canvas.

####3) How do I work with a canvas in React?

The [useRef()](https://reactjs.org/docs/hooks-reference.html#useref) hook can be used to get the reference for
 the element you're working with on the DOM. This way, we can refer back to our canvas and start drawing on
  it.
   
Here is a sample Canvas component that you can plug in and try now. It just draws a circle when mounted.
   
<Code language="javascript">
import React, { useEffect, useRef } from "react";
&nbsp;
const CircleCanvas = () => {
  const canvasRef = useRef(null);
&nbsp;
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
&nbsp;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = \"#00F";
    context.beginPath();
    context.arc(75, 75, 60, 0, 2 *&nbsp;Math.PI);
    context.fill();
&nbsp;
    window.requestAnimationFrame(() => {});
  }, []);
&nbsp;
  return \<canvas ref={canvasRef} />;
};
&nbsp;
export default CircleCanvas;</Code>

####4) Drawing a circle that continuously grows

Up next is animating a circle that continuously grows. The canvas provides us with a function called
 requestAnimationFrame(callback). This function draws whatever you have in the context, and then calls the callback
  function when the drawing is done.

So the logic we're going to follow here is pretty simple. We're going to increase the circle radius by 0.05 each time
 render() is called by the requestAnimationFrame callback.

<Code language="javascript">
import React, {useEffect, useRef} from "react";
&nbsp;
const GrowingCircleCanvas = () => {
  const canvasRef = useRef(null);
&nbsp;
  const draw = (ctx, radius) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = \"#00F";
    ctx.beginPath();
    ctx.arc(50, 100, radius, 0, 2 *&nbsp;Math.PI);
    ctx.fill();
  };
&nbsp;
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    let radius = 0;
    let animationFrameId;
&nbsp;
    const render = () => {
      radius += 0.05;
      draw(context, radius);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
&nbsp;
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
&nbsp;
  return \<canvas ref={canvasRef} />;
};
&nbsp;
export default GrowingCircleCanvas;</Code>

This allows us to get a circle growing at a constant speed. There is no way to make the circle smaller yet, but that's
 ok. We're going to address that issue at a later stage.

####5) Adjusting the scaling and resolution for the canvas

Depending on how you placed your canvas in your page, you might have noticed that the canvas looks pixelated.
 This happens because we manually need to
 adjust the scaling factor of the canvas. All devices come with different screen pixel ratios. Here is the code
  that adjusts canvas draw resolution. Place it in your useEffect() function.
    
<Code language="javascript">
const { width, height } = context.canvas.getBoundingClientRect();
if (context.canvas.width !== width || context.canvas.height !== height) {
  const { devicePixelRatio: originalRatio = 1 } = window;
  // we don't need such a high resolution for this type of animation. Plus it makes the edges
  // of the circle look blurred, which looks nicer. Also improves performance a lot on slow GPUs
  // change from 0.5 to 1 if you want to use display's native resolution.
  const lowerResolutionRatio = originalRatio&nbsp;*&nbsp;0.5;
  context.canvas.width = width&nbsp;*&nbsp;lowerResolutionRatio;
  context.canvas.height = height&nbsp;*&nbsp;lowerResolutionRatio;
  context.scale(lowerResolutionRatio, lowerResolutionRatio);
}</Code>

####6) Time-based rendering for consistency

When you're programming animations, it's a good practise for your animation speed to be based off of real time.
 Let me explain by a simple example:

 <Media folder="article1" image="crescent-moon.jpeg"/>

On the left, there is a laptop from 2006 with a highly underclocked CPU. On the right, I have my 2019 laptop. If
 it takes more time to draw a
  frame on a slow CPU, the animation should not slow down right? We want the animation to take the same amount of time
   on the same screen size. If the CPU is too slow, then we should let the animation skip a few frames. This
    is what games do as well. If your computer is slow, frames per second will be lower but physics and animations
     will be playing out exactly the same as a super fast computer.
     
  <Media folder="article1" image="crescent-moon.jpeg"/>

Time delta between current and previous frames can be used to calculate what the radius should be.
 If there is a 10 ms difference between frames, the radius should be growing at a rate of 10 pixels per draw. If there
  is a 100ms difference between frames, the radius should be growing at a rate of 100 pixels per draw and so on.

This logic can be implemented with the code fragment below. When we're calculating the radius for the next frame, we're
 going to subtract the time at previous completion from now. This value is going to be multiplied with
  RADIUS\_INCREASE\_PER\_MS to get the actual radius.

<Code language="javascript">
import React, {useEffect, useRef} from "react";
&nbsp;
const GrowingCircleCanvasTime = () => {
  const canvasRef = useRef(null);
  const RADIUS\_INCREASE\_PER_MS = 0.05;
  let timeAtPreviousDraw = Date.now();
&nbsp;
  const draw = (ctx, radius) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#FFF";
    ctx.beginPath();
    ctx.arc(50, 100, radius, 0, 2 *&nbsp;Math.PI);
    ctx.fill();
  };
&nbsp;
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    let radius = 0;
    let animationFrameId;
&nbsp;
    const render = () => {
      const timeAtRenderStart = Date.now();
      const timePastSincePreviousDraw =&nbsp;timeAtRenderStart&nbsp;-&nbsp;timeAtPreviousDraw;
      // In the future, we will get computers so fast that the difference between
      // previous and current frame is less than 1ms. Math.max() ensures that we
      // still grow the circle even if the computer is super fast.
      const timePastSinceLastDraw = Math.max(1, timePastSincePreviousDraw);
      radius += RADIUS\_INCREASE\_PER\_MS&nbsp;*&nbsp;timePastSinceLastDraw;
      timeAtPreviousDraw = timeAtRenderStart;
      draw(context, radius);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
&nbsp;
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
&nbsp;
  return \<canvas ref={canvasRef} />;
};
&nbsp;
export default GrowingCircleCanvasTime;</Code>

####7) Making the animation look nicer

Animations don't look as nice when they play at a constant speed. Imagine you're scrolling on your
 smartphone. The animation starts fast as you flick your finger and then slows down gradually right? Or when you
  quit an app, there is always some sort of speed-up or slow-down as the animation plays. This behaviour creates
   the illusion that the animation is more fluid and responsive. Those animations rely on exponential mathematical
    functions to achieve the aforementioned behaviour. For the growing circle animation, I've tried several different
     functions and liked this one the best:
   
 <Media folder="article1" image="crescent-moon.jpeg"/>

   
This will ensure that the circle starts growing slowly at first and then exponentially gets faster. This behaviour
 makes the whole animation feel more alive. See comparisons below (exponential on the left, linear on the right):
 
 <Media folder="article1" image="crescent-moon.jpeg"/>

####8) When to stop the animation

So knowing when to stop when shrinking the circle is simple. When the radius reaches zero, we can stop drawing the
 circle and stop animating. What if the circle is growing though? The radius is going to be different for all screen
  sizes. The radius of the circle on a smartphone vs a 27" monitor will be very different. Plus, we are working backwards
   from an exponentially increasing radius. Here is what we need to figure out when to stop:
   
**1.** Browser window width and height - We don't need to keep drawing circles if the radius is way past the screen size.
 There is no point in animating if the user can't see the animation.
 
**2.** Maximum radius for given window width and height - We're going to use this to figure out the maximum value that the
 exponential growth function can take.

For the first item, `window.innerHeight` and `window.innerWidth` can be used. 
 For the second item, we can reverse the exponential function and get the maximum value our actual radius can take before
  the exponential operation.
