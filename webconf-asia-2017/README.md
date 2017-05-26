# Web Typography: where East meets West

*For Webconf.Asia 2017. This is sort of a transcript of the talk.*

### Introduction

大家好！The last time I was in Hong Kong was 1998, so it's been a while. I'm really excited to be here to talk to all of you about two of my favourite things, both of which are in my talk title. But before we get to that, let me introduce myself...with emojis.

My name is Hui Jing, and I'm Malaysian. I played basketball for more than half my life, and it was actually what got me into web development in the first place. I'm a front-end engineer based in Singapore now, and I love CSS so much that I will write blog posts about it. I also run Talk.CSS, which is Singapore's only CSS-centric meetup at the moment.

### Internet and the web

So in case I wasn't clear earlier, the two favourite things I was talking about were the web and typography. WWW. The World Wide Web. Formally invented by Sir Tim Berners-Lee on March 12, 1989 as a means for researchers to share information. This is what he wrote in an open letter during the web's 28th birthday back in March.

> “I imagined the web as an open platform that would allow everyone everywhere to share information, access opportunities and collaborate across geographic and cultural boundaries.”

The purpose of the web is to connect the world's population, to allow people who live half a planet away to become friends. To share your experiences with friends 20km or 20,000km away from you. The internet and the web were built to be open. Or at least, it was meant to be. 

No centralised control, you didn't have to ask anyone's permission to publish a website. You could just go ahead and do it. If your friend from Argentina has a website, you can just type in that URL to see it. You don't need a visa or a passport. There aren't supposed to be national boundaries online. To me, that is amazing.

Bruce Lawson is here today. And I'm very thankful for the chance to meet him. When I read his Smashing Magazine article earlier this year, one of the things that stood out to me was the fact that it's not simply the cost of internet access that is stopping people from coming online. It is lack of digital skills and locally relevant content.

> At present, the world’s linguistic and cultural diversity is not reflected in the content and services available online. A great deal of the content available to Asian users is simply translated into local languages and does not reflect the significant cultural diversity found across the region.

I'm quite sure Bruce will cover this in a lot more detail in his talk later. But a key statistic I want to highlight is that roughly 17% of the world's population are native Chinese speakers, and yet only 2% of websites are in Chinese. In contrast, an estimated 51% of the world's websites are in English, when native English speakers make up only around 5% of the world's population. The fact that digital computing originated from places that were predominantly English-speaking plays a big role in this.

I do think that internationalisation efforts have been substantial over the years, and will continue to be for years to come. All the work coming out of the Unicode Consortium has been significant in this regard, with the goal to be able to represent every character in any system, regardless of platform, program or language.

East Asian languages still present a huge challenge due to the volume of glyphs we have. Han unification is also a very controversial issue, and I don't claim to understand the full ins and outs of it. But we are at a point where content generation by locals for locals doesn't involve hours of troubleshooting and jumping through flaming hoops any more. At least, I feel that's the case for Chinese. And typography is integral to the presentation of content.

### Overview of Western and Eastern writing systems

I've come across numerous definitions of typography over the years, and have personally settled on this one by Gerrit Noordzij, that “Typography is writing with prefabricated letters”. Letters are the building blocks of a writing system, regardless of language. And if you think about it, almost every writing system in the world today seems to be alphabetic.

But Chinese is different. Chinese is currently the only logographic writing system left that is widely used by millions of people. Each Chinese character is composed within a uniform square, allowing Chinese to be read efficiently, regardless of whether it is set horizontally or vertically. And until proven otherwise, it seems that the Chinese language was an indigenous invention, developed separately from the Proto-Sinaitic scripts which were the origins of alphabetic languages.

We can see how the nature of Western languages in Europe differ from the Eastern languages in Asia. The Phoenician alphabet is considered the origin of many alphabetic writing systems on which the Greek, Latin and Roman alphabets were based on. With alphabets, you have a small set of letters used in a myriad of combinations to form all the words you would use to communicate with another person.

With Chinese characters, we have thousands upon thousands of unique glyphs that can express meaning on their own or be used in combination with other glyphs. This has a direct consequence on the structure of the language itself.

For example:
- Hippopotamus, English word of 12 characters. 华语叫河马.
- Lebensgefährte (Lee-bin-skir-fear-te), German word of 14 characters. 华语叫伴侣.
- Grianghrafadóireachta (Green-hra-fer-doi-rek-te), Irish word of 21 characters. 这能翻译成摄影.

Ancient Greek stone inscriptions used to be sans-serif, but later stone cutters tended to spread out the ends of letters into serifs. In the Middle Ages, scribes and copyists based their writings off of these stone inscriptions. And the letter forms evolved because writing was done with pens instead of chisels. Various writing styles emerged, from Carolingian minuscules to the various Gothic hands, which in turn served as inspiration for type designers doing printing.

Although it seems like there are all manner of type classifications like Old styles, Transitionals, Humanists and Geometrics, Latin-based scripts can be broadly classified into two big categories, Serifs and Sans-serifs.

Chinese characters went also changed a lot from its origins. It's just that Chinese writing went through the entire process of development and evolution way earlier than Europe. The key implement of Chinese writing is the brush, and calligraphy was and still is one of the most highly regarded Chinese arts. Woodblock printing was invented in China, and the Chinese were exceptional at it. To the point where it was a contributing factor to why moveable type, which too was invented in China, never really took off.

The contemporary typefaces used for Chinese print publications can be broadly classified into these families: 宋体 (also known as 明体), 楷体, 仿宋体, 黑体. Both 黑体 and 仿宋体 are twentieth century creations. It is not uncommon to see comparisons of 宋体 to serifs and 黑体 to sans-serifs, but I think it makes more sense for Chinese typefaces to maintain their own classifications. They are completely different from Latin alphabets anyway.

A lot of articles on how to pick typefaces tell us that all typefaces have a personality, and we ought to pick typefaces based on the messaging we want to convey. I don't disagree. It's just that very few people delve into the why. Why do these letters have human traits? Research has suggested that a lot of it boils down to prior experience with the typefaces in particular contexts.

For Latin-based typefaces, old style and transitional serifs like Caslon, Garamond, Times Roman and Baskerville are most often used in books and formal documents. People tend to associate these as being serious and formal. 

Modern serifs like Didot and Bodoni were used in a variety of publications but we associate them with elegance and high fashion because of they're used in Vogue and Harper's Bazaar. To a certain extent, globalisation has allowed some of these associations to transcend cultural and geographic boundaries and become recognised worldwide.

Chinese typefaces are extremely challenging to create, simply due to the volume of glyphs required. Work on Source Han Serif, which was officially announced in April, started in late 2014. And they had quite a large team working on it. The average number of glyphs for a Chinese system font clocks in around 35,000 glyphs, give or take a couple thousand.

Typefaces that have enough glyph coverage to be used in body copy are usually made by foundries, like 方正, 汉仪 or 蒙纳, as very few independent type designers have the bandwidth for that.

宋体 is the standard font for body copy. 楷体 is used for runs of text that need to be differentiated from the rest of the content, like dialogues or references. 黑体 is most commonly seen in digital publishing but publishers have started to experiment with 黑体 in print as well. 仿宋体 is generally used in isolated paragraphs like quotations or highlighted sentences.

There are actually a huge variety of other styles, like those based of ancient scripts like 篆书 or 隶书, as well as brush script styles mimicking 草书 or 行书. But they fall into a broad category called 花式体, mostly used for display text or short paragraphs. Not so much for long form reading. 

To pair Chinese scripts with Latin scripts for body copy is reasonably straightforward, in that you want to pick styles that present an even typographic colour. In this regard, serifs go with 宋体 and sans-serifs go with 黑体. In general, you'd want their stroke thickness to match up, but keep in mind that Chinese glyphs appear denser than their Latin-based counterparts at the same size and adjustments will need to be made for that.

### The web as a medium

But this being a web conference and all, I should probably bring this back to the internet age. The ability to communicate abstract ideas through language and writing has always been the “killer feature” of human beings, it has been so for thousands of years, though the medium has changed over time. 

From cave paintings to stone engravings, from parchment to paper, the medium of our time is now the screen and the browser. Our types are now font files. And we've replaced typesetting with composing sticks or font plates and discs, with CSS.

So let's discuss typography on the web.

We first need to understand the web as a medium, and to be fair, it is a rather young medium. In his doctoral thesis, inventor of CSS, Håkon Wium Lie (Hor-ken Wee-um Lee), described a number of key differences between the distribution of content on paper versus electronic distribution over the web.

1. Late binding in computer programming parlance refers to function calls that are not resolved until runtime, in publishing, late binding refers to delaying the conversion of data into a format that is optimised for one specific type of output for as long as possible. The late binding between content and presentation of electronic publishing becomes even later binding on the web. This presents a performance challenge as binding now takes place while the user is waiting, and the author is not present to verify if the presentation is correct or not. 
2. There is no longer a single final form of presentation either, multiple output devices could be used. 
3. Authors can influence the presentation, but he or she no longer holds complete control, instead, a combination of influences from various sources, like the browser and the users themselves, form the final presentation. 
4. Dependable delivery is also uncertain, as web resources are distributed across multiple connected servers and the possibility of any of them being unavailable is pretty significant.

Although many would like to think the web is simply print expressed on an electronic screen, it is not. It is unique medium on its own.

### Font formats

Here's a list of common font formats used on the web. Why on earth are there so many formats? Well, here's my non-technical explanation. Fonts are simply containers for glyphs, and font formats describe these glyphs. The earliest fonts were pixel-based bitmaps, which were fine for low-resolution screens, but for printing on high-resolution printers, we needed a better solution. Either compress the bitmapped glyphs, or find an alternative rendering method. 

Donald Knuth created Metafont in 1978 for the TeX system, which generated compressed bitmap fonts. John Warnock, founder of Adobe, came up with Postscript in 1985, the first vector font, and boy did it take off. 

TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Both companies then worked separately to improve TrueType, especially with regards to fonts for East Asian writing systems. And Apple came up with TrueType GX, later renamed Apple Advanced Typography, while Microsoft turned to Adobe and together they came up with OpenType.

EOT, or embedded OpenType is Microsoft's proprietary standard which is a compact form of OpenType fonts meant for use on web pages. Although they tried to submit this as a W3C recommendation, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF was quite the industry effort, involving Microsoft, Mozilla and Opera.

Those of us who have worked on projects with self-hosted fonts will probably used something called the @font-face rule, where we declare a list of different font formats, in the hopes our fonts will show up correctly in as many browsers as possible. The number of font formats we need to declare has decreased over the years and right now, you can pretty much get away with declaring just WOFF and WOFF2.

### How browsers pick fonts

The earliest implementation of CSS had a relatively small section on fonts, which covered font properties that could be set via CSS, as well as the font matching algorithm so browsers could determine what fonts to use.

The algorithm itself has since been expanded over the last 2 decades but the general guideline to what font is used for a given character in a run of text is as follows:
- the User Agent (UA) takes the first family name defined in the `font-family` property
- if it's a generic family keyword, the UA will just pick the one it always uses and load that, otherwise it will try to find the family from fonts declared through `@font-face`
- once matched, the UA will assemble the set of font faces in the family, then pick the appropriate font face based on declared font properties:
    + `font-stretch`,
    + `font-style`,
    + `font-weight`,
    + `font-size`
- But if no matching face exists, or if the matched face is missing the glyph that needs to be rendered, the next family name is considered, and the UA runs through the steps again
- Once a font face is matched, the font will be loaded
- If all the font family names have been run through, and still no font face matches, a system fallback font will be called into play

If a character cannot be displayed using any font at all, perhaps the famous, or infamous biang character, you'll end up with a symbol of the missing glyph, or what we endearingly call 豆腐, which personally, I see much less of these days, compared to 10 years ago, thanks to the widespread use of Unicode.

Regardless, from an aesthetic perspective, it is recommended you declare your Latin-based font of choice first, because order does matter. It is almost a given that a CJK font, or an Arabic or Hebrew font, for that matter, will have support for Latin characters but not the other way around. Declaring those fonts first will result in the Latin characters displayed using glyphs from the Chinese font instead. And sometimes, this doesn't look too great on Windows.

Even though Fonts Level 3 states that user agents must match font names case insensitively, it is still recommended to put them in quotes, just in case.

Generic font families were introduced in CSS2.1, and left it up to user agents to provide reasonable default choices, which express the characteristics of each family as well as possible within the limits allowed by the underlying technology. 

There are currently five generic font families, with four more being defined in the Fonts Level 4. The thing about these generic font families is they are notoriously inconsistent, but they were never meant to be consistent in the first place. You'd leave these generic font families to be fallbacks, triggered if somehow all the previously declared fonts failed to load.

### CSS basic font properties

Not counting the font shorthand, there are six basic font properties. The last two were introduced in Fonts Level 3. I'll quickly run through the first four. `font-weight` is for indicating the stroke thickness of your font, and can take values from `100` to `900` or keywords, like `bolder` or `lighter`.

`font-stretch` is used to select fonts based on their widths, ranging from condensed to expanded. `font-style` allows for the selection of italic or oblique faces. Italics are cursive, but obliques are sloped versions of a regular face. `font-size` indicates the desired height of the glyphs, and we can use absolute values like pixels and ems or relative values like percentages or viewport units, as well as keywords like `larger` or `smaller`.

`font-size-adjust` was put in to address legibility issues. Faces with low x-heights may sometimes be less legible, especially when they are triggered as fallback fonts. This property adjusts the font size of the fallback such that its x-height matches the first-choice font.

`font-synthesis` is also new, and was put in to address the issue of faux bolds and faux italics. You know, when the true italic or a heavier version of a font does not exist and the browser tries to pretend it does? It doesn't look good at all. So now you can set this property to a value of `none`, to tell the browser to quit it.

The @font-face rule allows us to use fonts beyond those available on a given platform by linking to those font files, which could be locally available or from an external source. Each rule specifies the characteristics of a single font within a family. These fonts will only be loaded when required. Multiple `@font-face` rules can be used to build an entire font family. And it consists of the `@font-face` keyword plus a bunch of font descriptors. Font descriptors and CSS properties are not the same thing. 

This is how an `@font-face` rule looks like. I don't think most people read through the CSS specification like they would a novel, so it's perfectly fine if this looks excessively complicated and undecipherable to you. I'll do my best to make this quick and simple (hopefully). Even though there's a whole lot of stuff in here, only the `font-family` descriptor and the `src` descriptor are mandatory. If either of them are absent, the entire rule is ignored. Now the `font-family` descriptor is simply a label that we reference in other CSS declarations. So even if you're using say, Frutiger, you could actually label it “dumplings” and it would still work.

The `src` descriptor is comma-separated list of external references or locally-installed font face names. It is made up of the declaration of the font file's location, and an optional format hint. If the browser doesn't support a particular font format stated in that hint, the font file won't be loaded. The next 3 descriptors, for style, weight and stretch, are used to match styles to a particular typeface in later declarations. Again, they are descriptors, so technically you could assign a black typeface to a font-weight of 100 and proceed to confuse your team members who cannot figure out why setting a weight of 100 gives them this massively bold typeface. Please don't do that.

`unicode-range` gives us the option to specify which code points or code blocks to be rendered with the typeface in a particular `@font-face` rule. We can make use of this to create composite fonts with glyphs from different typefaces. 

Remember when I said the goal of Unicode is to support every single character on the planet?  Every Unicode character is represented by a code point and all these code points are very well organised, into code blocks, 273 code blocks as of Unicode 9.0. Each code block is unique, in that there are no overlapping code points, and they have descriptive names like Basic Latin or CJK Unified Ideographs.

This descriptor lets us choose which characters we want displayed using a particular font face. I'm going to show you the example used in the specification to illustrate this concept. Say we've subsetted the font Droid Sans into Basic Latin, which is 190kb, and Japanese, which runs 1.2mb, with the full set as a fallback. If a run of text contains just Latin characters, the browser will only load the Basic Latin font file. Only if it encounters a character that doesn't exist in the subsetted fonts, perhaps an obscure symbol, it will check the unicode ranges for each `@font-face` rule. Because the Japanese subset does not contain the codepoint for the obscure symbol, the browser will not download the Japanese font at all. It will end up downloading the fallback instead.

### Font feature properties

Font feature properties were introduced with in Fonts Level 3, so its about 6 years old now, give or take. Earlier, when I talked about all the different font formats, I mentioned that Apple and Microsoft worked to improve the original implementation of TrueType. OpenType and Apple Advanced Typography are what we term modern font technologies, and they can contain a lot more glyphs that previous font formats. 

So we can utilise a variety of typographic features like swashes, ligatures, old-style numerals and so on. The original `font-variant` property that could only be used to trigger small-caps was also expanded, a great deal. Because there are so many properties available, each with lots of values, I'm just going to do a general overview. Some of you may be wondering what's the point of having all these typographic features? 

They are part and parcel of good typography, which is necessary to hold your reader's attention. The written word is a transference of speech, which is heard, into something visual, to be seen. Speakers whom we consider compelling will vary their cadence, use gestures, emphasise certain words. Typographic features like small caps, correct use of italics and punctuation do the same for text. Other features like old style numerals and ligatures help maintain typographic colour, to make reading more comfortable.

So these are the features you can turn on via CSS, but note that the font you are using must have these features to begin with. These are the features most often mentioned at web typography talks, kerning, ligatures, small caps, old style numerals and stylistic alternates. 

Nobody talks about `font-variant-east-asian`, at least, I haven't met them yet. What this property does is, it allows for glyph substitution and positioning in East Asian text. For the benefit of the audience who can't read Han characters, it might seem like these languages share the same glyphs but actually, it depends. As I mentioned before, Han unification, which is assigning the same code point to different glyphs has been the subject of a lot of debate, so I'm just going to explain this here property.

Essentially, the same code point can have variant glyphs depending on the language being used. Like, simplified Chinese glyphs versus traditional Chinese glyphs. Japanese glyphs have their own specification known as JIS or Japanese Industrial Standard, and they too have alternate glyphs for the same character. This property allows us to toggle these variant glyphs.

Now the `font-language-override` property controls the rendering of language-specific glyphs in the typeface used. A commonly raised use case is the use of common ligatures, for the fi combination. The Turkish alphabet has both a dotted and dotless i, so the fi ligature shouldn't be used. Maybe a typeface doesn't recognise a lesser-known language like the Azeri language, which, similar to Turkish, has a dotless i, the `font-language-override` property can be used to force the usage of Turkish glyphs instead.

Browser support for each of these individual properties varies at the moment, with Firefox being the only browser with that has supported all of them since 34.0. `font-feature-settings`, on the other hand, has quite good support across most browsers. The specification recommends to utilise the respective `font-variant` properties over the `font-feature-settings` property, but until browser support becomes more robust, I guess we'll continue to see this property being used instead. 

`font-feature-settings` allows us toggle very specific OpenType properties. Last I checked, there were 141 OpenType feature tags to cover things like vertical kerning and vertical proportional alternate vertical metrics and so on.

### Implementing web fonts

If you're using building an English website, things are pretty straightforward. You can choose to serve your own font files, or use an online service. For online services, the most well-known free one is Google Fonts. Then we also have paid services like Adobe Typekit or Hoefler & Co's cloud.typography.

Broadly speaking, how Typekit works is that you create font kits, which are registered to specific domains, then add the fonts you want to use to those kits. Typekit then generates some Javascript that you need to embed on your site and apply the relevant CSS classes to get the fonts to show up. Typekit does offer a selection of free fonts as well, notably, the Source Han Sans and Source Han Serif families.

But if you want the smorgasbord of Chinese fonts, there are several font hosting services available as well. Justfont is the pioneer webfont hosting service out of Taipei, but they do more than just host fonts. They hold typography workshops and events, and also have a really great type design blog.

There is also 有字库, out of Shanghai, that offers various methods of implementing their fonts on your website. You can do it via CSS like how its done on Google Fonts, or load the font files via Javascript. They also offer SDK support for Java, PHP and NodeJS. The documentation is pretty good, but it's all in Chinese, so, just a heads up.

Type foundries have gotten into the game as well. 华康字型 or DynaComware are the guys who made PingFang, LiSong Pro and a number of other fonts that shipped with macOS. Their service is known as 华康威font. 文鼎科技 or Arphic Technology who made the AR PL fonts found on Ubuntu, have their own service called iFontCloud or 文鼎云字库.

But at the end of the day, we still need to keep in mind that CJK fonts weigh in on a megabyte scale. The font hosting services do offer optimisations like lazy loading and dynamic subsetting, so hopefully that helps. If you want to serve your own fonts, there are also tools available to help reduce the size of your font files.

If I'm building a site that uses English as its main language, I always turn to Font Squirrel to generate my webfonts, because subsetting. Font Squirrel's web font generator allows for a very granular level of customisation that I haven't found in other tools. There is a desktop application for Mac called FontPrep, which does subsetting quite well too.

Font Spider is an open-source command line tool that does smart webfont compression and conversion. It offers the ability to subset the fonts being used on the site. Look, I don't know why animals are the branding of choice for these tools, they just are. All these links in the slides will be shared out later if you're interested in all this.

And if you're really concerned about speed and page weight, you can simply choose not to use any webfonts at all, because honestly, I think that system fonts are getting much better. This, coming from someone who is running the latest macOS Sierra and the Fast Ring Insider version of Windows 10. But point being, the newer OSes are shipping with much prettier fonts than before. 

I personally use a hybrid technique, where the body text is set in a system font, but for the big titles and display text, where there is a limited number of characters I know will not change much over time, I generate webfonts containing only those glyphs, which makes the font file much much smaller than the full character set.

### Responsive layouts with modern CSS

Remember we established earlier that the web is a unique medium on its own? That's why we have this thing called responsive web design. A dynamic canvas. I don't know if any of you have ever watched interviews with Bruce Lee but that man is so charming and well-spoken. Anyhoo, this is one of my favourite quotes and it suits the web so well.

> Be formless, shapeless, like water. Now you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now water can flow, or it can crash. Be water, my friend.

Rather than trying to wrangle every pixel into place, just embrace the fact that content is meant to flow. If you make it fixed, like freezing water into ice, it's not going to fit into all the different screens that people will use to view it. Embrace the dynamism, I say.

Look, I'm on Twitter quite a bit. I have seen the flame wars over frameworks, over how CSS sucks, over how CSS should be done with Javascript. People get very worked up about these things, it seems. I personally enjoy the cascade.

Responsive websites are often mentioned in the same breath as media queries, that wonderful conditional that allows us to create different layouts at different screen widths. I can understand why people reach for frameworks, especially if they are not familiar with CSS or just don't like it in general. But frameworks are kind of prescriptive, and that's how we end up with a lot of websites that utilise very similar layouts.

CSS layout has become so much more mature since it first began. There had never been a specification that was created specially for layout until Flexbox and Grid came along. And that is fantastic. We have a lot of CSS properties at our disposal now. Around 496 the last time I checked. And it is up to us to combine and implement them creatively.

### Vertical layout on the web

This next portion is going to cover relevant CSS properties for vertical typesetting. Late last year, I had a thought while riding home on my bicycle after work. I wondered how hard it would be to typeset Chinese text on the web like the novels and comic books I used to read when I was a kid. And that's how I discovered this marvellous CSS property called `writing-mode`.

There is an entire specification dedicated to writing modes and it's defined as such, support for international writing systems. So coverage includes right-to-left languages as well, but the `writing-mode` property specifically addresses vertical writing. You literally turn the browser on its side. Some people might be saying, big deal, we can do that with transforms too. Different!

Let's cover some basic terminology. First up, inline base direction, which is that blue arrow there. It is the direction that content is ordered on a line, and defines where the line starts and ends. The green arrow indicates block flow direction, which is the direction block-level boxes stack and the direction of this stacking within their container. The `writing-mode` property dictates the block flow direction. What you see here is the standard default value of horizontal-tb.

This is when we apply `vertical-lr` and `vertical-rl` respectively. The block flow direction is now horizontal, while the inline base direction is vertical. And then there's the orientation of the individual glyphs.

Every writing system has one or more native orientations. For example, Latin scripts and Arabic scripts are horizontal only, Mongolian is vertical only, and Han and Japanese Kana are bi-orientational. All glyphs are assigned a horizontal orientation by default, and the User Agent needs to transform text from this default when laying out text vertically.

There are two ways to do this, by rotation or by translation. Scripts that have native vertical orientations will have an intrinsic bi-orientational transform, so regardless of whether the text is horizontal or vertical, the glyphs transform and will always be upright. Latin-based characters, on the other hand, rotate. But glyphs can always be set sideways or upright with the `text-orientation` property.

This is what happens to your text when the different values of writing-mode are applied. These examples look correct because I'm using Firefox at the moment, but the last two examples, `sideways-rl` and `sideways-lr` have actually been deferred to Writing Modes Level 4.

For text-orientation, the initial value is mixed, but you can make all the characters upright or sideways.

One more property is text-combine-upright. This addresses the issue of numerals and abbreviations in vertical text. A very common use case is dates, especially for Taiwan, where they use the 民國 calendar. This property lets us fit all the digits into the width of one character and display them upright. 

No browser supports the digits value yet, which allows us to dictate how many digits are acceptable to be squeezed in. The range allowed is between 2 to 4 characters. For now, with the `all` value, there is no limit, so you could technically put hippopotamus in there and it will look horribly squished.

There is a very comprehensive document called the Requirements for Japanese Text Layout, created by the W3C Japanese Layout Task Force. It addresses the aspects of Japanese composition that differ from Western composition and is meant to serve as a reference for browser implementers so Japanese web layouts can be rendered correctly. And now the Chinese Layout Task Force is working on a similar document for Chinese composition and layout. This is still a work in progress.

Through my own personal experimentation, I sort of settled onto certain typographic conventions when I'm setting Chinese text.

1. Use the appropriate font family. For example, Source Han Serif has typefaces for simplified Chinese, traditional Chinese, Japanese and Korean. Pick the right one.
2. Chinese characters are denser than typical alphabets, just by virtue of strokes, so you may want to bump up the font size a little bit. Reading small characters on a screen is not a pleasant experience.
3. For line-height there is actually a magic number. Ideally, setting it between 1.5 to 2 works fine so 1.7 is a good choice. This gives the text enough breathing room and a more even typographic colour.
4. Every Chinese character takes up the same height and width, they are squares, even punctuation are full width characters. Using text-align: justify lines everything up neatly.
5. Keeping lines to between 25 and 35 characters is something I picked up from print books. A lot of text-heavy non-fiction books I find have lines with around 26 to 28 characters. So, just a suggestion there.
6. For print books, the start of a new paragraph is indicated by a two character indent, but for the web, it looks better to have spacing between paragraphs, so just set a margin-bottom to distinguish different paragraphs of text.

Anyway, I think it's safe to conclude that typesetting Chinese text for a vertical layout is very doable on the web today. This was the first vertical Chinese layout I built, just to learn about the properties and test out how box alignment would work and stuff like that. So let's talk common use cases. 

As I mentioned earlier, 25-35 characters per line is a reasonable length, and that's done by clamping the height of the content block. Because Chinese characters are squares, that also implies that in normal circumstances, a height of 25 ems gives you 25 characters per line. To vertically centre the content block, we can actually set the top and bottom margins to `auto`, something we wished we could do but couldn't for horizontal writing. Don't worry, trying to centre things horizontally is equally painful for vertical writing.

Now these directions of top, right, bottom, left start getting a bit confusing when you have rotated Latin text. Say you have this header, and you want some extra spacing between the header and the paragraph, is the margin set on the bottom or the left? It's actually the left.

That's why we have a CSS Logical Properties specification, which introduces new CSS properties that are flow-relative equivalents of physical box model properties. Properties like that use `block-start` and `block-end` or `inline-start` and `inline-end` instead of left and right. This specification is in the thick of working draft status but I'm eager to see it developed and implemented. For now, support is kind of limited.

So for my experiment, I also put in a writing mode switcher to toggle between vertical and horizontal layouts, I guess because I felt like it. The tricky part for that was getting the images to display correctly. I would have loved to have a media query for writing modes so I could layout my images accordingly, but that doesn't exist so I had to hack around it with transforms instead.

### Mixed writing modes

Another project I worked on was a bilingual, mixed layout site, and boy was that an experience. What I'd built previously was a proof-of-concept kind of thing, but this was going to be a proper website, with pages and stuff. It's a website about Penang Hokkien, which is the dialect of my home town. And what I realised it that the ease of implementing vertical layouts opens up an aspect of graphic design that isn't often seen on the web at the moment.

One of the ideas I had was to make a bookshelf style list of posts with just CSS. So that was done using writing-mode and a rotation transform for the header, just to get the text to face the other direction. I have grown quite fond of using a vertical header when a page has many sections, I find it helps break up the monotony.

But I'm very cognizant of the fact that for Latin-based languages, which is meant to be read horizontally from top to bottom, vertical text should largely be decorative. We don't want to compromise the reading experience for long form passages. So at smaller screens, we can make use of media queries to revert everything back to horizontal text.

Conversely, there are instances where vertical Latin text can work on narrow screen sizes as well. Perhaps you have realised that the hamburger menu is not the best mobile UI pattern we came with. You can layout your menu links vertically along the side edge of your site instead. And I'm sure many of you can come up with even more interesting designs that utilise vertical layouts.

I also kept the language switcher, which is actually a checkbox hack implementation. When I built this demo, Grid hadn't landed yet, so I used Flexbox for a lot of the layout. Flexbox support is great, I mean, it has wider coverage than `border-radius`, but Flexbox with `writing-mode`? Not so good. I'll be honest, there are quite a large number of cross browser issues. Like, on Firefox, if you don't specify a width on the element with a vertical writing mode, it gets kicked off the page.

But that doesn't mean we should just shy away from using vertical text altogether. In fact, there's never been a better time than now to live on the cutting edge. Evergreen browsers are a thing now, with bug fixes and new features being shipped faster than ever. And here's a little secret I discovered, by raising bugs we find when trying out new features, we are actually showing browser vendors that these features are in demand.

This works both ways, if we don't use features simply because they are buggy, browser vendors will think that nobody really cares about that feature and choose to fix more pressing bugs instead. But if more of us use those features and raise the bugs we discover, it sends a signal to browser vendors that people are using these features and encourage them to address related bugs sooner than later.
