# Making CSS from good to great: the power of Subgrid

*For the Mozilla Developer Roadshow Asia 2019. This is sort of a transcript and notes for the talk.*

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