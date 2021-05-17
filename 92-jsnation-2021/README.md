# CSS can do that too!

*For JSNation 2021. This is a sort-of transcript plus my notes for the talk.*

Hello everyone! This is the first time I'm participating in JSNation and I hope you've all had a great time so far. JSNation is the biggest Javascript conference in the cloud, so naturally, I'm going to talk about CSS. Specifically, things that we used to need Javascript for, but now can be simplified by using CSS alone.

A quick introduction. My name is Hui Jing, and I'm simple enough that these emojis paint a fairly comprehensive picture of who I am as a person. I happen to be Chinese, and if you're unfamiliar with Chinese names, our family names come first, followed by our first names. I'm currently a front end developer at Shopify.

This is going to be a rather short 20 minute talk, so I don't expect people to instantly pick up everything I'm trying to cover. Instead, I just want you to know these things exist, and if you ever need to use them yourself, you can take your time in understanding them at a deeper level and apply them to your specific use-case.

---

Let's start with responsive typography. To me, the web is fun because you can't control the environment via which your audience views your creations. For textual content on the web, a key concern is its legibility and readability. There have been a number of techniques developed over the years and as newer CSS properties become available, these techniques are being continually refined.

Even though this first option seems fairly basic, you can also look at it as the most flexible, in the sense that you have a fairly granular control over the font sizes at whichever viewport you wish to tweak.

This second technique by Mike Riethmuller back in 2015 has a couple of names, some folks refer to it as CSS locks. The technique allows your font sizes to grow and shrink with the viewport width, but within a range. To do this, it makes use of a combination of `calc()` and viewport units for font sizing.

The media queries allow you to limit the font scaling to within a range you control, and cap the minimum and maximum font sizes as well. For an in-depth explanation of the formula, I recommend reading Mike's article, which I have linked to at the end of this presentation.

Recently, a slew of CSS math functions have gained wider browser support. Among them is the `clamp()` function, which allows us to pick a value within a range between a defined minimum and maximum. That's why the function takes in 3 parameters, the first being the minimum, the next being the preferred value, and the last being the maximum.

This function is useful if your preferred value is dependent on something you don't control directly, like viewport units. This clamp function also allows us to write something similar to the previous function with a more simplified syntax.

One thing to take note of is that use of viewport units or limiting text sizes with math functions may result users being unable to scale text to 200% of its original size, which is a WCAG failure. So it is essential to test with zoom.

---

Next, let's talk about scroll snap. This CSS for this has been around for a while, but the specification had gone through a number of modifications, and the properties have changed somewhat from their first iteration. Today, the main properties are `scroll-snap-type` for the container and `scroll-snap-align` for the child elements.

For `scroll-snap-type`, you can set a value of `mandatory` or `proximity`, which determines how strictly the browser snaps to a snap point. Setting it to `mandatory` makes the browser always snap to a snap point, while `proximity` will trigger the snap if the user stops scrolling within a couple hundred pixels of a snap point.

Support for scroll snapping is quite good already, and even if you need to support Internet Explorer for some reason, the old syntax will work there, though your mileage may vary depending on what you're building.

If you need something like this, instead of reaching for a Javascript-based solution, perhaps give this native CSS solution a try instead?

---

Moving on, we have sticky elements. This is a pattern that I encounter fairly often these days and I do still remember the days before `position: sticky` was widely supported where we would use Javascript to calculate the position of where the element needed to be and it all felt a bit expensive, to be honest.

Right now, we have good support for `position: sticky` but the main issue I see with folks trying to use it is confusion over why it's not working as expected. Most of the time, it's due to some gaps in the understanding of how it works.

A sticky positioned box is like a hybrid of a relatively positioned box and a fixed positioned box. For it to work, the element must have an offset value applied, e.g. `top: 1em` in the example. The sticky element is treated as relatively positioned until it crosses the threshold for the container it scrolls within.

The element will then be "stuck" until it hits the opposite edge of its containing block. So in the event your sticky element has already reached the edge of its containing block, it may appear not to be sticky. But actually it was just that the containing block had been scrolled away.

I wrote a bit about positioning in my blog before, and in there I linked to several articles by different authors explaining sticky positioning as well. Because I think everyone understands and hence explains it slightly differently, so if what I said doesn't make sense to you, try a different explanation until you find the one that works for you.

---

Lastly, we have the masonry layout, which was originally a Javascript layout library created by David DeSandro back in 2009, I think. It's a layout where items are tiled neatly based on the vertical space available. Lots of Tumblr themes use it, Pinterest also does it.

Given its popularity among web designers and developers, this layout method was discussed quite a bit within the CSS working group meetings and the editor's draft of Grid Level 3 specifies how this can be done natively in the browser with CSS.

But even without CSS masonry, we can already do something close with CSS multi-column layout. It's just that there are limitations to this approach. Multi-column seems more suited for inline content, i.e. lines of text, as opposed to discrete blocks. 

It's possible to span across columns, but for now the only supported value is all, which again, is quite limiting. Content also flows from top to bottom, so if order matters, you might not want your important content to be at the bottom instead of across the top.

CSS masonry builds on top of browsers' Grid capabilities and its syntax is similar to how we would do Subgrid (which is part of Grid Level 2). The value of `masonry` is applied to either `grid-template-columns` or `grid-template-rows` depending on the direction you want.

For a horizontal direction, the row heights are defined with `grid-template-rows` while the columns are free to be masoned together. Like a normal grid, you can allow the grid item to span multiple columns with `grid-row`.

And we also have masonry related alignment properties, which use the same values as the other box alignment properties. For this vertical direction masonry layout, if the height of the container exceeds the height of the content, you can use `align-tracks` to adjust the content along the block direction and `justify-tracks` for the inline direction.

Currently, the working group is looking for feedback on the implementation as it is early days and there are a lot of aspects to consider before it is production ready. If you're using Firefox, this feature is currently behind a flag, which you can enable to try it out for yourself.

---

There are really plenty of exciting developments in CSS these days and even if you don't use them right now, I hope you can keep them in mind and try them out for a future project instead of reaching for a Javascript-based library first.

Thank you.
