# Using DevTools to understand modern CSS layouts

*Presented at CSSConf EU 2019*

- Introduction
    - How this whole thing came about, Mozilla Jakarta with Alex
    - Devtools console can totally be styled up
    - Introduce self and Nexmo, console supports a surprising number of CSS properties
    - Using devtools to discover stuff, can run through the different values, useful especially for more tricky to remember properties like blend modes and the like
    - Share with everyone what I learned about modern CSS layouts while building them and inspecting them with devtools throughout the process

- What are modern CSS layouts?
    - Layouts built with Flexbox, Grid and Box alignment properties
    - Because conceptually, these are properties which were crafted specially for building layouts on the web
    - Different from prior techniques, which were more clever uses of properties not meant for layouts
    
- Content-based sizing, letting the browser do more
    - the concept of automatic sizing has always existed
    - https://motherfuckingwebsite.com/, web was responsive until we broke it
    - more precise terminology to allow authors to assign automatic widths to their elements
    - `width` and `height` now take 3 additional properties, `min-content`, `max-content` and `fit-content`, same goes for the min and max size properties
    - `max-content` is a box's ideal size in a given axis when given infinite available space
    - for inline-sizing, this is the narrowest inline size it can take while fitting around all its contents
    - for block sizing, it is the block size of content after layout
    - `min-content` is the smallest size a box could take that doesn't lead to overflow
    - for inline sizing, this occurs when all the soft wrap opportunities have been taken
    - for block sizing, this occurs at the max-content block size
    - Covered in CSS Intrinsic & Extrinsic Sizing Module Level 3

- Flexbox, where nobody knows the exact size of anything
    - Optimised for distributing space and aligning content in ways that web apps and complex web pages need
    - The first layout technique that introduces the concept of a parent-child relationship
    - `display` property set on the parent element to create flex formatting context
    - Covered in CSS Flexible Box Layout Module Level 1

- Grid, where we finally have real rows and columns
    - All prior grid layouts did not establish a relationship between rows and columns
    - Faux grids created by forcibly sizing the items to stack up neatly
    - Allows us to size the grid, then place items within designated grid cells
    - Rachel will be covering everything about sub-grid which is in level 2 of the specification
    - Devtools will also be updated with support for subgrid
    - Covered in CSS Grid Layout Module Level 1


