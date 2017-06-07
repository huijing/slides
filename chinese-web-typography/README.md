# Chinese typography on the web

*For pitercss conference 2017. This is sort of a transcript of the talk.*

## Introduction

Добрый день (DOH-bryh dzyehn). This is my first time in Russia and I'm very happy for the opportunity to speak to all of you about a topic that I'm especially passionate about, but before that, a little bit about myself.

My first name is Hui Jing, and my family name is Chen. I am from Malaysia and I played basketball for more than half my life, and it was actually what got me into web development in the first place. I'm a front-end engineer based in Singapore now, and I sometimes write blog posts about CSS. I also run Talk.CSS, which is Singapore's only CSS-centric meetup at the moment.

## Overview of Western and Eastern writing systems

I've come across many definitions of typography over the years, and have personally settled on this one by Gerrit Noordzij, that “Typography is writing with prefabricated letters”. Letters are the building blocks of a writing system, regardless of language. And if you think about it, almost every writing system in the world today seems to be alphabetic.

But Chinese is different. Chinese is currently the only logographic writing system left that is widely used by millions of people. Each Chinese character is composed within a uniform square, allowing Chinese to be read efficiently, regardless of whether it is set horizontally or vertically. And until proven otherwise, it seems that the Chinese language was an indigenous invention, developed separately from the Proto-Sinaitic scripts which were the origins of alphabetic languages.

We can see how the nature of Western languages in Europe differ from the Eastern languages in Asia. The Phoenician alphabet is considered the origin of many alphabetic writing systems on which the Greek and later, Latin and Cyrillic alphabets were based on. For such languages, letters are combined to form all the different words you would use to communicate with another person.

With Chinese characters, we have thousands upon thousands of unique glyphs that can express meaning on their own or be used in combination with other glyphs. This has a direct consequence on the structure of the languages themselves.

For example:
- Hippopotamus, English word of 12 letters. Chinese only needs 2 characters, 河马.
- продовольственный (Pro-dah-vol-stven-ney), Russian word of 17 letters. In Chinese, 食品.
- Grianghrafadóireachta (Green-hra-fer-doi-rek-te), Irish word of 21 letters. Again, 2 characters will do, 摄影.
What can I say, Chinese is a concise language.

## Different type styles and typefaces

While we're on the subject of letters, those on ancient Greek stone inscriptions used to be sans-serif, but later stone cutters tended to spread out the ends of letters into serifs. In the Middle Ages, scribes and copyists based their writings off of these stone inscriptions. And the letter forms evolved because writing was done with pens instead of chisels. Various writing styles emerged, from Carolingian minuscules to the various Gothic hands, which in turn served as inspiration for type designers and punch cutters doing printing.

Although it seems like there are many type classifications like Old styles, Transitionals, Humanists and Geometrics, Latin-based scripts can be broadly classified into two big categories, Serifs and Sans-serifs.

Chinese characters also changed a lot since their origins. It's just that Chinese writing went through the entire process of development and evolution way earlier than Europe. The key implement of Chinese writing is the brush. Calligraphy was and still is one of the most highly regarded Chinese arts. Woodblock printing was invented in China, and the Chinese were exceptional at it. To the point where it was a contributing factor to why moveable type, which too was invented in China, never really took off there.

The contemporary typefaces used for Chinese print publications can be broadly classified into these families: 宋体 (also known as 明体), 楷体, 仿宋体, 黑体. Both 黑体 and 仿宋体 are twentieth century creations.

It is not uncommon to see comparisons of 宋体 to serifs and 黑体 to sans-serifs, but I think it makes more sense for Chinese typefaces to maintain their own classifications. They are completely different from Latin alphabets anyway.

Chinese typefaces are extremely challenging to create, simply due to the volume of glyphs required. Source Han Serif, which is the second Pan-CJK typeface family from Adobe Type, was officially announced in April this year. But work on this typeface started in late 2014. And they had quite a large team working on it. The average number of glyphs for a Chinese system font is around 35,000 glyphs, plus or minus a couple thousand.

Typefaces that have enough glyph coverage to be used in body copy are usually made by foundries, like Founder Type or Monotype, as very few independent type designers have the bandwidth for that.

宋体 is the standard font for body copy. 楷体 is used for runs of text that need to be differentiated from the rest of the content, like dialogues or references. 黑体 is most commonly seen in digital publishing but publishers have started to experiment with 黑体 in print as well. 仿宋体 is generally used in isolated paragraphs like quotations or highlighted sentences.

There are actually a huge variety of other styles, like those based of ancient scripts like Seal script or Clerical script, as well as brush script styles mimicking Running scripts. But they fall into the general category of decorative fonts, mostly used for display text or short paragraphs. Not so much for long form reading.

A lot of articles on how to pick typefaces tell us that all typefaces have a personality, and we ought to pick typefaces based on the messaging we want to convey. I don't disagree. It's just that very few people delve into the why. Why do these letters have human traits? Research has suggested that a lot of it boils down to prior experience with the typefaces in particular contexts.

For Latin-based typefaces, old style and transitional serifs like Caslon, Garamond and Baskerville are most often used in books and formal documents. People tend to associate these as being serious and formal.

Modern serifs like Didot and Bodoni were used in a variety of publications but we associate them with elegance and high fashion because they're used in Vogue and Harper's Bazaar. To a certain extent, globalisation has allowed some of these associations to transcend cultural and geographic boundaries and become recognised worldwide.

To pair Chinese scripts with Latin scripts for body copy is reasonably straightforward, in that you want to pick styles that present an even typographic colour. In this regard, serifs go with 宋体 and sans-serifs go with 黑体. In general, you'd want their stroke thickness to match up, but keep in mind that Chinese glyphs appear denser than their Latin-based counterparts at the same size, so adjustments will need to be made for that.

## The web as a medium

Language and writing has allowed human beings to communicate ideas and record history for thousands of years. And we've written things on almost everything, from cave paintings to stone engravings, from parchment to paper. Right now, the medium of our time is the screen and the browser. Our types are now font files. And we've replaced typesetting with composing sticks or font plates, with CSS.

So let's discuss typography on the web.

We first need to understand the web as a medium, and to be fair, it is a rather young medium. But the web is nothing like we've seen before. It is a dynamic and interactive medium, and many designers, especially those who are used to having absolute control over the final presentation, find this disturbing.

The thing is, with the web there is no longer a single final form of presentation, as multiple output devices could be used to view it.

Authors can only influence the presentation, rather than control it. A combination of influences from various sources, like the browser and users themselves will determine how the final output looks like.

Dependable delivery is also uncertain, as web resources are distributed across multiple connected servers and the possibility of any of them being unavailable is pretty significant.

Although many would like to think the web is simply print expressed on an electronic screen, it is not. It is a unique medium on its own.

## Font formats

Here's a list of common font formats used on the web. But why on earth do we need so many formats? Well, here's my non-technical explanation. Fonts are simply containers for glyphs, and font formats describe these glyphs. The earliest fonts were pixel-based bitmaps, which were fine for low-resolution screens, but for printing on high-resolution printers, we needed a better solution. Either compress the bitmapped glyphs, or find an alternative rendering method.

Donald Knuth created Metafont in 1978 for the TeX system, which generated compressed bitmap fonts. John Warnock, founder of Adobe, came up with Postscript in 1985, which was the very first vector font.

TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Both companies then worked separately to improve TrueType, especially with regards to fonts for East Asian writing systems. And Apple came up with TrueType GX, later renamed Apple Advanced Typography, while Microsoft turned to Adobe and together they came up with OpenType.

EOT, or embedded OpenType is Microsoft's proprietary standard, which is a compact form of OpenType fonts meant for use on web pages. Although they tried to submit this as a W3C recommendation, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF was quite the industry effort, involving Microsoft, Mozilla and Opera.

Those of us who have worked on projects with self-hosted fonts will probably used something called the `@font-face` rule, where we declare a list of different font formats, in the hopes our fonts will show up correctly in as many browsers as possible. The number of font formats we need to declare has decreased over the years and right now, you can pretty much get away with declaring just WOFF and WOFF2.

## How browsers pick fonts

It is recommended you declare your Latin-based font of choice first, because order does matter. It is almost a given that a CJK font will have support for Latin characters but not the other way around. Declaring those fonts first will result in the Latin characters displayed using glyphs from the Chinese font instead. And sometimes, this doesn't look too great on Windows.

Even though Fonts Level 3 states that user agents must match font names case insensitively, it is still recommended to put them in quotes, just in case.

Generic font families were introduced in CSS2.1, and left it up to user agents to provide reasonable default choices, which express the characteristics of each family as well as possible.

There are currently five generic font families, with four more being defined in Fonts Level 4. The thing about these generic font families is they are very inconsistent, but they were never meant to be consistent in the first place. You'd leave these generic font families to be fallbacks, triggered if somehow all the previously declared fonts failed to load.

## CSS basic font properties

Not counting the font shorthand, there are six basic font properties. The last two were introduced in Fonts Level 3. I'll quickly run through the first four. `font-weight` is for indicating the stroke thickness of your font, and can take values from `100` to `900` or keywords, like `bolder` or `lighter`.

`font-stretch` is used to select fonts based on their widths, ranging from condensed to expanded. `font-style` allows for the selection of italic or oblique faces. Italics are cursive, but obliques are sloped versions of a regular face. `font-size` indicates the desired height of the glyphs, and we can use absolute values like pixels and ems or relative values like percentages or viewport units, as well as keywords like `larger` or `smaller`.

`font-size-adjust` was put in to address legibility issues. Faces with low x-heights may sometimes be less legible, especially when they are triggered as fallback fonts. This property adjusts the font size of the fallback such that its x-height matches the first-choice font.

`font-synthesis` is also new, and was put in to address the issue of faux bolds and faux italics. Sometimes the true italic or heavier version of a font does not exist and the browser will try to mimic those styles, and it doesn't look very good. So now you can set this property to a value of `none`, to prevent the browser from doing that.

The `@font-face` rule allows us to use fonts beyond those available on a given platform by linking to those font files, which could be locally available or from an external source. Each rule specifies the characteristics of a single font within a family. These fonts will only be loaded when required. Multiple `@font-face` rules can be used to build an entire font family. And it consists of the `@font-face` keyword plus a bunch of font descriptors. Font descriptors and CSS properties are not the same thing. 

This is how an `@font-face` rule looks like. I don't think most people read through the CSS specification like they would a novel, so it's perfectly fine if this looks excessively complicated to you. Even though there's a whole lot of stuff in here, only the `font-family` descriptor and the `src` descriptor are mandatory.

If either of them are absent, the entire rule is ignored. Now the `font-family` descriptor is simply a label that we reference in other CSS declarations. So even if you're using say, Frutiger, you could actually label it “Pelmeni” and it would still work.

The `src` descriptor is comma-separated list of external references or locally-installed font face names. It is made up of the declaration of the font file's location, and an optional format hint. If the browser doesn't support a particular font format stated in that hint, the font file won't be loaded.

The next 3 descriptors, for style, weight and stretch, are used to match styles to a particular typeface in later declarations. Again, they are descriptors, so technically you could assign a black typeface to a font-weight of 100 and proceed to confuse your team members who cannot figure out why setting a weight of 100 gives them this massively bold typeface. Please don't do that.

Every Unicode character is represented by a unique code point. The `unicode-range` descriptor allows us to specify individual code points or a range of code points for characters we want displayed using a particular font face. We can make use of this to create custom font families with glyphs from different typefaces.

My slides use a font called Magnetic Pro, which does not support Cyrillic alphabets. But fortunately, I managed to find a reasonably similar font that does, called Bender. I only need the Cyrillic letters to display in Bender, while everything else should use Magnetic Pro.

So the code points in the `unicode-range` range descriptor are that of the Cyrillic letters that I've used in this presentation. Now, say I have a page that only uses English words, Bender will not load at all because it is not needed. It will only load when the browser encounters the Cyrillic letters in the `unicode-range` specified.


## Font feature properties

Font feature properties were introduced in Fonts Level 3. Earlier, when I talked about all the different font formats, I mentioned that Apple and Microsoft worked to improve the original implementation of TrueType. OpenType and Apple Advanced Typography are what we term modern font technologies, and they can contain a lot more glyphs that previous font formats.

So we can utilise a variety of typographic features like swashes, ligatures, old-style numerals and so on. The original `font-variant` property that could only be used to trigger small-caps was also expanded, a great deal. Because there are so many properties available, each with lots of values, I'm just going to do a general overview. Some of you may be wondering what's the point of having all these typographic features?

They are part and parcel of good typography, which is necessary to hold your reader's attention. The written word is a transference of speech, which is heard, into something visual, to be been. Good speakers will vary their cadence, use gestures, emphasise certain words.

Typographic features like small caps, correct use of italics and punctuation do the same for text. Other features like old style numerals and ligatures help maintain typographic colour, to make reading more comfortable.

So these are the features you can turn on via CSS, but note that the font you are using must have these features to begin with. This lot up there are the features most often mentioned at web typography talks.

Few people talk about `font-variant-east-asian`. What this property does is allow for glyph substitution and positioning in East Asian text. For the benefit of the audience who can't read Han characters, it might seem like these languages share the same glyphs but actually, it depends. Han unification, involves assigning the same code point to different glyphs, and it has been quite a controversial issue.

But essentially, the same code point can have variant glyphs depending on the language being used. Like, simplified Chinese glyphs versus traditional Chinese glyphs. Japanese glyphs have their own specification known as JIS or Japanese Industrial Standard, and they too have alternate glyphs for the same character. This property allows us to toggle these variant glyphs.

Now the `font-language-override` property controls the rendering of language-specific glyphs in the typeface used. A commonly raised use case is the use of common ligatures, for the fi combination. The Turkish alphabet has both a dotted and dotless i, so the fi ligature shouldn't be used. Maybe a typeface doesn't recognise a lesser-known language like the Azeri language, which, similar to Turkish, has a dotless i, the `font-language-override` property can be used to force the usage of Turkish glyphs instead.

`font-feature-settings` allows us toggle very specific OpenType properties. Last I checked, there were 141 OpenType feature tags to cover things like vertical kerning, unicase, scientific inferiors and so on.

Browser support for each of these individual properties varies at the moment, with Firefox being the only browser that has supported all of them since version 34.0.  `font-feature-settings`, on the other hand, has quite good support across most browsers. The specification recommends to utilise the respective `font-variant` properties over the `font-feature-settings` property, but until browser support becomes more robust, I guess we'll continue to see this property being used instead.

## Implementing web fonts

If you're building a non-Chinese website, things are pretty straightforward. You can choose to serve your own font files, or use an online service. For online services, the most well-known free one is Google Fonts. Then we also have paid services like Adobe Typekit or Hoefler & Co's cloud.typography.

Broadly speaking, how Typekit works is that you create font kits, which are registered to specific domains, then add the fonts you want to use to those kits. Typekit then generates some Javascript that you need to embed on your site and apply the relevant CSS classes to get the fonts to show up. Typekit does offer a selection of free fonts as well, the notable Chinese fonts being Source Han Sans and Source Han Serif.

But if you want the smorgasbord of Chinese fonts, there are several font hosting services available as well. Justfont is the pioneer webfont hosting service out of Taipei, but they do more than just host fonts. They hold typography workshops and events, and also have a really great type design blog.

There is also 有字库, out of Shanghai, that offers various methods of implementing their fonts on your website. You can do it via CSS like how its done on Google Fonts, or load the font files via Javascript. They also offer SDK support for Java, PHP and NodeJS. The documentation is pretty good, but unfortunately, it's all in Chinese.

Type foundries have gotten into the game as well. DynaComware are the guys who made PingFang, LiSong Pro and a number of other Chinese fonts that shipped with macOS. Their service is known as DynaFont Online. Arphic Technology who made the AR PL fonts found on Ubuntu, have their own service called iFontCloud.

But at the end of the day, we still need to keep in mind that CJK fonts weigh in on a megabyte scale. The font hosting services do offer optimisations like lazy loading and dynamic subsetting, so hopefully that helps. If you want to serve your own fonts, there are also tools available to help reduce the size of your font files.

If I'm building a non-Chinese site, I always turn to Font Squirrel to generate my webfonts, because subsetting. Font Squirrel's web font generator allows for a very granular level of customisation that I haven't found in other tools. There is a desktop application for Mac called FontPrep, which does subsetting quite well too.

Font Spider is an open-source command line tool that does smart webfont compression and conversion. It offers the ability to subset the fonts based on the glyphs being used on your site. Somehow, it seems they all like to use animals for branding.

But if you're really concerned about speed and page weight, you can simply choose not to use any webfonts at all, because honestly, I think that system fonts shipped with the newer OSes are getting much better.

I personally use a hybrid technique, where the body text is set in a system font, but for the big titles and display text, where there is a limited number of characters I know will not change much over time, I generate webfonts containing only those glyphs, which makes the font file much much smaller than the full character set.

## Responsive layouts with modern CSS

This is a quote by Bruce Lee that I feel is really suitable for the web. Rather than trying to wrangle every pixel into place, we need embrace the fact that content is meant to flow. If you try to make it fixed, like freezing water into ice, it's not going to fit into all the different screens that people will use to view it.

Responsive websites are often mentioned in the same breath as media queries, the conditional rule that allows us to create different layouts at different screen widths. Often, people use frameworks to help them build responsive websites, and I can understand why. Especially if they are not familiar with CSS, or they are short of time, or they just don't like CSS in general. But frameworks quite prescriptive, and that's how we end up with a lot of websites that utilise very similar layouts.

CSS layout has become so much more mature since it first began. There had never been a specification that was created specially for layout until Flexbox and Grid came along. And that is fantastic. We have a lot of CSS properties at our disposal now. Around 496 the last time I checked. And it is up to us to combine and implement them creatively.

## Vertical layout on the web

Late last year, I had a thought while riding home on my bicycle after work. I wondered how hard it would be to typeset Chinese text on the web like the novels and comic books I used to read when I was a kid. And that's how I discovered a CSS property called `writing-mode`.

There is an entire specification dedicated to writing modes and it's defined as such, support for international writing systems. So coverage includes right-to-left languages as well, but the `writing-mode` property specifically addresses vertical writing.

You literally turn the browser on its side. Some people might be saying, no big deal, we can do that with transforms too. But it's different.

Let's cover some basic terminology. First up, inline base direction, which is that blue arrow there. It is the direction that content is ordered on a line, and defines where the line starts and ends. The green arrow indicates block flow direction, which is the direction block-level boxes stack and the direction of this stacking within their container. The `writing-mode` property dictates the block flow direction. What you see here is the standard default value of horizontal-tb.

This is when we apply `vertical-lr` and `vertical-rl` respectively. The block flow direction is now horizontal, while the inline base direction is vertical. And then there's the orientation of the individual glyphs.

Every writing system has one or more native orientations. For example, Latin scripts and Arabic scripts are horizontal only, Mongolian is vertical only, and Han and Japanese Kana are bi-orientational. All glyphs are assigned a horizontal orientation by default, and the User Agent needs to transform text from this horizontal default when laying out text vertically.

There are two ways to do this, by rotation or by translation. Scripts that have native vertical orientations will have an intrinsic bi-orientational transform, so regardless of whether the text is laid out horizontally or vertically, the glyphs transform and will always be upright. Latin-based characters, on the other hand, rotate. But glyphs can always be set sideways or upright with the `text-orientation` property.

This is what happens to your text when the different values of writing-mode are applied. These examples look correct because I'm using Firefox at the moment, but the last two examples, `sideways-rl` and `sideways-lr` have actually been deferred to Writing Modes Level 4.

For text-orientation, the initial value is mixed, but you can make all the characters upright or sideways.

One more property is text-combine-upright. This addresses the issue of numerals and abbreviations in vertical text. A very common use case is dates, especially for Taiwan, where they use the 民國 calendar. This property lets us fit all the digits into the width of one character and display them upright.

No browser supports the digits value yet, which allows us to dictate how many digits are acceptable to be squeezed in. The range allowed is between 2 to 4 characters. For now, with the <code>all</code> value, there is no limit, so you could technically put hippopotamus in there and it will look horribly squished.

Because East Asian composition is quite different from Western composition, the W3C Japanese Layout Task Force has published a document known as the Requirements for Japanese Text Layout, which serves as a reference for browser implementers so Japanese web layouts can be rendered correctly. There is currently a Chinese equivalent being worked on right now.

Based on those documents, and through my own personal experimentation, I sort of settled onto certain typographic conventions when I'm setting Chinese text.

1. Use the appropriate font family. For example, Source Han Serif has typefaces for simplified Chinese, traditional Chinese, Japanese and Korean. Pick the right one.
2. This one I mentioned earlier, that Chinese characters are denser than typical Latin-based alphabets, because of all the strokes, so you may want to bump up the font size a little bit. Reading small characters on a screen is not a pleasant experience.
3. For line-height there is actually a magic number. Ideally, setting it between 1.5 to 2 works fine so 1.7 is a good choice. This gives the text enough breathing room and a more even typographic colour.
4. Every Chinese character takes up the same height and width, they are squares, even punctuation are full width characters. Using text-align: justify lines everything up neatly.
5. Keeping lines to between 25 and 35 characters is something I picked up from print books. A lot of text-heavy books I find have lines with around 26 to 28 characters. So, just a suggestion there.
6. For print books, the start of a new paragraph is indicated by a two character indent, but for the web, it looks better to have spacing between paragraphs, so just set a margin-bottom to distinguish different paragraphs of text.

Anyway, I think it's safe to conclude that typesetting Chinese text for a vertical layout is very doable on the web today. This was the first vertical Chinese layout I built, just to learn about the properties and test out how box alignment would work and stuff like that. So here are some insights I gleaned from doing that.

As I mentioned earlier, 25-35 characters per line is a reasonable length, and that's done by clamping the height of the content block. Because Chinese characters are squares, that also implies that in normal circumstances, a height of 25 ems gives you 25 characters per line. To vertically centre the content block, we can actually set the top and bottom margins to `auto`, something we wished we could do but couldn't for horizontal writing. But trying to centre things horizontally is equally painful for vertical writing.

Now these directions of top, right, bottom, left start getting a bit confusing when you have rotated Latin text. Say you have this header, and you want some extra spacing between the header and the paragraph, is the margin set on the bottom or the left? It's actually the left.

That's why we have a CSS Logical Properties specification, which introduces new CSS properties that are flow-relative equivalents of physical box model properties. Properties like that use `block-start` and `block-end` or `inline-start` and `inline-end` instead of left and right. This specification is in the thick of working draft status but I'm eager to see it developed and implemented. For now, support is kind of limited.

So for my experiment, I also put in a writing mode switcher to toggle between vertical and horizontal layouts, I guess because I felt like it. The tricky part for that was getting the images to display correctly. I would have loved to have a media query for writing modes so I could layout my images accordingly with the picture element, but that doesn't exist so I had to hack around it with transforms instead.

## Mixed writing modes

Another project I worked on was a bilingual, mixed layout site, and that was quite an experience. What I'd built previously was a proof-of-concept kind of thing, but this was going to be a proper website, with pages and stuff. It's a website about Penang Hokkien, which is the dialect of my home town. And what I realised it that the ease of implementing vertical layouts opens up an aspect of graphic design that isn't often seen on the web at the moment.

One of the ideas I had was to make a bookshelf style list of posts with just CSS. So that was done using writing-mode and a rotation transform for the header, just to get the text to face the other direction. I have grown quite fond of using a vertical header when a page has many sections, I find it helps break up the monotony.

But I'm also aware of the fact that for Latin-based languages, which is meant to be read horizontally from top to bottom, vertical text should largely be decorative. We don't want to compromise the reading experience for long form passages. So at smaller screens, we can make use of media queries to revert to a horizontal layout that makes better use of the limited space.

Conversely, there are instances where vertical Latin text can work on narrow screen sizes as well. Perhaps you have realised that the hamburger menu is not the best mobile UI pattern we came with. You can layout your menu links vertically along the side edge of your site instead. And I'm sure many of you can come up with even more interesting designs that utilise vertical layouts.

I also kept the language switcher, which is actually a checkbox hack implementation. When I built this demo, Grid hadn't landed yet, so I used Flexbox for a lot of the layout. Flexbox support is great, I mean, it has wider coverage than `border-radius`, but Flexbox with `writing-mode`? Not so good. I'll be honest, there are quite a large number of cross browser issues. Like, on Firefox, if you don't specify a width on the element with a vertical writing mode, it gets kicked off the page.

But that doesn't mean we should just shy away from using vertical text altogether. In fact, there's never been a better time than now to live on the cutting edge. Evergreen browsers are a thing now, with bug fixes and new features being shipped faster than ever. CSS Grid, I feel, is one of the best rollouts of a new major CSS feature ever, with almost all the major browsers shipping it in March this year. By now around 60% of the market is using a browser that supports Grid.

And here's a little secret I discovered, by raising bugs we find when trying out new features, we are actually showing browser vendors that these features are in demand. This works both ways, if we don't use features simply because they are buggy, browser vendors will think that nobody really cares about that feature and choose to fix more pressing bugs instead. But if more of us use those features and raise the bugs we discover, it sends a signal to browser vendors that people are using these features and encourage them to address related bugs sooner than later.

## Wrapping up

Here's the long list of resources I referred to when preparing this talk and I'll share these slides for anybody who is interested.

If you need inspiration for vertical layouts, the Tateyoko Web Awards site has really nice list. My friend, Jen Simmons, also has an experimental layout lab where she showcases all the different things that are now possible with modern CSS.

And even if you don't end up using any of what I've covered immediately in your next project, I hope that you keep these techniques and properties in the back of your mind. And maybe one day, when you're tired of building the same old layouts again and again, you'll reach for them and create something amazing.

Спасибо (spuh-SEE-buh).
