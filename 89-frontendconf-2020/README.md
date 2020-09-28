# Demystify Modern CSS Layouts with DevTools

*For FrontendConf 2020. This is a sort-of transcript plus my notes for the talk.*

## Content-based sizing, letting the browser decide
  
- the concept of automatic sizing has always existed
- browsers have always managed to figure out how much space content should take up without any intervention from us
- content would reflow without overlapping
- covered in CSS Intrinsic & Extrinsic Sizing Module Level 3
- gives authors the option of assigning automatic widths to the elements on their page
- `width` and `height` now take 3 additional keyword values, `min-content`, `max-content` and `fit-content`

---

- `min-content` is the smallest size a box could take that doesn't lead to overflow, so inline content will break multiple lines
- line breaking might be something most of us don't give a second thought to, but there is lot of nuance depending on the language being used
- for many languages, like English or Russian, line breaks occur at word boundaries, where spaces or punctuation are used to explicitly separate words
- browsers will not break words by default, so the word `content` plus the full stop is treated as a single entity
- and that ends up being the width of the first box
- for Chinese or Japanese though, the break is per character most of the time, but not always, because there are rules about certain characters that are not allowed to start or end a line
- East Asian scripts also use full-width punctuation, so with a full-width comma, this box is now 2 characters wide
- some Southeast-Asian scripts, like Thai, are written without spaces between words, so text is wrapped at syllable boundaries in addition to word boundaries

---

- `max-content` is a box's ideal size in a given axis when given infinite available space
- content will take up as much space as required to lay itself out on 1 line
- the word “ประโยค” (prayokh) is the longest in this sentence, and if you don't read Thai, you probably wouldn't be able to tell where the break would happen

---

- `fit-content` unfortunately is not a supported value at this point but all 3 keywords are supported when used in the context of a grid formatting layout
- `fit-content` is not a fixed value like the previous 2 keywords, it is a range between the `min-content` size and the `max-content` size or length-percentage defined in the function, whichever is smaller
- so for this example, the 3 columns are sized with `min-content`, `max-content` and `fit-content(300px)` respectively
- the `max-content` width of this run of text is `462px`
- when I resize the browser, `fit-content()` shrinks to a smallest width of `min-content`, but grows until it hits `300px` and stops
- if I change the cap value to something larger than its `max-content` width, like `500px`, the column doesn't reach `500px`, it will just stop at its `max-content` size of 462px

## Flexbox, where nobody knows the size of anything

- the first layout model that was designed specifically for building web layouts, a lot more powerful than previous techniques we had
- allows the browser to take over sizing based on the amount of available space
- can be confusing at first because the end result may not be what you explicitly set
- Firefox is the only browser with a Flexbox inspector, locate it at the *Layout* tab, possible to change colour of overlay
- overlay shows you outlines of each flex item, and the free space available as a texture
- will tell you the flex direction, and the wrap status
- more importantly, it tells you what the browser does when it grows or shrinks the flex item

---

- what I find really cool about flexbox is the amount of control it gives us over the distribution of free space between content
- sizing of flex items depends on a number of factors, like the amount of free space available, the amount of content in the flex item and the starting width of the flex item
- the exact algorithm is sort of complicated but is outlined in the specification if you're interested
- the key to figuring out flexbox is understanding how the `flex-basis` property works
- say I put a fixed value of `100px` as the `flex-basis` of a flex item, intuitively, many people expect to see a box of width `100px`, because we're used to being in control of our sizing instructions
- but `flex-basis` is actually the starting point from which the size of the box is calculated, key here is **starting point**, because if flex items are allowed to grow or shrink, odds are the final size will **not** be `100px`

---

- sometimes you may encounter a scenario where the same flex values give you different end results
- here are 2 flex containers with 3 flex items each, first 2 items have the same content, much longer content for the second container's last item
- both only have `display: flex` set on the parent element and nothing on the children
- it is totally possible to change the different flex values but by default, they are `0 1 auto`, meaning the items won't grow beyond their starting widths *(resize until enough room for all content)*
- a `flex-shrink` value of `1` means all the items will shrink at the same rate if there isn't enough space for all the content to be a single line
- this is why the the second flex item in the second container takes up less space at this point, because it started shrinking first
- when the flex basis is `auto`, this is typically equivalent to `max-content` width 
- when there is no explicit width set on a flex item, i.e. when both the width of the flex item and its `flex-basis` is `auto`, the browser will use content size as the starting point *(make sure to show flex item diagram in Layout panel)*
- if there is an explicit width set *(set width to 200px)*, then that becomes the starting point of size calculation, and because the `flex-grow` factor is `0`, this item ends up being `200px`
- when there is an explicit `flex-basis` value, even if there is a width on the flex item, the `flex-basis` value trumps it and that value becomes the starting point, and this item ends up being `300px`

---

- the next bit I want to cover is understanding the difference between having a `flex-basis` of `auto` versus a `flex-basis` of `0`
- again, I have 2 sets of 3 items, but this time, with exactly the same content
- all the items have `flex-shrink` set to 1, so they will shrink at the same rate when there isn't enough space
- but I've put in varying `flex-grow` values of 1, 2 and 0 respectively, to demonstrate how free space gets added to your flex items when there is excess space
- the first set uses `auto` as the `flex-basis`, which means the starting width for each item is its content width
- the available free space is the total width of the container minus the widths of the content within the 3 flex items
- that free space is distributed between items 1 and 2 in the ratio of 1:2, respectively
- inspector shows you the starting width of each item and how much each of them grew by
- the second set has `flex-basis` set to `0`, that means there is no starting width for each item
- the free space available is equivalent to the total width of the container minus the `min-content` width of the third item, because again, the browser doesn't break words so that's as small as it can go
- then that free space is divided between item 1 and 2 in the ratio of 1:2 as well
- the second item's size is exactly double that of the first item, but this is not the case when `flex-basis` is set to `auto`, because content widths are a factor in that scenario

---

- aligning items with the box alignment properties is also a big plus
- the flex inspector allows us to visualise free space is distributed for all the different values *(activate flexbox inspector)*
- box alignment properties are meant to be used across layout models, although for now, they can only be used with flex and grid
- `justify-content` lets us adjust flex items along the **main axis**, which is the direction flex items are laid out
- can move all the flex children within the container or disperse the extra space between them
- if we change the `flex-direction` to `column`, `justify-content` still adjusts the flex items along the **main axis** *(remember to also add a height less than viewport height)*
- it's just that the main axis is now flowing from top to bottom, so the flex items move along this direction instead

---

- the cross axis is perpendicular to the main axis
- items are stretched along the cross axis to the full height of the flex line once you apply `display: flex`
- once any self-alignment properties (`align-self` or `align-items`) are applied though, the items revert to their original heights
- this behaviour also happens for grid items, which will shrink to fit their content
- an interesting value for `align-items` is `baseline`, which is useful when you have text within flex items of varying sizes and positions
- `baseline` lines them all up, so if the text within each item is related, it becomes much easier to read

---

- if there is more space in the flex container than the total height of all the flex lines *(set container height to more than 75vh)*, you'll end up with these gaps, that maybe you don't want
- Using `align-content` lets you pack your items together and align the whole block of items within the container

## Grid, where we finally have real rows and columns

- *(ask about people using Grid)*
- regardless of whether you have used Grid in production or are just trying it out for the first time, the Grid Inspector tool can really help when it comes to using grid
- most basic usage of laying out items with grid is setting the track sizes of your rows and columns
- the browser will automatically place items into the grid using a very well thought through algorithm, which is defined in the specification
- but things being placed one after another is behaviour most of us are fairly familiar with already

---

- what's special about grid is how simple it is to manually place items in both dimensions
- since my favourite analogy for this is placing pieces on a chessboard, that's what this is
- this is a simple 3x3 grid, with 3 grid items
- the properties which control their position will be `grid-row` and `grid-column`
- so here is where the ability to see the line numbers comes in very handy, especially if you have more complex layouts involving lots of columns

---

- the `grid-template-areas` property is used to name grid areas 
- fond of this syntax because it is structurally similar to what we see rendered on the page
- especially useful if you are doing full page layouts involving numerous grid items
- each line surrounded with quotes represents a grid row, every value in the line makes up the grid column
- every line must have the same number of columns otherwise the whole thing is moot
- change your layout without having to touch the code for the individual grid items, you only modify the grid areas *(change grid area of boat)*
- *(switch to green tea example)*
- here I've named the key areas of the grid to match what content is in it, like *title*, *image*, *nav*,  and so on
- when the viewport size changes, I can adjust the positions of the elements by touching the CSS for only the grid container *(proceed to resize browser and hit 3 layouts)*
- with the Grid Inspector, you can see how the grid area names, and hence the grid item assigned to it, have been tweaked

---

- relatively new feature that Firefox started supporting since version 66 is the ability to animate grid columns and rows
- this was always written into the specification but it took some time for browsers to ship this feature
- intuitively, some of us might picture the grid items moving across tracks when animated but that's not the case at all
- inspecting with DevTools will show exactly what the browser is animating *(trigger grid overlay for grid5.board)*
- this example consists of a grid container of 2 rows and 2 columns with 1 grid item in it
- the CSS animation keyframes are interpolating between the different column and row sizes I've set
- the grid item's alignment has been set to the bottom-right corner of the grid cell it was placed in
- so this is where having corresponding DevTools support for a new CSS feature really helped in my understanding of how things worked

---

- sometimes I get the question of which layout model is better, Flexbox or Grid, and to me that's the wrong question to ask
- if you can recall when I talked a bit about the box alignment properties earlier, I mentioned that using self-alignment properties will result in the item shrinking to fit its content
- so if we have a design like this, *(switch to Malerei, Fotografie, Film)*, with borders that are along the grid lines, but content that is smaller than the cell, you will need to use **both** Flexbox and Grid
- *(target arrow)* if we remove `display: flex` on this grid cell and convert the code to use box alignment properties on grid, you will see what I mean
- *(deactivate flex, add align-self: center)*, the grid cell shrinks to fit, and the border shrinks with it
- perfectly acceptable to make a grid item a flex container
- so it's not about Flexbox OR Grid, it's about Flexbox AND Grid, really

## Flexible sizing, responsive design powered up

- flexible sizing is also a big thing when it comes to grid and is a pretty interesting aspect of building modern CSS layouts
- previously we've always used relative units like percentages, or the newer viewport units, but the issue with those is that they make all your elements change in size at the **same** rate
- grid introduces the `fr` unit, as well as the `minmax()` function, and together with other intrinsic sizing values like `fit-content()` and `auto`, we now can have variable rates of change
- all these sizing units are fully supported in a grid formatting context, and are applied with the `grid-template-columns` property
- warning, lots of browser resizing coming up *(make sure console view is triggered)*
- alternative talk title is “you mean you don't resize your browser a thousand times a day?”

---

- *(toggle 1 for titles, toggle 2 to hide 1–4, toggle 3 to hide 5–8)*
- `fr` units versus `auto`
- let's compare the difference between `fr`, in green, and `auto`, in blue
- `fr` represents a fraction of leftover space in the grid container, so whenever there is extra space it will always go to an `fr` sized column
- but it is also the first to be taken away when there isn't enough space
- `auto` will take up as much space as necessary without breaking lines, like `max-content` but not as rigid
- when used together with `fr`, any `auto` will cap itself at `max-content` width no matter how much the viewport grows
- but when there isn't enough space, `auto` will keep the `max-content` width until `fr` has given up all its free space before shrinking itself

---

- `fit-content()` versus `minmax()` 
- `fit-content()` and `minmax()` behave quite similarly, they are both a range of values with a minimum and maximum limit
- `minmax()` takes 2 arguments, the first one being the minimum size and the second one being the maximum, and we've already covered how `fit-content()` works earlier
- looking at example #5, when there isn't enough space, we've already mentioned that `fr` sized columns are the first to lose size
- but after that, you'll notice that `fit-content()` and `auto` shrink and reach their minimum content size at the same time
- moving down to example #6, with `minmax()`, `auto` and `fit-content`, things get a bit interesting because *when* the column grows or shrinks is different
- `auto` starts off with all the free space when there's plenty of it, then gives it up as space gets taken away
- once `auto` hits `max-content` size, it stops shrinking and space gets taken away from `minmax()` instead
- however, at some point, all 3 columns start to shrink again, exactly when I can't say, **but** that point allows all 3 to end up hitting their minimum size *at the same time*
- *(refer to example #6)* in a growth scenario, where there is lots of space, `fit-content()` gets capped at its `max-content` width, while `auto` and `minmax()` continue to grow
- once `auto` hits `max-content` size though, it pauses growing while `minmax()` continues to absorb the free space until it hits the upper limit of `400px`, after which `auto` takes over the rest of the free space

---

- *(show Florence)* with such variable sizing, we have more options for editorial designs that adapt well to a greater range of viewport sizes
- there are 2 layouts here, which pretty much look the same at this wide viewport, but as the viewport gets smaller, the difference is apparent
- with percentage sizing, the image gets to small, the text gets squished up, and we would end up writing a different sets of sizes with a media query for narrow viewports
- *hide float (on top right corner) and trigger overlay*
- but with the flexible sizing units, the layout is more robust across a much wider range of viewport sizes
- individual CSS properties might be good, but it's when they are combined together in creative ways when magic can potentially happen
- grid also allows us to do things like overlap so much easier than before, which provides even more opportunities to use other properties like blend modes, background-clip, masks, to do interesting things *(show James)*
- this is a relatively crude example of adding blend modes to overlapping content for some artistic effects that morph and change with the viewport size
- what we have now is so much more room for creative expression on the web

## Wrapping up

CSS is evolving and becoming more powerful. Many of the older layout hacks like nested HTML tables, for example, are no longer necessary. But with layout properties that were specifically designed to suit the dynamic nature of the web, there are new concepts to be learned.

I realised that DevTools can be an avenue to encourage developers to start trying out new CSS features by providing guidance as part of the debugging process. Flexbox really clicked for me when I saw how the browser calculated the size of my items.

The Grid inspector made it easier for me to experiment with more complicated designs because of features like area names and line numbers, supporting multiple grid overlays, UI details like repositioning line number tags at the edges of the windows. Shipping new CSS features with corresponding DevTools support is one of my favourite things about Firefox DevTools.

And I want to end off by saying, *(trigger gif)* if you've been on the fence about trying out these new features because they seem complicated and hard, just do it. It's not as scary as you think.
