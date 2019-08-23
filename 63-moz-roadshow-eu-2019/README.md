# Understanding modern CSS layouts with Firefox DevTools

## On how cool DevTools console can be

I learned a lot about the DevTools from my good friend and fellow TechSpeaker, Alex Lakatos. One of the things that stood out to me most was that the DevTools console can totally be styled up with CSS. But just like support of CSS on actual web pages differs between browsers, this is also the case of CSS support in the console.

Case in point, this fancy CSS-only talk title in the console. This is what it looks like in Chrome. And what it looks like the Safari. Looks way better in Firefox, but that's just my opinion. 

I also love emojis, and these pretty much some up who I am as a person. If you're curious about any of them, you can ask me about them later. Finally, more proof that Firefox supports the most CSS properties in the console. I mean, come on, it's vertical writing in your console. I love it.

## On modern CSS layouts

When I refer to modern CSS layouts, I'm talking about layouts built with Flexbox, Grid and Box alignment properties. Because conceptually, these are properties which were crafted specially for building layouts on the web.

They are different from prior techniques, like HTML tables for layout, or floats, which were more clever uses of properties whose intended purpose was not for layout to begin with. But resourceful developers, like yourselves, found plenty of workarounds and hacks to work with whatever features were available.

These days, we have a much more robust toolset for doing layouts on the web.

## Content-based sizing, letting the browser decide
  
- the concept of automatic sizing has always existed
- browsers have always managed to figure out how much space content should take up without any intervention from us
- content would reflow without overlapping
- covered in CSS Intrinsic & Extrinsic Sizing Module Level 3
- gives authors the option of assigning automatic widths to the elements on their page
- `width` and `height` now take 3 additional keyword values, `min-content`, `max-content` and `fit-content`

---

- `min-content` is the smallest size a box could take that doesn't lead to overflow, so inline content will break multiple lines
- line breaking is a lot more complicated than most people give it credit for, because there is a lot of nuance depending on the language being used
- for a lot of languages, line breaks occur at word boundaries, where spaces or punctuation are used to explicitly separate words
- the browser won't break words though, so the word `content` plus the full stop is treated as a single entity
- and that ends up being the width of the first box
- for Chinese or Japanese though, the break is per character, usually but not always, because there are rules about certain characters that are not allowed to start or end a line
- East Asian scripts also use full-width punctuation, so with a full-width comma, this box is now 2 characters wide
- some Southeast-Asian scripts, like Thai, are written without spaces between words, so text is wrapped at syllable boundaries in addition to word boundaries

---

- `max-content` is a box's ideal size in a given axis when given infinite available space
- content will take up as much space as required to lay itself out on 1 line
- the word “ประโยค” (prayokh) is the longest in this sentence, and if you don't read Thai, you probably wouldn't be able to tell where the break would happen

---

- `fit-content` unfortunately is not a supported value at this point but all 3 keywords are supported when used in the context of a grid formatting layout
- `fit-content` is not a fixed value like the previous 2 keywords, it is a range between the `min-content` size and the `max-content` size or length-percentage defined in the function, whichever is smaller
- if you look at the Chinese and Thai examples, which have exactly the same content, their smallest size is `min-content`, while their largest size ends up being `300px`
- if I change the cap value to something larger than `max-content`, like `500px`, then `max-content` becomes the largest size

---

## Flexbox, where nobody knows the size of anything

- Firefox is the only browser with a Flexbox inspector, locate it at the *Layout* tab, possible to change colour of overlay
- overlay shows you outlines of each flex item, and the free space available as a texture
- will tell you the flex direction, and the wrap status
- more importantly, it tells you what the browser does when it grows or shrinks the flex item

---

- one thing to note is that the specification recommends you use the keywords because they cover the most common use cases, they are `initial`, `none`. `auto` and any `<positive integer>` *(show where to see computed values)*
- sizing of flex items depends on a number of factors, like the amount of free space available, the amount of content in the flex item and the starting width of the flex item
- the exact algorithm is sort of complicated but is outlined in the specification if you're interested
- things get clearer once you have a better understanding of `flex-basis`
- if I put a fixed value of `100px` as the `flex-basis`, it's not surprising that some people expect to see a box of `100px`, because we're used to being in control of our sizing instructions
- but `flex-basis` is actually the starting point from which the size of the box is calculated, key here is **starting point**, because if flex items are allowed to grow, odds are the final size will **not** be `100px`

---

- so if we look at this next example, it appears that the browser allocates space based on content, but let's break down what's actually happening
- reminder: browser will not break words
- so we've got 2 flex containers with 3 flex items each, first 2 items have the same content, much longer content for the second container's last item
- both only have `display: flex` set on the parent element and nothing on the children
- this means all children have the values of `0 1 auto`, meaning the items won't grow beyond their starting widths *(resize until enough room for all content)*
- a `flex-shrink` value of `1` means all the items will shrink at the same rate if there isn't enough space for all the content to be a single line
- a flex basis of `auto` resolves to `content`, which is an automatic size based on the content within the flex item, typically equivalent to `max-content` width 
- when there is no explicit width set on a flex item, i.e. its value is `auto`, and the `flex-basis` is also `auto`, the browser will use content size as the starting point
- if there is an explicit width set *(set width to 200px)*, then that becomes the starting point of size calculation, and because the `flex-grow` factor is `0`, this item ends up being `200px`
- when there is an explicit `flex-basis` value, even if there is a width on the flex item, the `flex-basis` value trumps it and that value becomes the starting point, and this item ends up being `300px`
- first column can't shrink any more, but second and third start shrinking at the same time, then second column hits `min-content` and only the third column continues to shrink until `min-content`
- eventually both sets of content's first and second column are the same width at `min-content`

---

- the next bit I want to cover is understanding the difference between having a `flex-basis` of `auto` versus a `flex-basis` of `0`
- again, I have 2 sets of 3 items, but this time, with exactly the same content
- the items are allowed to both grow and shrink, but each item in the set has a different `flex-grow` factor
- `flex-shrink` is `1` for all the items to make things easier to observe
- the key difference between both sets is that the first set uses `auto` as the `flex-basis`, which means the starting width for each item is the width of its content
- the available free space is the total width of the container minus the widths of the content within the 3 flex items
- that free space is distributed between items 1 and 2 in the ratio of 1:2, respectively
- inspector shows you that item 1 grew by x, and item 2 grew by 2x, and also shows you the starting width of each item
- the second set has `flex-basis` set to `0`, that means there is no starting width for each item
- the free space available is equivalent to the total width of the container minus the `min-content` width of the third item, because again, the browser doesn't break words so that's as small as it can go
- then that free space is divided between item 1 and 2 in the ratio of 1:2 as well
- the second item's size is exactly double that of the first item, but this is not the case when `flex-basis` is set to `auto`, because content widths are a factor in that scenario

---

- aligning items with the box alignment properties is also a big plus
- the flex inspector allows us to visualise free space is distributed for all the different values *activate flexbox inspector*
- box alignment properties are meant to be used across layout models, although for now, they can only be used with flex and grid
- my trick for remembering which properties apply to which axis is that I associate the term “justify” with text processing software's justification options, so in my mind, justify affects the direction text flows
- because there are only 2 directions, “align” must be for the other direction
- when using flexbox, we have access to 4 of the 6 available properties, `justify-items` and `justify-self` do not apply here because they are meant to justify a box within its containing block along the main axis, but there is more than 1 item in the main axis
- `justify-content` lets us adjust flex items along the main axis
- `start`, `center` and `end` are **positional** keywords, which adjust the flex children's absolute position within the flex container
- `space-around`, `space-between` and `space-evenly` are **distribution** keywords, which disperse extra space between the flex children
- items are stretched along the cross axis to the full height of the flex line once you apply `display: flex`
- once the `align-self` or `align-items` property is applied though, the items revert to their original heights
- an interesting value for `align-items` is `baseline`, which is useful when you have text within flex items of varying sizes and positions
- `baseline` lines them all up, and if the text within each item is related, makes it easier to comprehend
- if there is more space in the flex container than the total height of all the flex lines, you'll end up with these gaps, that maybe you don't want
- `align-content` lets you pack your items together and align the whole block of items within the container

---

## Grid, where we finally have real rows and columns

- *ask about people using Grid*
- whether you're just starting out with grid, or already using it in production, Firefox's grid inspector is still the best tool available at the moment
- toggle the overlay by clicking the grid tag on the *Inspector*, the waffle icon in *Rules*, or select your grid of choice from the *Layout* panel
- like the Flexbox inspector, you can change the colour of the overlay
- particularly helpful because Firefox now supports multiple grid overlays
- great if you are using nested grids or have more than 1 grid on the same page
- extending grid lines infinitely becomes quite helpful if you want to check on the alignment of multiple grids *(toggle grid1 and grid4)*
- additional options include displaying line numbers and grid area names

---

- most basic usage of laying out items with grid is setting the track sizes of your rows and columns
- the browser will automatically place items into the grid using a very well thought through algorithm, which is defined in the specifications
- but things being placed one after another is behaviour most of us are fairly familiar with already
- what's special about grid is how simple it is to manually place items in both dimensions
- since my favourite analogy for this is placing pieces on a chessboard, that's what this is
- this is a simple 3x3 grid, with 3 grid items
- the property which controls their position will be `grid-row` and `grid-column`
- for every    

---

- using `grid-template-areas` to name grid areas is structurally similar to what we see rendered on the page
- each line surrounded with quotes represents a grid row, every value in the line makes up the grid column
- every line must have the same number of columns otherwise the whole thing is moot
- change your layout without having to touch the code for the grid items, only the grid areas *(change grid area of banana)*
- *(Switch to Braun poster example)*
- using named grid areas can make it easier to adjust the positions of certain elements when the viewport size changes *(proceed to resize browser and hit 3 layouts)*
- non-rectangular or disconnected regions may be permitted in future, but for now, just rectangles, no Tetris shapes or that sort of thing

---

- like Flexbox, alignment properties are applicable to Grid, and we have all 6 values at our disposal
- for Grid, we can use `justify-items` and `justify-self` to adjust content within its grid cell along the inline axis *(do start, center, end)*
- another category of alignment properties that I didn't mention earlier, are **overflow** alignment keywords
- sometimes there will be situations where the total size of the grid items is larger than the grid container, causing overflow
- for example, in this case, if the `justify-content` value is set to `end`, you will end up with data loss, because it's impossible to scroll to the overflowed content
- `unsafe` will honour the specified alignment even if this scenario occurs, while `safe` will change the alignment to one that avoids data loss

---

- if you noticed, for both Flexbox and Grid, the moment an alignment property was set on an item, it shrinks to fit its contents along the respective axis of alignment
- so if we have a design like this, *(switch to Malerei, Fotografie, Film)*, with borders that are along the grid lines, but content that is smaller than the cell, you will need to use both Flexbox and Grid
- *(target arrow)* if we remove `display: flex` on this grid cell and convert the code to use box alignment properties on grid, you will see what I mean
- *(deactivate flex, add align-self: center)*, the grid cell shrinks to fit, and the border shrinks with it
- so it's not about Flexbox OR Grid, it's about Flexbox AND Grid, really

---

- for the keyword values of `auto-fit` and `auto-fill`, the inspector also makes it much easier to understand
-  

## Flexible sizing, responsive design powered up

- flexible sizing is also a big thing when it comes to grid and is a pretty interesting aspect of building modern CSS layouts
- previously we've always used relative units like percentages, or the newer viewport units, but the issue with those is that they make all your elements change in size at the **same** rate *(show cat example)*
- grid introduces the `fr` unit, as well as the `minmax()` function, and together with other intrinsic sizing values like `fit-content()` and `auto`, we now can have variable rates of change
- all these sizing units are fully supported in a grid formatting context, and are applied with the `grid-template-columns` property
- warning, lots of browser resizing coming up

---

- `fr` units versus `auto`
- let's compare the difference between `fr`, in green, and `auto`, in blue
- `fr` represents a fraction of leftover space in the grid container, so whenever there is extra space it will always go to an `fr` sized column
- but it is also the first to be taken away when there isn't enough space
- `auto` will take up as much space as necessary without breaking lines, like `max-content` but not as rigid
- without the presence of `fr`, any `auto` sized columns will absorb that free space
- when there isn't enough space, `auto` will keep the `max-content` width until `fr` has given up all its free space before shrinking itself

---

- `fit-content()` versus `minmax()`
- `fit-content()` and `minmax()` behave quite similarly, they are both a range of values with a minimum and maximum limit
- `minmax()` takes 2 arguments, the first one being the minimum size and the second one being the maximum, and we've already covered how `fit-content()` works earlier
- when there isn't enough space, we've already mentioned that `fr` sized columns are the first to lose size
- but after that, you'll notice that `fit-content()` and `auto` shrink at the same rate
- if you look at the second set, with `minmax()`, `auto` and `fit-content`, things get a bit interesting because *when* the column grows or shrinks is different
- `auto` starts off with all the free space when there's plenty of it, then gives it up as space gets taken away
- once `auto` hits `max-content` size, it stops shrinking and space gets taken away from `minmax()` instead
- however, at some point, all 3 columns start to shrink again, exactly when I can't say, **but** that point allows all 3 to end up hitting their minimum size *at the same time*
- *(refer to second set)* in a growth scenario, where there is lots of space, `fit-content()` gets capped at its `max-content` width, while `auto` and `minmax()` continue to grow
- once `auto` hits `max-content` size though, it pauses growing while `minmax()` continues to absorb the free space until it hits the upper limit of `400px`, after which `auto` takes over the rest of the free space

---

- *(show Florence)* with such variable sizing, we have more options for editorial designs that adapt well to a greater range of viewport sizes
- *hide float (on top right corner) and trigger overlay*
- grid also allows us to do things like overlap so much easier than before

## Wrapping up

I'm really excited for all this to become mainstream and to have more designers and developers start considering the possibilities in their designs.

Thank you all for your attention.