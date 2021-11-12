# Revisiting styling techniques in 2021

*For CSS Conf Armenia 2021. This is a sort-of transcript plus my notes for the talk.*

Բարեւ Ձեզ (Barev dzez), I hope everyone is doing fine. I'm very happy to have this opportunity to speak with all of you at CSS Conf Armenia. Talking about CSS is one of my favourite things. Today, I'll be sharing about a few techniques that a lot of us may have come across in our frontend development career, and I want to revisit some of them to use modern CSS.

My name is Hui Jing and I'm a frontend developer based in Singapore at the moment. These emojis summarise who I am quite well, and you can always ask me about any of them if you feel like.

I think it is a common perception that web technologies are constantly changing. It almost feels as if there is a new library or framework that can "do things better" every other week, to a point where some people have described it as hype-driven development.

Even web standards, which are traditionally thought of as moving very slowly, is starting to pick up speed in recent years because browsers have adopted the evergreen model of pushing updates every 4-6 weeks.

It might feel overwhelming, but my suggestion is that you don't have to be an expert in every new thing that rolls out. In fact, it's enough to just know that something exists, and maybe a brief description of what it does. And that's it. You can get on with your day.

If one day you start a project or have to complete a task where it sounds like that thing could be useful, then you can take your time to deep dive into learning that thing properly. That day might never come, and you know what? It doesn't matter if you don't know all the things if you're not going to use them.

Building for the web should be fun, not stressful.

So these are the frontend scenarios I will be covering today. Hopefully we can get through all of them in time.

---

First thing I want to talk about is scroll snapping. The CSS for this has been around for a while, but the specification had gone through a number of modifications, and the properties have changed somewhat from their first iteration. Today, the main properties are `scroll-snap-type` for the container and `scroll-snap-align` for the child elements.

For `scroll-snap-type`, you can set a value of `mandatory` or `proximity`, which determines how strictly the browser snaps to a snap point. Setting it to `mandatory` makes the browser always snap to a snap point, while `proximity` will trigger the snap if the user stops scrolling within a couple hundred pixels of a snap point.

You can also specify which axes snapping should occur, either the block axis or the inline axis. Here I'm using `both` because I'm lazy, but you can control if your items should snap only on a single axis. Probably relevant if you have scrolling on both axes.

Support for scroll snapping is quite good already, and even if you need to support Internet Explorer for some reason, the old syntax will work there, though your mileage may vary depending on what you're building.

If you need something like this, instead of reaching for a Javascript-based solution, perhaps give this native CSS solution a try instead?

---

This next topic covers a bit more than CSS, it's actually more about SVG but I did encounter this scenario recently at work, and I thought it'd be helpful to share it with all of you. Basically I had to incorporate icons into the content. And there are quite a lot of ways we can do this.

I'm going to talk about the CSS option first. The pseudo-element approach is pretty reliable. We load the SVG via the `content` property, set a `display` value, some width and height, and voila, an icon in your content. You could also choose to load the SVG as a background image on the pseudo-element.

I suppose one advantage of the background-image approach is your access to the various background related properties, so you can have more granular control of your sizing and positioning. But the key issue with this CSS approach is, you can't really change the colour of your icons.

And this might be an issue if your icons appear in different contexts. There is a solution, which some people might think is hacky, I think it's kinda smart. And that is to use CSS filters to get just the right shade you want. And no, I cannot write the filters by hand, but there's this filter calculator by Barrett Sonntag that can do it for us.

Another popular choice is to inline the SVG on the page. Devtools makes this easier to see. Here we also have 2 examples, the first one uses the entire SVG in the middle of the markup. This might be an issue if the path for the SVG is very long, and it makes the markup messy. But it does allow very granular control with CSS classes.

If you needed to animate the SVG, this is a pretty good option. But if you really don't want to have the markup be so messy, another approach to inline SVG is via the `use` attribute, which allows you to reference an SVG shape from elsewhere in the file.

You can place the SVG file somewhere else in your document and just reference the identifier. For multiple SVG icons, they can each be symbols without the main SVG element, and referenced with the hash symbol. This makes the markup much neater.

The last option is to reference the SVG from an external file altogether. You might be thinking, isn't this the same as the first option where you won't be able to change anything on the SVG? Well, turns out there are *some* things that are possible.

It is possible to colour the icon via CSS because the fill property cascades in through the shadow DOM boundary as long as there is no existing fill attribute on the paths in the file, but you wouldn't be able to modify individual paths like in the second option.

The benefit of this approach is that the external file can be cached for performance gains, and if your use case only requires mono-coloured icons, this is a pretty good approach. But if you have multi-coloured icons, then you're out of luck, and would probably have to use the second option.

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

There are really plenty of exciting developments in CSS these days, giving us even more tools with which to style the web. I hope you are as excited as me about the state of CSS today, and please enjoy the rest of the conference.

շնորհակալություն (shnorhakalutyun).
