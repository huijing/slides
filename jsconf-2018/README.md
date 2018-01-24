# Between East and West: web typography and how it can inspire modern layouts

*For JSConf.Asia 2018. This is sort of a transcript of the talk.*

Hello! How's everyone doing so far? Good? Spoiler alert: what you're going to get from me over the next 30 minutes is exactly as the title says. You'll be hearing about typography, about layout, and about design, all in the context of the web. Not a lot of Javascript here, I'm afraid, but I do hope you'll stick around and hear me out.

## About the web

Given this is JSConf and all, I assume everyone here has some experience with the web in some capacity. So I'd like everyone to hold this question in your minds for a little bit. What does the web mean to you?

For me, I love the web. The World Wide Web. I was a lucky kid, in that even though our family was far from rich, we've always had a computer in the house. I think my parents needed one for work or something. But I was more concerned with the games on there.

My first experience with the web sounded like this. If you've never heard this before, well, you're obviously not from my generation. When I think about the web, I think about how amazing it is that it can connect the world's population.

In fact, without the web, odds are we would never have crossed paths. And I wouldn't be standing on this stage talking to you about the web.

Star Trek Discovery? Anyone? So this beautiful woman is Michelle Yeoh, one of the greatest female action stars of all time and the pride of Malaysians everywhere.

When she first got to Hollywood, people were amazed that she could speak English so well. And she, in turn, was equally amazed people that in Hollywood had such a limited grasp of world geography, seeing as they did not know where Malaysia was.

I'm sure many people from America and Europe know where Southeast Asia is, I mean, look at all the expats around. No offense, if you are one. But I have also met people whose idea of Asia was limited to, China, India or Japan.

Southeast Asia is made up of 11 countries, and every single one of them has their own distinct culture. English is taught in schools across the region, but we have so many other languages as well.

Of the world's 7.6 billion people, only 4.9% are native English speakers, but 51.2% of websites are in English. Something isn't quite right about this ratio.

The world is beautiful because of its cultural diversity. Language is part of a society's cultural heritage and is especially important for the maintenance of it.

The web is an informational medium, people go online to find out about things. Even if you're going online to buy something, don't you need information about the product you're going to purchase? So the priority is always content. The web is only useful to people who can understand the content on it.

Which is why I'm slightly comforted to know that Internationalisation is a priority at the W3C. It is crucial that a technology meant to be ubiquitous supports the creation of local content across the world. That every writing system in the world can be correctly rendered on the web.

Just to prove a point, these are the various scripts in use in Southeast Asia, and they can all be displayed and laid out correctly on the web now. With better unicode support and font technologies for individual characters, as well as various CSS properties for overall layout, we now have the means to carve out a space on the web that truly belongs to each of us. That truly feels like home.

Before I go any further, I really should introduce myself. My name is Hui Jing and I'm from Malaysia. I used to play basketball full time and it was what kick-started my web career. I also have an inordinate love of CSS, to the point where I am compelled to write and speak about it. Including hijacking a JSConf session to sneak in some CSS talk.

## About Typography

Someone once asked me this question, do developers even care about typography? I think they do. But maybe I'm wrong. How many of you think typography is important?

Typography has always been an integral part of Human-Computer Interaction and software design. There is a very good reason why Apple has an entire section dedicated to Typography in the Apple Developers' Human Interface Guidelines.

You might disagree with me, but as a front-end developer, the code we write impacts how our sites or applications look, so we too have a share of the responsibility in the design of our products.

> Web design is 95% typography

Oliver Reichenstein said this in his article back in 2006. He reiterated that the web as a medium, is all about information.

Textual content is the most straightforward method of delivering information on the web. And whether we like it or not, Typography is increasingly becoming what differentiates a good website from bad.

Let's be honest, people are superficial and have short attention spans these days. The typography, layout and design of a site or application are like the clothes you wear. And people make judgements off their first impressions of you or your site based on what they see.

> Typography is writing with prefabricated letters

There are many definitions of Typography out there, and I personally like this one, by Gerrit Noordzij. Letters are the building blocks of a writing system, regardless of language. I believe there's a pretty diverse mix of languages spoken by the audience here today, and while a large number of those languages are alphabetic, Chinese is not one of them.

## About the Chinese language

Chinese is a logographic writing system, where each character is composed within a uniform square. This allows Chinese to be read efficiently, regardless of whether it is set horizontally or vertically.

And until proven otherwise, it seems that the Chinese script developed separately from the Proto-Sinaitic scripts which were the origins of alphabetic languages.

This is why the Western languages in Europe are inherently different from the Eastern languages in Asia. Alphabetic languages, which originated from the Phoenician alphabet, combine a small set of letters to form all the words that the language needs for the purpose of communication.

Chinese characters, on the other hand, number in the tens of thousands. Each a unique glyph that can express meaning on their own or be used in combination with other glyphs.

For example, Hippopotamus, an English word of 12 letters. Chinese only needs 2 characters, 河马.

Lebensgefährte (Lee-bin-skir-fear-te), German word of 14 characters. In Chinese, we can say 伴侣.

Grianghrafadóireachta (Green-hra-fer-doi-rek-te), Irish word of 21 letters. Again, 2 characters will do, 摄影. What can I say, Chinese is a concise language.

The appearance of the earliest letterforms was directly influenced by the tools that were used to create them, and continually evolved in tandem with the limitations of the technologies of their time.

Take the Latin alphabet for example, which is derived from Greek. The earliest letters were sans-serif when writing was done with a hard reed pen. Serifs may have came about due to a transition to a square-cut writing implement, like a flat stiff brush.

Later scribes and copyists used quill pens and as demand for written matter grew, they developed more efficient styles of writing, evolving the letterforms yet again.

When it comes to classifying script styles, Latin-based scripts can broadly be put into two big categories, Serifs and Sans-serifs.

Chinese characters also changed a lot since their origins. It's just that Chinese writing went through the entire process of development and evolution way earlier than Europe.

The key implement of Chinese writing is the brush. Calligraphy was and still is one of the most highly regarded Chinese arts. The works of famous calligraphers were used as the basis for carving woodblocks used for printing.

These days, typefaces used for printing Chinese publications can be broadly classified into the following families: 宋体 (also known as 明体), 楷体, 仿宋体 and 黑体. Both 黑体 and 仿宋体 are twentieth century creations.

Chinese typefaces are extremely challenging to create, simply due to the volume of glyphs required. The average number of glyphs for a Chinese system font clocks in at around 35,000 glyphs, give or take a couple thousand.

Typefaces that have enough glyph coverage to be used in body copy are usually made by foundries as very few independent type designers have the bandwidth for that.

Language and writing has allowed human beings to communicate ideas and record history for thousands of years. And we've written on almost anything we could get our hands on.

Right now, the medium of our time is the screen and the browser. Our types are now font files. And we've replaced typesetting using composing sticks with CSS.

But remember this, an electronic display is a proxy medium. Whatever we see displayed on a screen comes from data encoded as electronic signals. The heart of electronic displays is light. It is transient. We cannot touch light.

The web isn't even 30 yet, and this young medium is like nothing we've seen before. It is dynamic and interactive. Some designers, especially those who are used to having absolute control over their final presentations, find this behaviour disturbing.

Although it may be tempting to view the web as simply print expressed on an electronic screen, it is not. It is a unique medium of its own.

## About digital fonts and web typography

When we talk about typography on the web, one of the first things that comes to mind is web fonts. So let's start off with some basics.

What is a font?

In world of metal typesetting, this is a font, which refers to a complete set of metal types that were used to typeset entire pages of text. If you can see the tiny text label on the drawer, this set being shown is for Caslon, 12pt.

In the digital world, these are fonts, specifically font files. For both analogue and digital fonts, you can think of them as collections of glyphs.

And what is a glyph?

A glyph is the specific shape of a letter or character in a particular font. In the digital world, everything is data. So glyphs can be described with an array of pixels, or collections of vector images or even paths of Bézier curves and straight lines.

Different font formats store information about the font, like their glyphs, encodings, metadata about the font etc., differently based on how their specifications were written.

### Web font formats

If you've ever used web fonts before, you would have seen these font formats. Have you wondered why there are so many? There's a bit of history here. The earliest fonts were pixel-based bitmaps, which didn't work out so well when it came to high-resolution printing.

A lot of smart people worked on this problem. And one of the solutions came from Adobe founder, John Warnock. He created Postscript in 1985, the very first vector font, and it really took off.

TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Eventually, Microsoft turned to Adobe and together they came up with OpenType.

Microsoft also came up with EOT or embedded OpenType, a proprietary format for use on web pages. Although they tried to submit this as a W3C recommendation, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF2 is an improvement over WOFF with significantly better compression rates.

### Font descriptors and CSS properties

On the practical side of things, we use the @font-face rule to declare a list of different font formats in the hopes that our fonts will show up correctly in as many browsers as possible. The number of font formats we need to declare has decreased over the years and right now, you can pretty much get away with declaring just WOFF and WOFF2.

The @font-face rule has more descriptors but only these 2, `font-family` and `src`, are mandatory.

If either of them are absent, the entire @font-face rule is ignored. The font-family descriptor is simply a label that we reference in other CSS declarations. So even if you're using say, Frutiger, you could actually call it “Dumplings” and it would still work.

The `src` descriptor is comma-separated list of external references or locally-installed font face names. It is made up of the declaration of the font file's location, and an optional format hint. If the browser doesn't support a particular font format stated in that hint, it won't bother loading the font at all.

The next 3 descriptors, for `style`, `weight` and `stretch`, are used to match styles to a particular typeface in later declarations. Technically, you could assign a black typeface to a `font-weight` of 100 and proceed to confuse your team members who cannot figure out why setting a weight of 100 gives them this massively bold typeface. Perhaps an idea for April Fool's day. #dontgetfired

Then we have the `unicode-range` descriptor. which allows us to create composite fonts that mix glyphs from different fonts for different scripts.

Sometimes the Latin characters for Chinese fonts don't look particularly nice, this is more apparent on older Windows systems, to be honest. So the `unicode-range` descriptor allows us to specify a specific font file to be loaded for individual code points or range of code points.

In this example, I've created a font-family called Heiti Plus, which will use the Heiti SC font for everything, but the second rule tells the browser to use the Meccanica font for all Latin characters instead.

The Firefox DevTools has a font panel that shows which fonts are loaded on your page. You can see that both Heiti SC and Meccanica are loaded for my custom font-family, Heiti Plus.

If a page does not contain any Latin characters, Meccanica will not be loaded at all because it is not needed.

Font descriptors and CSS properties look very similar, but are 2 completely different things.

Chris Lilley, who chaired the group that developed @font-face, explained it really well in his dotCSS talk. That properties are requests for styling and descriptors are descriptions of capabilities. A `font-weight: bold;` within a @font-face rule means this font can do bold. While a `font-weight: bold;` applied as a property means style this element with a font that can do bold.

These here are CSS font properties. From what I've seen, properties like `font-size`, `font-weight` and `font-style` are pretty commonly used.

But `font-stretch` maybe a bit less. And the last 2, which are `font-size-adjust` and `font-synthesis`, I've almost never seen in the wild before. So let's touch on those 2, which were newly added to the Fonts Level 3 specification.

`font-size-adjust` was put in to address legibility issues. Faces with low x-heights may sometimes be less legible, especially when they are triggered as fallback fonts. We can set the value of this property to the aspect ratio of the first choice font. Any fallback fonts triggered will have their font-size adjusted to match this ratio.

`font-synthesis` was put in to address the issue of faux bolds and faux italics. Sometimes the true italic or heavier version of a font does not exist so the browser will try to compensate. Unfortunately, the end result isn't pretty. With this property, you can set a value of `none`, to tell the browser, it's fine, appreciate the effort, but no thanks.

### Font feature properties

Font feature properties were introduced in Fonts Level 3. Modern font technologies allow fonts to contain a lot more glyphs that before. So we can utilise a variety of typographic features like swashes, ligatures, old-style numerals and so on.

Perhaps some of you may be wondering, what's the point of having all these typographic features?

They are part and parcel of good typography, which is necessary to hold your reader's attention. The written word is a transference of speech, which is heard, into something visual, to be seen. Good speakers will vary their cadence, use gestures, emphasise certain words.

Typographic features like small caps, correct use of italics and punctuation do the same for text. Other features like old style numerals and ligatures help maintain typographic colour, to make reading more comfortable.

So these are the features you can turn on via CSS, but note that the font you are using must have these features to begin with. This lot up there, are the features most often mentioned at web typography talks.

Few people talk about `font-variant-east-asian`. What this property does is allow for glyph substitution and positioning in East Asian text. If you're unfamiliar with Han characters, it might seem like these languages share the same glyphs, but it depends. Han unification involves assigning the same code point to different glyphs, and it has been quite a controversial issue.

We won't get into that, but the point is, the same code point can have variant glyphs depending on the language being used. Like, simplified Chinese glyphs versus traditional Chinese glyphs. Japanese glyphs have their own specification known as JIS or Japanese Industrial Standard, and they too have alternate glyphs for the same character. This property allows us to toggle these variant glyphs.

### Variable fonts

Remember I mentioned OpenType earlier on? Well, in September 2016, version 1.8 of the specification introduced OpenType Font Variations. A joint development by Microsoft, Google, Apple and Adobe.

An OpenType variable font is one in which the equivalent of multiple individual fonts can be compactly packaged within a single font file, which can potentially be a big plus when it comes to performance. This is especially significant for fonts with large glyph sets, like CJK fonts.

In addition to that, the dynamism of variable fonts makes it perfect for the web medium, and opens up the possibility of new kinds of responsive typography.

If you're interested in seeing how variable fonts behave, you have to check out Axis Praxis by Laurence Penney, which is essentially a playground for the available variable fonts on the web. Taipei-based type foundry Arphic Technology AKA 文鼎科技 created the first Chinese variable font 文鼎晶熙黑, and you can play with it on Axis Praxis.

## About writing-mode

Vertical writing is traditionally East Asian. For Han characters, which are used in Chinese, Japanese and Korean. But when it comes to design, we can layout text in all directions if we so choose.

So I want to introduce the `writing-mode` property, which deals specifically with vertical text.

You literally turn the browser on its side. Some people might be saying, no big deal, we can do that with transforms too. But it's kind of different.

This is what happens to your text when the different values of writing-mode are applied. The default is horizontal, top-to-bottom. To change the direction to vertical, we use `vertical-rl` or `vertical-lr`.

Now when we rotate text, it's not only the lines that change direction, because each line contains individual letters or characters. They have an orientation as well.

For `text-orientation`, the initial value is `mixed`. Browsers are smart enough to tell which languages can be typeset both vertically and horizontally, or in one direction only. So Chinese characters, for example, will always be displayed upright. While horizontal-only languages, will have their characters rotated when vertical.

The `text-orientation` property let's you control this, and make all the characters upright or sideways, if you want to.

One more relevant property is `text-combine-upright`. This addresses the issue of numerals and abbreviations in vertical text. A very common use case is dates, especially for Taiwan, where they use the 民國 calendar. This property lets us fit all the digits into the width of one character and display them upright.

No browser supports the `digits` value yet, which allows us to dictate how many digits are acceptable to be squeezed in. The range allowed is between 2 to 4 characters. For now, with the `all` value, there is no limit, so you could technically put “hippopotamus” in there and it will just look horribly squished.

Laying out content in a different direction does require a change in perspective. And I gleaned quite a few insights from working with vertical layout. For example, the techniques I was so used to for centring items worked a bit differently with a vertical layout.

To vertically centre a block, setting the top and bottom margins to `auto` actually does work, unlike in horizontal writing, which is great. But trying to centre something horizontally is an exercise in pain.

These directions of `top`, `right`, `bottom`, `left` start getting a bit confusing when you have rotated Latin text. Say you have this header, and you want some extra spacing between the header and the paragraph, is the margin set on the bottom or the left? It's actually the left.

That's why we have a CSS Logical Properties specification, which introduces new CSS properties that are flow-relative equivalents of physical box model properties. Properties like that use `block-start` and `block-end` or `inline-start` and `inline-end` instead of `left` and `right`. This specification is in the thick of working draft status but I'm eager to see it developed and implemented. For now, support is kind of limited.

### Real-world examples

Before I discovered the writing-mode property, I did wonder if it was possible to do vertical typesetting on the web. And the answer is a resounding yes. All 3 properties I covered earlier were used for this particular demo.

This is a layout I built for displaying Chinese text with a toggle that allowed readers to switch between vertical and horizontal layouts. It wasn't as straightforward as I thought it would be.

A tricky thing was getting the images to orientate correctly. It would have been nice to have a media query for writing modes so I could layout my images accordingly with the picture element, but that doesn't exist yet so I ended up working around the image issue with CSS transforms instead.

So yes, there is still work to be done to further develop Chinese typesetting on the web, and for all non-Latin-based languages actually. The Chinese Layout Task Force, which I am a part of, aims to document requirements for the layout and presentation of text for the major languages of China when those languages are used by Web standards.

The document will provide requirements for the development of W3C standards affected by languages used in China, including Hanzi, Mongolian, Tibetan and Uighur scripts.

Implementing vertical layouts has become much easier, as browser vendors continue to improve the functionality of their products, and this opens up an aspect of graphic design that isn't often seen on the web at the moment.

For example, you can make a bookshelf style list of posts with just CSS. Something like this can be done by applying a vertical-rl to each list item, plus some padding and inset box-shadows for the visual effect.

Another idea is for headers. For horizontal languages, you wouldn't layout long chunks of text vertically because that just makes it hard to read. But using vertical text for short titles or headers can break up the monotony of a long page.

Other subtle uses of vertical text could be for tags on blog posts, where the information is not critical to the main content, so laying it out vertically doesn't adversely affect the reading experience.

For languages meant to be read horizontally from top to bottom, vertical text should largely be decorative. We don't want to compromise the reading experience for long form passages. So at smaller screens, we can make use of media queries to revert to a horizontal layout that makes better use of the limited space.

Conversely, there are instances where text rotated vertically can work on narrow screen sizes as well. Perhaps you have realised that the hamburger menu is not the best mobile UI pattern we came with. 

Depending on the number of links in your navigation, laying them out vertically along the side edge could be a design worth considering. And I'm sure many of you can come up with even more interesting designs that utilise vertical layouts.

## About contributing to the web

Statistically, there aren't that many sites which use the writing-mode property. When I started building vertical layouts, Grid hadn't landed yet, so I used Flexbox for a lot of the layout. 

Flexbox support is great, I mean, it has wider coverage than border-radius, but Flexbox with `writing-mode`? Not so good. I'll be honest, there are quite a large number of cross browser issues. Like, on Firefox, if you don't specify a width on the element with a vertical writing mode, it gets kicked off the page.

But that doesn't mean we should just shy away from using vertical text altogether. In fact, there's never been a better time than now to live on the cutting edge. Evergreen browsers are a thing now, with bug fixes and new features being shipped faster than ever.

CSS Grid, I feel, is one of the best rollouts of a new major CSS feature ever, with almost all the major browsers shipping it in March last year. By now, more than 70% of the market is using a browser that supports Grid.

And here's a little secret I discovered, by raising bugs we find when trying out new features, we are actually showing browser vendors that these features are in demand.

This works both ways, if we don't use features simply because they are buggy, browser vendors will think that nobody really cares about that feature and choose to fix more pressing bugs instead. But if more of us use those features and raise the bugs we discover, it sends a signal to browser vendors that people are using these features and encourage them to address related bugs sooner than later.

## Wrapping up

Here's the long list of resources I referred to when preparing this talk and I'll share these slides for anybody who is interested.

If you need inspiration for vertical layouts, the Tateyoko Web Awards site has really nice list. My friend, Jen Simmons, also has an experimental layout lab where she showcases all the different things that are now possible with modern CSS.

And even if you don't end up using any of what I've covered immediately in your next project, I hope that you keep these techniques and properties in the back of your mind. And maybe one day, when you're tired of building the same old layouts again and again, you'll reach for them and create something amazing.

Thank you!
