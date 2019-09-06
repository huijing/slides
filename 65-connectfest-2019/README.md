# Understanding modern CSS layouts with Firefox DevTools

*For ConnectFest 2019. This is a sort-of transcript plus my notes for the talk.*

Bom dia! I know it's early, it's the second day, maybe some of you were out late last night, so thank you all for being here today. This is my first time ever in Portugal. Porto is such a beautiful place and I want to thank the organisers for bringing me out.

My name is Hui Jing, and I work as a Developer Advocate with Nexmo, who provides communication APIs for developers who want to integrate functionality like messaging, voice or verification to their applications.

I know this is a fairly mixed audience, maybe some of you have been doing web development for years, but some of you may have just dabbled a little bit. No matter, because the main point of my talk today is to show you what is possible for web layouts with today's CSS, and explain some of the new behaviours they introduce.

And if you don't understand anything I'm saying, you'll at least get a glimpse of what it's like to be a web developer working on the frontend. It's basically resizing your browser a thousand times a day.

For the benefit of those who are not familiar with web development, DevTools is something built into most browsers that allow you to peek under the hood of what's happening on the page. Like an x-ray for your website. Web developers, like me, pretty much live in DevTools.

We usually think of DevTools as a debugging tool, called into play when something is broken. But just like browsers and web technologies have evolved over the years, so have the capabilities of DevTools. Firefox's DevTools have excellent support for the new CSS properties, particularly for layouts.

A lot of what I'll be talking about today will revolve around sizing elements on a web page. If you work on the web, you would probably relate when I say, much of our job boils down to making sure everything fits nicely on a page. But with the added complexity of not knowing where, when or how, our users are viewing our work.

Whether or not the next 40 minutes will mean anything to you, the one thing I want everyone in this room to remember is, that websites do not need to look the same in every browser.

## Flexbox, where nobody knows the size of anything

- New layout model, a lot more powerful than previous techniques we had
- Allows the browser to take over sizing based on the amount of available space
- Can be confusing at first because the end result is not what you explicitly set
- Firefox is the only browser with a Flexbox inspector, locate it at the *Layout* tab, possible to change colour of overlay
- overlay shows you outlines of each flex item, and the free space available as a texture
- will tell you the flex direction, and the wrap status
- more importantly, it tells you what the browser does when it grows or shrinks the flex item

---

- sizing of flex items depends on a number of factors, like the amount of free space available, the amount of content in the flex item and the starting width of the flex item
- the exact algorithm is sort of complicated but is outlined in the specification if you're interested
- sizing an item with flexbox involves 3 properties
    - `flex-grow`, which controls how much an item will grow relative to those in the same container when there is lots of space
    - `flex-shrink`, which controls how much an item will shrink relative to others when there isn't enough space
    - `flex-basis`, which is the starting width of the item before the browser manipulates its final size
- the key to figuring out flexbox is understanding how the `flex-basis` property works
- say I put a fixed value of `100px` as the `flex-basis` of a flex item, intuitively, many people expect to see a box of width `100px`, because we're used to being in control of our sizing instructions
- but `flex-basis` is actually the starting point from which the size of the box is calculated, key here is **starting point**, because if flex items are allowed to grow or shrink, odds are the final size will **not** be `100px`

---

- so we've got 2 flex containers with 3 flex items each, first 2 items have the same content, much longer content for the second container's last item
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
- the flex inspector allows us to visualise free space is distributed for all the different values *(activate flexbox inspector)*
- box alignment properties are meant to be used across layout models, although for now, they can only be used with flex and grid
- `justify-content` lets us adjust flex items along the **main axis**, which is the direction flex items are laid out
- `start`, `center` and `end` are **positional** keywords, which adjust the flex children's absolute position within the flex container
- `space-around`, `space-between` and `space-evenly` are **distribution** keywords, which disperse extra space between the flex children
- if we change the `flex-direction` to `column`, `justify-content` still adjusts the flex items along the **main axis** *(remember to also add a height less than viewport height)*
- it's just that the main axis is now flowing from top to bottom, so the flex items move along this direction instead

---

- the cross axis is perpendicular to the main axis
- items are stretched along the cross axis to the full height of the flex line once you apply `display: flex`
- once the `align-self` or `align-items` property is applied though, the items revert to their original heights
- an interesting value for `align-items` is `baseline`, which is useful when you have text within flex items of varying sizes and positions
- `baseline` lines them all up, so if the text within each item is related, it becomes much easier to read

---

- if there is more space in the flex container than the total height of all the flex lines *(set container height to more than 75vh)*, you'll end up with these gaps, that maybe you don't want
- Using `align-content` lets you pack your items together and align the whole block of items within the container

---

- auto margins are your friend
- unlike in the current implementation of the block formatting context, using `margin: auto` will centre an item right in the middle of the container, allocating available free space equally around all the flex item
- when you need to centre 1 item in the middle of its parent, instead of using the box alignment properties, you could just slap on a `margin: auto` on the flex child, just saying
- one thing to note is that if free space is distributed to auto margins, the alignment properties will have no effect in that dimension because the margins will have stolen all the free space left over after flexing
- a relatively common use-case is when you need 1 item in your navigation alone on the right, auto-margins make things really easy

---

- feel free to change the flex direction when necessary
- if you need a card layout with content that needs to be aligned to the bottom of the card, using `flex-direction` column, and making the main content grow with `flex: 1`, for example, is a 2-line solution

## Grid, where we finally have real rows and columns

- *(ask about people using Grid)*
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

- for the keyword values of `auto-fit` and `auto-fill`, the inspector also makes it much easier to understand what they actually do
- they are used in the context of the `repeat()` function and make use of the fact that the browser knows how large its own viewport is and hence, is best positioned to generate the perfect number of grid tracks to fill up that space
- the example here asks the browser to generate as many columns with a minimum width of 6ems that can fit into the available space
- there are only has 5 grid items though, so when the viewport is much larger than 30ems, we can see the difference between the 2 values
- with `auto-fill`, empty tracks still take up space on the grid
- with `auto-fit` though, these empty tracks are collapsed and the grid items grow, because of the max value of `1fr`, and fill up the empty space instead
- so depending on what design you have in mind, you've got options
- a good use case for this feature is having a fully responsive grid without any media queries at all
- *(switch to sneaker example)*

---

- using `grid-template-areas` to name grid areas is structurally similar to what we see rendered on the page
- each line surrounded with quotes represents a grid row, every value in the line makes up the grid column
- every line must have the same number of columns otherwise the whole thing is moot
- change your layout without having to touch the code for the grid items, only the grid areas *(change grid area of banana)*
- *(switch to green tea example)*
- here I've named the key areas of the grid to match what content is in it, like *title*, *image*, *nav*,  and so on
- when the viewport size changes, I adjust the positions of the elements by touching the CSS for only the grid container *(proceed to resize browser and hit 3 layouts)*
- you can see how the grid area names, and hence the grid item assigned to it, have been tweaked

## Wrapping up

These new layout techniques allow designers and developers to spend less time wrangling their code and focus their efforts on the actual design of more innovative and adaptive layouts that work well across as many devices and browsers as possible.

And I want to end off by saying, if you've been on the fence about trying out these new features because they seem complicated and hard, just go for it.