# East Asian web typography: crossing cultural boundaries for web layout inspiration

*For You Gotta Love Frontend Kyiv 2018. This is sort of a transcript of the talk.*

добрий день!

This is my first time in Ukraine and I've been here for a couple of days. I must say, Kyiv is a stunningly beautiful city. Today, I'm going to talking about a number of things. Starting with a bit of typography, then about web fonts, followed by how East Asian typography and modern CSS can inspire web layouts that are different from the standard 12-column grid designs that we see almost everywhere.

I'm going to assume almost everyone here speaks Ukrainian and English. Does anybody here speak Chinese?

So a little bit about myself. My first name is Hui Jing, and my family name is Chen. I really love emojis, and as of today, we have 2,666 emojis to choose from. It's totally possible to describe myself with emojis.

I am from Malaysia and I played basketball for more than half my life, and it was what kick-started my web career. I'm a front-end engineer who loves CSS, so I sometimes write blog posts about CSS and web design. I'm also a Mozilla Techspeaker, which is an initiative by Mozilla to support technical evangelists in local communities across the world by providing resources and funding.

What do you think about when you hear the word typography? Typography might sound like something only artsy, creative types care about. But these days, it seems that typography is catching the attention of mainstream news.

We have big brand names, like Netflix and National Geographic, talking extensively about their font redesigns, there was even that Supreme Court case in Pakistan where the Microsoft font, Calibri, was the crucial piece of evidence that proved the forgery of financial documents. How cool is that?

## On typography and writing

So what is typography? There are plenty of definitions out there, but I've settled on this one by Gerrit Noordzij, that typography is writing with prefabricated letters. Letters are a type of grapheme, which is the smallest unit of a writing system of any given language.

Writing systems are visual representations of verbal communication. A means to record whatever we say, in our respective languages, for storage and transfer. Like an external memory bank.

The world is very diverse when it comes to language and culture, so it's only natural that there are many different writing systems used all over the planet. A majority of the world use writing systems that consist of alphabets.

This is just a small sampling of a bunch of different alphabets. Before I came here, I tried to learn a bit of Ukrainian. I'm still terrible at it, but I can sort of say things like “Ви розмовляєте англійською?”, which I was told meant “Do you speak English?”.

If that wasn't legit, then I might have been saying something highly appropriate to people since Saturday. So I learned that the Ukrainian alphabet has 33 letters. That's 7 more letters than the English alphabet, which only has 26 letters.

The point I'm trying to make here is that alphabetic writing systems utilise a small set of letters to form all the words the language needs for the purpose of communication.

## On Chinese and vertical writing

Chinese is different, in that, it is a logographic language. Chinese characters number in the tens of thousands. And each character is a unique glyph that can express meaning on their own or be used in combination with other glyphs. Let's look at a few examples.

Hippopotamus, English word of 12 letters. Chinese only needs 2 characters, 河马.

місцезнаходження, Ukrainian word of 16 letters. In Chinese, we can say 位置.

Grianghrafadóireachta, Irish word of 21 letters. Again, 2 characters will do, 摄影. Chinese is quite a concise language.

And although a large swath of the world mostly reads from left-to-right, writing systems can go in all directions. Modern day vertical writing applies to East Asian scripts that utilise Han characters, so mainly Chinese, Korean and Japanese, and are read from right-to-left. Mongolian also uses vertical writing, but is read from left-to-right.

Han characters are sometimes called square characters, because each character is composed within a uniform square. That allows Chinese to be read efficiently, regardless of whether it is typeset vertically or horizontally.

Chinese texts can be typeset into neat rows and columns. And if you don't understand Chinese, you may not know which direction the text is going. It could be vertical, right-to-left, or horizontal top-to-bottom.

The Chinese script is said to have developed independently from the Proto-Sinaitic scripts, which were the origins of alphabetic characters. This is potentially why the Indo-European writing systems are inherently different from those of East Asia.

As different alphabetic writing sytems branched out from the Phoenician alphabet, their letterforms evolved and changed. The appearances of letterforms were often directly influenced by the tools used to create them.

Take the Latin alphabet for example, which is derived from Greek. The earliest letters were sans-serif when writing was done with a hard reed pen. Serifs may have came about due to a transition to a square-cut writing implement, like a flat stiff brush.

Later scribes and copyists used quill pens and as demand for written matter grew, they developed more efficient styles of writing, so the letterforms evolved yet again.

Chinese characters have too evolved greatly since the earliest glyphs were scratched into turtle shells and animal bones as far back as 1600BCE. This early script was called Oracle Bone script because the ancient rulers would use them to ask various higher powers important questions about topics like agriculture, weather, warfare and so on.

The key implement of Chinese writing is the brush. Calligraphy was and still is one of the most highly regarded Chinese arts. The works of famous calligraphers were used as the basis for carving woodblocks used for printing, which was invented in China.

These days, typefaces used for printing Chinese publications can be broadly classified into these four families: 宋体, 楷体, 仿宋体 and 黑体.

Chinese typefaces are extremely challenging to create, simply due to the volume of glyphs required. The average number of glyphs for a Chinese system font clocks in at around 35,000 glyphs, give or take a couple thousand.

This quote is from an article on Quartz that covered the process of creating a Chinese font, and it's a pretty interesting read, which goes into how much effort is needed to design and create a Chinese typeface.

For a typeface to be viably used as body copy, it will probably need a minimum coverage of around 7000 glyphs for simplified Chinese or around 13,000 for traditional Chinese. That's still a lot of glyphs, hence Chinese fonts are almost always designed by teams over a period of years.

## On the importance of language diversity on the web

For the longest time, writing has been done on analogue mediums. Etchings on bone, inscriptions on stone and bronze, calligraphy and printing on parchment and paper. All these are things you can touch and feel. But the medium of our time is now the screen, and the browser.

As more and more of our communications move onto the digital realm, it is important that we preserve language diversity. Languages are representative of human heritage, and convey unique cultures. I believe most people in this audience speaks more than one language, and if you think about it, there are certain concepts that simply get lost in translation.

Of the world's 7.6 billion people, only 5% are native English speakers, but 52% of websites are in English. Something isn't quite right about this ratio.

Studies done by the Internet Society have shown that while cost of access is a barrier to getting people online, many non-Internet users claim that the Internet is simply not relevant or of interest to them.

If the Internet is meant to enhance the free flow of information and ideas across the world, then creation of content on the web should not largely be limited to English-speaking communities.

Diversity of thought and perspective in the online world will be greatly enhanced by the participation of cultures and societies who speak all kinds of languages.

Which is why Internationalisation is a priority at the W3C. It is crucial that a technology meant to be ubiquitous supports the creation of local content across the world. That every writing system in the world can be correctly rendered on the web.

## On web typography and fonts

Typography has always been an integral part of Human-Computer Interaction and software design. Rendering text and graphics on an electronic screen is no easy task.

If you really think about it, anything we see on a screen has everything to do with the field of computer graphics. And digital typography is really a cross-disciplinary field involving technical engineering, aesthetic design and mathematical precision.

When we talk about typography on the web, one of the first things that comes to mind is web fonts. So let's start off with some basics.

In world of metal typesetting, these are fonts. If you are familiar with letterpress printing, you may have seen drawers containing individual metal sorts. Well, for Chinese fonts, we have type shelves. Rows and rows of type shelves.

In the digital world, these are fonts, specifically font files. For both analogue and digital fonts, you can think of them as collections of glyphs.

A glyph is the specific shape of a letter or character in a particular font. In the digital world, everything is data. So glyphs can be described as an array of pixels, or collections of vector images or even paths of Bézier curves and straight lines.

Different font formats store information about the font, like their glyphs, encodings, metadata about the font etc., differently based on how their specifications were written.

### On font formats

If you've ever used web fonts before, you would have seen these font formats. To understand why we have so many of them, we need to go back a time a little bit. The earliest fonts were pixel-based bitmaps, which didn't work out so well when it came to high-resolution printing.

A lot of smart people worked on this problem. And one of the solutions came from Adobe founder, John Warnock. He created Postscript in 1985, the very first vector font, and it really took off.

TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Microsoft came up with TrueType Open in 1994 and eventually Adobe joined in and together they developed OpenType.

Microsoft also came up with EOT or embedded OpenType, a proprietary format for use on web pages. Although they tried to submit this as a W3C recommendation, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF2 is an improvement over WOFF with significantly better compression rates.

### On @font-face

On the practical side of things, we use the @font-face rule to declare a list of different font formats in the hopes that our fonts will show up correctly in as many browsers as possible. Nowadays, it's safe enough to declare just WOFF and WOFF2.

The @font-face rule has many descriptors but only font-family and src, are mandatory.

If either of them are absent, the entire @font-face rule block is ignored. The `font-family` descriptor is simply a label that we reference in other CSS declarations. So maybe you're using Helvetica, you don't have to put “Helvetica” as the descriptor, вареники would work just fine.

The `src` descriptor tells the browser where to find the font file, it could be an external reference, or a locally installed font. It also includes an optional format hint. If the browser doesn't support a particular font format stated in that hint, it won't bother loading the font at all.

Descriptors for style, weight and stretch, are used to match styles to a particular typeface in later CSS declarations. If you're bored at work, you could try assigning a black typeface to a `font-weight` of 100 and proceed to confuse your colleagues who cannot figure out why setting a weight of 100 gives them this massively bold typeface. If office pranks are your thing...I'm just saying. #dontgetfired.

Then we have the `unicode-range` descriptor. which allows us to create composite fonts that mix glyphs from different fonts for different scripts.

For example, this presentation uses the font Infini, which unfortunately does not support Cyrillic letters. So I used the `unicode-range` descriptor to tell my browser to load the Linux Biolinum font when it encounters any Cyrillic characters.

Remember that for font-face rules, the font-family is simply a label, so what I've done here is created a composite font that uses the name Infini, but in actuality, loads 2 different font files depending on what characters need to be displayed.

I really have to shoutout Firefox Devtools here. if you're doing a lot of design work in the browser, it's just awesome. It has the best Grid Inspector tool, a Flexbox inspector, I could go on.

But anyway, there's also the font panel that shows which fonts are loaded on your page. And if you're using the latest Firefox Nightly 62, you can toggle a brand new font highlighter feature.

Here, you can see that both Infini and Biolinum are loaded for my custom Infini font-family. And when I hover over elements, I can see which characters are using which loaded fonts.

If a page does not contain any Cyrillic characters, Biolinum won't be loaded at all because it is not needed. Same goes for any pages that don't contain Chinese characters, then Ping Fang won't be loaded either.

### On CSS font properties

Chris Lilley, who chaired the group that developed `@font-face`, explained it really well in his dotCSS talk. That properties are requests for styling and descriptors are descriptions of capabilities. A `font-weight: bold` within a `@font-face` rule means this font can do bold. While a `font-weight: bold` applied as a property means style this element with a font that can do bold.

CSS font properties are our typesetting tools for the web. When you use them in your CSS declarations, imagine that you're running your own printing workshop. And you're telling your apprentice, in this case, the browser, that you need a font which is a particular size, style, weight and so on.

Your apprentice then runs off to the back room, where all the fonts are kept, and tries to find the font that best matches your instructions based on their descriptors, which were assigned in the @font-face rule.

I believe most people have used the first 3 or 4 on this list in your stylesheets. We're going to talk about the last 2, which were newly introduced in Fonts Level 3.

The browser is a pretty smart apprentice. If a font file can't be found, they're not going to come back empty-handed. They'll find you a fallback font instead. When the fallback font has a lower x-height than the first choice font, it may be hard to read. With `font-size-adjust`, you can tell the browser to adjust the font-size so it matches the aspect ratio of the first choice font.

Now, your smart apprentice can sometimes be too well-meaning. Sometimes the true italic or heavier version of a font does not exist, so the browser will try to create that effect by itself, based on a regular font. Unfortunately, the end result isn't pretty.

In fact, most Chinese fonts don't have italic variants. We can set the `font-synthesis` property to a value of none, to tell the browser to just leave the font alone.

Font feature properties were introduced in Fonts Level 3. Modern font technologies allow fonts to contain a lot more glyphs that before. So we can utilise a variety of typographic features like swashes, ligatures, old-style numerals and so on.

These features are part and parcel of good typography, which is necessary to hold your reader's attention. The written word is a transference of speech, which is heard, into something visual, to be seen. Good speakers will vary their cadence, use gestures, emphasise certain words.

Typographic features like small caps, correct use of italics and punctuation do the same for text. Other features like old style numerals and ligatures help maintain typographic colour, to make reading more comfortable.

We can turn these features on or off with CSS, but note that the font you are using must have these features to begin with. This lot up there, are the features most often mentioned at web typography talks.

Hardly anybody talks about `font-variant-east-asian`. What this property does is allow for glyph substitution and positioning in East Asian text. If you're unfamiliar with Han characters, it might seem like these languages share the same glyphs, but it depends. Han unification involves assigning the same code point to different glyphs, and it has been quite a controversial issue.

We won't get into that, but the point is, the same code point can have variant glyphs depending on the language being used. Like, simplified Chinese glyphs versus traditional Chinese glyphs. Japanese glyphs too can have alternate glyphs for the same character, and this property allows us to toggle these variant glyphs.

### On variable fonts

Remember I mentioned OpenType earlier on? Well, in September 2016, version 1.8 of the specification introduced OpenType Font Variations. A joint development by Microsoft, Google, Apple and Adobe.

An OpenType variable font is one in which the equivalent of multiple individual fonts can be compactly packaged within a single font file, which can potentially be a big plus when it comes to performance. This is especially significant for fonts with large glyph sets, like CJK fonts.

In addition to that, the dynamism of variable fonts makes it perfect for the web medium, and opens up the possibility of new kinds of responsive typography.

If I start talking about variable fonts in depth, I'll probably need one more session, so I won't do that. Some brilliant people have been building demos and writing articles about variable fonts, one of whom is Mandy Michael, who gave an amazing presentation in Singapore earlier this year. There's video of her talk, included in my slides, which will be shared with everyone.

If you're interested in seeing how variable fonts behave, you have to check out Axis Praxis by Laurence Penney, which is essentially a playground for the available variable fonts on the web. Taipei-based type foundry Arphic Technology created the first Chinese variable font, and you can play with it on Axis Praxis.

## On implementing vertical writing on the web

Vertical writing may be traditionally used for East Asian languages, but you don't have to miss out on the fun just because you don't design for those languages. Vertical layouts are not a new thing. Print design has had plenty of those for quite a while now. It's just that the web hadn't reached a level of maturity that could do them well, until recently.

So I want to introduce the `writing-mode` property, which deals specifically with vertical text.

You literally turn the browser on its side. Some people might be saying, no big deal, we can do that with transforms too. Not exactly. Changing the `writing-mode` affects an elements box alignment axes.

This is what happens to your text when the different values of writing-mode are applied. The default is horizontal, top-to-bottom. To change the direction to vertical, we use `vertical-rl` or `vertical-lr`.

Now when we rotate text, it's not only the lines that change direction, because each line contains individual letters or characters. They have an orientation as well.

For `text-orientation`, the initial value is mixed. Browsers are smart enough to tell which languages can be typeset both vertically and horizontally, or in one direction only. So Chinese characters, for example, will always be displayed upright. While horizontal-only languages, will have their characters rotated when vertical.

The `text-orientation` property let's you control this, and make all the characters upright or sideways, if you want to.

One more relevant property is `text-combine-upright`. This addresses the issue of numerals and abbreviations in vertical text. A very common use case is dates, especially for the Taiwanese calendar. This property lets us fit all the digits into the width of one character and display them upright.

No browser supports the digits value yet, which allows us to dictate how many digits are acceptable to be squeezed in. The range allowed is between 2 to 4 characters. For now, with the all value, there is no limit, so you could technically put long words like Крученики in there and it will just look horribly squished.

Laying out content in a different direction does require a change in perspective. And I gleaned quite a few insights from working with vertical layout. For example, the techniques I was so used to for centring items worked a bit differently with a vertical layout.

To vertically centre a block, setting the top and bottom margins to auto actually does work, unlike in horizontal writing, which is great. But trying to centre something horizontally is an exercise in pain.

These directions of top, right, bottom, left start getting a bit confusing when you have rotated Latin text. Say you have this header, and you want some extra spacing between the header and the paragraph, is the margin set on the bottom or the left? It's actually the left.

That's why we have a CSS Logical Properties specification. So instead of left or right, we use properties like `block-start` and `block-end` or `inline-start` and `inline-end`.

Rachel Andrew wrote an in-depth article on CSS logical properties on Smashing Magazine recently, and you really should read it if you haven't. The first public working draft of the specification was published in December last year, and I'm eager to see it developed and more widely implemented.

So a few years ago, I was in a crowded train and noticed a guy standing in front of me reading a Chinese novel on his phone, but it was laid out horizontal, top-to-bottom. And I thought to myself, a vertical layout would work really well for reading Chinese on a phone. Can we do that on the web?

So that's how I fell into this rabbit hole of vertical typesetting on the web, and learning a lot more about the Chinese language. And as you can see from this demo, the answer to that question is a resounding yes, with all 3 properties I covered earlier being showcased here.

### On the further development of non-English languages on the web

Once I figured out vertical layouts were possible, the next logical step was to have a toggle that allowed readers to switch between vertical and horizontal layouts. You know, because we can do that for Chinese.

It was quite tricky to get the images to orientate correctly. It would have been nice to have a media query for writing modes so I could layout my images accordingly with the picture element, but that doesn't exist yet so I ended up working around the image issue with CSS transforms instead.

So yes, there is still work to be done to further develop Chinese typesetting on the web, and for all non-Latin-based languages actually. The Chinese Layout Task Force, which I am a part of, aims to document requirements for the layout and presentation of text for the major languages of China when they are used by Web standards, like Hanzi, Mongolian, Tibetan and Uighur scripts.

## On vertical layouts on the web

Implementing vertical layouts has become much easier, as browser vendors continue to improve the functionality of their products, and this opens up an aspect of graphic design that isn't often seen on the web at the moment.

For example, you can make a bookshelf style list of posts with just CSS. Something like this can be done by applying a vertical-rl to each list item, with some padding and inset box-shadows thrown in for the visual effect.

Or we could do headers. Normally we wouldn't think of laying out long chunks of text vertically for typical Latin-based left-to-right languages. But using vertical text for short titles or headers can break up the monotony of a long page.

Other subtle uses of vertical text could be for tags on blog posts for example, or wherever information is not critical to the main content, so laying it out vertically won't adversely affect the reading experience.

If you're working with a language meant to be read horizontally from top to bottom, then vertical text should largely be decorative. We don't want to compromise the reading experience for long form passages. So at smaller screens, we can make use of media queries to revert to a horizontal layout that makes better use of the limited space.

On the other hand, there are instances where text rotated vertically can work on narrow screen sizes as well. Studies have shown that the hamburger menu isn't an intuitive design axiom at all.

Depending on the number of links in your navigation, laying them out vertically along the side edge could be a design worth considering. And I'm sure many of you can come up with even more interesting designs that utilise vertical layouts.

## On making the web better

Statistically, there aren't that many sites which use the writing-mode property. When I started building vertical layouts, Grid hadn't landed yet, so I used Flexbox for a lot of the layout. Flexbox support is great, I mean, it has wider coverage than `border-radius`, but Flexbox with `writing-mode`? Not so good. I'll be honest, there are quite a number of cross browser issues.

But that doesn't mean we should just shy away from using vertical text altogether. In fact, there's never been a better time than now to live on the cutting edge. Evergreen browsers are a thing now, with bug fixes and new features being shipped faster than ever.

And here's a little something I learned along the way. By raising bugs we find when trying out new features, we are actually telling browser vendors that these features are in demand.

Conversely, if we don't use features simply because they are buggy, browser vendors will think that nobody really cares about that feature and focus on something else instead. Because we all have to prioritise.

Raising bugs will probably gain you karma points and helps make the web better for all of us.

## Wrapping up

This is the long list of resources I referred to when preparing this talk. A lot of articles and books that I found very interesting.

If you need inspiration for vertical layouts, the Tateyoko Web Awards site has a really nice list. While Jen Simmons has an experimental layout lab where she showcases all the different things that are now possible with modern CSS.

The thing about attending conferences, at least for me, is not so much to gain expertise overnight, but rather to get inspired. To learn of things that I did not know existed, to discover something new and perhaps gain insights and hear perspectives that never occurred to me before.

All these techniques I mentioned may or may not be relevant to you right now, and that's perfectly fine. But I do hope that you keep them at the back of your mind, so that one day, when the time comes, you can reach for them and create something extraordinary.

Дякую!
