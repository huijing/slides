# Using DevTools to understand modern CSS layouts

*Presented at CSSConf EU 2019*

- Introduction
    - How this whole thing came about, Mozilla Jakarta with Alex
    - Devtools console can totally be styled up
    - Introduce self and Nexmo, console supports a surprising number of CSS properties
    - Using DevTools to discover stuff, can run through the different values, useful especially for more tricky to remember properties like blend modes and the like
    - Share with everyone what I learned about modern CSS layouts while building them and inspecting them with DevTools throughout the process

- What are modern CSS layouts?
    - Layouts built with Flexbox, Grid and Box alignment properties
    - Because conceptually, these are properties which were crafted specially for building layouts on the web
    - Different from prior techniques, which were more clever uses of properties not meant for layouts
    
- Content-based sizing, letting the browser do more
    - Covered in CSS Intrinsic & Extrinsic Sizing Module Level 3    
    - the concept of automatic sizing has always existed
    - https://motherfuckingwebsite.com/, web was responsive until we broke it
    - more precise terminology to allow authors to assign automatic widths to their elements
    - `width` and `height` now take 3 additional values, `min-content`, `max-content` and `fit-content`, same goes for the min and max size properties
    - `min-content` is the smallest size a box could take that doesn't lead to overflow
    - for inline sizing, this occurs when all the soft wrap opportunities have been taken
    - for block sizing, this occurs at the max-content block size
    - line breaking is a lot more complicated than most people give it credit for, because there is a lot of nuance depending on the language being used
    - for a lot of languages, line breaks occur at word boundaries, where spaces or punctuation are used to explicitly separate words
    - for Chinese or Japanese though, the break is per character, usually but not always, because line-breaks are prohibited before certain punctuation marks
    - if there's a comma, it will not break to be alone when the width is `min-content`, and a slight difference between the proper full-width comma and regular comma
    - some Southeast-Asian scripts, like Thai, are written without spaces between words, so text is wrapped at syllable boundaries in addition to word boundaries
    - the word “ประโยค” (prayokh) is the longest in this sentence, and if you don't read Thai, you probably wouldn't be able to tell where the break would happen
    - `max-content` is a box's ideal size in a given axis when given infinite available space
    - for inline-sizing, this is the narrowest inline size it can take while fitting around all its contents
    - for block sizing, it is the block size of content after layout

- Flexbox, where nobody knows the exact size of anything
    - Covered in CSS Flexible Box Layout Module Level 1
    - Optimised for distributing space and aligning content in ways that web apps and complex web pages need
    - The first layout technique that introduces the concept of a parent-child relationship
    - `display` property set on the parent element to create flex formatting context
    
- Grid, where we finally have real rows and columns
    - All prior grid layouts did not establish a relationship between rows and columns
    - Faux grids created by forcibly sizing the items to stack up neatly
    - Allows us to size the grid, then place items within designated grid cells
    - Rachel will be covering everything about sub-grid which is in level 2 of the specification
    - Devtools will also be updated with support for subgrid
    - Covered in CSS Grid Layout Module Level 1


