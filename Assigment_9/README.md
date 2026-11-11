For this assignment, I decided to experiment with the FaceMesh model. At first, I had a few ideas but wasn't entirely sure what I wanted to create. I was initially thinking about manipulating specific parts of the face, but then I realized that if I could access all the keypoints, I could create an entire mask.

I took inspiration from the floating mask in Shrek, which appears in the mirror. I wanted to recreate that illusion of a face moving without an actual face being visible. Similar to what we did with the keypoints, I used beginShape() and endShape() to access all the triangles in the FaceMesh model. I removed the strokes, used a white fill, and added a black background. Finally, I offset the mask to the right so users could see both their real face and the floating mask reacting to their movements.

Inspo[Shrek mask](../Content/Shrek_mask.png)

My code(../Content/Floating_head.png)

