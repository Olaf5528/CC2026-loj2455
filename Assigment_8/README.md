For my self-portrait, I wanted to create a black-and-white version of myself that gets distorted whenever I click the mouse.

I started by setting up my webcam and creating a canvas. Then, I used loadPixels() and nested loops to go through every pixel and get its RGB values. I calculated the average of those values to make the video black and white.

For the glitch effect, I used glitchAmount to shift the red and blue colors in opposite directions. I also used constrain() to make sure the pixels stayed within the image. Then, I mixed the RGB colors with the grayscale values using some basic math.

Finally, I used mousePressed() to trigger the glitch and multiplied glitchAmount by 0.95 so the effect slowly disappears and the video goes back to black and white.

I wanted to play with the idea of how our appearance can change and become distorted, even if it's just for a moment.
