# CSS for internationalisation

*For ConFoo Online 2021. This is a sort-of transcript plus my notes for the talk.*

Hello everyone! This is the first time I'm participating in ConFoo and I hope you've all had a great time so far. I know CSS isn't everyone's cup of tea, but it is my favourite topic, so thank you all for being here.

A quick introduction. My name is Hui Jing, and I'm simple enough that these emojis paint a fairly comprehensive picture of who I am as a person. I happen to be Chinese, and if you're unfamiliar with Chinese names, our family names come first, followed by our first names. I'm currently a front end developer at Shopify.

CSS is a really big topic, so today I'm specifically going to talk about CSS that is relevant for internationalisation. But before we get into it, let's discuss Numeronyms. Numeronyms are number-based words, where a number is used to form an abbreviation.

i18n stands for internationalisation because there are 18 letters between I and N. Some of you may have also seen l10n, which is the abbreviation for localisation. But what's the difference, you may be wondering?

There is no canonical set-in-stone definition of internationalisation, but the W3C does offer this guidance. It is designing and developing in a way that enables easy localisation for specific audiences. Localisation covers a broad range of customisations including but not limited to: numeric, time and date formats, currencies, symbols, icons and colours, even textual and graphical references.

This implies that internationalisation is a lot more than simply translating the content on a site to different languages. There are nuances to the presentation of that content which will affect the experience of a native speaker using your site. This is where CSS comes in.

To be honest, this talk originated from an article I wrote earlier, and the main reason I wrote that article was because someone said to me that CSS has nothing to do with internationalisation. It was my passive-aggressive two thousand plus word response.

CSS stands for Cascading Stylesheets. To me it is a vocabulary for us to communicate with the browser. The first standard for CSS was published on December 17, 1996, which makes CSS around 23 and a half years old. When CSS first came out, it wasn't even meant for doing layout, think about that for a bit.

Two decades later, we went from what seemed like trying to communicate with a toddler to having a pretty wide vocabulary for telling the browser how we want stuff to on our web pages to look like. Lara Schenck wrote a great piece about the nature of CSS, concluding that it is a domain-specific, declarative programming language. I really like that.

Have you ever browsed a website using Chrome which was in a different language from your default and Chrome asked you if you wanted the page translated? How does Chrome know to ask you this? Or let me ask it another way, how come sometimes Chrome doesn't ask you?

The `lang` attribute plays a very important role because it specifies the natural language of the content of a web page and this information is used for lots of things.

Browsers are pretty smart and they come with a lot of sensible defaults. I'm not going to go into the parts about accessibility and using semantic HTML, those are amazing in their own right. But if the browser knows what language your content is in, it gives you lots more useful stuff out the box.

We'll cover some of the browser's language-specific behaviours. I'll show what I mean by default font selection and generally talk about CSS. But seriously, look at all this good stuff.

Always set the overall default language on the HTML element, because if you simply set it on the body element, the stuff in the head doesn't get it. Language code information is inherited according to the following order of precedence: a `lang` attribute on the element itself, if not, then the closest parent with a `lang` attribute set, if not, then the HTTP "Content-Language" header, if not, then user agent default values and user preferences. Once we've got that settled, let's look at how to make use of this attribute.

I'm not sure how many people are familiar with the `:lang()` pseudo-class, but this is a pretty cool selector. So we've got this mixed language sentence here marked up like so. The bit in Chinese is marked up as a `span` tag with `lang` set to `zh`.

Chinese writing does not have italic styles. To emphasise words, we use a type of punctuation called 着重号. And we can use CSS for this with the `text-emphasis` property and set a value of dot. There are more values available, like double circle, or triangle. You could put a string in there as well.

`:lang` will recognise the language of the content of an element even if the language is declared outside the element in question. In this case, the attribute in on the `span` not the `em`, but it still picks up.

`lang` is like any other HTML attribute. Hence, attribute selectors can also be used to identify content with a particular lang value set, but it has to be on the element you want to target. So that's a key difference from the :lang() pseudo-class.

Attribute selectors are pretty versatile because of the number of options it offers for matching. You can match the attribute value exactly, or you can match just the front part of the selector, or you can match anything before a dash.

There are more than I listed here but these are most relevant to language tags, in my opinion.

A couple of things to note here is that if you choose to use the `:lang()` pseudo-class, partial tag matching is already taken care of. So if you wanted to match `zh` in a document with different extended Chinese language tags, that just works.

As for the mechanics of matching, the attribute selector operates based on the attribute on the element, while the pseudo-class makes use of the document's semantics. Of course, you are free to use normal classes or ids, then you would have to give those elements language-specific CSS classes or ids. I mean, it is up to you, but I'd go the pseudo-class route.

There are numerous CSS properties now available to us which let us fine-tune the presentation of our content, from the font level all the way to the layout level. So there's going to be quite a bit of CSS for typography coming up. An example for a font-level CSS would be the property that deals with faux fonts.

When you use a typeface that does not include styles for bold or italics, the browser will try to artificially recreate these typefaces by modifying the glyphs from the available typeface and the end results are not very aesthetically pleasing.

Or in the case of Chinese, not even necessary. We can use the font-synthesis property to fix this, and make use of the `:lang()` pseudo-class to target just Chinese, like we did in the example before.

The `lang` attribute also impacts default font selection. Chinese fonts are so huge that most of us don't use them as web fonts for body text. We usually fallback to system fonts. For this presentation, I did not explicitly specify any Chinese fonts, and instead, let the browser pick the appropriate font.

I'm guessing most of the audience may not read Chinese, but there are two variants of the Chinese script, simplified and traditional. There are glyphs that look exactly the same for both, there are glyphs that are completely different and there are glyphs that are essentially the same but with stylistic differences.

Like this particular glyph here, I've made it large so hopefully you can spot the differences in the styles. When I set the language to traditional Chinese, the browser knows to pick the traditional Chinese typeface instead of the simplified typeface.

There's one particular font variant property for East Asian text, allowing us to control glyph substitution and positioning for Han characters. Han characters are not only used in Chinese, but Japanese and Korean as well.

Depending on the language or writing script, the same character does not necessarily use the same glyph, and this property allows us to toggle between variant glyphs of certain characters.

The user agent will refer to the `lang` attribute when rendering text but if the selected font lacks support for that language, we can ask the browser to use the typographic conventions of a related language present in the font instead.

Here's the markup for some Macedonian text. Imagine that the font being used does not support Macedonian but has characters for Serbian.

By setting `font-language-override` to `SRB`, the Macedonian text will be rendered with Serbian typographic conventions instead. But the content language will still be recognised as Macedonian.

Even some of the general properties like `text-transform` has some semblance of “language-awareness”. For example, the German Eszett ß becomes SS in uppercase, or the Greek vowels lose their accent when the entire word is uppercase. Stuff like that.

`full-size-kana` converts all small Kana characters to their equivalent full-size Kana, mostly used for ruby annotations.

Okay, this example is to lay the ground work for something else I want to cover, so please bear with me. Everything on the web is boxes, right? Here we have 5 inline boxes.

For now there is enough room so all 5 boxes fit into a single line box. But when there isn't enough room, inline boxes will be broken across line boxes. The break is known as a line break.

If content wrapping is enabled, the user agent has to minimise the amount of content overflowing a line by wrapping the line at a soft wrap opportunity if one exists. For most writing systems, soft wrap opportunities occur at word boundaries, where spaces or punctuation are used to explicitly separate words.

But there is a lot of nuance involved because word breaking works differently depending on the language we're typesetting for.

For example, English wraps at spaces. But for Japanese or Chinese characters, the break is per character, but on occasion it's not, because line breaks are prohibited before certain punctuation marks.

A number of Southeast Asian scripts are written without spaces between words, then text is wrapped at syllable boundaries in addition to word boundaries. We could keep going here.

There is interplay between the 4 properties here to provide developers more precise control over line breaking, because some rules take precedence over others if both are present, or some only take affect if `white-space` allows wrapping, for example.

This ties back to my earlier point. If you don't use `lang` properly, you don't get out-of-the-box features like automatic hyphenation, for example.

Okay, let's move a level up to layout. The default value for `writing-mode` is `horizontal-tb`. Perfectly logical because the web was born at CERN, where the official languages are English and French. Moreover, most of web technologies were pioneered in English-speaking countries anyway (I think).

The traditional Mongolian script runs vertically from left-to-right, while East Asian languages like Japanese, Chinese and Korean, when written vertically, runs from right-to-left. The writing mode properties that let you do that are `vertical-lr` and `vertical-rl` respectively.

There are also the values of `sideways-lr` and `sideways-rl`, which rotate the glyphs sideways. Every Unicode character has a vertical orientation property that informs rendering engines how the glyph should be oriented by default.

We can change the character’s orientation with the `text-orientation` property. This usually comes into play when you have vertically typeset East Asian text interspersed with Latin-based words or characters. For abbreviations, you have the option of using `text-combine-upright` to squeeze the letters into one character space.

So what about languages like Hebrew or Arabic, which are right-to-left? Does `writing-mode` cover those? The answer is no. In fact, CSS should not be used for bi-directional styling. The Unicode Bidirectional Algorithm handles the display ordering of bidirectional text and for those of you who are interested, the Unicode Standard Annex #9 is a pretty fascinating read.

Styling applied via CSS has the possibility of being turned off, being overridden, going unrecognised, or being changed/replaced in different contexts. Hence the recommended approach is to use the `dir` attribute to set the base direction of text for display.

In spite of the fact that vertical writing is only relevant to East Asian text, that doesn't mean vertical text only involves content in those languages. Vertical text has been used in graphic design for a long time across many different cultures and the fact that we can do this on the web without too much trouble is big plus.

This is a recreation of what I think is a poster published by Gosizdat back in 1927 that I did with HTML and CSS. It's not great, I know, but I think it's not too bad.

The thing is, those bits with vertical text got confusing when I had to adjust the padding and margins on them. Because for the most part, we always refer to the physical directions of top, bottom, left and right. This mental model is hard for me to maintain when the text is in another writing direction.

I can't be the only person with this issue because there is a CSS specification for logical properties which map to the flow of text instead of the physical directions of the viewport. The terminology references `block` and `inline`, where block flow is the direction boxes stack and inline is the direction of lines of text. This table shows the mapping for positioning.

There are also corresponding mappings for margins, paddings and borders. Here I'm trying to illustrate the point where logical properties allow you to use the same set of code regardless of what your writing direction is. Moving forward, there will also be mappings for sizing, i.e. `width` and `height`.

Another thing that CSS can do on the internationalisation front has to do with lists and counters. Numeral systems are writing systems for expressing numbers, and even though the most commonly used system of numerals is the Hindu-Arabic numeral system (0, 1, 2, 3 and so on), CSS allows us to display ordered lists with other numeral systems as well.

Predefined counter styles can be used with the `list-style-type` property, which covers 174 numeral systems from `afar` to `urdu`. You can check out the full list at MDN.

CSS counters are pretty fascinating in my opinion. There is a surprising amount of logic you can inject into them. For example, you can do Fizzbuzz with CSS counters. This doesn't really have anything to do with internationalisation per se, but I just wanted to mention it because I thought it was cool.

I'm still trying to learn more about internationalisation best practices and how CSS, especially the newer techniques, can help us build better experiences for users all around the world. These are some resources for those of you who want to learn more. Also feel free to reach out because I'd love to chat more about this topic, CSS and web development in general.

Thank you!
