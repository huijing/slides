# Web typography: a non-English perspective

*For JSHeroes 2019. This is sort of a transcript of the talk.*

Mno servus oameni buni, sunt Hui Jing, și voi vorbi despre… no I'm kidding, that's the extent of my Romanian. But today, I am going to talking about web typography, which is fairly common. And I'm also going to be talking a bit about non-English web typography, which might be slightly less common.

Anyway, my name is Hui Jing, but you can also call me Jing. This is me in emojis, make what you will of them. That fox is the closest emoji I could associate with being a Mozilla TechSpeaker. A lot of us in the house today at JSHeroes.

I also have a day job at Nexmo as a Developer Advocate. Nexmo being a platform which makes it easier for developers to integrate communications into their applications by providing APIs for messaging, voice and authentication.

## On typography

Now, what exactly is typography anyway? It seems like almost everyone and their cat has a definition for it. Wikipedia calls it the art and technique of arranging type. Matthew Butterick, whose article is the first result when you google “what is typography?”, got all that SEO juice going for him, he defines it as the visual component of the written word.

Encyclopedia Britannica has its own definition, but I like this one by Gerrit Noordzij, which says typography is writing with prefabricated letters. Simply because it doesn't tie the definition to any specific medium. Typography as a discipline will continue to evolve as mediums change over time.

Letters are mentioned in most of the definitions. Letters are a type of grapheme, which is the smallest unit of a writing system of any given language. The World Writing Systems website presents one glyph of each of the world's writing systems.

It is the first step of the Missing Scripts Project, which is a long term initiative to identify writing systems which are not yet encoded in the Unicode standard. Right now, there are still 146 scripts which cannot be found in Unicode.

## On writing systems

A large number of the world's writing systems are alphabetic in nature, where a relatively small set of letters can be combined in a myriad of ways to form words, phrases and sentences. All of which become a visual representation of the spoken word.

Currently, the dominant writing system is the Latin alphabet, originating from Italy in the 7th century. It has roots in the Etruscan, Greek and Phoenician alphabet.

This writing system spread with the expansion of the Roman Empire and yet again in the early modern period during which massive waves of European colonisation of Americas, Oceania and parts of Asia and Africa took place.

And a geographic distribution that looks like this, where the dark areas represent countries who only use the Latin script, while the lighter areas show countries which use Latin script in addition to others. Even the grey areas have Latin-script alphabets in use as unofficial second languages, or for transliteration purposes.

Of course, not all Latin scripts use the same alphabet. Neither are alphabets restricted to Latin scripts alone. All 26 letters in the English alphabet are fairly vanilla, no diacritics, circumflexes or ligatures. Unlike Romanian or German, for example.

Relating this back to typography, and the concept of prefabricated letters, when we pick typefaces, be it in the physical or digital world, there may be instances where a particular character's glyph is missing from the typeface.

So what are glyphs then? Let's see some examples.

A glyph is the specific shape of a letter or character in a particular font. In the digital world, where everything is data, glyphs can be described as an array of pixels, or collections of vector images or even paths of Bézier curves and straight lines.

And the next question would be, what about fonts?

Fonts can be thought of as collections of glyphs. So in the world of metal typesetting, these are fonts. Some of you may have seen drawers containing individual metal sorts used for letterpress printing.

In the digital world, these are fonts, specifically font files. Different font formats store information about the font, like their glyphs, encodings, metadata about the font and so on, differently based on how their specifications were written.

Given this is JSHeroes, and I'm clearly not talking about anything Javascript-related, I will at least keep it to the web, in an attempt to make things remotely relevant.

## On languages on the web

Content languages on the web looks like this though. 54% of websites are in English. Can you take a guess how many native English speakers there are in the world today? Around 5%.

The distribution of languages is much more spread out in the real world than on the web. With Chinese native speakers topping the charts at around 17%, and Spanish coming in next at around 6.4%.

Writing systems are more than just a means of communication, they are also a reflection of a people’s culture, their spirituality, even their soul.

As more and more of our communications move onto the digital realm and into the online world, it is important that we preserve language diversity.

It is crucial that a technology meant to be ubiquitous supports the creation of local content across the world. That every writing system in the world can be correctly rendered on the web.

Let's assume that Unicode supports the requisite characters for a particular language, and that typeface designers have taken the effort to support that language, by designing all the relevant glyphs.

How should we, as the people who implement content on the web, make sure that we are doing our part in this effort to make sure languages are presented correctly?

We start by understanding more about digital fonts and typesetting for the web.

Declaring a content language on an element is one of the most basic things we can do, because it identifies the specific written form of the language to be used in that element, AKA the content writing system.

This is important because language and writing system conventions affect lots of typographic effects like line breaking, hyphenation, justification, glyph selection and more.

For CSS, language-specific typographic tailorings are only applied when the content language is explicitly declared. So it is in our best interest to tell the browser exactly what language our content is in to ensure a higher quality typographic experience for our users.

But before we go deeper into typesetting, let's talk about the characters we are trying to typeset first.

## On digital fonts

The earliest digital fonts were pixel-based bitmaps, okay for low-resolution screens, but problematic when content needed to be printed.

One of the solutions to this problem came from Adobe founder, John Warnock, who created Postscript in 1985, the very first vector font, and it really took off.

TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Microsoft came up with TrueType Open in 1994 and eventually Adobe joined in and together they developed OpenType.

Microsoft also came up with EOT or embedded OpenType, and tried to submit this as a W3C recommendation. However, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF2 is an improvement over WOFF with significantly better compression rates.

Please continue to indulge me in this walk back in time. Back in 1996, when CSS first became a W3C recommendation. There was a font property section defining font-family, font-style, font-variant, font-weight and font-size, plus font as a shorthand.

There was also the infamous font tag introduced in HTML3.2, to define the font size, color and face for its content via attributes. This tag is now obsolete and you are advised not to use it.

You clearly could specify different font families, though they were limited to system fonts.

Not long after, there was a working draft which proposed the possibility of loading font data from external sources via a URL. This is the earliest public instance I could find of the @font-face rule.

The original 5 font properties are still around and haven't changed all that much, though with the advent of variable fonts, more values are available for use. Much of the latest and greatest can be found in Level 4 of the CSS Fonts specification.

Generic font families were introduced in CSS2, and left it up to user agents to provide reasonable default choices, which express the characteristics of each family as well as possible. An extremely laissez faire approach, if you ask me.



There's an algorithm browsers use to determine which fonts to load and use. And even though it has expanded over the last 2 decades, here's a general idea of what goes on beneath the hood:

- The User Agent (UA) takes the first family name defined in the font-family property
- If it's a generic family keyword, the UA will just pick the one it always uses and load that, otherwise it will try to find the family from fonts declared through @font-face
- Once matched, the UA will assemble the set of font faces in the family, then pick the appropriate font face based on declared font properties
- But if no matching face exists, or if the matched face is missing the glyph that needs to be rendered, the next family name is considered, and the UA runs through the steps again
- Once a font face is matched, the font will be loaded
- If all the font family names have been run through, and still no font face matches, a system fallback font will be called into play

If a character cannot be displayed using any font at all, perhaps the famous, or infamous biang character, you'll end up with a symbol of the missing glyph, or what we endearingly call 豆腐, which personally, I see much less of these days, compared to a decade ago, thanks to the widespread use of Unicode.

You know where we see 豆腐 characters these days, when the newest emojis are released, that's when.

## On @font-face

So this is an example of the lovely @font-face rule, and if you've ever tried loading webfonts before, you probably have written something similar. Given the support status these days, it's fairly safe to use just WOFF and WOFF2 at this point.

Some fun facts about the @font-face rule. It may have many descriptors but only font-family and src, are mandatory.

The font-family descriptor works purely like a label, so we can reference the font data via CSS. So maybe you're using Helvetica, you don't have to put “Helvetica” as the descriptor. You could call it “Sarmale” if you wanted.

The src descriptor tells the browser where to find the font data, it could be an external URL, or a local font. The font hint is optional though.

Descriptors for style, weight and stretch, are used to match styles to a particular typeface in later CSS declarations.

April Fool's Day was a couple weeks ago, and if you're as annoying a person as I am, you could swap some font descriptors around, maybe the italics and bolds. Your teammates will be left utterly perplexed at why all their em elements turned bold.

I mean, if office pranks are your thing...I'm just saying. But it's not my fault if you get in trouble. #dontgetfired

## On Firefox font tools

At this point, I want to shout-out the Firefox Font Tools and the entire team who works on DevTools. Some time last year, Patrick Brosset, who did a lot of work on the Font Tools, pinged me on Twitter about a feature for detecting missing characters.

I'm sure he had been thinking about it for a bit, but it was still an amazing surprise to see that he already had a working prototype the following day. The Fonts panel had been around in Firefox for a long time, possibly since version 24, but over the past 2 years, Firefox has really up-ed their DevTools game.

They've got by far the best Grid inspector, a Flexbox inspector, Shapes editor, I could go on. But fonts, right? Version 63 shipped with a suite of font tools including the polished up version of the font highlighter demonstrated in the above tweets.

This is how it looks in action. Where you can see which fonts are loaded on the page, and which fonts are being loaded for which characters on your page. There's also information about all the fonts on the page in the bottom section there as well, so you can check on your @font-face rule as well.

This tool comes in very handy for me, especially when I have just a handful of words in a foreign language, and the typeface I'm using does not support that language.

For example, this round sans-serif is Raleway, designed by the League of Moveable Type. It's pretty nice, in my opinion, but unfortunately, does not support Cyrillic characters.

So what we can do, is try to find a font that does contain those characters, and somewhat resembles the design of chosen font, then utilise the unicode-range descriptor to create a “composite font”.

It's called a composite font because it mixes glyphs from different fonts for different scripts.

To deal with the fact that Raleway does not support Cyrillic letters, we can use the unicode-range descriptor to tell the browser to load Comfortaa, when it encounters any Cyrillic characters.

Remember that for font-face rules, the font-family is simply a label, so what we've done is create a composite font that uses the name Raleway, but in actuality, loads 2 different font files depending on what characters need to be displayed.

And the font highlighter reveals what the browser does when it encounters such a scenario. Raleway is the font-family descriptor, but you can see that Firefox has loaded both Raleway and Comfortaa. The font tools also reveals which font format the browser is using as well.

## On font properties

CSS for fonts and text are our typesetting tools for the web. When you use them in your CSS declarations, imagine that you're running your own printing workshop. And you're telling your apprentice, in this case, the browser, that you need a font which is a particular size, style, weight and so on.

Your apprentice then runs off to the back room, where all the fonts are kept, and tries to find the font that best matches your instructions from the descriptors you assigned in the @font-face rule.

There's quite a bit of work going on with fonts lately, and variable fonts build on top of some of the original properties like weight, style and stretch to take in newer ranges of variation axis values.

But there are plenty of additional variation axes for designers to play around with.

Sometimes we pick a typeface without realising it only had 1 style, so the browser will try to create bolds or italics by itself, based on the regular font. The end result doesn't look that great.

Under normal circumstances, Chinese fonts do not have italic variants. We can set the font-synthesis property to a value of none, to tell the browser to just leave the font alone.

Font feature properties were introduced in Fonts Level 3. They allow us to utilise a variety of typographic features like swashes, ligatures, old-style numerals and so on. These can help maintain typographic colour and enhance the reading experience for your users.

As long as the font you're using supports these features, we can toggle them with CSS.

There's one particular font variant property for East Asian text, allowing us to control glyph substitution and positioning for Han characters.

Depending on the language, the same character does not necessarily use the same glyph. This property allows us to toggle between variant glyphs of certain characters.

The user agent will refer to the lang attribute when rendering text but if the selected font lacks support for that language, we can ask the browser to use the typographic conventions of a related language present in the font instead.

Here's the markup for some Macedonian text. Imagine that the font being used does not support Macedonian but has characters for Serbian.

By setting font-language-override to SRB, the Macedonian text will be rendered with Serbian typographic conventions instead. But still be recognised as Macedonian.

A friend of mine built a tool that can tell you what features a font has, and the appropriate CSS you can use to toggle them. It also has the best name of any app I've ever seen, so do check it out.

If you're interested in web typography at all, I highly recommend getting a copy of Web Typography by Richard Rutter. It is the most comprehensive resource that I personally know of.

And also do watch this great talk by him at CSS Day last year, where he goes through these golden rules for web typography. These rules are universal regardless of language, but there are certain language specific behaviours that CSS can help us address as well.

Most of the time we use text-transform for case adjustments and capitalisation. But it actually does take into account numerous language-specific case mapping rules. For example, the German Eszett ß becomes SS in uppercase, or the Greek vowels lose their accent when the entire word is uppercase. Stuff like that.

full-size-kana converts all small Kana characters to their equivalent full-size Kana, mostly used for ruby annotations.

## On line breaking

Here we have 5 inline boxes. For now there is enough room so all 5 boxes fit into a single line box. But when there isn't enough room, inline boxes will be broken across line boxes. The break is known as a line break.

These particular lines were broken due to content wrapping, hence known as a soft wrap break. If wrapping is enabled, the user agent has to minimise the amount of content overflowing a line by wrapping the line at a soft wrap opportunity if one exists.

For most writing systems, soft wrap opportunities occur at word boundaries, where spaces or punctuation are used to explicitly separate words.

If you're thinking, breaking lines, how hard can that be? Well, there is a lot of nuance word breaking works differently depending on the language we're typesetting for.

For example, English wraps at spaces. But for Japanese or Chinese characters, the break is per character, usually but not always. Becauese line breaks are prohibited before certain punctuation marks.

A number of Southeast Asian scripts are written without spaces between words, then text is wrapped at syllable bounderies in addition to word boundaries. We could keep going here.

There is interplay between the 4 properties here to provide developers more precise control over line breaking, because some rules take precedence over others if both are present, or some only take affect if white-space allows wrapping, for example.

I highly recommend watching Florian Rivoal, co-editor of the CSS Text specification, explain all of this in his talk at DotCSS last year.

And if you're not sure exactly what's going on, rather confused about all this, just setting the lang attribute takes care of some of this stuff for you.

Some. Which is better than none.

## On text justification

Text justification is not a trivial computer science problem. I've seen programming assignments for Markov Chains asking for text justification algorithms. And whether we realise it or not, most of us would have encountered 2 major justification algorithms.

The Greedy algorithm, which analyses only a single line, and the much more advanced Knuth/Plass algorithm which analyses every line in a paragraph. Design software with advanced typesetting capabilities like InDesign use Knuth/Plass. But browsers, sadly, use the simple one. Probably for performance reasons, maybe? I'm not sure.

Although we don't have a robust justification algorithm, Text Level 3 does include the text-justify property to allow some further tweaking of justified text.

If I search for “text justify web” on Google, the top result is titled Don't use fully justified text alignment on your website, and the next one is Justify text with HTML/CSS? Don't do it!. It seems that justified text has a bad rap on the web.

This might be true for Latin-based scripts but not so for Chinese characters, which are also known as square characters. Each character is composed within a uniform square and Chinese texts can be typeset into neat rows and columns. In fact, it is ideal to do so.

But when there are both Latin-based alphabets and Chinese characters, it's impossible for everything to line up both vertically and horizontally. The next best thing is to ensure the start and end of every line is aligned well.

And we can make adjustments between adjacent typography character units in Chinese texts with inter-character.

## On vertical writing

Finally, writing systems are also not limited a horizontal, top-to-bottom direction. Traditionally, East Asian languages were all written vertically. Arabic and Hebrew are written from right-to-left.

The writing-mode property specifically caters for vertical writing on the web. The default is horizontal, top-to-bottom. To change the direction to vertical, we use vertical-rl or vertical-lr. There's a sideways option that's formally been moved to Level 4 but Firefox has it implemented.

Rotating lines of texts also affects the individual characters within the line.

So again, the lang attribute is important. Because browsers are smart enough to tell that Chinese characters, which are dual-direction, will always be displayed upright. While horizontal-only languages, will have their characters rotated when vertical.

The text-orientation property can be used to make all the characters upright or sideways, depending on what you want.

The last property in this set is the text-combine-upright property, which address the issue of numerals and abbreviations in vertical text. For example, if your text contains dates. This property lets us fit all the digits into the width of one character and display them upright.

The last value there, called digits, has yet to be implemented in any browser, but it really makes sense to have some sort of a limit on this.

I mean, 4 digits is probably the maximum you can push such a tiny space. 7 looks very uncomfortable. 13 is just ridiculous.

Vertical text may be better suited for East Asian languages when it comes to full length body copy, but that doesn't mean other languages can't get in on the fun. We see vertically set text in print all the time.

Headers or short runs of text are relatively safe to typeset vertically, and can add some typographic variety to your web layouts. We can also combine writing-mode with transforms or other CSS properties. Lots of possibilities with modern CSS these days.

## Wrapping up



I spoke a bit more about East Asian typography because Chinese is my mother tongue and I am involved with the Chinese Layout Task Force. If you notice, there are also Layout Task Forces for numerous other scripts and this is definitely a step in the right direction when it comes to preserving language diversity on the web.

An ideographic language like Chinese was not a good candidate for moveable type printing. The calligraphic style of Arabic writing also resulted in efforts to reduce the number of variations of letters and diacritical marks. Such typographical compromises are akin to having the finest sculptures in the world caked in dirt and mud.

I think the digital age presents an opportunity clean off the dirt and mud off scripts that have long had to compromise to “get with the times”. Our digital age is the age of light and electronic signals. There are far fewer limitations as compared to a physical medium like moveable type.

If the virtual world is being touted as a realm with limitless possibilities, then it should be reasonable to expect that all our scripts can be restored to their full artistic glory on the world wide web.

Mulţam fain!