# East Asian typography on the web

*For Refresh 2018. This is sort of a transcript of the talk.*

Tere päevast! Welcome back to the front-end track. Before lunch, we covered the architectural side of things with Asim, as well as some functional programming concepts applied to Javascript with Milosz.

And now, I'm going to talking a bit about the CSS side of things, which affects how your content looks like to your users. We'll be touching on CSS at the typography level, as well as the layout level.

But before I begin, can I have a show of hands if anyone in the audience speaks any East Asian languages, like Chinese or Japanese?

As for myself, I speak both Chinese and English. My name is Hui Jing, I go by Jing as well. I was born in Malaysia, and I used to play basketball full time. Basketball actually helped kick-start my web career. You can ask me about that later, if you find this interesting.

I absolutely love CSS, and so I like writing about it, and sometimes speaking about it as well. I also happen to be a Mozilla TechSpeaker, which is an initiative by Mozilla that supports technical evangelists in regional communities around the world by providing resources and funding.

## On writing systems

So let's get into it. What do you think about when you hear the word typography? Do you think about fancy letters and elaborate typefaces? Is typography a niche topic something only artsy, creative types care about?

Perhaps. But typography has made its way into mainstream news recently as well. Largely because big brand names like Netflix and National Geographic did a lot of marketing around their font redesigns.

There was also that Supreme Court case in Pakistan where the Microsoft font, Calibri, was the crucial piece of evidence that proved the forgery of financial documents.

So that's all quite interesting, but what exactly is typography? You can find lots of definitions out there, but personally, I've settled on this one by Gerrit Noordzij.

Typography is writing with prefabricated letters. Letters are a type of grapheme, which is the smallest unit of a writing system of any given language.

Writing systems are visual representations of verbal communication. A means to record whatever we say, in our respective languages.

The world is very diverse when it comes to language and culture, so it's only natural that there are many different writing systems used all over the planet. A majority of the world use writing systems that consist of alphabets.

This is just a small sampling of a bunch of different alphabets. And before I got here, I tried to learn a little bit more about the Estonian language. Basic phrases like “Jätku leiba”.

What can I say? Food is important to me. Along the way, I learnt that the Estonian alphabet has 27 letters, of which 4 are only used in loanwords.

The Hebrew alphabet has 22 letters, Arabic has 28 letters and English has 26. The point I'm trying to make here is that alphabetic writing systems utilise a small set of letters to form all the words the language needs for the purpose of communication.

### On the Chinese language

Chinese is different, in that, it is a logographic language. Chinese characters number in the tens of thousands. And each character is a unique glyph that can express meaning on their own or be used in combination with other glyphs. Let's look at a few examples.

The word, Communication, is an English word of 13 letters. Chinese only needs 2 characters, 沟通. Sagedussõnastik, a 15-letter Estonian word. In Chinese, 词典. Grianghrafadóireachta, Irish word of 21 letters. Again, 2 characters will do, 摄影. Chinese is quite a concise language.

And although a large swath of the world mostly reads from left-to-right, writing systems can go in all directions. Modern day vertical writing applies to East Asian scripts that utilise Han characters, so mainly Chinese, Korean and Japanese, and are read from right-to-left. Mongolian also uses vertical writing, but is read from left-to-right.

Han characters are sometimes called square characters, because each character is composed within a uniform square. That allows Chinese to be read efficiently, regardless of whether it is typeset vertically or horizontally.

Chinese texts can be typeset into neat rows and columns. And if you don't understand Chinese, you may not know which direction the text is going. It could be vertical, right-to-left, or horizontal top-to-bottom.

The Chinese script is said to have developed independently from the Proto-Sinaitic scripts, which were the origins of alphabetic characters. This is potentially why the Indo-European writing systems are inherently different from those of East Asia.

As different alphabetic writing sytems branched out from the Phoenician alphabet, their letterforms evolved and changed. The appearances of letterforms were often directly influenced by the tools used to create them.

The Latin alphabet was derived from Greek and the earliest letters were sans-serif when writing was done with a hard reed pen. Serifs may have came about due to a transition to a square-cut writing implement, like a flat stiff brush.

Later scribes and copyists used quill pens and as demand for written matter grew, they developed more efficient styles of writing, evolving the letterforms yet again.

Chinese characters have seen their own path of evolution as far back as 1600BCE, when the earliest glyphs were scratched into turtle shells and animal bones.

This early script was called Oracle Bone script because the ancient rulers would use them to ask various higher powers important questions about topics like agriculture, weather, warfare and so on.

The key implement of Chinese writing is the brush. Calligraphy was and still is one of the most highly regarded Chinese arts. The works of famous calligraphers were used as the basis for carving woodblocks used for printing, which was invented in China.

While Latin-based scripts are classified into sans-serif and serif typefaces, Chinese has its own script classifications. These 4 are mainly used for printing Chinese publications nowadays. 宋体, 楷体, 仿宋体 and 黑体.

### On designing Chinese typefaces

Chinese typefaces are extremely challenging to create, simply due to the volume of glyphs required. The average number of glyphs for a Chinese system font clocks in at around 35,000 glyphs, give or take a couple thousand.

This quote is from an article on Quartz that covered the process of creating a Chinese font, and it's a pretty interesting read, which goes into how much effort is needed to design and create a Chinese typeface.

For a typeface to be viably used as body copy, it will probably need a minimum coverage of around 7000 glyphs for simplified Chinese or around 13,000 for traditional Chinese. That's still a lot of glyphs, hence Chinese fonts are almost always designed by teams over a period of years.

## On the importance of local content

For the longest time, writing has been done on analogue mediums. Etchings on bone, inscriptions on stone and bronze, calligraphy and printing on parchment and paper. All these are things you can touch and feel. But the medium of our time is now the screen, and the browser.

As more and more of our communications move onto the digital realm, it is important that we preserve language diversity. Languages are representative of human heritage, and convey unique cultures. I believe most people in this audience speaks more than one language, and if you think about it, there are certain concepts that simply get lost in translation.

Estonia has one of the highest internet penetration rates in the world, with 97.7% of the population having access to the internet. But the thing about the internet is, it's a double-edged sword.

There are more than 7000 languages spoken globally, but only a tiny proportion of that is represented in the online world. English is currently the dominant language on the web, largely because digital technologies were pioneered in English-speaking countries.

As a result, conversations around technology, software and business across the world are often peppered with English terminology.

According to this article in the Guardian published a few years back, it's definitely not due to deficiencies in our mother tongues. The Baltic languages, like Estonian and Latvian, are among the richest languages in the world.

Which is why Internationalisation is a priority at the W3C. It is crucial that a technology meant to be ubiquitous supports the creation of local content across the world. That every writing system in the world can be correctly rendered on the web.

My not-so-secret agenda for this talk is to implore you to create more content in your respective mother tongues. And the CSS we cover today, can help with presenting that local content correctly on the web.

For my English-speakers in the house, don't worry, the web was built for you by default, so everything mentioned will work just fine. It's all relevant.

## On web fonts

Typography has always been an integral part of Human-Computer Interaction and software design. Rendering text and graphics on an electronic screen is no easy task.

Anything we see on a screen has everything to do with the field of computer graphics. And digital typography is really a cross-disciplinary field involving technical engineering, aesthetic design and mathematical precision.

When we talk about typography on the web, one of the first things that comes to mind is web fonts.

In world of metal typesetting, these are fonts. If you are familiar with letterpress printing, you may have seen drawers containing individual metal sorts. Well, for Chinese fonts, we have type shelves. Rows and rows of type shelves.

In the digital world, these are fonts, specifically font files. For both analogue and digital fonts, you can think of them as collections of glyphs.

A glyph is the specific shape of a letter or character in a particular font. In the digital world, everything is data. So glyphs can be described as an array of pixels, or collections of vector images or even paths of Bézier curves and straight lines.

Different font formats store information about the font, like their glyphs, encodings, metadata about the font etc., differently based on how their specifications were written.

But why do we have so many different font formats anyway? Time for a bit of history. The earliest fonts were pixel-based bitmaps, which didn't work out so well when it came to high-resolution printing.

A lot of smart people worked on this problem. And one of the solutions came from Adobe founder, John Warnock. He created Postscript in 1985, the very first vector font, and it really took off.

TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Microsoft came up with TrueType Open in 1994 and eventually Adobe joined in and together they developed OpenType.

Microsoft also came up with EOT or embedded OpenType, a proprietary format for use on web pages. Although they tried to submit this as a W3C recommendation, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF2 is an improvement over WOFF with significantly better compression rates.

On the practical side of things, we use the @font-face rule to declare a list of different font formats for browser support but nowadays, it's safe enough to declare just WOFF and WOFF2.

The `@font-face` rule has many descriptors but only `font-family` and `src`, are mandatory.

The `font-family` descriptor is simply a label that we reference in other CSS declarations. So maybe you're using Helvetica, you don't have to put “Helvetica” as the descriptor. You could call it “Buratino” if you wanted.

The `src` descriptor tells the browser where to find the font file, it could be an external URL, or a local font. It also includes an optional format hint. If the browser doesn't support a particular font format stated in that hint, it won't bother looking for the font at all.

Descriptors for style, weight and stretch, are used to match styles to a particular typeface in later CSS declarations. If you're bored at work, you could try assigning a black typeface to a `font-weight` of `100` and proceed to confuse your colleagues who cannot figure out why setting a weight of `100` gives them this massively bold typeface. If office pranks are your thing...I'm just saying. #dontgetfired.

A pretty cool descriptor is `unicode-range`. which allows us to create composite fonts that mix glyphs from different fonts for different scripts.

Earlier this year, I got the chance to speak in Kyiv, and my presentation was set using the font Infini, which unfortunately does not support Cyrillic letters. So I used the `unicode-range` descriptor to tell my browser to load a second font that did, when it encountered any Cyrillic characters.

Remember that for font-face rules, the font-family is simply a label, so what I've done here is created a composite font that uses the name Infini, but in actuality, loads 2 different font files depending on what characters need to be displayed.

I really have to shoutout Firefox Devtools here. if you're doing a lot of design work in the browser, it's just awesome. It has the best Grid Inspector tool, a Flexbox inspector, I could go on.

But anyway, there's also the font panel that shows which fonts are loaded on your page. And if you're using the latest Firefox Nightly, you can toggle the font highlighter feature by editing the browser's configuration.

I have this habit of subsetting my webfonts rather aggressively, and usually I stick with the Basic Latin character set, which does not include any of the letters with diacritics. So those letters got rendered with the fallback font.

Sometimes I see that the fallback font is being rendered from the fonts panel, but can't figure out which characters I missed out. With the font highlighter tool, I can see exactly which characters are using which fonts.

All these font descriptors I've talked about thus far look very similar to CSS properties, but they are 2 completely different things.

I learned the difference between the 2 after watching Chris Lilley, who chaired the group that developed `@font-face`, explain it during his dotCSS talk. That properties are requests for styling and descriptors are descriptions of capabilities. A `font-weight: bold` within a `@font-face` rule means this font can do bold. While a `font-weight: bold` applied as a property means style this element with a font that can do bold.

CSS font properties are our typesetting tools for the web. When you use them in your CSS declarations, imagine that you're running your own printing workshop. And you're telling your apprentice, in this case, the browser, that you need a font which is a particular size, style, weight and so on.

Your apprentice then runs off to the back room, where all the fonts are kept, and tries to find the font that best matches your instructions based on their descriptors, which were assigned in the `@font-face` rule.

Let's look at one which isn't that commonly used at the moment, `font-synthesis`.

Now, your smart apprentice can sometimes be too well-meaning. Sometimes the true italic or heavier version of a font does not exist, so the browser will try to create that effect by itself, based on a regular font.

Most Chinese fonts don't have italic variants. We can set the `font-synthesis` property to a value of `none`, to tell the browser to just leave the font alone.

Font feature properties were introduced in Fonts Level 3. allowing us to utilise a variety of typographic features like swashes, ligatures, old-style numerals and so on.

Reading text that is typeset well, through use of features like small caps, italics and proper punctuation, is like listening to a compelling speech.

Other features like old style numerals and ligatures help maintain typographic colour and enhance the reading experience, which is necessary to hold your readers' attention.

As long as the font you're using supports these features, we can toggle them with CSS.

There's one particular font variant property for East Asian text, allowing us to control glyph substitution and positioning for Han characters.

Depending on the language, the same character does not necessarily use the same glyph. This property allows us to toggle between variant glyphs of certain characters.

A friend of mine made a nifty tool that can tell you what features a font has, and the appropriate CSS you can use to toggle them. It also has the best name of any app I've ever seen, so do check it out.

OpenType Font Variations, AKA variable fonts, were introduced in September 2016, and has been gaining quite a bit of traction this year.

A variable font is the equivalent of multiple individual fonts, compactly packaged within a single font file, which can potentially be a big plus when it comes to performance. And is especially significant for fonts with large glyph sets, like CJK fonts.

In addition to that, the dynamism of variable fonts makes it perfect for the web medium, and opens up a world of creative possibility.

This demo was created by Mandy Michael, who gave an excellent presentation in Singapore earlier this year. There's video of her talk, and the link is in these slides I'll share later.

If you're interested in playing around with variable fonts, here are a few apps that let you do just that. Axis Praxis, I think, was the first of such apps. The latest addition is the one in the middle, Font Playground, by Zhang Wenting.

## On vertical layouts

Vertical writing may be traditionally used for East Asian languages, but you don't have to miss out on the fun just because you don't design for those languages.

Vertical layouts are not a new thing. Print design has had plenty of those for quite a while now. It's just that the web hadn't reached a level of maturity that could do them well, until recently.

So I want to introduce the `writing-mode` property, which deals specifically with vertical text. You literally turn the browser on its side. Some people might be saying, no big deal, we can do that with transforms too. Not exactly. Changing the `writing-mode` affects an elements box alignment axes.

This is what happens to your text when the different values of writing-mode are applied. The default is horizontal, top-to-bottom. To change the direction to vertical, we use `vertical-rl` or `vertical-lr`.

Now when we rotate text, it's not only the lines that change direction, because each line contains individual letters or characters. They have an orientation as well.

For `text-orientation`, the initial value is `mixed`. Browsers are smart enough to tell which languages can be typeset both vertically and horizontally, or in one direction only. So Chinese characters, for example, will always be displayed upright. While horizontal-only languages, will have their characters rotated when vertical.

The `text-orientation` property let's you control this, and make all the characters upright or sideways, if you want to.

The last property in this set is the `text-combine-upright` property, which address the issue of numerals and abbreviations in vertical text. For example, if your text contains dates. This property lets us fit all the digits into the width of one character and display them upright.

One of the proposed values is `digits`, which controls limits the number of glyphs we can squeeze into that tiny one-character space to between 2 and 4, but no browser supports it yet. We only have the `all` value at the moment.

And it works fairly well, good support all around, as you can see here. Though when the word gets longer, things get a bit, tight. So maybe, don't do it for really long words?

Laying out content in a different direction does require a change in perspective. And I gleaned quite a few insights from working with vertical layout. For example, the techniques I was so used to for centring items worked a bit differently with a vertical layout.

To vertically centre a block, setting the top and bottom margins to auto actually does work, unlike in horizontal writing, which is great. But trying to centre something horizontally is a pretty painful experience.

These directions of top, right, bottom, left start getting a bit confusing when you have rotated Latin text. Say you have this header, and you want some extra spacing between the header and the paragraph, is the margin set on the bottom or the left? It's actually the left.

That's why we have a CSS Logical Properties specification. So instead of `left` or `right`, we use properties like `block-start` and `block-end` or `inline-start` and `inline-end`. So these directions continue to make sense, even if the writing mode of the document changes.

Support wasn't great when I first started talking about this specification, but it looks much better now, and will continue to garner more green as we go along, so do give it a go and try to wrap your head around it.

These writing-mode properties allow us to do proper vertical typesetting on the web, and is a step toward ensuring that a key aspect of East Asian culture can live on in the digital world, and maybe even thrive.

## On more creative art direction on the web

Implementing vertical layouts has become much easier, as browser vendors continue to improve the functionality of their products, and this opens up an aspect of graphic design that isn't often seen on the web at the moment.

For example, you can make a bookshelf style list of posts with just CSS. Something like this can be done by applying a `vertical-rl` to each list item, with some padding and inset box-shadows thrown in for the visual effect.

Laying out long passages of Latin-based left-to-right languages is a bad idea, but for short titles or headers, a vertical orientation can help break up the monotony on a long scrolling page.

Other subtle uses of vertical text could be for tags on blog posts for example, or wherever information is not critical to the main content, so laying it out vertically doesn't adversely affect the reading experience.

There are even more possibilities when we combine such techniques with media queries. When the viewport gets too narrow, we can revert to a horizontal layout that makes better use of the limited space.

Conversely, there are instances where text rotated vertically can work on narrow screen sizes as well. Studies have shown that the hamburger menu isn't an intuitive design pattern at all.

Depending on the number of links in your navigation, laying them out vertically along the side edge could be a design worth considering. And I'm sure many of you can come up with even more interesting designs that utilise vertical layouts.

## On contributing to the web

Statistically, there aren't that many sites which use the `writing-mode` property. When I tried to use Flexbox with vertical writing-mode, I broke my browser.

I then poked around and found quite a large number of cross-browser issues. Now if you're wondering why you sat through my presentation just to find out that support is a pile of poop, don't worry. I'm not trying to lead you on.

I'm trying to make a point. It's precisely because too few people were using flexbox with vertical writing-mode, that a large number of bugs were left undiscovered. And this applies to other CSS properties as well.

Browser release cycles have shortened immensely over the years. Look at how dense the blue is over these past 5 years. It's safe to say, evergreen browsers are a thing now, with bug fixes and new features being shipped faster than before.

It's so much easier to get enthusiastic about new CSS features these days because they ship and become widely supported so much quicker now. And the same goes for bug fixes.

Every major browser engine has a pretty open process for raising bugs, and raising bugs for a particular feature sends a signal to browser vendors that developers want to use this feature. This encourages them to prioritise related bug fixes.

It's a win for everyone. By taking the time to submit a bug report, you gain karma points, get your bugs fixed AND make the web better for all of us. By the way, that flexbox bug I showed? It got fixed in the next release. Just saying.

## Wrapping up

Did quite a bit of research for this talk, so some further reading, if you're interested.

If you need inspiration for vertical layouts, the Tateyoko Web Awards site has a really nice list. While Jen Simmons has an experimental layout lab where she showcases all the different things that are now possible with modern CSS. She updates it quite often, so bookmark it and check back for new stuff from time to time.

I just want to wrap up by saying, the thing about attending conferences, at least for me, is not so much to gain expertise overnight, but rather to get inspired. To learn of things that I did not know existed, to discover something new and perhaps gain insights and hear perspectives that never occurred to me before.

So maybe for some of you, these techniques fit your use-case and you can go home and use them tomorrow, that's great. But even if they don't, that's fine too. Knowing what the web is capable of, and what you can potentially build with it, is the act of growing your web design toolbox.

That way, when the time comes, you are well equipped to craft a masterpiece for the ages.
