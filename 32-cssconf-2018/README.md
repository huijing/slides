# The web is not just left-to-right

*For CSSConf.EU 2018. This is sort of a transcript of the talk.*

Hello, everyone! I just landed in Berlin for the first time in my life yesterday, and I've already fallen in love with this city.

My name is Hui Jing, I go by Jing as well. I really love emojis, and since we have 2,666 emojis with which to express ourselves at the moment, I'm going to introduce myself with them. I'm from Malaysia, very proud of that. And I used to play basketball full time. Basketball actually helped kick-start my web career. Ask me about that later, if you're interested.

My inordinate love of CSS is what compels me to write and speak about this topic. I also happen to be a Mozilla TechSpeaker, which is an initiative by Mozilla that supports technical evangelists in regional communities around the world by providing resources and funding.

## On typography

What do you think about when you hear the word typography? It used to be that typography was a bit of a niche subject, something only artsy, creative types care about. But these days, it seems that typographic stories have been making their way into mainstream news.

We have big brand names, like Netflix and National Geographic, talking extensively about their font redesigns. The Microsoft font, Calibri by Lucas de Groot, was a crucial piece of evidence that proved the forgery of financial documents in a Supreme Court case in Pakistan.

But what is typography? There are plenty of definitions out there, but I always refer to this one by Gerrit Noordzij, that typography is writing with prefabricated letters. Letters are a type of grapheme, which is the smallest unit of a writing system of any given language.

Writing systems are visual representations of verbal communication. A means to record whatever we say, in our respective languages, for storage and transfer.

The world is very diverse when it comes to language and culture, so it's only natural that there are many different writing systems used all over the planet. A majority of the world use writing systems that consist of alphabets.

This is just a small sampling of a bunch of different alphabets. The Hebrew alphabet only has 22 letters. The Ukrainian alphabet is slightly larger, with 33 letters. That's 7 more letters than the English alphabet, which has 26.

The point I'm trying to make here is that alphabetic writing systems utilise a small set of letters to form all the words the language needs for the purpose of communication.

## On writing systems

Chinese is different, in that, it is a logographic language. Chinese characters number in the tens of thousands. And each character is a unique glyph that can express meaning on their own or be used in combination with other glyphs. Let's look at a few examples.

For example, Communication, an English word of 13 letters. Chinese only needs 2 characters, 沟通. Backpfeifengesicht, German word of 18 characters. In Chinese, we can say 欠扁. Grianghrafadóireachta, Irish word of 21 letters. Again, 2 characters will do, 摄影. Chinese is a pretty concise language, if you ask me.

And although a large swath of the world mostly reads from left-to-right, writing systems can go in all directions. Modern day vertical writing applies to East Asian scripts that utilise Han characters, languages like Chinese, Korean and Japanese, and are read from right-to-left. Mongolian also uses vertical writing, but is read from left-to-right.

Han characters are sometimes called square characters, because each character is composed within a uniform square. That allows Chinese to be read efficiently, regardless of whether it is typeset vertically or horizontally.

Chinese texts can be typeset into neat rows and columns. And if you don't understand Chinese, you may not know which direction the text is going. It could be vertical, right-to-left, or horizontal top-to-bottom.

## On Chinese characters

The Chinese script is said to have developed independently from the Proto-Sinaitic scripts, which were the origins of alphabetic characters. This is potentially why the Indo-European writing systems are inherently different from those of East Asia.

As different alphabetic writing sytems branched out from the Phoenician alphabet, their letterforms evolved and changed. The appearances of letterforms were often directly influenced by the tools used to create them.

The earliest letters were sans-serif when writing was done with a hard reed pen. When the transition was made to a square-cut writing implement, like a flat stiff brush, letters developed serifs.

In the middle ages, when demand for written matter kept growing, scribes and copyists who used quill pens developed more efficient styles of writing, evolving the letterforms once more.

Chinese characters have too evolved greatly since the earliest glyphs were scratched into turtle shells and animal bones as far back as 1600BCE. This early script was called Oracle Bone script because the ancient rulers would use them to consult with certain higher powers on important questions about topics like agriculture, weather, warfare and so on.

The key implement of Chinese writing is the brush. Calligraphy was and still is one of the most highly regarded Chinese arts. The works of famous calligraphers were used as the basis for carving woodblocks used for printing, which was invented in China.

These days, typefaces used for printing Chinese publications can be broadly classified into these four families: 宋体, 楷体, 仿宋体 and 黑体.

Chinese typefaces are extremely challenging to create, simply due to the volume of glyphs required. The average number of glyphs for a Chinese system font clocks in at around 35,000 glyphs, give or take a couple thousand.

This quote is from an article on Quartz that covered the process of creating a Chinese font, and it's a pretty interesting read, which goes into how much effort is needed to design and create a Chinese typeface.

For a typeface to be viably used as body copy, it will probably need a minimum coverage of around 7000 glyphs for simplified Chinese or around 13,000 for traditional Chinese. That's still a lot of glyphs, hence Chinese fonts are almost always designed by teams over a period of years.

## On the web as a medium

The web is less than 30 years old, and because it is a completely new medium, it's only natural that people try to reconcile it with something familiar, like print.

However, there is an additional degree of separation between the creator and the final output. As such, we cannot have the same set of expectations when it comes to handling the web as a medium.

This is a medium where you cannot directly manipulate the canvas, in this case, the viewport of the browser. Instead what we do, is write code as instructions to the browser, to tell them how we want our designs to be rendered.

With the release of CSS grid last year, it seems that we've hit yet another milestone for web design. Jen Simmons, creator of the amazing series Layout Land, drew a parallel between the evolution from metal letterpress to photo-based paste-up, with this evolution from Floats to Grid.

Modern CSS gives us a wider vocabulary with which to communicate with the browser, so we can leverage these new capabilities that browsers now have for better art direction, more creative layouts and fresher designs that break out of the cookie cutter moulds we're so used to seeing on the web.

As an athlete, I cannot help but draw parallels between my work and my experience with my sport. CSS is a holistic technology, in that, even though you can use properties in isolation, the full power of CSS shines through when properties are used in combination.

So you can treat this talk like a scouting report, where I profile some of the most promising players on team layout, and how they can work really well together to handle certain situations. But really, at the end of the day, it's up to you to try out various combinations to find a solution that best works for your use-case.

## On vertical text

It was purely by chance that I started exploring vertical layouts on the web. I was stuck in a crowded subway train a few years ago and was inadvertently peering over the shoulder of the man in front of me reading a Chinese novel on his phone.

That was when I first thought to myself, a traditional vertical layout would work great on a phone, and I wonder if that could be done on the web?

Turns out, it can. And really well too. These are websites that have won the Tateyoko Web Award, given to those who are willing to take up the challenge of ushering in the next generation of web typography for vertical text, by designing and utilising new typesetting standards with modern CSS.

Some of you may find this hard to believe, but vertical text was supported by Internet Explorer since version 5.5, with a much earlier version of the specification which originated from SVG.

Chrome started supporting vertical text in 2010, followed by Safari in 2011, then Opera in 2013 and finally, Firefox in 2015.

Although vertical writing is native to East Asian languages, that doesn't exclude you from using vertical text simply because you don't design for those languages. If anything, the fact that browsers now better support vertical text allows us to draw design inspiration from more sources than before.

For horizontal-only languages, you wouldn't want to layout text vertically for long passages, but there are subtle ways you can insert vertical text into your designs to add some flavour without compromising the reading experience.

An example could be labels for card-based designs, or tags for blog posts. Cases where the text is not critical to the understanding of the content. Or maybe even headers for sections on long scrolling pages.

Vertical layouts are not a new thing. It's just that the web hadn't reached a level of maturity that could do them well, until recently.

This is a mixed layout, multi-lingual magazine cover from Japan, totally doable on the web today.

This poster is by Edward McKnight Kauffer, one of Europe's most influential poster artists of the 20s and 30s. Uses some vertical text here.

Another one by Kauffer, with some diagonal layout going on there.

This is a vintage cover of Architectural Design magazine, with a radial text layout.

And then I came across this book cover by Coralie Bickford-Smith for The Craftsman, and I thought, okay let's do pencils. Specifically, let's do these vertical pencils with text in them on the web.

## On CSS transforms

While preparing this talk, I got a bit carried away with the sports analogy, and ended up being side-tracked by creating CSS trading cards. Because I have the attention span of a five-year-old.

Anyhow, let's start off with something reasonably familiar: CSS transforms. Even though transforms are often used for animations, static transforms can be pretty useful too.

My basic strategy was to start off with an unordered list, with each pencil being a list item. Then styling each list item to look like a pencil. And layout them out vertically. So the second and third points are pretty closely intertwined.

Mark-up is very basic. The additional `p` tag inside the list item is for styling purposes, because I only have two pseudo-elements to play with, and that's not enough for a pure CSS pencil.

The key property for the visual effect here is borders. The border property is, in my opinion, an underrated CSS property. If you've read Lea Verou's brilliant book, CSS Secrets, or watched her talk on the humble border-radius, you might already know this.

The tips of the pencils are made using the CSS triangles technique, which makes use of the fact that borders meet as diagonals.

There are four 2D-transform functions available to us, and we'll use the rotate transform to get the pencils vertical. The tricky part about using transforms is that you have to keep in mind the `transform-origin`, and how the browser deals with transforms to begin with.

Transforms bring the element in question into its own layer, and takes it out of the normal document flow. So if you're trying to rotate elements that are supposed to be part of a larger layout, which is a super common use-case, you might end-up with unwanted overflows or overlaps.

A friend of mine tried to transform an entire website and discovered so many interesting things about transforms that it warranted a 20 minute talk at our CSS meetup. So what other options do we have?

## On writing modes

Well, the outcome of my research into typesetting Chinese vertically on the web led me to discover the existence of the writing modes specification.

This specification covers all sorts of international writing systems, extending and replacing the `unicode-bidi` and `direction` features defined in CSS2.1

It also introduces a number of rules and properties that are required to properly support vertical text layout in CSS.

This is what happens to your text when the different values of writing-mode are applied. The default is horizontal, top-to-bottom. To change the direction to vertical, we use `vertical-rl` or `vertical-lr`.

Now when we rotate text, it's not only the lines that change direction, because each line contains individual letters or characters. They have an orientation as well.

For `text-orientation`, the initial value is mixed. Browsers are smart enough to tell which languages can be typeset both vertically and horizontally, or in one direction only. So Chinese characters, for example, will always be displayed upright. While horizontal-only languages, will have their characters rotated when vertical.

The `text-orientation` property let's you control this, and make all the characters upright or sideways, if you want to.

`text-combine-upright` is the property that addresses the issue of numerals and abbreviations in vertical text, by allowing us to fit them into the width of one character to be displayed upright.

No browser supports the `digits` value yet, which allows us to dictate how many digits or letters are acceptable to be squeezed in. The range allowed is between 2 to 4 characters.

For now, with the `all` value, there is no limit, so you use it on a long word like “Beethoven”, and the browser will squish all those letters into that single-character space.

So, back to pencils. We'll keep the same strategy as before, except that layout and visual styles are essentially done together. You'll see why in a bit.

No change to the markup for this.

Here, we apply `writing-mode` first, because presently, we still rely heavily on the physical directions of left, right, top and bottom when it comes to styling elements.

Hence, all the borders have to be re-calibrated, it's not as straightforward as taking the styling from the transforms use-case and applying `vertical-rl` to the unordered list.

If you compare the code for this and the transforms version, you'll notice that even though the words are rotated and flowing from right-to-left, the direction of margins and paddings still adhere to our perspective.

For example, padding on the left of my pencil text is applied with `padding-top` and so on. This confuses me. A lot.

## On CSS Logical Properties

Luckily, we have an up-and-coming new player on team layout, CSS Logical Properties. What it does is use logical properties like `block-start` and `block-end` or `inline-start` and `inline-end`, which are relative to the block flow of the page, and allows the same code to be used regardless of writing mode.

I highly suggest reading Rachel Andrew's in-depth article on Smashing Magazine to gain a better understanding. The first public working draft of the specification was published in December last year, and I'm eager to see it developed and more widely implemented.

## On Flexbox

Flexbox is definitely an all-star level player on team layout. If you tried to print out the specification, it's about 87 pages long, and there's a good reason for that. Because it defines a new layout mode designed for laying out complex applications and web pages. Probably the first property specifically designed to do layout on the web.

So let's have more pencils, many more pencils. And I want a mixture of vertical and horizontal pencils. This is becoming a larger scale layout situation, and is what Flexbox is capable of handling. It's versatile like that.

The markup is similar to the previous examples, just multiplied.

These pencils are a mix of vertical and horizontal, with different colours so you can tell which way they are being laid out. The cool thing about flexbox is that it can do space distribution and content alignment like nothing we've seen before.

Flex children can be laid out in any flow direction, left, right, downwards or even upwards, if that's what you want. Display order can also be reversed or rearranged, though this does have accessibility implications and should be used with caution.

Items within a flex container are laid out like a long daisy chain. But even if they wrap around, there is actually no relationship between the rows and columns. It's just one really long row, or one really long column that wrapped around.

The property that controls the flow direction, is aptly named `flex-direction`, and with this, we can reorder flow of content. Again, I want to emphasise that this merely modifies the visual order and not the source order of the flex items. Screen readers and keyboard control will still respect source order.

## On CSS Grid

If Flexbox is an all-star, then Grid is shaping up to be a hall-of-fame level legend. Because Grid lets us do a lot of things that were previously either impossible or highly untenable.

I never talk about Grid without quoting Rachel Andrew so here's a good one. Think about how we've done layout in the pre-Grid era. Say, we wanted to create is simple 3-column uniform grid.

One approach for creating such a layout is the `inline-block` technique. For a three column grid, we set the display of the items to `inline-block` and give them all a width of a third of the container.

It's almost the same if you use `float`, because you also need to set a width on each item.

For Flexbox, to ensure our items line up in three columns, we have to make sure the `flex-basis` is a third of the container. Again, the properties we are applying go on the item.

For all 3 techniques I just described, there isn't actually a grid. It just looks that way because we've forced the items to line up with each other.

With Grid, there actually is a grid. We define its rows and columns, then place items on that grid wherever we want to. We are freed from the limitation of elements having to line up next to each other all the time.

That means our layouts can be canonically non-sequential now. We don't have to mess around with absolute positioning or spacer `div`s or any of those other workarounds we used for vertical spacing any more.

Here I have a 6-by-6 grid, and 6 grid items arbitrarily placed anywhere on it. Grid makes it really simple, and intuitive to have vertical white-space in our layouts.

### Alignment of content

Like I mentioned, there's a lot of great graphic design that we can draw inspiration from, for example, this is a page from László Moholy-Nagy's book, Malerei, Fotografie, Film.

It's a striking design with bold black borders, and content aligned in different configurations. If we want to have such a design on the web, some teamwork will need to be involved.

The code shown here is abridged to show mainly the layout code, but even the gear and arrow are pure CSS, made with the `box-shadow` trick.

In order to align the internal content of each grid child without disrupting the rendering of those thick black borders, we'll need to make each grid child a flex parent.

By default, the value of a grid item's alignment is `stretch`, where it fills up the entire space of the grid cell. Once an alignment is applied to the grid item's contents, it will shrink to fit the content.

Making each grid item a flex container allows us to use box alignment properties to adjust the position of the grid item's content while keeping the borders at the edge of the grid cell.

### Overlap on the web

Another thing that Grid makes a lot easier is overlap. We could have achieved an overlap effect with absolute positioning, but removing an element from the document flow usually brings about a lot of unwanted consequences.

With grid placement, overlap is easily achieved without disrupting the rest of the layout at all. This is from another vintage publication, English painter Charles Hayter's *A New Practical Treatise on the Three Primitive Colours*.

Totally doable on the web.

Again, the code is abridged, but placement is a matter of defining which row and column you'd like your element to appear in. And how many grid cells you'd like it to take up. It is perfectly acceptable to have multiple elements occupy the same space on your grid.

This demo was also an excuse to play with blend modes. CSS blend modes work the same way as in Photoshop, and I learned from Lea Verou last week that it was Adobe who proposed the specification for it.

### On aspect-ratio media queries

This poster for Braun is by German graphic designer and photographer, Wolfgang Schmittel. And it is a rather grid-able design. So no surprises here, that such a design can be done on the web with CSS grid.

But when we take into account how dynamic the web is, how we are designing for a medium whereby we have absolutely no control over how our designs will be viewed, things get a bit more interesting.

It's probably a better idea to consider aspect ratios over absolute dimensions when it comes to designing web layouts. And the `aspect-ratio` media query lets us do that natively.

Even though the most common media query is width, there are 13 media features that are available for use as conditions, including `height` and `orientation`. Somehow we're not seeing them being used very often on the web at the moment.

`aspect-ratio` media queries are especially useful for designs that use viewport units, but there is no limit on how you wish to combine multiple media queries to make your design fully adaptable.

## On feature queries

An often raised concern when it comes to using newer CSS features, especially those for layout, is browser support. Because nobody wants their site to look broken. And here's where feature queries come in.

This is how a feature query looks like. The conditional checks if the browser supports a particular property or not. If it doesn't, the entire block within the `@supports` rule is ignored.

This means we start off with the basic layout that works everywhere. Then we layer on styles based on the features we want to use.

By organising our code in this manner, the browsers that do not support feature queries or the specified property still get styled, while those that do get a different look. We're making use of the ‘C’ in CSS.

This image was the header for a CSS Tricks article, and it caught my eye simply because it was diagonal, to be honest. It looks almost exactly the same when recreated in HTML and CSS. Almost.

With feature queries, you can do quite a lot of things. For example, display a message informing users that a feature is not supported, with pseudo-elements, and having a fall-back, in this case, an image for IE11.

But most often, the feature query will contain code that acts as an enhancement to a design that works in all browsers. And there's nothing stopping you from using feature queries and media queries in combination to cater for different browsers on different devices.

With feature queries, we don't have to revisit our code-base to rewrite things when a browser gets updated, because the code is not browser-specific, it's feature specific. Once a feature gets shipped, your design will be updated automatically.

This example makes use of a combination of feature queries for both Grid and CSS Shapes. If you're on a legacy browser, you'll get a simpler design, but everything is still styled.

For now, Firefox users don't get to see the CSS Shapes effect, but once they do, the layout will automatically look like the one Chrome users see at the moment.

## On changing our mindset about browser support

It used to be that a new feature or bug fix would take a long time to ship, and that was true in the earlier days, when browsers were updated maybe every 6 months. But these days, the upgrade cycle has shortened immensely.

This probably isn't the best visualisation you've ever seen, but the point I'm trying to make here is that browsers are being updated fast and furious these days.

My favourite example to talk about is the release of CSS grid. Most of the major browsers shipped it in March of last year. By October, 75% of web users around the world were using a browser that supported Grid.

Today, that number is 87%. It's been all of 15 months. How amazing is that?

It's so much easier to get enthusiastic about new CSS features these days because they ship and become widely supported so much quicker now. And the same goes for bug fixes.

Every major browser engine has a pretty open process for raising bugs, and raising bugs for a particular feature sends a signal to browser vendors that developers want to use this feature. This encourages them to prioritise related bug fixes.

It's a win for everyone. By taking the time to submit a bug report, you gain karma points, get your bugs fixed AND make the web better for all of us.

## Closing

So that's it for me. And I just wanted to end off by saying, that you don't need to use any of these techniques or properties that I covered if they don't fit your use-cases today. But know that when the time comes, they'll all be right here waiting for you.

Thank you all for your attention.







