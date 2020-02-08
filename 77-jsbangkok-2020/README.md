# DevTools, the CSS advocate in your browser

*For Javascript Bangkok 1.0.0. This is sort of a transcript and notes for the talk.*

สวัสดีค่ะ.

I am very happy to be able to be here at Javascript Bangkok. Especially since I'm talking about CSS. But don't worry, I'm only up here for 25 minutes, so please hear me out. I loved CSS ever since I first picked up web development. And I like Javascript too, I just love CSS more.

Sometimes, even though you love something a lot, over time that feeling might fade. Not so with me and CSS. In fact, I'm even more excited about CSS today than I was when I first started. Why? Because like every good relationship, both parties must evolve and grow.

And CSS has evolved and grown so much. I'd like to think I did too, but that's another conversation. Recently I've been thinking more and more about how to show people who find CSS confusing, frustrating or are new to it, how things are easier now than before.

A light bulb went off in my head last year after the flexbox inspector was released in Firefox DevTools. Because it showed me what the browser was doing to my flex items. I mean, I always relied heavily on the grid inspector for showing me what was going on with my grid items but the flexbox inspector really opened my eyes to the possibilities of what DevTools could be.

Because of the limited time, I picked a few specific CSS properties to talk about today. Let's start with flexbox.

## `flex-basis`

- can be confusing for some people because the end size of your box is not entirely determined by you
- the first layout model that establishes a parent-child relationship between an element and its direct children
- applying `display: flex` on a box establishes a flex formatting context its children participates in
- browser calculates the end size based on the different values of `flex-grow`, `flex-shrink` and `flex-basis`
- This mental model is not easy to wrap your head around, so DevTools can help
- `flex-basis` is the property many developers misunderstand
- it is the **starting** point from which the browser calculates the end size
- implies the value you input here may or may not end up being the final size, especially if your items are allowed to grow or shrink
- *highlight 3rd item in flex-auto example, toggle overlay*
- `flex: initial` resolves to a `flex-grow` value of `0`, a `flex-shrink` value of `1` and a `flex-basis` of `auto`
- *demonstrate values with computed tab, browser styles, find property*
- flexbox takes into account free space in the flex container
- free space is space that is not occupied by text nodes
- browser will not break words, so the minimum size an item can shrink to is the length of the longest word, that's called `min-content`
- `max-content` is the length which can fit all content into a single line without breaking
- when there is no explicit width set on a flex item, i.e. its value is `auto`, and the `flex-basis` is also `auto`, the browser will use content size as the starting point
- a flex basis of `auto` resolves to `content`, which is usually the `max-content` width
- - *highlight 3rd item in flex-auto example, open layout panel to show*
- if there is an explicit width set *(set width to 200px)*, then that becomes the starting point of size calculation, and because the `flex-grow` factor is `0`, this item ends up being `200px`
- when there is an explicit `flex-basis` value, even if there is a width on the flex item, the `flex-basis` value trumps it and that value becomes the starting point, and this item ends up being `300px`
- a `flex-basis` of `auto` takes into account the size of content within the flex items, so the free space distributed by `flex-grow` is whatever is left over
- when the `flex-basis` is set to `0`, the content size is disregarded *highlight second flexbox example*
- the only difference between these 3 flex items are their different `flex-grow` values, 
- so all the free space available will be distributed among items that are allowed to grow, so item 2 is twice the size of item 1
- when there is no more space left, the inspector will tell you the minimum size has been reached
- *give item 2 a really big flex-grow value to show how inspector tells you the minimum size*

## `grid-template-areas`

- *highlight overay options in layout panel*
- the `grid-template-areas` property is used to name grid areas 
- fond of this syntax because it is structurally similar to what we see rendered on the page
- especially useful if you are doing full page layouts involving numerous grid items
- each line surrounded with quotes represents a grid row, every value in the line makes up the grid column
- every line must have the same number of columns otherwise the whole thing is moot
- change your layout without having to touch the code for the individual grid items, you only modify the grid areas *(change grid area of elephant)*
- with the Grid Inspector, you can see how the grid area names, and hence the grid item assigned to it, have been tweaked

## Subgrid line numbers

- grid was revolutionary when it first came out in 2017 but that didn't mean it was perfect
- initial implementation of grid only allows direct grid children to participate in the grid
- any content within the grid item would not be able to align itself with the main grid
- allows nested grids to participate in the sizing of their parent grids
- line numbers of the subgrid start from `1`, *refer to the example after toggling subgrid lines*
- `subgrid` is a **sizing** property, you still must use `display: grid` on your nested grids
- use the `subgrid` keyword for `grid-template-rows` or `grid-template-columns`
- allows content within the grid item to line-up with the outer grid

## `polygon` value

- possible to let text flow around a shape or even image
- with the `shape-outside` property and `clip-path` property
- both make use of the shape basic shape values, like `circle()`, `ellipse()`, `polygon()`
- *inspect element then switch to rules panel*
- `shape-outside` controls what the text flows around
- `clip-path` controls the shape of how the box is being clipped
- both properties can be used individually, and seeing how changing the values via DevTools makes it easier to understand how they work together

## Chibi-chat demo

- a lot that CSS can do now, a layout like this chat where you want the messages to start at the bottom can be done with flexbox and the box alignment properties
- *type something into the livechat window*
- *switch to console to plug the coupon code*
- alternating left-right layout can be done without rearranging the markup, so you can maintain a consistent hierarchy
- with shapes, your text can even flow around an image
- *switch to Chrome window for agent interface*
- have the footer be neatly at the bottom of the window when there isn't enough content at first can be easily done with flexbox now
- have personal wishlist of more features that DevTools can have for this purpose like Logical Properties and mixed writing modes and we can feedback this to the different DevTools teams
- but my wish is for more people to try out the new properties, you don't have to use all of them, but know that there are lots more possibilities now that our toolbox has expanded
- hope that DevTools can help you figure things out just like it helped me