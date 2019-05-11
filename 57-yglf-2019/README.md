# Typesetting for a global web

*For YGLF Vilnius 2019. This is sort of a transcript of the talk.*

Labas rytas. Kaip sekasi? I hope everyone is having a great morning here at YGLF.

I have this indescribable joy simply being here in Lithuania. Because long before all this web stuff happened, ever since I was 7 years old, Basketball was everything to me. So we're going to watch something first.

*play first clip*

The 2000 Sydney Olympics were broadcast live back then. I was 13 years old. That was the first time I saw the Lithuanian team play. I didn't know much about Lithuania before that Olympics, but as the tournament went on, it was obvious they were an excellent team.

That clip was from the semi-finals between Lithuania and the United States. And I think most people at the time thought the Americans would cruise to the finals. Lithuania was down 12 points during half-time. But they came out scorching hot in the 2nd half and tied the game with 15.30 to go.

As the Lithuanians matched the Americans point for point, it seemed like the improbable could happen. That Lithuania would knock off the high and mighty Americans on one of the world's biggest stages. My heart just sank when that last shot by Šarūnas Jasikevičius came up short. But Lithuanian basketball had left an impression on me for life.

When 2004 rolled around, Šarūnas didn't miss.

*play second clip*

As team Lithuania walked off the court their heads held high, it felt as if they had won the gold already. So yes, Lithuania always had a special place in my heart. But I never imagined I would find myself here in Vilnius, after my basketball career was over, about to open You Gotta Love Frontend with a talk about web typography.

Web typography is a topic that has been covered quite extensively by numerous amazing speakers, so what I'd like to bring to the table today is some additional perspective about non-English typography as well. Hence the title of *Typesetting for a global web*.

My name is Hui Jing, you can also call me Jing. And these are the emojis that describe me. It is probably not obvious what the fox is for, but I use it to indicate that I'm a Mozilla Techspeaker, which is an initiative by Mozilla to support technical evangelists in regional communities around the world by providing resources and funding.

I also have a day job as a Developer Advocate with Nexmo. Nexmo being a platform that provides APIs for messaging, voice and authentication so developers can easily integrate communications into their applications.

## On Typography

Before we dig into web typography, let's take a step back and think about typography itself. It seems like almost everyone and their cat has a definition for it. Wikipedia calls it the art and technique of arranging type. Matthew Butterick, whose article is the first result when you google “what is typography?”, defines it as the visual component of the written word.

Encyclopedia Britannica has its own rather long definition, but I like this one by Gerrit Noordzij, which says typography is writing with prefabricated letters. This particular definition is not tied to any specific medium. Typography as a discipline will continue to evolve as mediums change over time.

Letters are mentioned in most of the definitions. Letters are a type of grapheme, which is the smallest unit of a writing system of any given language. The World Writing Systems website presents one glyph of each of the world's writing systems.

This site is part of the Missing Scripts Project, which is a long term initiative to identify writing systems which are not yet encoded in the Unicode standard. Right now, there are still 146 scripts which cannot be found in Unicode, and hence, cannot be properly displayed on screens as textual content.

A large number of the world's writing systems are alphabetic in nature, where a relatively small set of letters can be combined in many different ways to form words, phrases and sentences. Transforming something we hear and say, into something we see and read. 

Currently, the dominant writing system is the Latin alphabet, originating from Italy in the 7th century. It has roots in the Etruscan, Greek and Phoenician alphabet. This writing system spread with the expansion of the Roman Empire and yet again in the early modern period during which massive waves of European colonisation of the Americas, Oceania and parts of Asia and Africa took place. The result of which gave us the numbers you see on this chart here, where Chinese and Arabic are a distant second and third.

And a geographic distribution that looks like this, where the bright yellow areas represent countries who only use the Latin script, while the pale yellow areas show countries which use Latin script in addition to others. Even the grey areas have Latin-script alphabets in use as unofficial second languages, or for transliteration purposes.

Of course, not all Latin scripts use the same alphabet. Neither are alphabets restricted to Latin scripts alone. The English language contains 26 letters, all of which are fairly vanilla, no diacritics, circumflexes or ligatures. Unlike Lithuanian or Latvian, for example.

Relating this back to typography, and the concept of prefabricated letters, when we pick typefaces, be it in the physical or digital world, there may be instances where a particular character's glyph is missing from the typeface.

So what are glyphs then? Let's see some examples. We've got a nice wooden E with a circumflex. Here's a bitmap Chinese character. This is a vector Cyrillic D. All of them are glyphs.

A glyph is the specific shape of a letter or character in a particular font. In the digital world, where everything is data, glyphs can be described as an array of pixels, or collections of vector images or even paths of Bézier curves and straight lines.

And the next question would be, what about fonts? Fonts can be thought of as collections of glyphs. So in the world of metal typesetting, these are fonts. Some of you may have seen drawers containing individual metal sorts used for letterpress printing.

In the digital world, these are fonts, specifically font files. All digital files are simply long lists of numbers stored at binary on a storage device. And file formats are what allows us to read and understand the data these numbers represent. Different font formats store information about the font, like their glyphs, encodings, metadata about the font and so on, differently based on how their specifications were written.

## On languages and the web

This is supposed to be a talk about web typography so let's take a closer look at content on the web. 54% of websites are in English. Can you take a guess how many native English speakers there are in the world today? Around 5%.

The distribution of languages is much more spread out in the real world than on the web. With Chinese native speakers topping the charts at around 17%, and Spanish coming in next at around 6.4%. Languages are extremely important and emblematic of a people's identity. I think Lithuania is one of the best proof points for this statement.

As a result of the Sausio Sukilimas in 1863, Tsar Alexander II banned the use of the Latin alphabet and no publication in the Lithuanian language was permitted. This ban remained in force for 40 years, from 1864 to 1904, which I believe most of you are very aware.

But what the Russians did not realise was that this cemented the Lithuanian language as central to the national identity. And it consolidated support for an independent Lithuanian nation-state amongst the almost all the Lietuviai.

In spite of harsh measures to snuff out the lietuvių kalba, and by extension, lietuvos kultūra, Knygnešiai kept Lithuanian literature alive and by the final years of the ban, Lithuanian books had reached every settlement in the country.

Writing systems are more than just a means of communication, they are also a reflection of a people’s culture, their identity and even their soul. As more and more of our communications move onto the digital realm and into the online world, it is important that we preserve language diversity.

It is crucial that a technology meant to be ubiquitous supports the creation of local content across the world. That every writing system in the world can be correctly rendered on the web.

## On digital fonts

Let's assume that Unicode supports the requisite characters for a particular language, and that typeface designers have taken the effort to support that language, by designing all the relevant glyphs.

How should we, as the people who implement content on the web, make sure that we are doing our part in this effort to make sure languages are presented correctly? We start by understanding more about digital fonts and typesetting for the web.

Declaring a content language on an element is one of the most basic things we can do, because it identifies the specific written form of the language to be used in that element, AKA the content writing system. This is important because language and writing system conventions affect lots of typographic effects like line breaking, hyphenation, justification, glyph selection and more.

For CSS, language-specific typographic tailorings are only applied when the content language is explicitly declared. So it is in our best interest to tell the browser exactly what language our content is in to ensure a higher quality typographic experience for our users.

The earliest digital fonts were pixel-based bitmaps, okay for low-resolution screens, but problematic when content needed to be printed. Because printers were high resolution.

One of the solutions to this problem came from Adobe founder, John Warnock. He had founded Adobe Systems in December 1982, together with Charles Geschke. Together with Doug Brotz, Ed Taft and Bill Paxton, they created a page description language called PostScript, which went to market in 1984.

PostScript was great for printing, but it also handled fonts very well. An issue with fonts at the time was that they did not scale linearly at small sizes. Glyphs would get distorted during scaling, but PostScript handled this by providing additional metadata as font hints. 

This was highly secret technology and the hinted fonts were compressed and encrypted into what Adobe called a Type 1 font, which only stored outline information. The first vector font format, and it did really well.

TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Both companies then worked separately to improve TrueType, especially with regards to fonts for East Asian writing systems. Apple came up with TrueType GX, later renamed Apple Advanced Typography. Microsoft came up with TrueType Open in 1994 and eventually Adobe joined in and together they developed OpenType.

Microsoft also came up with EOT or embedded OpenType, and tried to submit this as a W3C recommendation. However, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF is a font packaging format designed to provide lightweight, easy-to-implement compression of font data. 

Any properly licensed TrueType/OpenType/Open Font Format can be packaged in WOFF for web use. WOFF2 is an improvement over WOFF with significantly better compression rates.

## On web fonts

And while we're on the topic of the history of fonts, it makes sense to look at how fonts evolved on the web as well. Back in 1996, when CSS first became a W3C recommendation. There was a font property section defining font-family, font-style, font-variant, font-weight and font-size, plus font as a shorthand.

There was also the infamous font tag introduced in HTML3.2, to define the font size, color and face for its content via attributes. This tag is now obsolete and you are advised not to use it. You clearly could specify different font families, although they were limited to system fonts.

Not long after, there was a working draft which proposed the possibility of loading font data from external sources via a URL. This is the earliest public instance I could find of the @font-face rule.

The original 5 font properties are still around and haven't changed all that much, though with the advent of variable fonts, more values are available for use. Much of the latest and greatest can be found in Level 4 of the CSS Fonts specification.

Generic font families were introduced in CSS2, and left it up to user agents to provide reasonable default choices, which express the characteristics of each family as well as possible. I just quoted off the specification. But somehow, this feels like an extremely laissez faire approach, if you ask me.



There's an algorithm browsers use to determine which fonts to load and use. And even though it has expanded over the last 2 decades, here's a general idea of what goes on beneath the hood:

- the User Agent (UA) takes the first family name defined in the font-family property
- if it's a generic family keyword, the UA will just pick the one it always uses and load that, otherwise it will try to find the family from fonts declared through @font-face
- once matched, the UA will assemble the set of font faces in the family, then pick the appropriate font face based on declared font properties
- But if no matching face exists, or if the matched face is missing the glyph that needs to be rendered, the next family name is considered, and the UA runs through the steps again
- Once a font face is matched, the font will be loaded
- If all the font family names have been run through, and still no font face matches, a system fallback font will be called into play

Most of the time, system fonts will support an extended character set covering a majority of languages. But with our new-found knowledge of how browsers figure out which font to use, I think it has become clearer why we have font stacks.

The order of the declared fonts does matter, as the browser goes through them from left to right. For a run of text, if the browser encounters a character the first font doesn't support, it will run by the algorithm for the next font on the list and so on.

Ideally, your font stack should be made up of fonts that share similar characteristics, so it is not that obvious a fallback has been invoked for a particular missing glyph. Go for similar visual style, x-heights and stroke weights.

Otherwise you may end up with this tragic situation that happens on a relatively popular blogging site, *cough* Medium. Like my friend, Vadim, replied on my Twitter thread, it's not lethal, but it sure is ugly.

If a character cannot be displayed using any font at all, for example, this particularly infamous biang character, you'll end up with a symbol of the missing glyph, or what we endearingly call 豆腐. Personally, I see much less of these blank rectangles, compared to a decade ago, thanks to the widespread use of Unicode.

You know where we see tofu characters these days? When the newest emojis are released, and the software you're using, *cough* Slack, hasn't updated to support them yet.

So this is an example of the lovely `@font-face` rule, and if you've ever tried loading webfonts before, you probably have written something similar. Given the support status these days, it's fairly safe to use just WOFF and WOFF2 at this point. Some fun facts about the `@font-face` rule. It may have many descriptors but only font-family and src, are mandatory.

The font-family descriptor works purely like a label, so we can reference the font data via CSS. So maybe you're using Helvetica, you don't have to put “Helvetica” as the descriptor. You could call it “Šaltibarščiai” if you wanted. The src descriptor tells the browser where to find the font data, it could be an external URL, or a local font. The font hint is optional though.

Descriptors for style, weight and stretch, are used to match styles to a particular typeface in later CSS declarations. If you're really bored at work one day, and you're as annoying a person as I am, you could swap some font descriptors around, maybe the italics and bolds. Your teammates will be left wondering why all their em elements turned bold. And they might not figure it out, because the change is sort of subtle.

I mean, if office pranks are your thing...I'm just saying. But if you do get in trouble, I had nothing to do with it. #dontgetfired

## On FireFox Font tools

At this point, I want to shout-out the Firefox Font Tools and the entire team who works on DevTools. Some time last year, Patrick Brosset, who did a lot of work on the Font Tools, pinged me on Twitter about a feature for detecting missing characters.

I'm sure he had been thinking about it for a bit, but it was still an amazing surprise to see that he already had a working prototype the following day. The Fonts panel had been around in Firefox for a long time, possibly since version 24, but over the past 2 years, Firefox has really up-ed their DevTools game.

They've got by far the best Grid inspector, a Flexbox inspector, Shapes editor, I could go on. But fonts, right? Version 63 shipped with a suite of font tools including the polished up version of the font highlighter demonstrated in the above tweets.

This is how it looks in action. Where you can see which fonts are loaded on the page, and which fonts are being loaded for which characters on your page. There's also information about all the fonts on the page in the bottom section there as well, so you can check on your `@font-face` rule as well.

This tool comes in very handy for me, especially when I have just a handful of words in a foreign language, and the typeface I'm using does not support that language.

For example, this round sans-serif is Raleway, designed by the League of Moveable Type. It's pretty nice, in my opinion, but unfortunately, does not support Cyrillic characters. Which is a bummer, if I wanted to use it for a talk I'm giving in Ukraine, for example.

So what we can do, is try to find a font that does contain those characters, and somewhat resembles the design of chosen font, then utilise the unicode-range descriptor to create a “composite font”. It's called a composite font because it mixes glyphs from different fonts for different scripts.

To deal with the fact that Raleway does not support Cyrillic letters, we can use the unicode-range descriptor to tell the browser to load Comfortaa, which is a font that does, when it encounters any Cyrillic characters.

Remember that for font-face rules, the font-family is simply a label, so what we've done is create a composite font that uses the name Raleway, but in actuality, loads 2 different font files depending on what characters need to be displayed.

And the font highlighter reveals what the browser does when it encounters such a scenario. Raleway is the font-family descriptor, but you can see that Firefox has loaded both Raleway and Comfortaa. The font tools also reveals which font format the browser is using as well.

## On typesetting with CSS

CSS for fonts and text are our typesetting tools for the web. When you use them in your CSS declarations, imagine that you're running your own printing workshop. And you're telling your apprentice, in this case, the browser, that you need a font which is a particular size, style, weight and so on.

Your apprentice then runs off to the back room, where all the fonts are kept, and tries to find the font that best matches your instructions from the descriptors you assigned in the @font-face rule. These font properties are pretty much your instruction set.

But just like how we give instructions to an apprentice, there may be instances where what they produce isn't really what we want.

For example, say we picked a typeface without realising it only had 1 regular style, but somewhere in our CSS, we've requested either a bold weight or an italic style. When the browser encounters such a situation, it will try to create the bolds or italics, based on the regular font. Try. The end result doesn't look that great.

Also, under normal circumstances, Chinese fonts do not have italic variants. There's a property called font-synthesis that we can set to a value of none, to instruct the browser to just leave the font alone.

## On variable fonts

There has been quite a bit of work going on with fonts lately, and variable fonts build on top of some of the original properties like weight, style and stretch to take in newer ranges of variation axis values. But there are plenty of additional variation axes for designers to play around with.

All of this is possible with only 1 single font file. If we had wanted to do this with regular fonts, can you imagine how many font files we'd have had to load? So one of the biggest upsides of variable fonts is on the performance front.

Such developments are extremely significant, especially for the CJK languages, CJK referring to Chinese, Korean and Japanese. Basically, these are languages which utilise Han characters, a writing system that contains upwards of tens of thousands of glyphs.

Currently, websites in those languages almost always use system fonts because a typical CJK font can go up to around 16mb. Font services like Monotype and Typekit offer the option of dynamic subsetting, where font files are served with only the glyphs needed on each page. However, these solutions have limitations, like losing OpenType features during subsetting, as well as caching issues, given you're requesting new font files for every page.

But we could potentially be seeing some breakthroughs in the near future. Currently, there is an industry wide collaboration between Adobe, Apple, Google, Monotype and Mozilla plus a number of type foundries and software vendors, to solve the issues I just described.

In order to tackle the limitations of current font subsetting strategies, this webfont performance super collab is working on a solution that allows the subsetting of a font request to only what's required on a page, but progressively add on to that original font request for subsequent pages.

We can see a prototype of this concept in action on the incremental transfer demo by the Google Fonts team. As I keep adding text from various different scripts, no less, you can see the vast difference between what we do today, and what could be possible in the future. The savings are quite significant, and much closer to the optimal subset than our current implementation which sends everything over the wire.

Jason Pamental, web typography expert and invited expert to the W3C Web Fonts working group, first wrote about this in his newsletter, Web Typography News, back in late April this year. And I highly recommend subscribing to it if this is something you're interested in.

Earlier, when I talked about all the different font formats, I mentioned that Apple and Microsoft worked to improve the original implementation of TrueType. OpenType and Apple Advanced Typography are what we term modern font technologies, and they can contain a lot more glyphs that previous font formats.

## On font feature settings

OpenType fonts can include an expanded character set and layout features, which gives us much broader linguistic support and more precise typographic control. They can also make multilingual typography easier by allowing multiple language character sets in a single font.

Font feature properties were introduced in Fonts Level 3. They give us access to a variety of typographic features like swashes, ligatures, old-style numerals and so on, if the font we're using contains these features. And if you're wondering, what's the point of having these typographic features anyway? Aren't letters just letters?

They are part and parcel of good typography, which is necessary to hold your reader's attention. The written word is a transference of speech, which is heard, into something visual, to be seen. Good speakers will vary their cadence, use gestures, emphasise certain words.

Typographic features like small caps, correct use of italics and punctuation do the same for text. Other features like old style numerals and ligatures help maintain typographic colour, to make reading more comfortable.

There's one particular font variant property for East Asian text, allowing us to control glyph substitution and positioning for Han characters. Depending on the language, the same character does not necessarily use the same glyph. This property allows us to toggle between variant glyphs of certain characters.

The user agent will refer to the lang attribute when rendering text but if the selected font lacks support for that language, we can ask the browser to use the typographic conventions of a related language present in the font instead.

Here's the markup for some Macedonian text. Imagine that the font being used does not support Macedonian but has characters for Serbian. By setting font-language-override to SRB, the Macedonian text will be rendered with Serbian typographic conventions instead. But still be recognised as Macedonian.

A friend of mine built a tool that can tell you what features a font has, and the appropriate CSS you can use to toggle them. It also has the best name of any app I've ever seen, so do check it out.

## On non-English web typography

If you're interested in web typography at all, I highly recommend getting a copy of Web Typography by Richard Rutter. It is the most comprehensive resource that I personally know of.

And also do watch this great talk by him at CSS Day last year, where he goes through these golden rules for web typography. These rules are universal regardless of language, but there are certain language specific behaviours that CSS can help us address as well.

Most of the time we use text-transform for case adjustments and capitalisation. But it actually does take into account numerous language-specific case mapping rules. For example, the German Eszett ß becomes SS in uppercase, or the Greek vowels lose their accent when the entire word is uppercase. Stuff like that. `full-size-kana` converts all small Kana characters to their equivalent full-size Kana, mostly used for ruby annotations.

Here we have 5 inline boxes. For now there is enough room so all 5 boxes fit into a single line box. But when there isn't enough room, inline boxes will be broken across line boxes. The break is known as a line break.

These particular lines were broken due to content wrapping, hence known as a soft wrap break. If wrapping is enabled, the user agent has to minimise the amount of content overflowing a line by wrapping the line at a soft wrap opportunity if one exists.

For most writing systems, soft wrap opportunities occur at word boundaries, where spaces or punctuation are used to explicitly separate words. If you're thinking, breaking lines, how hard can that be? Well, there is a lot of nuance word breaking works differently depending on the language we're typesetting for.

For example, English wraps at spaces. But for Japanese or Chinese characters, the break is per character, usually but not always. Becauese line breaks are prohibited before certain punctuation marks. A number of Southeast Asian scripts are written without spaces between words, then text is wrapped at syllable bounderies in addition to word boundaries. We could keep going here.

There is interplay between the 4 properties here to provide developers more precise control over line breaking, because some rules take precedence over others if both are present, or some only take affect if white-space allows wrapping, for example.

I highly recommend watching Florian Rivoal, co-editor of the CSS Text specification, explain all of this in his talk at DotCSS last year. And if you're not sure exactly what's going on, rather confused about all this, just setting the lang attribute takes care of some of this stuff for you. Some. Which is better than none.

Text justification is not a trivial computer science problem. I've seen programming assignments for Markov Chains asking for text justification algorithms. And whether we realise it or not, most of us would have encountered 2 major justification algorithms.

The Greedy algorithm, which analyses only a single line, and the much more advanced Knuth/Plass algorithm which analyses every line in a paragraph. Design software with advanced typesetting capabilities like InDesign use Knuth/Plass. But browsers, sadly, use the simple one. Probably for performance reasons, maybe? I'm not sure.

Although we don't have a robust justification algorithm, Text Level 3 does include the text-justify property to allow some further tweaking of justified text.

If I search for “text justify web” on Google, the top result is titled Don't use fully justified text alignment on your website, and the next one is Justify text with HTML/CSS? Don't do it!. It seems that justified text has a bad rap on the web.

This might be true for Latin-based scripts but not so for Chinese characters, which are also known as square characters. Each character is composed within a uniform square and Chinese texts can be typeset into neat rows and columns. In fact, it is ideal to do so.

But when there are both Latin-based alphabets and Chinese characters, it's impossible for everything to line up both vertically and horizontally. The next best thing is to ensure the start and end of every line is aligned well. And we can make adjustments between adjacent typography character units in Chinese texts with `inter-character`.

## On vertical writing

Finally, writing systems are also not limited a horizontal, top-to-bottom direction. Traditionally, East Asian languages were all written vertically. Arabic and Hebrew are written from right-to-left. The `writing-mode` property specifically caters for vertical writing on the web.

The default is horizontal, top-to-bottom. To change the direction to vertical, we use `vertical-rl` or `vertical-lr`. There's a `sideways` option that's formally been moved to Level 4 but Firefox has it implemented.

Rotating lines of texts also affects the individual characters within the line. Browsers are smart enough to tell that Chinese characters, which are dual-direction, will always be displayed upright. While horizontal-only languages, will have their characters rotated when vertical. The `text-orientation` property can be used to make all the characters upright or sideways, depending on what you want.

The last property in this set is the text-combine-upright property, which address the issue of numerals and abbreviations in vertical text. For example, if your text contains dates. This property lets us fit all the digits into the width of one character and display them upright.

The last value there, called `digits`, has yet to be implemented in any browser, but it really makes sense to have some sort of a limit on this. I mean, 4 digits is probably the maximum you can push such a tiny space. 9 looks very uncomfortable. 13 is just ridiculous.

Vertical text may be better suited for East Asian languages when it comes to full length body copy, but that doesn't mean other languages can't get in on the fun. We see vertically set text in print all the time.

Headers or short runs of text are relatively safe to typeset vertically, and can add some typographic variety to your web layouts. We can also combine writing-mode with transforms or other CSS properties. Lots of possibilities with modern CSS these days.

## Wrapping up

I spoke a bit more about East Asian typography because Chinese is my mother tongue and I am involved with the Chinese Layout Task Force. If you notice, there are also Layout Task Forces for numerous other scripts and this is definitely a step in the right direction when it comes to preserving language diversity on the web.

An ideographic language like Chinese was not a good candidate for moveable type printing. The calligraphic style of Arabic writing also resulted in efforts to reduce the number of variations of letters and diacritical marks. Such typographical compromises are akin to having the finest sculptures in the world caked in dirt and mud.

I think the digital age presents an opportunity clean off the dirt and mud off scripts that have long had to compromise to “get with the times”. Our digital age is the age of light and electronic signals. There are far fewer limitations as compared to a physical medium like moveable type.

If the virtual world is being touted as a realm with limitless possibilities, then it should be reasonable to expect that all our scripts can be restored to their full artistic glory on the world wide web.
