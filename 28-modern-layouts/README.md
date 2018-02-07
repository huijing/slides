# Modern Layouts with CSS Grid

*For Mozilla Tech Briefing, 15 Feb 2018. This is sort of a transcript of the talk.*

Hello everyone! This is my first time doing a talk via video conference, so this will be interesting. My name is Hui Jing and I'm a front-end developer based in Singapore at the moment. Today, I'll be talking about CSS grid, and why it's a milestone for web design.

## On the World Wide Web

So these CSS-related memes have been going around for some time. Usually accompanied by some joke about the deficiencies of CSS, or the cascade, or how impossible it is to manage. Well, I disagree with that notion. You see, I love CSS, I love CSS for what it is and what it can do.

Today, I will be putting forth some ideas that you may not entirely agree with, but I do hope you will hear me out. Let me start off with a short story about the web.

The World Wide Web was invented by Sir Tim Berners-Lee in 1989 as a means for researchers to share information. Back then, CERN had a problem with information access, and his paper introduced the concept of linked information.

It would be possible to cross-reference information held electronically on machines across the world, creating a “web” of information via some form of hypertext.

When the web started, there was no way to do layout at all, because all browsers could do was display text, or maybe some images, if you were lucky. But as more users started getting online, people started to find new ways to utilise the web and design for it. So properties that were never meant to be used for layout, like HTML tables or floats, were the next best hack we could think of.

Eventually, this got really painful and people started relying on frameworks to do the heavy lifting, especially when it comes to the layout side of things. In fact, I've inherited a lot of legacy projects that include the entire Boostrap library but only use its grid system.

This is an overview of how web layouts have evolved over the years. CSS grid gives us a level of control over how elements are rendered on a page that we’ve never had before. And that’s the biggest reason why it is revolutionary.

## On Cascading Style Sheets

CSS Grid, I feel, had one of the best rollouts of a new major CSS feature ever, with almost all the major browsers shipping it in March last year. By now, more than 70% of the market is using a browser that supports Grid.

All the other techniques we've used in the past, HTML tables, floats, even flexbox, were never meant for doing full page layouts. They were creative hacks we came up with to build the layouts that we wanted.

So now we actually have proper layout properties like Flexbox and Grid. And when we use them in combination with other properties, like CSS shapes, transforms, viewport units and so on, the design possibilities become endless.

My love for CSS is inordinate enough for me to read specifications. Honestly, they're not that bad to read. CSS first became a W3C recommendation in 1996 and used to be a huge monolithic document. In 2000, a decision was made to modularise the specification, which made it easier to update and support.

As of the 2017 snapshot, there are 88 modules in various states of development. Browser vendors refer to these specifications to implement features into the browsers we use.

Despite modularisation, CSS is ultimately a holistic technology, in that, even though you can use properties in isolation, the full power of CSS shines through when used in combination. CSS is a team sport.

For example, doing layout on the web usually starts off with using the display property. But we definitely use a whole suite of properties that number more than players on a basketball team.

## On Flexbox and Grid

Some people have asked why we need Grid when we already have Flexbox? Or, is Grid supposed to replace Flexbox? My response is, these 2 layout techniques are not competing against each other. They are meant to be complementary.

Grid and Flexbox are best friends. Like bacon and eggs. Like nuts and bolts. Like Jay-Z and Beyoncé. Either are good on their own, but together, they can reach another level of awesome.

Flexbox is suited for laying out items in a single dimension. Where there isn't a relationship between the rows and columns. Think of it more like a long daisy chain of flex children.

Now, let's examine CSS grid. What is it? This is how it's described in the specification. The key word here is two-dimensional. Keep this in mind for the rest of the talk.

There are a number of terms I will constantly refer to throughout this talk, so let’s make sure everyone is on the same page. Grid lines are the horizontal and vertical lines that form the basis of the grid structure, and can be referred to by their numerical index, which starts from 1.

Each space between grid lines are known as grid tracks, which make up the rows and columns of the grid, and represent the spaces your items appear in.

The grid cell is a single unit of the grid and is made up of 2 adjacent row lines and 2 adjacent column lines. By default, each grid item takes up 1 grid cell. A grid area is made up of multiple grid cells.

The best part about Grid, is the ability to define grid gaps, which are the gutters between grid tracks. Fun fact, `grid-gap` wasn't in the original specification until Rachel Andrew championed it during one of her conference talks.

One of the specification writers, Elika Etemad, was in the audience and they worked together to get this feature into the specification. So the next time you use `grid-gap`, remember you have Rachel and Elika to thank for this excellent feature.

The first concept to wrap our heads around is the fact that Grid, like Flexbox, operates on the parent-child relationship, whereby, the display property is set on the parent element. This then affects the layout of all the immediate children of that element.

## Grid's different mental model

My favourite way of explaining the CSS grid mental model comes from Rachel Andrew, who describes it as such: “Grid works from the container in. All other layout techniques start from the item first.”

Let’s illustrate this with some simple examples, which will also serve as the introduction to the most basic set up for using CSS grid.

The setup here is 6 items we want to place into a 3-column grid. One approach for creating such a layout is by using the `inline-block` technique. For a three column grid, we set the display of the items to `inline-block` and give them all a width of a third of the container. It's almost the same if you use `float`, because you also need to set a width on each item.

For Flexbox, to ensure our items line up in three columns, we have to make sure the `flex-basis` is a third of the container. Again, the properties we are applying go on the item. For all 3 techniques I just described, there isn't actually a grid. It just looks that way because we've forced the items to line up with each other.

But for Grid, the dimensions for rows and columns are defined on the parent container instead. The grid is real.

Before CSS grid, we've always tried to size our elements as best we could, then crossed our fingers and hoped the browser would render them in the right place. But now with grid, we can control exactly where our elements should go.

## Introducing CSS grid

The basic premise of how grid works involves two steps. You define the grid, then place items in it either by yourself, or let the browser do it for you. Let's look at the properties that are applied to the Grid container first, which will determine the size and structure of the grid we want to create.

There are numerous values we can use to define the size of our grids. There are those which are familiar, fixed units like pixels or ems and relative units like percentages or viewport units. Now, we also a new flexible unit known as `fr` or fractional unit, which I will cover in more detail later.

I mentioned earlier that we can use a numerical index to reference grid lines, but if you have a complicated grid with, say 25 columns or more, for example, it may help to label specific lines with names. You can even give your grid lines multiple names for the sake of readability in your code.

> “Cede control of your designs to the browsers that render them.”

The web is not a static medium. It is dynamic and interactive and we manipulate this medium by writing code to tell the browser what we want it to do. Here's an idea, instead of micromanaging the pixels on our designs, why not just let the browser do its own thing?

This means being okay with your designs looking different across browsers and devices. Is that really such a bad thing? We now have an increasing number of properties and values that pass on the responsibility of figuring out sizing to the browser.

### The `fr` unit

An `fr` unit represents a fraction of free space available. A common use case that `fr` units can solve is for responsive uniform grids that need to adjust to the width of the viewport.

For layout methods that revolve around the width of the grid item, multiple media queries are necessary because the width of each item has to be explicitly stated depending on the width of the viewport.

With the `fr` unit, we are essentially ceding control of the sizing of each grid item to the browser, allowing the browser to figure out how large each grid item should be based on the parameters we provide through the functions made available to us with CSS grid.

Here, I'm telling the browser I want 3 sets of 2 columns in the ratio of 3 to 2. By using the `fr` unit, all the available space is divided up accordingly. The grid then grows and shrinks together with viewport because it will occupy all the free space available in the container.

### The `minmax()` function

CSS grid also introduces some new functions. The `minmax()` function allows us to do something we never could before, which is the define a range of values. Now I can tell the browser that I want my grid columns or rows to be between a value of x and y, and the browser can figure out exactly what that value should be.

### The `repeat()` function

Also, if your design calls for a rather complex and large grid, you probably don't want to type out each track's width by hand. The `repeat()` function let's us repeat patterns of track sizes so we won't end up with ridiculously long lines of column or row sizes.

The `repeat()` function also takes in the keywords of `auto-fit` and `auto-fill`, which are very similar. Both these keywords tell the browser to generate the number of tracks required based on the track list specified as the second argument. The minor difference is that for auto-fit, any empty tracks are collapsed. This becomes more evident if you're using a flexible range for track sizing.

Here, I have asked the browser to make me columns that are at least 2.5ems wide, but can grow if free space permits. With the keyword set to auto-fill, because the space can contain 8 2.5em columns, even though I didn't have enough grid items to fill up the last 2 columns, the columns are still there.

When I change it to auto-fit, the last 2 columns are collapsed and the columns that do contain grid items grow to fill up the empty space.

Here, I'm telling the browser that when the viewport size shrinks, I want to cap the shrink of each column at 10ems but if there's extra space, grow all my columns equally. By using `auto-fill` (or `auto-fit`), the browser will calculate how many columns fulfil my requirement. When the viewport size changes, the number of columns will decrease or increase until everything fits.

And because the maximum value is a flexible unit, if there is an excess of space, like 6ems worth, all the columns will grow equally to fill up that extra space. And not a single media query needed to be written.

You might have noticed that, although I explained each feature individually, they are so much more useful when used in combination. Team sport, remember?

### Explicit grid versus implicit grid

One more thing I want to mention is the concept of an implicit grid. The explicit grid is the one we define using grid-template-columns and grid-template-rows. But there's nothing stopping us from placing an item outside the bounds of this grid. What happens then?

In this simple 3×2 grid, the grid column lines only go up to 4. But if we place an item starting on grid line number 5, the browser will add 2 implicit columns (shown by the purple dashed lines on the grid) to accommodate this item.

Browsers with grid support utilise an auto-placement algorithm to layout items in the grid so you don't have to write code for each grid item if it's a regular layout.

## Alignment in grid

An important part of building web layouts is aligning elements on the page. And box alignment can sometimes trip people up. I know it can be hard to remember which property does what.

For me, I associate `justify` with the direction that text flows, because I've been justifying text in Microsoft Word since version 97. And if `justify` is for inline direction, then `align` must be for the other direction.

Directions are not the most tricky part. It's the second word in these properties, `content`, `item` and `self`, that seem to confuse people. This table summarises the 6 box alignment properties that are regularly used when building with Flexbox and Grid.

### Content distribution properties

The `justify-content` and `align-content` properties are known as **content-distribution** properties. These properties are relevant when the container is larger than the total width or height of the grid rows and columns.

As we can see from this example, there is some space to the right and bottom of the grid items. It is possible to set the alignment of the rows and columns with respect to the entire grid container.

We can position the grid rows and columns within its container using 3 values, `start`, `center` and `end`. We can also adjust the space between rows and columns with `space-around`, `space-between` and `space-evenly`.

It's probably easier to refer to this table. `space-around` puts an equal amount of space on both sides of the row or column, so the spaces at the edge of the container will be half of the spaces between inner rows or columns.

`space-between` distributes all the tracks evenly in the grid container with the first and last rows or columns flush with the edges of the container.

`space-evenly` is currently only supported in Chrome 60 onwards and Firefox 52 onwards. It distributes the grid tracks evenly within the grid container such that the space between any 2 adjacent grid tracks are the same.

If everybody is completely lost now, please trust me when I say, it gets easier with experience.

### Self alignment properties

The `justify-self` and `align-self` properties are known as self-alignment properties. Justify is for the main or inline axis, which is the direction of text flow, while align is for the cross or block axis, which is the direction block boxes are stacked.

These properties allow us to control how the content of each grid item is aligned within the grid area it's been allocated to. The default state is stretch, where the content stretches to fill the entire grid area. We can adjust the alignment of content within the grid item with `start`, `center` and `end`.

Finally, we have the `align-items` and `justify-items` properties, which set the default `align-self` and `justify-self` behaviour of all the items within the grid.

### Better alignment with Flexbox and Grid

Earlier on, I mentioned that Flexbox and Grid work really together, and I want to share an example of that.

The image on the left is a page from the publication Malerei, Fotografie, Film by László Moholy-Nagy, who was a professor at the Bauhaus school. The layout is made up of several striking, thick, black borders around each grid cell. Each cell contains a different type of content and their alignment varies from cell to cell. So how would we align things according to the original design?

When I started building this out, my first instinct was to use the `justify-self` and `align-self` properties to adjust the content positions. Nice try, but it was a no go. The `border` property applies onto the grid item. Any grid alignment property other than stretch will make the size of the grid item fit to its contents. Any borders applied to grid items naturally fit the grid item’s contents, so I couldn’t do that, it messed up the design.

But if instead we apply `display: flex` on the grid item, we can now use flex alignment properties applied on the flex container to position the grid item's content accordingly.

Remember, awesome together.

## Grid item placement

The next thing we're going to cover is manual placement of grid items. When it comes to grid placement, my mind instinctively draws a parallel with placing pieces on a chessboard.

I mentioned named lines a little bit earlier, and line names can be any string except “span”, which is a keyword.

A handy feature with grid lines is that they have a negative index as well. That means if you need to refer to the last grid line, and you don't know how many grid lines there are, you can use -1 to always get the last grid line.

So say I want something to go into the big main area, I would set the `grid-row` to `2 / 3` or `content-start / footer-start`, and the `grid-column` to `2 / 3` or `content-start / last`.

This example shows how we can place items by specifying the `grid-row` and `grid-column` properties. These are actually shorthand for their respective `*-start` and `*-end` properties.

By default, each grid item will take up 1 grid cell, so if I only put 1 value for the `grid-column` or `grid-row`, that will be the start position. Of course, I can make the grid item span multiple rows or columns by specifying an end value as well.

Other than using numerical indexes to define grid tracks and grid areas, we can also name them. The syntax of the `grid-template-areas` property provides a visualisation of the structure of the grid, making the overall layout of the grid container easier to understand.

We then place items in their respective areas using the `grid-area` property on the item.

## On vertical whitespace

Vertical whitespace is an important concept in layout design, as it serves to balance the layout and bring focus to important content. Before CSS grid, trying to do this on the web involved hacks like spacer gifs, empty divs, Javascript, you name it.

That's because there never was a proper way to layout things on the web other than one after another. I mean, you could use absolute positioning but that opens up another can of worms because now you're messing with the document flow. But life's different now. It's better with CSS grid.

With `grid-template-areas`, creating responsive layouts becomes a little more convenient as well.

Here I have a recreation of a Braun HiFi print poster which was originally laid out in landscape. But on the web, that same layout will break when the viewport starts to narrow. So we'll need to adjust the layout when that happens. Using `grid-template-areas` makes handling responsiveness easier than “traditional” techniques.

This is a real-world example of modifying the layout by just changing the grid itself. I've assigned each “section” its own named grid area. When the layout is too narrow for the original wide design, I don't change the sizing of the items, instead, I change the grid itself. When it hits yet another breakpoint, the grid is morphed yet again. I find this to be a rather convenient solution for a relatively common use-case.

This is the final end result, and you can see how the layout changes with the viewport.

I'm going to make the assumption that most people have used media queries in some capacity before. The most common media queries are width-based. Occasionally, you may see a height-based media query or 2. Has anyone used the aspect-ratio media query before?

In the current specification, there are 13 media features that can be used as conditionals, including things like orientation, colour, resolution and so on. The design I'm showing in this demo is a good use case for the aspect-ratio media query.

Aspect-ratio media queries come in handy when relative proportions are important for your layout. And we can always combine multiple media queries to cater for different environments.

## On overlap

Another technique that makes a layout interesting is the use of overlap, because it breaks our expectation of regularity in a grid. We don't usually see overlap on the web because it used to involve a lot of tricky positioning rules and negative margins, or just cheating by processing everything into a single image. Some people even used Javascript to calculate positioning. Not any more.

Here's a simple example of overlap, just two circles behind a header. The code here is simplified to show only the placement properties.

Pseudo-elements are treated as children. So the two circles here are pseudo-elements of the grid container, which have been explicitly placed to overlap. Then the header overlaps them both.

The placement code is more intuitive than using absolute positioning and you don't need to do a lot of complicated math to get the alignment just right no matter how you resize the browser.

I'm going to give you a high-level walk-through of how I would build a grid layout with overlaps from scratch. I saw this artist concept on Dribbble and the way it's been designed makes it a perfect candidate for CSS grid.

One thing I noticed after I started building with CSS grid is that I started to sketch my designs on pencil and paper a lot more. Because for grid, you plan the entirety of the layout beforehand, so it helps to have the big picture view upfront.

This also helps me think about how the track sizing should be done. Which tracks should be flexible, which should have a defined width, or even range of widths. Yes, it is a bit more thinking and planning than before, but the end result is also much nicer.

To me, markup always comes first. So I'd start off with every element that needs to be displayed, the title, the various bits of text, the image and so on.

Then, based on the design, I'd add in some base styles. Nothing amazing, just the fonts, colours, text formatting. Browsers do apply their own styles, and usually I reset margins and paddings, as well as set the `box-sizing` for all elements to `border-box`. Make life easier, I find.

> “Websites do NOT have to look the same in every browser.”

So, I've been going on for quite a bit now, and even if you think whatever I've been saying is boring, and doesn't benefit your life in any way at all, I want you to remember this point.

Websites do not have to look the same in every browser. Because the web is not a static medium, and it is up to the people like us who create things on the web to change people's mindsets. Okay, the uninterested can go back to being bored now.

I did not just put that slide in as a time marker, folks. The point I was trying to make is that rather than spending extra effort wrangling every pixel into place, why not embrace the dynamism of the web? The best part about the web medium is its ability to layer on additional functionality depending on the browser on which your page is being rendered.

I genuinely believe that web pages don't need to look exactly the same across every browser or device but I do believe no layout should be broken. So the base layout should utilise properties that have almost full support. In this case, I'm really just letting everything stack on top of each other, with some minor positioning at the bottom. Browsers that do not support grid will get this layout instead.

Now comes the actual grid code. I chose to go with flexible units like fr and viewport units because I wanted the layout to fully occupy the window without overflowing, when space allowed. So if you look at my grid-template-columns property, it looks a little nuts if you've never used grid before.

However, once you start experimenting with the different functions and values, I promise they will make sense to you. I have a friend who does webVR, and he once said that until you put on the headset, you don't really know VR. This is somewhat similar. You need to feel the grid.

Anyway, this is how the whole thing looks when we do that developer thing of resizing the browser window all over the place. I have been informed by non-web developer friends that this is not normal behaviour.

## Fallback with feature queries

Some of you might have noticed that my grid code was wrapped within an additional query with the syntax `@supports`, otherwise known as feature queries. And they are defined as such, conditionals that test if the browser supports a particular CSS feature.

And this is how a feature query looks like. The conditional checks if the browser supports a particular property or not. If it doesn't, the entire block within the `@supports` rule is ignored.

This means we start off with the basic layout that works everywhere. It could be a flexbox-based layout, or even single column, maybe largely browser default UI elements, that sort of thing. Then we layer on styles based on the features we want to use. Like what we saw in the previous example.

By organising our code in this manner, the browsers that do not support feature queries or the specified property still get styled, while those that do get a different look. We're making use of the ‘C’ in CSS. Call it ‘Cascading Web Design’. If this concept ever takes off, remember you heard it here first.

Support for feature queries is really good, with coverage in over 90% of browsers, including Opera Mini. But you might notice that Internet Explorer does not, and will not ever get it.

So here is where a decision has to be made, and it will differ from project to project and functionality to functionality, on whether it is acceptable to forgo some of the features that IE11 does offer and serve up a more basic fallback instead. Again, there is no definitive answer to this until a proper discussion with relevant stakeholders arrives at an acceptable conclusion.

This next example is a header design. I got it from a CSS tricks article and since it was originally an image anyway, you can think of this as an enhancement. The fallback code here serves up an image, the original image used on the site, actually. This is the “universal” code, i.e. what all browsers will load regardless.

This first feature query is for browsers that support both Flexbox and feature queries, but not Grid yet. They will end up with styles that look like this, with all the benefits of having searchable, indexable text. There will be some resetting needed, so fully understanding the cascade is a prerequisite for embracing this sort of design approach.

This second feature query is for the latest browsers, which support all the things. This layout's use of vertical whitespace, and the need to maintain alignment of its individual elements as the viewport changes, makes it a perfect candidate for CSS grid.

Okay, one more example. This is the company website for Wismut Labs. The layout on the left is what IE11 users will see, the one in the middle is what Firefox users will see, because Firefox doesn't support CSS shapes yet, but once it does, it will then look like the layout on the right, which is what Chrome users see now.

Because the code is feature-specific and not browser-specific, there is no need to keep revisiting the code every time the browser updates itself.

## Wrapping up

Danielle Huntrods from Clearleft said it best. CSS has its own unique landscape and structures, and our mental maps around it need to reflect that.

The last thing I'd like to mention is how we can encourage people to participate in shaping the web. I don't think enough people know that all the CSS working drafts are hosted on GitHub and they are free to raise issues for clarification or even submit pull requests if they spot any errors.

Another avenue is raising browser bugs, which provides signals to browser vendors on which features are in demand and can help with prioritisation. Unfortunately, it seems that there is still a reluctance to use new features precisely because they are buggy. I'm hoping this mindset will change moving forward.

I would also love for more people to be writing and talking about CSS features. This not only benefits the community, but provides visibility and feedback to browser vendors and specification writers as well.

Jen Simmons and Rachel Andrew have done a lot for both developing layout on the web, as well as educating the web development community about it. Rachel Andrews has a CSS layout course which is completely online, and Jen Simmons has a wonderful collection of demos which you can check out.

I think everyone should build up their own collection of demos, because that's the best way to learn and familiarise ourselves with CSS in general.

This is the list of stand-alone demos and sites I've referenced all throughout this talk. If you're interested in the source code, my demos are all hosted on GitHub, which is the last link on the list. And this is a list of articles and resources I found really useful for better understanding CSS grid.

Thank you all for your time and attention.
