# 2017: the year of CSS Grid

*For DevFest GDay George Town 2017. This is sort of a transcript of the talk.*

How many people think that building layouts with CSS is hard? And how many people use CSS frameworks like Bootstrap or Foundation in your projects? I will be putting forth some ideas that you may not entirely agree with, though I do hope you will hear me out. But first, I want to tell a short story about the web.

## On the web

The World Wide Web was invented by Sir Tim Berners-Lee in 1989 as a means for researchers to share information. That means the web is 28 this year, and was born in the year of the Snake. So if some of you just don't seem to get along well with web, maybe your Four Pillars of Destiny AKA 生辰八字 are clashing. Nah, I'm just kidding. Sort of.

Within the short span of the web's life, we've seen web layouts evolve as browser technologies and web standards matured. In the web's infancy, there was no layout whatsoever. We were still amazed that the web even existed.

Then, during the pre-school age of the web, we started to use tables to do layout. And that was fun, because like most kindergarten kids, everything seemed like a good idea. There were all sorts of crazy, creative layouts on the web.

But when we got to the pre-teen era, things started to conform a little more. We got a bit more self-concious, a little less radical, it wasn't that cool to be different. Float-based layouts to build sites with headers, sidebars and footers were the most socially acceptable.

By high school, life had gotten complicated, and angsty. CSS was hard. Responsive design, what? People suck. Browsers are broken. Oh, frameworks can take care of all that for me? Sure! I don't really care. So we ended up with sites that utilised very similar layouts.

But something big happened this year. CSS Grid was released. CSS Grid is a revolutionary feature that was designed specifically for doing layout on the web.

All the other techniques we've used in the past, HTML tables, floats, even flexbox, were never meant for doing full page layouts. They were creative hacks we came up with to build the layouts that we wanted.

So this is the year web layouts come of age. We now have a level of control over how elements are rendered on the browser that we've never had before, with CSS grid. And when used in combination with other properties, like CSS shapes, transforms, viewport units and so on, the design possibilities become endless.

## On changing mindsets

> “Our ‘Age of Anxiety’ is, in great part, the result of trying to do today's job with yesterday's tools—with yesterday's concepts.”

I was reading a book called “The Medium is the Massage” by Marshall McLuhan the other day and came across this quote. And I couldn't help but think about the way we build layouts on the web.

The thing about working on the web is that everything moves fast. In less than 3 decades, browser technologies have advanced a great deal. I first encountered the web when I was 11 years old, and I would never have imagined the web of today.

A lot of frustration we have when designing for the web comes about from trying to build using yesterday's tools. Because yesterday, browsers weren't this smart. Yesterday, I had to tell my designer no, this design cannot be built. Yesterday, love was such an easy game to play.

Sorry, that was lame. But my point is, the web is a medium like nothing we've seen before, and we need to adapt our mindsets to handle it.

We used to be wary of using new CSS features because support varied greatly between the different browsers. If you wanted to be cutting edge, you'd have to monitor updates closely, because the syntax could change as the specification was updated. You'd have to take care of a whole slew of vendor prefixes.

CSS grid was released by most major browsers in March this year. Edge finally got it in the Windows 10 Fall Creator's update, and in just 7 months, more than 75% of web users are using a browser that supports Grid.

CSS grid was developed differently. Browser vendors implemented early versions of Grid behind a feature flag. This meant developers could test it out and provide feedback, but be deterred from using it in production. So when CSS grid was officially released, it was fully baked and ready to go.

## On CSS

I love CSS. Enough to read specifications. They're not that bad to read, mostly. CSS first became a W3C recommendation in 1996 and used to be a huge monolithic document. In 2000, a decision was made to modularise the specification, which made it easier to update and support.

As of the 2017 snapshot, there are 88 modules in various states of development. Browser vendors refer to these specifications to implement features into the browsers we use.

Despite modularisation, CSS is ultimately a holistic technology, in that, even though you can use properties in isolation, the full power of CSS shines through when used in combination. CSS is a team sport.

Doing layout on the web usually starts off with using the <code>display</code> property. But we definitely use a whole suite of properties that number more than players on a basketball team.

Today, we're going to focus Grid layout. And maybe a few of her friends.

Some people have asked why we need Grid when we already have Flexbox? Or, is Grid supposed to replace Flexbox? My response is, these 2 layout techniques are not competing against each other. They are meant to be complementary.

Grid and Flexbox are best friends. Like kaya and butter. Like nuts and bolts. Like Jay-Z and Beyoncé. Either are good on their own, but together, they can reach another level of awesome.

Flexbox is suited for laying out items in a single dimension. Where there isn't a relationship between the rows and columns. Think of it more like a long daisy chain of flex children.

## Introducing CSS grid

> Grid works from the container in, other layout methods start with the item

So what is CSS grid? This is how it's described in the specification. The key word here is two-dimensional. Rachel Andrew, who is one of the major contributors to the CSS grid specification, sums it up as such. Grid works from the container in, while other layout methods start with the item first. Let me explain.

One approach for creating a grid layout is the <code>inline-block</code> technique. For a three column grid, we set the display of the items to <code>inline-block</code> and give them all a width of a third of the container. It's almost the same if you use <code>float</code>, because you also need to set a width on each item.

For Flexbox, to ensure our items line up in three columns, we prevent them from growing or shrinking, then set the flex-basis to a third of the container. Again, we are dealing with the item. For all 3 techniques I just described, there isn't actually a grid. It just looks that way because we've forced the items to line up with each other.

> Grid is the only layout technique that establishes a relationship between rows and columns of grid items.

But for Grid, the dimensions for rows and columns are defined on the parent container instead. The grid is real, and we can place items inside this grid.

### Defining a grid

The basic premise of how grid works involves two steps. You define the grid, then place items in it either by yourself, or let the browser do it for you.

A grid container is defined by setting the display to grid on an element. This creates a grid formatting context for its content, which are laid out into a grid. The grid formatting context only applies to child elements and does not extend to grandchild elements and beyond.

For example, applying <code>display: grid</code> to the body element, results in the 4 child elements, header, main, aside and footer, becoming grid items. However, the content within the main element are not grid items.

The explicit grid is the one we define using <code>grid-template-columns</code> and <code>grid-template-rows</code>. But what if you place an item outside the dimensions of the grid you defined?

In this simple 3×2 grid, the grid column lines only go up to 4. But if we place an item starting on grid line number 5, the browser will add 2 implicit columns (shown by the blue dashed lines on the grid) to accommodate this item.

Browsers with grid support utilise an auto-placement algorithm to layout items in the grid so you don't have to write code for each grid item if it's a regular layout.

> Cede control of your designs to the browsers that render them.

The web is not a static medium. It is dynamic and interactive and we manipulate this medium by writing code to tell the browser what we want it to do. Here's an idea, instead of micromanaging the pixels on our designs, why not just let the browser do its own thing?

This means being okay with your designs looking different across browsers and devices. Is that really such a bad thing?

### Auto-placement of grid items

Grid introduces a number of features that make it easier for us to instruct the browser. One of them is the <code>repeat()</code> function. It takes 2 arguments, the number of repetitions and the track pattern to be repeated.

Other than integer values, you can also use the keywords <code>auto-fill</code> or <code>auto-fit</code>. And this tells the browser to generate as many track lists as will fit in the width of the container.

Both these keywords tell the browser to generate the number of tracks required based on the track list specified as the second argument. The minor difference is that for <code>auto-fit</code>, any empty tracks are collapsed. This becomes more evident if you're using a flexible range for track sizing.

For <code>auto-fill</code>, space taken up by empty tracks are “reserved” for any additional items that may be added, but if I change the value to <code>auto-fit</code>, the empty tracks are collapsed and the items expand to fill up the space instead.

This is an example of the <code>repeat()</code> notation in action. I'm telling the browser to give me five 10em wide columns. Ems are not flexible units, so the resulting grid is a fixed one that does not change when the viewport size changes.

But we don't really do fixed any more these days, responsive design and all, right? The <code>fr</code> unit is a new flexible unit that was introduced with the CSS grid specification. It is used to distribute the proportion of free space left over after all non-flexible tracks are accounted for. This is easier to understand with an example.

Here, I'm telling the browser I want 3 sets of 2 columns in the ratio of 3 to 2. By using the <code>fr</code> unit, all the available space is divided up accordingly. The grid then grows and shrinks together with viewport because it will occupy all the free space available in the container.

The `minmax()` function allows us to do something we've never been able to before, and that is define a range of widths for our grid items. This function takes two arguments, the minimum and maximum widths of each grid item.

Before CSS grid, in order to build grid layouts where the items would fill up the width of the container, I'd use percentages. But then the grid items couldn't be too big or too small, so I'd also have to write a whole chunk of media queries to adjust the number of columns as the viewport size changed. With Grid, we can cut out all that media query code.

Here, I'm telling the browser that when the viewport size shrinks, I want to cap the shrink of each column at 10ems but if there's extra space, grow all my columns equally. By using auto-fill (or auto-fit), the browser will calculate how many columns fulfil my requirement. When the viewport size changes, the number of columns will decrease or increase so everything fits.

And because the maximum value is a flexible unit, if there is an excess of space, like 6ems worth, all the columns will grow equally to fill up that extra space. And not a single media query needed to be written. You might have noticed that, although I explained each feature individually, they are so much more useful when used in combination. Team sport, remember?

### Manual placement of grid items

But Grid doesn't only make what we're used to doing easier, it allows us to do things we couldn't before as well. Auto-placement is pretty cool, and very useful, but being able to control where your items go on the Grid is, revolutionary. It's like placing pieces on a chessboard.

So let's talk basic terminology. Grid lines are the horizontal and vertical lines that form the basis of the grid structure, and can be referred to by their numerical index, which starts from 1.

Each space between grid lines are known as grid tracks, which make up the rows and columns of the grid, and represent the spaces your items appear in. The grid cell is a single unit of the grid and is made up of 2 adjacent row lines and 2 adjacent column lines. By default, each grid item takes up 1 grid cell. A grid area is made up of multiple grid cells.

The best part about Grid, is the ability to define grid gaps, which are the gutters between grid tracks. Fun fact, grid gap wasn't in the original specification until Rachel Andrew championed it during one of her conference talks.

One of the specification writers was in the audience and they worked together to get this feature into the specification. So the next time you use grid gap, remember you have Rachel Andrew to thank for this excellent feature.

Other than using numerical indexes to define grid tracks and grid areas, we can also name them. The syntax of the <code>grid-template-areas</code> property provides a visualization of the structure of the grid, making the overall layout of the grid container easier to understand.

We then place items in their respective areas using the <code>grid-area</code> property on the item. I'll cover this a little bit more when we go through some code examples later on.

## On box alignment

An important part of building web layouts is aligning elements on the page. And box alignment can sometimes trip people up. I know it can be hard to remember which property does what.

For me, I associate <code>justify</code> with the direction that text flows, because I've been justifying text in Microsoft Word since version 97. And if justify is for inline direction, then align must be for the other direction.

Directions are not the most tricky part. It's the second word in these properties, content, item and self, that seem to confuse people. This table summarises the 6 box alignment properties that are regularly used when building with Flexbox and Grid.

The <code>justify-content</code> and <code>align-content</code> properties are known as <strong>content-distribution properties</strong>. These properties are relevant when the container is larger than the total width or height of the grid rows and columns.

As we can see from this example, there is some space to the right and bottom of the grid items. It is possible to set the alignment of the rows and columns with respect to the entire grid container.

We can position the grid rows and columns within its container using 3 values, <code>start</code>, <code>center</code> and <code>end</code>. We can also adjust the space between rows and columns with <code>space-around</code>, <code>space-between</code> and <code>space-evenly</code>.

It's probably easier to refer to this table. <code>space-around</code> puts an equal amount of space on both sides of the row or column, so the spaces at the edge of the container will be half of the spaces between inner rows or columns.

<code>space-between</code> distributes all the tracks evenly in the grid container with the first and last rows or columns flush with the edges of the container.

<code>space-evenly</code> is currently only supported in Chrome 60 onwards and Firefox 52 onwards. It distributes the grid tracks evenly within the grid container such that the space between any 2 adjacent grid tracks are the same.

Is everyone totally lost now? Trust me, it gets easier with experience.

The <code>justify-self</code> and <code>align-self</code> properties are known as <strong>self-alignment properties</strong>. <strong>Justify</strong> is for the main or inline axis, which is the direction of text flow, while <strong>align</strong> is for the cross or block axis, which is the direction block boxes are stacked.

These properties allow us to control how the content of each grid item is aligned within the grid area it's been allocated to. The default state is <code>stretch</code>, where the content stretches to fill the entire grid area. We can adjust the alignment of content within the grid item with <code>start</code>, <code>center</code> and <code>end</code>.

Finally, we have the <code>align-items</code> and <code>justify-items</code> properties, which set the default <code>align-self</code> and <code>justify-self</code> behaviour of all the items within the grid.

Earlier on, I mentioned that Flexbox and Grid work really together, and I want to share an example of that.

The image on the left is a page from the publication Malerei, Fotografie, Film by László Moholy-Nagy, who was a professor at the Bauhaus school. The layout is made up of several striking, thick, black borders around each grid cell.

Each cell contains a different type of content and their alignment varies from cell to cell. So how would we align things according to the original design?

When I started building this out, my first instinct was to use the <code>justify-self</code> and <code>align-self</code> properties to adjust the content positions. NNice try, but it was a no go.

The border property applies onto the grid item. Any grid alignment property other than stretch will make the size of the grid item fit to its contents. Any borders applied to grid items naturally fit the grid item’s contents, so I couldn’t do that, it messed up the design.

But if instead we apply <code>display: flex</code> on the grid item, we can now use flex alignment properties applied on the flex container to position the grid item's content accordingly.

Remember, awesome together. With all that sorted, let's look at some of the more interesting layouts we can now achieve with manual placement in CSS grid.

## On vertical whitespace

Vertical whitespace is an important concept in layout design, as it serves to balance the layout and bring focus to important content. Before CSS grid, trying to do this on the web involved hacks like spacer gifs, empty divs, Javascript, you name it.

That's because there never was a proper way to layout things on the web other than one after another. I mean, you could use absolute positioning but that opens up another can of worms because now you're messing with the document flow. But life's different now. It's better with CSS grid.

So, placing things in your grid.

Every grid line can referred to by its numerical index. But if you’re creating a more complicated grid, for example, to layout an entire website, it might be helpful to name the grid lines to make the grid code easier to understand. Line names can be any string except ‘span’, which is a keyword. Grid lines can have more than one name.

A handy feature with grid lines is that they have a negative index as well. That means if you need to refer to the last grid line, and you don't know how many grid lines there are, you can use -1 to always get the last grid line.

So say I want something to go into the big main area, I would set the <code>grid-row</code> to <code>2 / 3</code> or <code>content-start / footer-start</code>, and the <code>grid-column</code> to <code>2 / 3</code> or <code>content-start / last</code>.

The <code>grid-template-areas</code> property, is great for layouts with white-space because you can create empty cells, using the dot notation. In this example, I have 3 items to place in this 3x4 grid. Rather than try to figure out the various grid line numbers, I can “plot” where I want my items to go using the <code>grid-template-areas</code> property.

I then “assign” each grid item its own area. Which means, I can change the layout from just the <code>grid-template-areas</code> property without having to go to each item individually.

With <code>grid-template-areas</code>, creating responsive layouts becomes a little more convenient as well.

Here I have a recreation of a Braun HiFi print poster which was originally laid out in landscape. But on the web, that same layout will break when the viewport starts to narrow. So we'll need to adjust the layout when that happens. Using <code>grid-template-areas</code> makes handling responsiveness easier than “traditional” techniques.

This is a real-world example of modifying the layout by just changing the grid itself. I've assigned each “section” its own named grid area. When the layout is too narrow for the original wide design, I don't change the sizing of the items, instead, I change the grid itself.

When it hits yet another breakpoint, the grid is morphed yet again. I find this to be a rather convenient solution for a relatively common use-case.

This is the final end result, and you can see how the layout changes with the viewport.

I'm going to make the assumption that everyone has used media queries in some capacity before. Correct me if I'm mistaken. Usually we write width-based media queries, right? Has anyone written height-based media queries? What about aspect-ratio media queries?

In the current specification, there are 13 media features that can be used as conditionals, including things like orientation, colour, resolution and so on. The design I'm showing in this demo is a good use case for the aspect-ratio media query.

Aspect-ratio media queries come in handy when relative proportions are important for your layout. And we can always combine multiple media queries to cater for different environments.

## On overlap

Another technique that makes a layout interesting is the use of overlap, because it breaks our expectation of regularity in a grid.

We don't usually see overlap on the web because it used to involve a lot of tricky positioning rules and negative margins, or just cheating by processing everything into a single image. Some people even used Javascript to calculate positioning. Not any more.

Here's a simple example of overlap, just two circles behind a header. The code here is simplified to show only the placement properties. Pseudo-elements are treated as children. So the two circles here are pseudo-elements of the grid container, which have been explicitly placed to overlap. Then the header overlaps them both.

The placement code is more intuitive than using absolute positioning and you don't need to do a lot of complicated math to get the alignment just right no matter how you resize the browser.

I'm going to give you a high-level walk-through of how I would build a grid layout with overlaps from scratch. I saw this artist concept on Dribbble and the way it's been designed makes it a perfect candidate for CSS grid.

One thing I noticed after I started building with CSS grid is that I started to sketch my designs on pencil and paper a lot more. Because for grid, you plan the entirety of the layout beforehand, so it helps to have the big picture view upfront.

This also helps me think about how the track sizing should be done. Which tracks should be flexible, which should have a defined width, or even range of widths. Yes, it is a bit more thinking and planning than before, but the end result is also much nicer.

To me, markup always comes first. So I'd start off with every element that needs to be displayed, the title, the various bits of text, the image and so on.

Then, based on the design, I'd add in some base styles. Nothing amazing, just the fonts, colours, text formatting. Browsers do apply their own styles, and usually I reset margins and paddings, as well as set the <code>box-sizing</code> for all elements to <code>border-box</code>. Make life easier, I find.

> Websites do NOT have to look the same in every browser.

So, I've been talking for around half an hour now, and even if you think whatever I've been saying is boring, and doesn't benefit your life in any way at all, I want you to remember this point.

Websites do not have to look the same in every browser. Because the web is not a static medium, and it is up to the people like us who create things on the web to change people's mindsets. Okay, the uninterested can go back to being bored now.

I did not just put that slide in as a time marker, folks. The point I was trying to make is that rather than spending extra effort wrangling every pixel into place, why not embrace the dynamism of the web? The best part about the web medium is its ability to layer on additional functionality depending on the browser on which your page is being rendered.

I genuinely believe that web pages don't need to look exactly the same across every browser or device but I do believe no layout should be broken. So the base layout should utilise properties that have almost full support. In this case, I'm really just letting everything stack on top of each other, with some minor positioning at the bottom.

Browsers that do not support grid will get this layout instead.

Now comes the actual grid code. I chose to go with flexible units like fr and viewport units because I wanted the layout to fully occupy the window without overflowing, when space allowed. So if you look at my <code>grid-template-columns</code> property, it looks a little nuts if you've never used grid before.

However, once you start experimenting with the different functions and values, I promise they will make sense to you. I have a friend who does webVR, and he once said that until you put on the headset, you don't really know VR. This is somewhat similar. You need to feel the grid.

Anyway, this is how the whole thing looks when we do that developer thing of resizing the browser window all over the place. I have been informed by non-web developer friends that this is not normal behaviour.

## On feature queries

Some of you might have noticed that my grid code was wrapped within an additional query with the syntax <code>@supports</code>, otherwise known as feature queries. And they are defined as such, conditionals that test if the browser supports a particular CSS feature.

In my opinion, taking care of browser support is part and parcel of the job of being a web developer. I actually find it kind of fun, because it's a design puzzle to be solved.

Here's yet another example of a fallback layout, that works on browsers without Grid or support for feature queries. The browser used in this video is IE, just a basic responsive flexbox-based layout. But for browsers that do support Grid and feature queries, I can layer on this fancier <em>overlap with vertical white-space</em> layout.

Designing layouts on the web requires interpolative thinking, on multiple levels. We don't just think in one fixed dimension, we get to think about how our design will morph on a narrow screen, or on an older browser, in addition to how it will appear on a browser with the latest features.

Call me whimsical, but I find this extremely appealing. As web designers and developers, it is our job to ensure our layouts are most effective in the environment they have to perform in.

Support for feature queries is really good, with coverage in over 90% of browsers, including Opera Mini, we almost never get anything on Opera Mini. The only browsers that don't support it are Internet Explorer and Blackberry Mobile.

And this is how a feature query looks like. The conditional checks if the browser supports a particular property or not. If it doesn't, the entire block within the <code>@supports</code> rule is ignored.

This means we start off with the basic layout that works everywhere. It could be a flexbox-based layout, or even single column, maybe largely browser default UI elements, that sort of thing. Then we layer on styles based on the features we want to use. Like what we saw in the previous 2 examples.

By organising our code in this manner, the browsers that do not support feature queries or the specified property still get styled, while those that do get a different look. We're making use of the ‘C’ in CSS. Call it ‘Cascading Web Design’. If this concept ever takes off, remember you heard it here first.

In this example, the layout on the left is what IE11 users will see, the one in the middle is what Firefox users will see, because Firefox doesn't support CSS shapes yet, but once it does, it will then look like the layout on the right, which is what Chrome users see now.

And yes, such an approach does require a level of familiarity with CSS, but it's not rocket science. It boils down to experience, and the willingness to embrace CSS for what it is.

> CSS isn't a programming language. It's a stylesheet language. We shouldn't expect it to behave like a programming language. It has its own unique landscape and structures, ones that people with programming language mental maps might not expect.

Danielle Huntrods from Clearleft said it best. CSS has its own unique landscape and structures, and our mental maps around it need to reflect that.

## Wrapping up

Lastly, I want to encourage all of you to participate in shaping the web platform. You may think your voice is just a drop in the ocean, but it's not, it's significant. All the CSS working drafts are hosted on GitHub and we are free to raise issues for clarification or even submit pull requests if we spot any errors.

Raising browser bugs sends a signal to browser vendors that certain features are in use, prompting them to fix those bugs sooner rather than later. Conversely, if we don't use a feature simply because it is buggy, browser vendors would think that feature is not in demand and prioritise something else instead.

Writing and talking about certain CSS features provides visibility and feedback to browser vendors and specification writers as well. But regardless of platform, remember that we are all someone's son or daughter, friend or lover, and we all have feelings. So be kind, the world needs more kindness.

Jen Simmons and Rachel Andrew have done a lot for both developing layout on the web, as well as educating the web development community about it. Rachel Andrews has a CSS layout course which is completely online, and Jen Simmons has a wonderful collection of demos which you can check out.

I think everyone should build up their own collection of demos, because that's the best way to learn and familiarise ourselves with CSS in general.

This is the list of stand-alone demos and sites I've referenced all throughout this talk. If you're interested in the source code, my demos are all hosted on GitHub, which is the last link on the list.

These are some useful references for grid and web layouts if you're curious to find out more. They go pretty in-depth into the technical bits and history of grid. Might not be your kind of thing, but it definitely is my kind of thing.

Thank you all for your attention.
