# Working with CSS doesn’t have to make you cry

_For Letterform Lectures. This is a sort-of transcript plus my notes for the talk._

Hello everyone! Thank you all for being here today. I've been a member of the Letterform Archive since 2018 and I think I managed to visit once back then. So having this opportunity to present a Letterform Lecture is pretty mind-blowing to me.

As you can see from the title, this talk is probably slightly different from the other Letterform Lectures in that it leans a little more toward technology than design. More similar to the excellent "A Byte Sized History of Computer Typography" with Ben Zotto back in February, do watch it if you haven't.

My name is Hui Jing. It's a Chinese name, so our family name comes first. And these are my representative emojis, if you will. I've been gainfully employed as a web developer for more than a decade. Also managed to work with a lot of different designers, and I wanted to share some knowledge that might help improve communication between us. So I want to start off with a little bit of history, just to build up more context on how we got to where we are now.

I don't want to assume everybody knows what CSS stands for. It's short for cascading style sheets, and is a mechanism for adding styles to web documents. There's a defined syntax for it such that all the different browsers can understand and parse our instructions correctly.

When a designer asks us to make that logo larger, or move this banner to another position, CSS is what we use to make those changes to a web page. We will go into typography specific CSS later on in the talk. But back to context portion of this talk.

## On font history

Fonts on the web are essentially digital fonts, which is a significant change from what was being used for the physical process of printing. Instead of metal alloys, or stone or wood, which are things we can touch and feel, digital fonts exist as light.

One thing that came up during my research and is important for me to mention is that the first Japanese patent for phototypesetting was filed by Nobuo Morisawa and Ishii Mokichi in 1924. That was the same Morisawa who founded Morisawa Inc., currently still one of Japan's leading font foundries. They did hardware back then. It's just that this isn't always mentioned when phototypesetting history is talked about, but in my opinion it should.

A change in medium brought about new design constraints. Projected light is less sharp and crisp when compared with solid metal types, so type designers had to modify their characters to suit the technology that was manifesting their designs in real life. Adrian Frutiger, when talking about redrawing his fonts for the Lumitype, called them aberrations.

The first instance of digital typesetting, where no physical material was involved in the creation of the characters was the Digiset 50 T 1, a 3rd-generation CRT typesetter. It was developed by Dr. Rudolf Hell in 1964, and made commercially available in 1965. The Digiset used cathode-ray tubes which swept electron beams across the screen one row at a time from top to bottom. Each illuminated screen point is a single pixel.

The introduction of CRT screens for typesetting was significant for type design itself because of how the technology worked. Characters had to be converted into a bitmap form, which was terribly low-resolution. Adobe then released PostScript in 1984, the first ever vector font format, which was yet again a significant development in type history.

Back in 1987 when Adobe only had around 70 employees worldwide, current CEO of Morisawa, Akihiko Morisawa went to the USA to take a training course at Adobe and was mentored by Adobe founders John Warnock and Charles Geschke. Morisawa and Adobe worked together to further develop the PostScript format.

## On font formats

Which is now a great segue to start going into font formats. Different font formats store information about the font, like their glyphs, encodings, metadata about the font etc., differently based on how their specifications were written.

Given how successful PostScript was, TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Microsoft came up with TrueType Open in 1994 and eventually Adobe joined in and together they developed OpenType.

Microsoft also came up with EOT or embedded OpenType, a proprietary format for use on web pages. Although they tried to submit this as a W3C recommendation, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF2 is an improvement over WOFF with significantly better compression rates.

## On font delivery and performance

Compression rates are significant when it comes to web pages because of how fonts get delivered to our end users. Most people probably don't give a second thought to how content appears on their screen when they click on a link, but most do notice when the page takes forever to load. It's not a great experience.

Whether you enter a URL into the address bar or click a link, they all have this format of a protocol, a server and a file path. People love to talk about the cloud like it's some invisible sea of data floating above our heads, but it's all physical servers housed across the world, most likely in lower temperature countries, all connected via reams and reams of fibreglass or copper cables.

Anyway, the .com portion is the human-readable address for the server on which the content lives in. Once you click the link or press enter on your address bar, your browser sends a request to the server, which will then handle the request and returns the correct content that you asked for.

The first request returns you the base HTML file, which the browser on your device will start to read from top to bottom, and if it encounters any additional required resources like CSS, Javascript, images etc., it will make additional requests to the server to get them. The imagined conversation would go something like this.

A major reason why web pages take so long to load these days is because of all these additional required resources being requested from the server, and sometimes, you're requesting from multiple different servers if those resources need more resources. Think ad banners and all kinds of 3rd party extensions. Every resource takes up bandwidth, so it's important that we only send what is necessary and ensure we have optimised them beforehand.

I found this website on a forum thread where people were asked what's the most bloated website they've encountered and this was just one of them. I'm sure it's not the most bloated website on the internet but, it's sort of a news site, right? Showing us a list of articles. It can definitely afford to be lighter in page weight, is all I'm saying.

When it comes to page weight, images are the lowest hanging fruit, but there are savings to be had for font files as well. There is a concept known as font subsetting, where you can choose to only provide a limited range of characters to your users. And there are numerous applications both online and offline that allow you to do this, like the ones shown here.

## On font loading

But back to font files. Even if you're designing something, when you get a hold of some new fonts, you have to install them before you can use them, right? Back in the earliest days of the web, there was no way for you to use fonts that had not already been pre-installed with the system. But eventually, browsers evolved to being able to download additional font files from a specified location just so they could be used on a web page.

You can tell the browser where to get these font files using CSS, and this is how it looks. Now the point of this lecture is not to make all you start writing CSS, although I would be very happy if you found it interesting enough to decide to learn. I just wanted to give you an idea of how the developers you work with go through their day.

This is called a font-face rule, and it tells the browser the name of the font and where to find it. Once we have this rule declared, we can then tell the browser which elements on which this font should be used. Like so. As you can see, I have provided a list of different fonts for the font-family property, also known as a font stack. This is because browsers use a font-matching algorithm to determine which font to use every single character on the screen.

The browser will take the first name on the list, and if it is **not** a generic family keyword, it will try to find the font by checking if it had been declared as a font-face rule or not. Once the family has been found, the browser then has to assemble the set of different variations, like weight, style etc. then determine if a specific character exists in that set of fonts.

If not, the browser will move on to the next font on the list, and run through that entire process again until all the fonts on the list have been exhausted. With the widespread adoption of Unicode these days, odds that the browser encounters a character is just cannot render even with system fonts is rather low.

But in the event the browser runs into a character that it cannot find a font for, you will see a blank rectangle. Sometimes that blank rectangle might have a hexadecimal Unicode codepoint value in there. It's the browser's way of telling you, sorry, I don't know how to deal with this character.

The more common issue we see today is fallback font choice not matching the main font well enough, hence making it painfully obvious the font is missing specific glyphs. Ideally, your font stack should be made up of fonts that share similar characteristics, so it is not that obvious a fallback has been invoked for a particular missing glyph. Go for similar visual style, x-heights and stroke weights.

## On browser tooling for fonts

In terms of browser tools, the Firefox Font Tools is the most full-featured tool available right now. Right-click on some text on a webpage and select "Inspect" to bring up the Devtools. From there, navigate to the Fonts panel, and it will show you which fonts are loaded on the page, and which fonts are being loaded for which characters on your page. There's also information about all the fonts on the page in the bottom section there as well.

This tool comes in very handy especially for those of you who build multilingual websites or even sites with a handful of foreign words, and you are using a typeface that may not support all the required characters.

For example, this round sans-serif is Raleway, designed by the League of Moveable Type. It's pretty nice, in my opinion, but unfortunately, does not support Cyrillic characters. Which is a bummer, if I wanted to use it for a talk I'm giving in Ukraine, for example.

So what we can do, is try to find a font that does contain those characters, and somewhat resembles the design of chosen font, then utilise the unicode-range descriptor to create a “composite font”.

It's called a composite font because it mixes glyphs from different fonts for different scripts. To deal with the fact that Raleway does not support Cyrillic letters, we can use the unicode-range descriptor to tell the browser to load Comfortaa, which is a font that does, when it encounters any Cyrillic characters.

Remember that for font-face rules, the font-family is simply a label, so what we've done is create a composite font that uses the name Raleway, but in actuality, loads 2 different font files depending on what characters need to be displayed.

And the font highlighter reveals what the browser does when it encounters such a scenario. Raleway is the font-family descriptor, but you can see that Firefox has loaded both Raleway and Comfortaa. The font tools can also tell you which font format the browser loaded for a particular run of text.

## On typesetting with CSS

Browsers do have a number of sensible typographic defaults out-of-the-box and it hinges on us telling the browser what language our content is written in. This is important because language and writing system conventions affect lots of typographic effects like line breaking, hyphenation, justification, glyph selection and more.

For CSS, language-specific typographic tailorings are only applied when the content language is explicitly declared. So it is in our best interest to tell the browser exactly what language our content is in to ensure a higher quality typographic experience for our users.

Usually, you would set the language of your content on the HTML element itself, but if there are phrases or sentences in other languages, those should be appropriately tagged as well.

Since CSS is our one and only typesetting tool for web pages, let's better understand what we can do with it. CSS today provides developers a lot more granular typographic control as compared to the early days. There are CSS properties for adjustments at the character level, at the line level and at the layout level.

This list here consists of the most commonly seen basic font properties. Mostly self-explanatory but let's go through the last 2, since they are fairly web-specific.

`font-size-adjust` is meant to address legibility issues. Faces with low x-heights may sometimes be less legible, especially when they are triggered as fallback fonts. We can set the value of this property to the aspect ratio of the first choice font. Any fallback fonts triggered will have their font-size adjusted to match this ratio.

`font-synthesis` is meant to address the issue of faux bolds and faux italics. Sometimes the true italic or heavier version of a font does not exist so the browser will try to compensate. Unfortunately, many designers have informed me that the end result isn't pretty. With this property, you can set a value of none, to tell the browser, it's fine, appreciate the effort, but no thanks.

In the case of Chinese, synthesizing italics is not even necessary. Making this situation a good use-case for font-synthesis. Here I'm telling the browser leave the Chinese text alone even if the font style is being set to italic.

The OpenType font format has provide a big boost to web fonts, as OTF fonts can include an expanded character set and layout features, which gives us much broader linguistic support and more precise typographic control. And this typographic control is exposed to developers via CSS.

These font feature properties are what gives developers access things like swashes, ligatures, old-style numerals, as well as language-specific ones. However, there is a caveat. We can toggle them with CSS as long as the font supports them. So if the font does not have alternative ligatures, naturally, we cannot use them.

Prefined font variation properties like these cover more generic use-cases where you want to adjust kerning or ligatures and the like. But there are also more quirky possibilities that font designers can come up with specifically for a dynamic medium like the web.

With font-variation-settings, font designers expose low-level control over specific characteristics of their variable fonts to developers like me, who can then manipulate the font via CSS. We can hook onto these 4-letter axes names and modify their values based on specific user actions, for example.

We've talked quite a bit about the character-level CSS, and that's not all of it. But let's move on to CSS for typography at the line-level. Remember earlier when I talked extensively about the importance of telling the browser what language your content is in? This is because the browser depends on that to know when and how to break lines.

There is a lot of nuance because word breaking works differently depending on the language we're typesetting for.

For example, English wraps at spaces. But for Japanese or Chinese characters, the break is per character, usually but not always. Because line breaks are prohibited before certain punctuation marks.

A number of Southeast Asian scripts are written without spaces between words, then text is wrapped at syllable boundaries in addition to word boundaries. We could keep going here.

There is a lot of logic going on behind the scenes to determine exactly where a break should occur because some of these rules take precedence over others, then there's this other property called white-space that might also affect things. The point I'm trying to make is that, it's complicated.

But just to have an idea of these work. word-break specifies soft wrap opportunities between characters. Setting break-all means that you can drop to the next line at any point just to fit the space. While keep-all prevents any breakage between adjacent characters at all.

hyphens are more applicable to the Latin-based scripts where we commonly see words broken up between lines at syllable boundaries. For this to work correctly, you must have the lang attribute set, because the browser relies on dictionaries to determine where the syllable boundary is.

overflow-wrap is more relevant for really long words, or even URLs, so let's resize this more extremely. Setting this to anywhere will break a really long word when there is no space left. Whereas word-break: break-all will break the word regardless of space.

Another value for overflow-wrap is break-word, and is of consequence when you set the width of your content to a value called min-width.

This particular CSS is new. It's only available in Chrome right now, so I'm going to switch browsers real quick. But I really really want it widely available as soon as possible because it's so very useful to me as a developer.

This property totally resolves the orphan character/word problem that has caused all of us so much distress. From the developers who have to write extra code to make sure the text never has orphans, to the content writers who try to impose character limits on their headlines.

Now with 1 single line of CSS, I can tell the browser to go figure it out on its own.

Which brings me to an important point about CSS that I would like everyone to internalise. CSS are browser features. You know how when you update apps on your phone, you get something new? Same goes when you update your browser. Sometimes you get new CSS.

The sort of downside is that, browsers don't all support the newest features at the same time in the beginning, so you'd have a bit of a mixed bag when something is released for the first time. But that's fine, it's just the nature of the medium.

If you're a designer, my personal opinion is that, you can help your developers out by viewing the page on as many different devices or browsers as possible and letting them know if something looks broken. Now broken and “looks different” are completely separate issues.

It does not matter if the design looks different on different devices and browsers as long as it doesn't look broken.

CSS allocates leading based on the line-height by subtracting the ascent and descent from the specified line-height, then splitting the remainder in half, giving each half to the top and bottom.

Doing so allows us to get decently even line-spacing, but mostly if the paragraph of text is of the same font. When we have different font families on the same line, things don't line up as well because different fonts have different ideas of what 1em should be.

What CSS does now is guaranteeing content never overlaps at the expense of aesthetics. But the CSSWG is trying to come up with a new algorithm to calculate the optimal line size.

This particular CSS is even newer and is still subject to changes. It's only available in Safari Technology Preview right now, so I'm going to switch browsers again.

This property allows you to remove the leading whitespace from a block of text and give you a clean text box which hugs your text. Its different values allows us more fine-grained control over the spacing between lines.

Practically speaking, the most common complain I get from designers is that the text of a button isn't exactly at the centre of the button. This is a feature that could potentially resolve this issue.

For example, you could set the text-box-edge to cap, and text-box-trim to both to make it obvious, and you can see that the spaces are now completely cut off, and the border is hugging your text tightly.

For scripts that do not have cap-heights or ex-heights, different values are required. Like `ideographic` but it doesn't seem to be fully implemented yet.

Another thing that designers are irked about is that strict vertical rhythm tends to go out the window when we're trying to layout many different types of content. However, it is important when it comes to things like multi-column layouts with content side-by-side.

One of the proposed new properties is called block-step-size, which sets the height of the line to be a multiple of the value you define. But again, where should any extra space go?

The CSS rhythmic sizing specification is currently sourcing for feedback. Because all CSS specification development is done in the open on a platform called Github.

You don't have to be an engineer to be involved in these specifications. In fact, it'd be great to have folks from varying backgrounds who all need to use the web for different reasons to chime in on what they'd like to see on the web.

Especially in this area of typography, greater collaboration between type designers and the folks who create and implement CSS will result in a better typographic experience for everyone.

Anyway, I think we're at time, so this is a list of relevant links to what I've talked about today.

Thank you all for coming.
