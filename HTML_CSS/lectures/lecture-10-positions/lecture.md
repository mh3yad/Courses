# 7 Positions

## topics

1. float
2. overflow
3. position
4. z-index

## Explain


1. float
   1. create 3 P first,second,third
   2. float: none def | left | right
   3. add flaot: left to p
   ![alt text](image.png)
   ![alt text](image-1.png)
   4. now create parent with 3 child divs
   5. add background to parent and background to each child
   6. add width, height to child, so parent appears
   7. make float to child, and notice parent background dissappears
   ![alt text](image-2.png) 
   ![alt text](image-3.png)
   8. now add p after 3 divs
   9. notice p is beside divs
   10. add clear div with clear: left|right|both
2. overflow
   1. what if content larger than div size, add long single word 
   2. overflow: visible | hidden | scroll | auto
      1. overflow-x | overflow-y 
3. position
   1. control positions of elements in the page
   2. create parent div with 3 divs with content one,two,three
   3. for parent add bk width,height,  for children add height, bk
   4. you can move elements to top,bottom,left,right, BUT you must add position, without it, no effect
   5. position: static def top,bottom not works with it
   6. before any position ask 2 questions, what will happen to its origin place? it will move regarding to whom?
   7. postions
    1. relative
        1. positioned relative to its normal position
        2. on div 2: 
        3. top: 70px
        4. 2 Questions:
            1. relative save origin place
            2. elements moved based on its origin place
    2. absloute:
        1. positioned relative to the nearest positioned ancestor  
        2. its width is fit-content, not parent width
        3. 2 Questions: 
            1. origin place is taken
            2. element moved based on the screen if parent has no position
        4. bottom:0; right:0 // bottom of the screen
        5. for parent, add position: relative 
        6. exercize add text over image top: 50%; left: 50%;
    3. fixed:
        1. positioned relative to the viewport 
        2. its width is fit-content, not parent width
        2. 3 Questions: 
            1. origin place is taken
            2. element moved based on the screen
        4. bottom:0; right:0 // bottom of the screen
        5. parent: height:2000px and notice scroll // add whatsapp icon example
    4. sticky
        1.  You must specify at least one of the top, right, bottom or left properties, for sticky positioning to work.
        2. A sticky element is positioned relative until a certain scroll position is reached - then it "sticks" in that place (like position:fixed).
        position:sticky; top: 10px;
        3. add h1 with lorem
        4. after scroll it's fixed on its parent only then dissappears
4. z-index
    1. 3 divs with no content, each one with color
    2. div {position: absolute;width: 300px;height: 300px;}
    3. move elements by 30 pixel top,left to see all them
    4. z-index: 50 // highest number shows first
    5. z-index: -1 // to hide



## task

