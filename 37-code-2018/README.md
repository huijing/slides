# Not in Kansas anymore: a new frontier for web design

*For Web Directions Code 2018. This is sort of a transcript of the talk.*

Hello, everyone! I hope you all had a good lunch, I thought it was delicious. It's my first time at a Web Directions conference, and I'm having a wonderful time. One of my interns saw this title slide of mine, and asked, what does this mean? Isn't Kansas a place? I probably should rethink any future decisions when it comes to including cultural references in my talk titles. 

My name is Hui Jing, I go by Jing as well. I'm from Malaysia, very proud of that. And I used to play basketball full time. Basketball actually helped kick-start my web career. Ask me about that later, if you're interested.

My inordinate love of CSS is what compels me to write and speak about this topic. I also happen to be a Mozilla TechSpeaker, which is an initiative by Mozilla that supports technical evangelists in regional communities around the world by providing resources and funding.

## On the importance of local content

I grew up in Malaysia and Singapore, two countries which are literally next to each other. And I spent most of the first 18 years of my life commuting across the border to go to school.

Both countries are a melting pot of cultures, races and languages. All around me, I could see street signs in Jawi and Latin characters, store-fronts with signs printed in Chinese and Malay. I read novels in Chinese, storybooks in English. All around me, the physical world was filled with writing systems in all directions.

But in the digital world, everything was horizontal, top-to-bottom. And when I was a kid, I didn't really think too much about such things. I had just assumed that was the way things worked. That in the digital world, interfaces would always be left-to-right. And almost always in English.

When I got older, I did some digging. And it turns out that of the world's 7.6 billion people, only 5% are native English speakers, but 52% of websites are in English. This ratio doesn't really sit well with me, to be honest.

For example, there are an estimated 315 million Arabic first-language speakers in the world, which is around 4.1% of the population. The percentage of Arabic language sites on the web? 0.6%.

Studies done by the Internet Society have shown that while cost of access is a barrier to getting people online, many non-Internet users claim that the Internet is simply not relevant or of interest to them.

If the Internet is meant to enhance the free flow of information and ideas across the world, then creation of content on the web shouldn't be largely limited to English-speaking communities.

Diversity of thought and perspective in the online world will be greatly enhanced by the participation of cultures and societies who speak all kinds of languages.

Internationalisation is one of the priorities at the W3C, because it is crucial that a technology meant to be ubiquitous supports the creation of local content across the world. That every writing system in the world can be correctly rendered on the web.

## On the web as a medium

So let's talk a bit about the web. The web is less than 30 years old, and it really is a completely new medium. But we have a tendency to reconcile something new, with something familiar. For the web, we sort of drew a parallel with print, using terms like web pages.

A key distinction from print, however, is an additional degree of separation between the creator and their final output. As such, we cannot have the same set of expectations when it comes to handling the web as a medium.

This is a medium where you cannot directly manipulate the canvas, in this case, the viewport of the browser. Instead what we do, is write code as instructions to the browser, to tell them how we want our designs to be rendered.

Intrinsic web design is a term coined by Jen Simmons, who introduced it to the world at An Event Apart earlier this year. Intrinsic. Merriam-Webster defines intrinsic as “belonging to the essential nature or constitution of a thing”.

Think about the essential nature of the web. It is a dynamic medium, the only medium I know of where the same source can result in vastly different outputs. Some call it a bug, I call it a key feature. This is a medium that allows our designs to morph and adapt as the viewport changes, and one that requires a different mental model to design for.

Web designer, Ezequiel Bruni, had this wonderful quote about what he thought Intrinsic Web Design meant. CSS is no longer a limitation, instead, it has matured into something that can empower designers and developers. Other mediums have had more than a hundred or even thousands of years to evolve and develop. With the web, we've only just gotten started.

I first got the idea of comparing CSS to a sports team some time last year, when I started experimenting and building layouts with Grid. Because I found that, as powerful as Grid was on its own, it worked even better with complementary properties like Flexbox and object-fit, for example.

To me, CSS is a holistic technology. Sure, you can use properties in isolation, but the full power of CSS shines through when properties are used in combination.

I'm not sure how many sports fans are in the audience today, but this talk is pretty similar to a scouting report, featuring properties that are very useful for doing layout on the web, and how they can work really well together to handle certain situations.

## On pushing the boundaries of web design

I didn't really think much about layout on the web until a few years ago when I was stuck in a crowded subway train after work. All of us were literally shoulder to shoulder, and I'm reasonably tall, at least in Singapore. So I found myself inadvertently peering over the shoulder of the man in front of me reading a Chinese novel on his phone.

Looked something like what you see on the screen now. I then found myself thinking, wouldn't it be nice to have a traditional vertical layout for Chinese novels on a phone? Like those I used to read back in the day. Something like this instead. At the time, I wasn't sure if such a thing could be done on the web.

What I discovered, and some of you may find this hard to believe, is that vertical text was supported by Internet Explorer since version 5.5. It was based off a much earlier version of the specification which originated from SVG though.

Chrome started shipping support for vertical text in 2010. This was followed by Safari in 2011, then Opera in 2013 and finally, Firefox in 2015.

These are websites that have won the Tateyoko Web Award, an award which seeks to recognise designs that challenge the norm of horizontal layouts, as well as to increase awareness among designers and developers of the existence of new CSS capabilities that push the boundaries of web design and typography.

Although vertical writing is native to East Asian languages, that doesn't exclude you from using vertical text simply because you don't design for those languages. If anything, the fact that browsers now better support vertical text allows us to draw design inspiration from more sources than before.

Once I realised that the web could be more than horizontal left-to-right 12-column-grid designs which somehow almost always involved a hero image, it was like a switch flipped in my brain. That this was no longer the web I first used to surf Magic the Gathering webrings, or played Neopets on.

The web has evolved from a medium marred by limitations to one full of possibilities. This is a talk about possibilities.

Take vertical layouts, for example. Even if you're designing for a horizontal-only language, there are subtle ways you can insert vertical text into your designs to add some flavour without compromising the reading experience.

Try it for labels on card-based designs, or tags in blog posts. Cases where the text is not critical to the understanding of the content. Or maybe even headers for sections on long scrolling pages.

Vertical layouts are not a new thing. It's just that the web hadn't reached a level of maturity that could do them well, until recently.

With the release of CSS grid last year, it seems that we've hit yet another milestone for web design. The web is literally growing up before our eyes. From a time when layout was non-existent, to hack-ish methods like tables and floats, to what we have today.

Modern CSS gives us a wider vocabulary with which to communicate with the browser, so we can leverage these new capabilities that browsers now have for better art direction, more creative layouts and fresher designs that break out of the cookie cutter moulds we're so used to seeing on the web.

## On drawing inspiration from physical media

A lot of great graphic design can be found from posters, record labels, book covers, things that we encounter almost on a daily basis.

Something like this, a trilingual magazine cover with both horizontal and vertical text. A design like this can be done with native CSS and semantic markup. All the text can still be selected, copied and pasted, recognised by assistive technologies.

This poster is by Edward McKnight Kauffer, one of Europe's most influential poster artists of the 20s and 30s. Uses some vertical text here.

Another one by Kauffer, with some diagonal layout going on there.

This is a vintage cover of Architectural Design magazine, with a radial text layout.

And this book cover by Coralie Bickford-Smith for The Craftsman, I'm particularly fond of. It's not too difficult to recreate something like those vertical pencils on the web. In fact, there are multiple ways we can do this.

### CSS transforms

We can do it with CSS transforms. Even though transforms are often used for animations, static transforms can be pretty useful too.

As an aside, I sort of got slightly sidetracked when preparing the slides for this talk, because I somehow got it in my head that it'd be fun to create CSS trading cards. Some people have asked me to get them printed. I wouldn't mind, if there was enough demand, let me know.

The general idea is to start off with an unordered list, with each pencil being a list item. We can style each list item to look like a pencil, and then lay them out vertically.

Mark-up is very basic. But we do require an additional p tag inside each list item for styling purposes. Without it, I would only have two pseudo-elements to play with, and that's not enough to create a pure CSS pencil.

The key property for making a list item look like a pencil, is borders. The border property is, in my opinion, an underrated CSS property. If you've read Lea Verou's brilliant book, CSS Secrets, or watched her talk on the humble border-radius, you might already know this.

The erasers are before pseudo-elements, while the tips of the pencils are after pseudo-elements. The tips were created using the CSS triangles technique, which makes use of the fact that, on the web, borders meet as diagonals.

There are four 2D-transform functions available to us, and we'll use the rotate transform to get the pencils vertical. The tricky part about using transforms is that you have to keep in mind the transform-origin, and how the browser deals with transforms to begin with.

Transforms bring the element in question into its own layer, and takes it out of the normal document flow. So if you're trying to rotate elements that are supposed to be part of a larger layout, which is a super common use-case, you might end-up with unwanted overflows or overlaps.

A friend of mine tried to transform an entire website and discovered so many interesting things about transforms that it warranted a 20 minute talk at our CSS meetup. But hey, diagonal scrolling is now a viable possibility.

### Writing mode

Another way to do vertical layout on the web, is via the writing-mode property. My research into typesetting Chinese vertically on the web led me to discover the existence of an entire specification dedicated to writing modes.

This specification covers all sorts of international writing systems, extending and replacing the unicode-bidi and direction features defined in CSS2.1

It also introduces a number of rules and properties that are required to properly support vertical text layout in CSS.

This table summarises what happens to your text when the different values of writing-mode are applied. The default is horizontal, top-to-bottom. To change the writing direction to vertical, we can use vertical-rl or vertical-lr.

But when we rotate text, it's not only the lines that change direction. Each line contains individual letters or characters, and they have an orientation as well.

For text-orientation, the initial value is mixed. Browsers are smart enough to tell which languages can be typeset both vertically and horizontally, or in one direction only. So Chinese characters, for example, will always be displayed upright. While horizontal-only languages, like English or Hebrew, will have their characters rotated when vertical.

The text-orientation property let's you control this, and make all the characters upright or sideways, if you want them to be.

Sometimes, numerals and abbreviations occur in vertical text. The text-combine-upright property lets us typeset these characters upright, and fit them in the width of one character.

Currently, no browser supports the digits value yet, which allows us to dictate how many digits or letters are acceptable to be squeezed in. The allowed range is between 2 to 4 characters.

For now, with the all value, there is no limit, so you use it on a long word like “Melbourne”, and the browser will squish the whole word into that single-character space.

With writing-mode, the markup is exactly the same. But the CSS is rather different. Presently, we still rely heavily on the physical directions of left, right, top and bottom when it comes to styling elements.

But these physical directions don't make as much sense with a vertical writing mode. For this use case, all the borders have to be re-calibrated. We can't just slap on a vertical-lr to the transforms example and call it a day.

If you compare the code for this and the transforms version, you'll notice that even though the words are rotated and flowing from right-to-left, the direction of margins and paddings still adhere to our perspective.

For example, the padding on the left of my pencil text, that space between the eraser and the text? That's padding-top, which is rather disorienting to me.

### CSS Logical Properties

Luckily, we have an up-and-coming new player on team layout, CSS Logical Properties. What it does is use logical properties like block-start and block-end or inline-start and inline-end, which are relative to the block flow of the page, and allows the same code to be used regardless of writing mode.

I highly suggest reading Rachel Andrew's in-depth article on Smashing Magazine to gain a better understanding of this specification. The first public working draft of the spec was published in December last year, and I'm eager to see it developed and more widely implemented.

### Flexbox

I can't, in good conscience, talk about web layouts without mentioning Flexbox. If you tried to print out the entire specification, it's about 87 pages long, and there's a good reason for that. Because it defines a new layout mode designed for laying out complex applications and web pages.

Obviously I'm going to milk this pencils example for all it's worth. So now let's increase the number, and make them a mixture of both vertical and horizontal pencils. This is becoming a larger scale layout situation, but Flexbox is still capable of handling it. It's versatile like that.

The cool thing about Flexbox is that it can do space distribution and content alignment like nothing we've seen before. Think of it as a layout super-property.

Flex children can be laid out in any flow direction, which means they can flow from left-to-right, right-to-left, top-to-bottom or even bottom-to-top, if that's what you want. Display order can also be reversed or rearranged, though this does have accessibility implications and should be used with caution.

Items within a flex container are laid out like a long daisy chain. But even if they wrap around, there is actually no relationship between the rows and columns. It's just one really long row, or one really long column that wraps around.

The property that controls the flow direction, is aptly named flex-direction, and with this, we can reorder flow of content. Again, I want to emphasise that this merely modifies the visual order and not the source order of the flex items. Screen readers and keyboard control will still respect source order.

### CSS Grid

Flexbox is pretty great, but there are some things it doesn't do well, like creating full page layouts. A full page layout requires a positioning scheme that recognises the relationship between rows and columns of content. Flexbox can't do this.

But Grid can.

I never talk about Grid without quoting Rachel Andrew so here's a good one. Think about how we've done layout in the pre-Grid era. Say, we wanted to create is simple 3-column uniform grid.

One approach for creating such a layout is the inline-block technique. For a three column grid, we set the display of the items to inline-block and give them all a width of a third of the container.

It's almost the same if you use float, because you also need to set a width on each item.

Even if we're using Flexbox, to ensure our items line up in three columns, we have to make sure the flex-basis is a third of the container. Again, the properties we are applying go on the item.

For all 3 techniques I just described, there isn't actually a grid. It just looks that way because we've forced the items to line up with each other.

With Grid, there actually is a grid. We define its rows and columns, then place items on that grid wherever we want to. We are freed from the limitation of elements having to line up next to each other all the time.

That means our layouts can be canonically non-sequential now. We don't have to mess around with absolute positioning or spacer divs or any of those other workarounds we used for vertical spacing any more.

Here I have a 6-by-6 grid, and 6 grid items arbitrarily placed all over the place. Grid makes it really simple, and intuitive to have vertical white-space in our layouts.

So we're done with pencils now. But like I mentioned, there's a lot of great graphic design that we can draw inspiration from, for example, this is a page from László Moholy-Nagy's book, Malerei, Fotografie, Film.

It's a striking design with bold black borders, and content aligned in different configurations. If we want to have such a design on the web, Grid alone is not enough.

The code shown here is abridged to show mainly the layout code, but even the gear and arrow are pure CSS, made with the box-shadow trick.

In order to align the internal content of each grid child without disrupting the rendering of those thick black borders, we'll need to make each grid child a flex parent.

By default, the value of a grid item's alignment is stretch, where it fills up the entire space of the grid cell. Once an alignment is applied to the grid item's contents, it will shrink to fit the content.

Making each grid item a flex container allows us to use box alignment properties to adjust the position of the grid item's content while keeping the borders at the edge of the grid cell.

Another thing that Grid makes a lot easier is overlap. We could have achieved an overlap effect with absolute positioning, but removing an element from the document flow usually brings about a lot of unwanted consequences.

With grid placement, overlap is easily achieved without disrupting the rest of the layout at all. This is from another vintage publication, English painter Charles Hayter's A New Practical Treatise on the Three Primitive Colours.

Totally doable on the web.

Again, this code is abridged, but placement is a matter of defining which row and column you'd like your element to appear in. And how many grid cells you'd like it to take up. It is perfectly acceptable to have multiple elements occupy the same space on your grid.

This demo was also an excuse to play with blend-modes. CSS blend-modes work the same way as in Photoshop. Una Kravets has written and spoken extensively about CSS blend modes, and even created CSSgram, a library for creating Instagram filters with CSS filters and blend modes.

This poster for Braun is by German graphic designer and photographer, Wolfgang Schmittel. And it is a rather grid-able design. So no surprises here, that such a design can be done on the web with CSS grid.

But when we take into account how dynamic the web is, how we are designing for a medium whereby we have absolutely no control over how our designs will be viewed, things get a bit more interesting.

It's probably a better idea to consider aspect ratios over absolute dimensions when it comes to designing web layouts. Responsive aspect ratios used to be really tricky to do on the web. But not any more.

### Viewport units and media queries

Designing with viewport units is the next step in embracing the dynamism of the web, by sizing elements relative to the width and/or height of the viewport they are viewed in. Sara showed us how viewport units can be used for responsive typography, by scaling font sizes relative to the viewport.

But I would like to see more people using these units in layout level sizing as well. Values like vmin and vmax allow us to move from prescriptive sizing to adaptive sizing. No more micromanaging pixels.

This demo is sized with vmin, which allows the entire slider to scale according to the size of the viewport, keep its aspect ratio and never overflow its edges. Because vmin tells the browser to size things as a percentage of the width or the height of the viewport depending on which side is smaller. A CSS unit that adapts to its context in a consistent manner.

Sometimes using viewport units for heights can result in rather funky results when the window is resized to the extremes, but that's why I want to reiterate the power of using CSS properties in combination. Media queries can act as guardrails to literally stop your design from going over the edge.

Even though the most common media query is width, the level 4 specification defines 18 media features that are available for use as conditions, like height or orientation. And there are even newer ones in the level 5 specification that Sara mentioned, like prefers-reduced-motion and light-level. Somehow we're not seeing them being used very often on the web at the moment.

A design like this looks great in landscape mode, and can still look alright on a small screen, it's viewed in landscape, right? Conversely, I have colleagues who have big monitors set up in portrait mode. You see where I'm going with this?

Thankfully, we have aspect-ratio media queries. And they are especially useful for designs that utilise viewport units, but there is no limit on how you wish to combine multiple media queries to make your design fully adaptable.

### Non-rectangular layout properties

Remember when Sara showed the CSS Masks browser support table earlier? I'm going to introduce you to a bunch of related CSS properties. Relatively new-ish properties. They all fall into the category of making things on the web NOT rectangles. However, browser support for all of them doesn't look too good.

One of them is CSS shapes, which Sara had written about back in 2013. I really love CSS shapes. The CSS nerd that I am, I have a CSS properties leaderboard in my head, and trust me, Shapes is up there.

Because Shapes lets us flow content around non-rectangular shapes, like circles or polygons. And even images. Yes, as long as the image has transparency, it is possible to let text flow around Beyoncé looking like a boss. You do have to float your shaped element or image for things to work though.

Clip-path and mask are sort of similar, in that both of them allow us to hide parts of an element. And neither have particularly good browser support. Such techniques are super useful for creating unique layouts and even spice up interactive animations when we throw in some Javascript.

Something like this. Really cool, right? Can you imagine the possibilities for this?

Interactive Beyoncé spotlights on websites, that's what.

Let's have one more, CSS exclusions. Terrible browser support, really. CSS exclusions define arbitrary areas around which inline content can flow, and can be defined on any CSS block-level element. Very similar to Shapes, but you don't need to float your element for it to work.

### Feature queries

My point is, browser support is an often raised concern when it comes to using newer CSS features, especially those for layout. Because nobody wants their site to look broken. And here's where feature queries come in.

It is a conditional that checks if the browser supports a particular property or not. If it doesn't, the entire block within the @supports rule is ignored.

This means we start off with a basic layout that works everywhere before laying on styles based on the features we want to use.

By organising our code in this manner, the browsers that do not support feature queries or the specified property still get styled, while those that do get a different look. Really making use of the ‘C’ in CSS.

This image was the header for a CSS Tricks article, and it caught my eye simply because it was diagonal, to be honest. It looks almost exactly the same when recreated in HTML and CSS. Almost.

With feature queries, you can do quite a lot of things. For example, display a message informing users that a feature is not supported, with pseudo-elements, and having a fall-back, in this case, an image for IE11.

But most often, the feature query will contain code that acts as an enhancement to a design that works in all browsers. And there's nothing stopping you from using feature queries and media queries in combination to cater for different browsers on different devices.

With feature queries, we don't have to revisit our code-base to rewrite things when a browser gets updated, because the code is not browser-specific, it's feature specific. Once a feature gets shipped, your design will be updated automatically.

This example makes use of a combination of feature queries for both Grid and CSS Shapes. If you're on a legacy browser, you'll get a simpler design, but everything is still styled.

For now, Firefox users don't get to see the CSS Shapes effect, but once they do, the layout will automatically look like the one Chrome users see at the moment

Even something with terrible browser support, like Exclusions, can be used as an enhancement, to browsers that do support it, without compromising the experience on browsers that don't.

## On shaping the future of the web

It used to be that a new feature or bug fix would take a long time to ship, and that was true in the earlier days, when browsers were updated maybe every 6 months. But these days, the upgrade cycle has shortened immensely.

Look at how dense the releases have become in recent years. New features and bug fixes are being shipped faster than ever before. And the manner in which they are being shipped has also evolved.

My favourite example to talk about is the release of CSS grid. Most of the major browsers shipped it in March of last year. By October, 75% of web users around the world were using a browser that supported Grid.

Today, that number is 87%. That's pretty amazing. And I think this method of developing features behind a flag has proven to be much better than vendor prefixes, as it allows for a more coordinated release when the specification is sufficiently mature, while still allowing developers early access to hash out any potential issues.

It's so much easier to get enthusiastic about new CSS features these days because they ship and become widely supported so much quicker now. And the same goes for bug fixes.

Every major browser engine has a pretty open process for raising bugs, and raising bugs for a particular feature sends a signal to browser vendors that developers want to use this feature. This encourages them to prioritise related bug fixes.

It's a win for everyone. By taking the time to submit a bug report, you gain karma points, get your bugs fixed AND make the web better for all of us.

I want to encourage everyone to move away from a “why bother” mindset, to a “why not?” mindset. And whenever you come across a new feature that seems interesting, or might be useful to you, just go ahead and try it out. Build something with it. Anything. Demos don't have to be grand, monetisable side projects. It can even be an excuse to spend hours searching for the perfect photo of Beyoncé.

Building demos, writing articles, or even just starting a conversation on Twitter. All this helps build awareness of new CSS features, and act as feedback to browser vendors and specification writers on what developers are looking for out of the web platform.

This is in line with what Phil talked about earlier, about getting involved and participating in discussions on standards. All of you can help me make the dream of having text flow around both of Beyoncé's elbows on the web a reality.

## Wrapping up

This was a talk about possibilities.

You don't need to use any of these techniques or properties that I covered if they don't fit your use-cases today. But knowing what the web is capable of, and what you can potentially build with it, is the act of growing your web design toolbox. So you can be sure, that when the time comes, you have a vast array of tools at your disposal to create a masterpiece for the ages.

Thank you all for your attention.
