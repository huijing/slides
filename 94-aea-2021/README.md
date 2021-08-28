# Our Stylish Future

*For An Event Apart Fall Summit 2021. This is a sort-of transcript plus my notes for the talk.*

Hello everyone! It is such a privilege to have the opportunity to speak to all of you at An Event Apart amongst this line-up of amazing speakers. CSS is one of my favourite things in the world, and with a title like “Our Stylish Future”, you can bet that this talk will be heavy on the styles in Cascading Stylesheets.

Anyhoo, a quick introduction. My name is Hui Jing, and I'm simple enough that these emojis paint a fairly comprehensive picture of who I am as a person. I happen to be Chinese, and if you're unfamiliar with Chinese names, our family names come first, followed by our first names. I'm currently a front end developer at Shopify.

I want to first remind everyone that CSS has come of age. If we take the first W3C recommendation as a birthday milestone, that was December 1996. So CSS is going to be 25 years old soon. And boy has it grown up well. From a time where CSS was not really meant for doing layout till today, where CSS is THE go-to method for creating web layouts.

We have more than 500 CSS properties today, providing us with a much wider vocabulary with which to communicate to the browser about how we'd like our web pages to look and behave. There are things that we can build with CSS that we could not before without the help of Javascript or semi-clunky workarounds.

---

Let's start with responsive typography. To me, the web is fun because you can't control the environment via which your audience views your creations. For textual content on the web, a key concern is its legibility and readability. There have been a number of techniques developed over the years and as newer CSS properties become available, these techniques are being continually refined.

The first option is using combinations of media queries. Even though this first option seems fairly basic, you can also look at it as the most flexible, in the sense that you have a fairly granular control over the font sizes at whichever viewport you wish to tweak.

Some folks then felt that rather than discretely bumping the font size at specific viewport sizes, couldn't we let the text grow and shrink smoothly? This became possible with CSS only when viewport units were released in browsers.

This second technique was introduced by Mike Riethmuller back in 2015. and makes use of a combination of `calc()` and viewport units for font sizing.

The media queries allow you to limit the font scaling to within a range you control, and cap the minimum and maximum font sizes as well. For an in-depth explanation of the formula, I recommend reading Mike's article, which I have linked to at the end of this presentation.

Recently, a slew of CSS math functions have gained wider browser support. Among them is the `clamp()` function, which allows us to pick a value within a range between a defined minimum and maximum. That's why the function takes in 3 parameters, the first being the minimum, the next being the preferred value, and the last being the maximum.

This function is useful if your preferred value is dependent on something you don't control directly, like viewport units. This clamp function also allows us to write something similar to the previous function with a more simplified syntax.

One thing that I find doesn't get mentioned enough when using viewport units for font-sizing is its potential for accessibility issues. Specifically, failing the WCAG Success Criterion 1.4.4 for text resizing. To achieve this criterion, text should be resizeable up to 200% without loss of content or functionality.

The problem with viewport units for font-sizing lies in the way modern browsers implement zooming, which is via proportional scaling, or making the CSS pixels bigger. This causes the computed viewport size to decrease, so if there are any breakpoints that trigger layouts for smaller screen sizes, that would kick in. But if we are using viewport units for sizing, this means the font-size will not grow in proportion to what we expected.

I won't say never use options 2 or 3, because depending on the font sizes you are working with and the size of the user's viewport when accessing your content, this WCAG failure may or may not happen. So in way, it seems like the simple option of media queries, might just be the safest option. 

---

Next, let's talk about scroll snap. The CSS for this has been around for a while, but the specification had gone through a number of modifications, and the properties have changed somewhat from their first iteration. Today, the main properties are `scroll-snap-type` for the container and `scroll-snap-align` for the child elements.

For `scroll-snap-type`, you can set a value of `mandatory` or `proximity`, which determines how strictly the browser snaps to a snap point. Setting it to `mandatory` makes the browser always snap to a snap point, while `proximity` will trigger the snap if the user stops scrolling within a couple hundred pixels of a snap point.

You can also specify which axes snapping should occur, either the block axis or the inline axis. Here I'm using `both` because I'm lazy, but you can control if your items should snap only on a single axis. Probably relevant if you have scrolling on both axes.

Support for scroll snapping is quite good already, and even if you need to support Internet Explorer for some reason, the old syntax will work there, though your mileage may vary depending on what you're building.

If you need something like this, instead of reaching for a Javascript-based solution, perhaps give this native CSS solution a try instead?

---

Moving on, we have sticky elements. This is a pattern that I encounter fairly often these days and I do still remember the days before `position: sticky` was widely supported where we would use Javascript to calculate the position of where the element needed to be and it all felt a bit expensive, to be honest.

Right now, we have good support for `position: sticky` but the main issue I see with folks trying to use it is confusion over why it's not working as expected. Most of the time, it's due to some gaps in the understanding of how it works.

A sticky positioned box is like a hybrid of a relatively positioned box and a fixed positioned box. For it to work, the element must have an offset value applied, e.g. `top: 1em` in the example. The sticky element is treated as relatively positioned until it crosses the threshold for the container it scrolls within.

When you define an offset value, the offset will never push the sticky box outside its containing block, but the sticky box is free to move within the containing block as the page is scrolled, hence the perception of it being pinned to the relevant edges.

The element will then be "stuck" until it hits the opposite edge of its containing block. So in the event your sticky element has already reached the edge of its containing block, it may appear not to be sticky. But actually it was just that the containing block had been scrolled away from the sticky-constraint rectangle altogether.

We can see this phenomena in this live demo. The markup consists of a bunch of boxes within a wrapper `div`. So the wrapper `div` is the containing block. Right now, you could change this value to `bottom` and it would stick to the bottom of the container.

In a horizontal scrolling situation, we will be looking at `right` and `left`. Here's a fun question, why does `right` work, but not `left`? Having a border around the wrapper can help us understand what's going on. As you can see, the wrapper itself is too small to encompass the sticky element.

So what we are seeing is the entire container scrolling away, it's not that the element is not sticky. So if we make the container longer, you'll see that sticky works just fine. Another interesting thing is you could use both `left` and `right` to keep the element within the sticky-constraint rectangle. 

I wrote a bit about positioning in my blog before, and in there I linked to several articles by different authors explaining sticky positioning as well. Because I think everyone understands and hence explains it slightly differently, so if what I said doesn't make sense to you, try a different explanation until you find the one that works for you.

---

This next one is pretty new and only supported in Firefox for now. Masonry was originally a Javascript layout library created by David DeSandro back in 2009, I think. It's a layout where items are tiled neatly based on the vertical space available. Lots of Tumblr themes use it, Pinterest also does it.

Given its popularity among web designers and developers, this layout method was discussed quite a bit within the CSS working group meetings and the editor's draft of Grid Level 3 specifies how this can be done natively in the browser with CSS.

But even without CSS masonry, we can already do something close with CSS multi-column layout. It's just that there are limitations to this approach. Multi-column seems more suited for inline content, i.e. lines of text, as opposed to discrete blocks. There are some fun things you can do, like style the dividers between columns.

As for laying out content, it's possible to span an item across columns, but for now the only supported value is all, which again, is quite limiting. The rendering is kind of odd and inconsistent across browsers at the moment. Content also flows from top to bottom, so if order matters, you might not want your important content to be at the bottom instead of across the top.

CSS masonry builds on top of browsers' Grid capabilities and its syntax is similar to how we would do Subgrid (which is part of Grid Level 2). The value of `masonry` is applied to either `grid-template-columns` or `grid-template-rows` depending on the direction you want.

For a horizontal direction, the row heights are defined with `grid-template-rows` while the columns are free to be masoned together. Like a normal grid, you can allow the grid item to span multiple columns with `grid-row`.

And we also have masonry related alignment properties, which use the same values as the other box alignment properties. For this vertical direction masonry layout, if the height of the container exceeds the height of the content, you can use `align-tracks` to adjust the content along the block direction and `justify-tracks` for the inline direction.

Currently, the working group is looking for feedback on the implementation as it is early days and there are a lot of aspects to consider before it is production ready. If you're using Firefox, this feature is currently behind a flag, which you can enable to try it out for yourself.

---

Lastly, we have something that is really in the spotlight recently, and that is container queries. I'm not too sure about the order of the talks, but if you've already watched Miriam's talk, you would have a pretty solid understanding of the syntax for container queries. 

If not, I'll touch on it by talking through the code example, and you can solidify your understanding by listening to Miriam's explanation. I call this teamwork. 

The concept behind container queries has been around for quite a long time, especially as responsive designs became the norm. The idea behind having individual components display differently based on the size of its parent, as opposed to the overall viewport, was very appealing but hard to do.

I'm not a browser engineer, no where close. However, I have enough understanding behind how browsers do layout to know that implementing the logic for container queries is not a trivial affair. The idea around containment, or the isolation of a subtree from the rest of the document, was floating around since 2017, when the first public working draft for the Containment module was published.

But the work really picked up end of 2020, when Miriam started championing for it. She has since done a lot of the work on the specification and is a huge reason why we have a version to play with in Chrome Canary right now.

The specification is currently work-in-progress and has changed since the last time I talked about container queries. The current preferred syntax to establish a query container is via the `container-type` property.

The style rules for all the elements within this query container can then make use of this container's properties like its size, layout and style as trigger points, much like what we are used to with media queries.

The syntax is very much similar with media queries, but with a different keyword. The fact that we can control styling of elements based on the size of its parent versus the entire viewport opens up a lot more options when it comes to designing components, so it's no wonder why so many people are excited.

So let's say we have a card component that we'd like to re-use across our site. But that card component might show up in different contexts at the same time, for example, as narrow sidebar as well as the wider main content area.

What we would do today, would be to apply separate style rules depending on the card's parent container. And even then, it can be unwieldy because the query is based solely on the width of the entire viewport.

Now, when we define the `container-type` property on an element, its children can respond according its behaviour. I'm using `inline-size` here because I'm querying along the inline axis. So if I change it to `block-size`, it's not going to work. But now, my card component styles are much less specific because I don't have to worry about the size of its parent container at different viewport sizes.

We are in early days now, and the implementation we have to play with cover the dimensional queries, which are based on the sizing of the container. But if you peek into the specification, you'll see that we potentially will be getting style queries, for things like the colour of the element or some other computed style value.

And also, state queries, which could allow us to query if a sticky positioned container is stuck or not, or if a box is visible on the screen or not. Both style and state queries are in the process of being worked out, because I imagine there would be a lot to iron out before browser engineers can start actual implementation. But the possibilities here are breath-taking.

Again, I encourage everyone to give it a try in Chrome Canary and if you have any constructive feedback, the CSS working group will be happy to hear it. They do all their work out in the open on Github, so that's a channel where you can chime in.

---

As a self-proclaimed CSS lover, I must say the thing that draws me most to CSS is the fact that there is no one right way to do things. CSS is flexible enough to adapt to such a wide variety of situations. Can't touch the mark-up? All is not lost because there is a high chance a certain combination of CSS properties can workaround that problem.

There are really plenty of exciting developments in CSS these days, giving us even more tools with which to style the web. And this is additive. It doesn't mean you can no longer use Javascript to implement these solutions now that CSS is an option. The point here is options.

To close off, I just want to say that it doesn't matter if you don't use the latest and greatest right now, but I do hope you can keep these properties and techniques in the back of your mind. And try them out for a future project instead of reaching for a Javascript-based library first.

Thank you.
