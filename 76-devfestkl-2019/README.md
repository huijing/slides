# Making CSS from good to great: the power of Subgrid

*For Devfest Kuala Lumpur 2019. This is sort of a transcript and notes for the talk.*

## Demystify Grid with DevTools

- regardless of whether you have used Grid in production or are just trying it out for the first time, the Grid Inspector tool can really help when it comes to using grid
- most basic usage of laying out items with grid is setting the track sizes of your rows and columns
- the browser will automatically place items into the grid using a very well thought through algorithm, which is defined in the specification
- but things being placed one after another is behaviour most of us are fairly familiar with already

---

- what's special about grid is how simple it is to manually place items in both dimensions
- it is like placing stones on a Go board, like this example, where each stone is a grid item
- the properties which control the grid item's position will be `grid-row` and `grid-column`
- so here is where the ability to see the line numbers comes in very handy, especially if you have more complex layouts involving lots of columns, like here I have 9, but a real Go board would have 19

---

- the `grid-template-areas` property is used to name grid areas 
- fond of this syntax because it is structurally similar to what we see rendered on the page
- especially useful if you are doing full page layouts involving numerous grid items
- each line surrounded with quotes represents a grid row, every value in the line makes up the grid column
- every line must have the same number of columns otherwise the whole thing is moot
- change your layout without having to touch the code for the individual grid items, you only modify the grid areas *(change grid area of sushi)*
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

- when we apply a `display: grid` onto an element, it creates a grid formatting context in which its child elements participates in
- this allows the grid items to be laid out onto the defined grid
- however, the grid formatting context only applies to child elements, and not grandchild elements and beyond
- there are quite a number of use-cases where we do want grand-child elements and deeper to line up with the outermost grid. 
- this capability had been written into the specification early on because it was important
- but due to the complexity involved, it was deferred to level 2 so more time could be spent making sure the specification was robust

## Demystify Subgrid with DevTools

- can specify subgrid in one dimension only, i.e. follow the parent grid only for row or column then specify own track size in other dimension
- using the `subgrid` keyword in respective dimension
- can also follow parent grid in one dimension, then let the browser generate implicit tracks for other dimension
- although subgrids inherit the line names from their parents, can also name subgrid lines
- line numbers of the subgrid start from `1`, *refer to the example after toggling subgrid lines*

---

- grid gaps on the parent grid are also inherited by the subgrid
- but you can override this value in the subgrid
- this will affect the sizing of the subgrid items
- *set subgrid gap to 0*
- *set subgrid gap to 2em*
- if the parent has a gap of `1em` but the subgrid has a gap of `2em`, even though the subgrid items are still aligned to the parent grid, the subgrid item is now 0.5em smaller

---

- any margins, borders and paddings applied to each edge of the subgrid will “accumulate” as you nest more subgrids
- here we have a grid, a subgrid and an additional nested subgrid, so 3 layers
- the outermost grid also has grid gap applied
- item 2 and item 3 are grandchildren of the outermost grid
- item 2 is aligned according to the outermost grid's columns but its size has been reduced by the margin, border and paddings of its parent and grandparent grid
- item 3 does not have this issue because it is not at an edge

---

- because subgrids follow the sizing of its parent, it will not generate implicit grid tracks for extra items
- if you make a subgrid item span larger than the parent's tracks, the browser will clamp to parent track's sizing
- item 2 has it's `grid-column` value set to `span 3` so it is supposed to span 3 column tracks but it cannot, so it is clamped at 2
- even if I change the value to 4, 5 and beyond, its size will max out at 2 columns
- if there are additional items in the subgrid than there are grid cells for, the items will all stack up in the last track
- if i reduce the size of subgrid from 3 columns to 2 columns, you can see that item E and F end up all stacked in the bottom left corner

---

- practical use cases for subgrid include inline labels for form elements
- semantically, a form is made up of a list of input fields, and these fields will have a corresponding label element
- previously, if we wanted the labels to be the width of the longest label, we could not maintain this markup structure
- but now we can, because within label field within the list item knows about the grid structure of the parent grid, which is the unordered list

---

- one way to make sure your element spans all the rows or columns of your grid is to use `1 / -1` as the track size
- the limitation is, you cannot do this if the number of rows or columns is not explicitly stated
- when we don't know how much content a grid would contain, we usually just let the browser figure out the number of tracks automatically without specifying a number
- but if we do that, we cannot use `1 / -1`
- subgrid can resolve this problem because we can wrap the unknown items into a subgrid which aligns with the rest of the parent layout, which can have a known grid structure

---

- the main use-case for subgrid is aligning content within grid items across different grid items
- in this example, the social media links along the bottom of the card are of unknown lengths
- with subgrid, we can ensure that the grid track always is the `max-content` length, hence the fields will be aligned across cards
- this will work for cards with headers and footers as well, in that case, the dimension will be columns instead of rows