# Understanding modern CSS layouts with Firefox DevTools

## On how cool DevTools console can be

I learned a lot about the DevTools from my good friend and fellow speaker, Alex Lakatos. One of the things that stood out to me most was that the DevTools console can totally be styled up with CSS. But just like support of CSS on actual web pages differs between browsers, this is also the case of CSS support in the console.

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

## Grid, where we finally have real rows and columns

- *ask about people using Grid*
- whether you're just starting out with grid, or already using it in production, Firefox's grid inspector is still the best tool available at the moment
- toggle the overlay by clicking the grid tag on the *Inspector*, the waffle icon in *Rules*, or select your grid of choice from the *Layout* panel
- like the Flexbox inspector, you can change the colour of the overlay
- particularly helpful because Firefox now supports multiple grid overlays
- great if you are using nested grids or have more than 1 grid on the same page
- extending grid lines infinitely becomes quite helpful if you want to check on the alignment of multiple grids *(toggle grid1 and grid4)*
- additional options include displaying line numbers and grid area names
- using `grid-template-areas` to name grid areas is structurally similar to what we see rendered on the page
- each line surrounded with quotes represents a grid row, every value in the line makes up the grid column
- every line must have the same number of columns otherwise the whole thing is moot
- change your layout without having to touch the code for the grid items, only the grid areas *(change grid area of banana)*
- *(Switch to Braun poster example)*
- using named grid areas can make it easier to adjust the positions of certain elements when the viewport size changes *(proceed to resize browser and hit 3 layouts)*
- non-rectangular or disconnected regions may be permitted in future, but for now, just rectangles, no tetris shapes or that sort of thing

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