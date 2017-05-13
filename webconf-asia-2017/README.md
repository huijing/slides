# Web Typography: where East meets West

*For Webconf.Asia 2017. This is sort of a transcript of the talk.*

大家好！The last time I was in Hong Kong was 1998, so it's been a while. I'm really excited to be here to talk to all of you about two of my favourite things, both of which are in my talk title. But before we get to that, let me introduce myself...with emojis.

My name is Hui Jing, and I'm Malaysian. I played basketball for more than half my life, and it was actually what got me into web development in the first place. I'm a front-end engineer based in Singapore now, and I love CSS so much that I will write blog posts about it. I also run Talk.CSS, which is Singapore's only CSS-centric meetup at the moment.

So in case I wasn't clear earlier, the two favourite things I was talking about were the web and typography. Let's first talk a bit about the Web. The web and the internet are actually not the same thing. The internet is the entire network of networks that connect all the world's devices to each other. And it was conceived of by a group of very smart, talented individuals working out of the Advanced Research Projects Agency (ARPA) in 1958. These internet pioneers were the ones who came up with the concepts and protocols that form the backbone of this indispensable communication tool that literally changed the world.

Now, the web is much more recent, formally invented by Sir Tim Berners-Lee on March 12, 1989 as a means for researchers to share information. And this is what he wrote in an open letter during the web's 28th birthday back in March.

> “I imagined the web as an open platform that would allow everyone everywhere to share information, access opportunities and collaborate across geographic and cultural boundaries.”

The purpose of the web is to connect the world's population, to allow people who live half a planet away to become friends. To share your experiences with friends 20km or 20,000km away from you. Both the internet and the web were built to be open. No centralised control, you didn't have to ask anyone's permission to publish a website. You could just go ahead and do it. If your friend from Argentina has a website, you can just type in that URL to see it. You don't need a visa or a passport. There are no national boundaries online. To me, that is amazing.

Bruce Lawson is here today. And I'm very thankful for the chance to meet him. I want to highlight a point he made in his article earlier this year, that according to the GSMA Intelligence report on consumer barriers to mobile internet adoption in Asia:

> A lack of awareness and locally relevant content was the most commonly cited barrier to internet adoption: 72% of non-internet users across the six survey markets felt this was a barrier.

The report also goes on to say that:

> At present, the world’s linguistic and cultural diversity is not reflected in the content and services available online. A great deal of the content available to Asian users is simply translated into local languages and does not reflect the significant cultural diversity found across the region.

I'm quite sure Bruce will cover this in a lot more detail in his talk later. But a point I would like to emphasise is, roughly 17% of the world's population are native Chinese speakers, and yet only 2% of websites are in Chinese. In contrast, an estimated 51% of the world's websites are in English, when native English speakers make up only around 5% of the world's population. The fact that digital computing originated from places that were predominantly English-speaking plays a big role in this.

I do think that internationalisation efforts have been substantial over the years, and will continue to be for years to come. All the work coming out of the Unicode Consortium has been significant in this regard, with the goal to be able to represent every character in any system, regardless of platform, program or language. And that's the reason why it is recommended by the W3C that you always choose the UTF-8 character encoding for your content or data.
--> 4min
But before we dive into the digital, let's go analogue with typography and a little bit of history. I've come across numerous definitions of typography over the years, and have personally settled on this one by Gerrit Noordzij, that “Typography is writing with prefabricated letters”. Letters are the building blocks of a writing system, regardless of language. And if you think about it, almost every writing system in the world today seems to be alphabetic.

But Chinese is different. Chinese is currently the only logographic writing system left that is widely used by millions of people. Each Chinese character is composed within a uniform square, allowing Chinese to be read efficiently, regardless of whether it is set horizontally or vertically. And until proven otherwise, it seems that the Chinese language was an indigenous invention, developed separately from the Proto-Sinaitic scripts which were the origins of alphabetic languages.

Let's broadly look at how the nature of Western languages in Europe differ from the Eastern languages in Asia. The Phoenician alphabet is considered the origin of many alphabetic writing systems on which the Greek, Latin and Roman alphabets were based on. In such languages, letters represent sounds of the spoken language, and are combined to form words that convey meaning. In contrast, a logograph is a written character that itself represents a word.

With alphabets, you have a small set of letters used in a myriad of combinations to form all the words you would use to communicate with another person. With Chinese characters, we have thousands upon thousands of unique glyphs that can express meaning on their own or be used in combination with other glyphs. This has a direct consequence on the structure of the language itself. For example:
- Hippopotamus, English word of 12 characters. 我哋叫河马.
- Lebensgefährte (Lee-bin-skir-fear-te), German word of 14 characters. 我哋叫伴侣.
- Grianghrafadóireachta (Green-hra-fer-doi-rek-te), Irish word of 21 characters. 我哋叫摄影.

Of course, this also had an impact on the methods of duplication for text. The most basic copying technology is simply transcription, which was the de facto method of duplication in Europe before printing. Medieval transcription culture blossomed during the Middle Ages as demand for texts increased. This is evidenced by the large collection of medieval manuscripts that are still preserved in various national museums, libraries and universities all across Europe.

Transcription was also popular in the East, but as demand for books grew, the invention of printing technology was inevitable. The earliest mechanical printing method for duplication of texts was woodblock printing, invented in China during the Tang dynasty, one of the most prosperous eras in Chinese history between 618-907AD. Xuanzhang, who went to India on a pilgrimage to retrieve the Buddhist sutras, returned to China in 645AD, and proceeded to translate them, as well as print and distribute images of Samantabhadra（普贤菩萨）on huifeng paper（回锋纸）.

The first complete printed book is probably the Diamond Sutra, dated 868AD. From the level of detail of those facial expressions and robes, we can see how advanced woodblock printing techniques had developed in China by that time. The method of woodblock printing persisted all the way till the Qing dynasty and beyond. Woodblock printing was an integral part of Eastern printing culture, coexisting with and complementing moveable-type printing during the later years.

Woodblock printing was introduced to Europe through Russia, likely by the Mongols, who crusaded along the Silk Road to the West. Evidence of woodblock printing could be found in Europe by 1400, but at the time they were mostly crude cuts, serving as illustrations for new printed books. Although block-printed books were produced in Europe, for example, the Speculum Humanae Salvationis and the Ars moriendi. They were largely used for thin volumes, and mostly religious texts like the Biblia pauperum. Woodblock printing was never a major method for text duplication in Europe. By the time woodblock printing reached Europe, transcription infrastructure was very strongly established, and woodblock printing could not replace it.

Moveable type was too pioneered in China. Invented by an ordinary citizen, 毕昇, during the 庆历 reign from 1041-1048. 毕昇's invention was recorded in 梦溪笔谈 by 沈括, using ceramics to manufacture his types. The Chinese used a variety of other materials for making types, like clay, wood, bronze, tin and even lead. Moveable-type printing had a number of advantages, mainly its speed and flexibility in typesetting, making it possible to print all types of books. Moveable types could also be shared between printers. Travelling craftsmen could just carry a load of wood types and set up wherever they could.

Korea adopted 毕昇's idea of moveable-type printing during the Kingdom of Goryeo (koh-ryah) and brought it to new heights during the Kingdom of Joseon (cho-san). The government set up Chuja-so or the Bureau of Type Casting, which casted hundreds and thousands of metal types, as well as official printing offices in every province. The hallmark of Korean printing was the mass production of metal types, mostly bronze, by casting. This technique of casting was pioneered by the Koreans, with cast metal types being in use before 1239. And with the volume of types cast, they'd honed their techniques to levels far beyond that of other countries. Records have shown that Choe Yun-ui (chue-yon-ne), a Korean civil minister, printed Sangjeong Gogeum Yemun in 1234. And the earliest moveable-type printed book still in existence today, is Jikji, a Korean Buddhist text, dated 1377, three-quarters of a century before Gutenberg.

However, moveable-type printing never really took off in China, and there are various reasons for this. 
1. Moveable type was widely used across Korea, but barely used at all in China. 
2. The Chinese printers also used a different method from the Koreans to manufacture types, choosing to engrave the types as opposed to casting them. Typesetting was challenging, and there were inking problems with these types. 
3. The choice to engrave types as opposed to casting them pushed up the manufacturing cost of types immensely as well. 
4. Furthermore, economies of scale only kicked in for large production runs, but printers were often wary of overstocking and often only printed a hundred copies per run. The resetting of type was troublesome and uneconomical when compared to woodblocks for such quantities. 
5. Given the lack of emphasis and development of moveable-type printing, the quality of prints left much to be desired as texts were littered with mistakes. 
6. Besides, with the long tradition of woodblock printing, the Chinese were exceptional at it. If any technical improvements were necessary for mass produced prints, they would probably have chosen to refine woodblock printing rather than replace it.

Over in Europe, by the mid-15th century, Gutenberg had printed his first book, Ars grammatica by Aelius Donatus, using moveable type. Even though he did not invent the idea of moveable type, he can be credited for making it work in Europe. Moveable type became the de facto technique for printing in the West, and moveable type technology surged forward through the centuries since. Moveable type printing suited alphabetic languages very well, given there was only a small fixed set of types required to print entire books. But at the end of the day, type is simply a tool for communication, a means to record and duplicate ideas onto a physical medium.
--> 12.15
Of course, this is a web conference, so we'll now fast forward to the digital age, specifically the internet age. The ability to communicate abstract ideas through language and writing has always been the “killer feature” of human beings, it has been so for thousands of years, though the medium has changed over time. 

From cave paintings to stone engravings, from parchment to paper, the medium of our time is now the screen and the browser. Our types are now font files. And we've replaced typesetting with composing sticks or font plates and discs, with CSS. That's about as close an analogy I could come with with regards to analogue typesetting. 

So let's discuss typography on the web.
-->13.15
We first need to understand the web as a medium, and to be fair, it is a rather young medium. In his doctoral thesis, inventor of CSS, Håkon Wium Lie (Hor-ken Wee-um Lee), described a number of key differences between the distribution of content on paper versus electronic distribution over the web. 
1. The late binding between content and presentation of electronic publishing becomes later binding on the web. This relative freedom of presentation presents a performance challenge as binding now takes place while the user is waiting, and the author is not present to verify if the presentation is correct or not. 
2. There is no longer a single final form of presentation either, multiple output devices could be used. 
3. Authors can influence the presentation, but he or she no longer holds complete control, instead, a combination of influences from various sources, like the browser and the users themselves, form the final presentation. 
4. Dependable delivery is also uncertain, as web resources are distributed across multiple connected servers and the possibility of any of them being unavailable is pretty significant.

Although many would like to think the web is simply print expressed on an electronic screen, it is not. It is unique medium on its own.

Here's a list of common font formats used on the web. Why on earth are there so many formats? Well, here's my non-technical explanation. Fonts are simply containers for glyphs, and font formats describe these glyphs. The earliest fonts were pixel-based bitmaps, which were fine for low-resolution screens, but for printing on high-resolution printers, we needed a better solution. Either compress the bitmapped glyphs, or find an alternative rendering method. 

Donald Knuth created Metafont in 1978 for the TeX system, which generated compressed bitmap fonts. John Warnock, founder of Adobe, came up with Postscript in 1985, the first vector font, and boy did it take off. 

TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Both companies then worked separately to improve TrueType, especially with regards to fonts for East Asian writing systems. And Apple came up with TrueType GX, later renamed Apple Advanced Typography, while Microsoft turned to Adobe and together they came up with OpenType.

EOT, or embedded OpenType is Microsoft's proprietary standard which is a compact form of OpenType fonts meant for use on web pages. Although they tried to submit this as a W3C recommendation, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF was quite the industry effort, involving Microsoft, Mozilla and Opera.

Those of us who have worked on projects with self-hosted fonts will probably used something called the @font-face rule, where we declare a list of different font formats, in the hopes our fonts will show up correctly in as many browsers as possible. The number of font formats we need to declare has decreased over the years and right now, you can pretty much get away with declaring just WOFF and WOFF2.
--> 17.00
The earliest implementation of CSS had a relatively small section on fonts, which covered font properties that could be set via CSS, as well as the font matching algorithm so browsers could determine what fonts to use.

The algorithm itself has since been expanded over the last 2 decades but the general guideline to what font is used for a given character in a run of text is as follows:
- the User Agent (UA) takes the first family name defined in the `font-family` property
- if it's a generic family keyword, the UA will look up the font family to be used, otherwise it will try to find the family from fonts declared through `@font-face`, if not, then system fonts
- once matched, the UA will assemble the set of font faces in the family, then pick the appropriate font face based on declared font properties:
    + `font-stretch`,
    + `font-style`,
    + `font-weight`,
    + `font-size`
- But if no matching face exists, or if the matched face is missing the glyph that needs to be rendered, the next family name is considered, and the UA runs through the steps again
- Once a font face is matched, the font will be loaded
- If all the font family names have been run through, and still no font face matches, a system font fallback will be called into play

If a character cannot be displayed using any font at all, perhaps the famous, or infamous biang character, you'll end up with a symbol of the missing glyph, or what we endearingly call 豆腐, which personally, I see much less of these days, compared to 10 years ago, thanks to the widespread use of Unicode.

Regardless, from an aesthetic perspective, it is recommended you declare your Latin-based font of choice first, because order does matter. It is almost a given that a CJK font, or an Arabic or Hebrew font, for that matter, will have support for Latin characters but not the other way around. Declaring those fonts first will result in the Latin characters displayed using glyphs from the Chinese font instead. And sometimes, this doesn't look too great on Windows.

Even though the CSS fonts module level 3 states that user agents must match font names case insensitively according to the “Default Caseless Matching” algorithm as defined in the Unicode specification, it is still recommended to put them in quotes, just in case.

Generic font families were introduced in CSS2.1, and left it up to user agents to provide reasonable default choices, which express the characteristics of each family as well as possible within the limits allowed by the underlying technology. 

There are currently five generic font families, with four more being defined in the CSS Fonts Module Level 4. The thing about these generic font families is they are notoriously inconsistent, but they were never meant to be consistent in the first place. You'd leave these generic font families to be fallbacks, triggered if somehow all the previously declared fonts failed to load.

Not counting the font shorthand, there are six basic font properties. The last two were introduced in Fonts Level 3. I'll quickly run through the first four. Font-weight is for indicating the stroke thickness of your font, and can take values from 100 to 900 or keywords, like bolder or lighter.

Font-stretch is used to select fonts based on their widths, ranging from condensed to expanded. Font-style allows for the selection of italic or oblique faces. Italics are cursive, but obliques are sloped versions of a regular face. Font-size indicates the desired height of the glyphs, and we can use absolute values like pixels and ems or relative values like percentages or viewport units, as well as keywords like larger or smaller.

Font-size-adjust was put in to address legibility issues. Faces with low x-heights may sometimes be less legible, especially when they are triggered as fallback fonts. This property adjusts the font size of the fallback such that its x-height matches the first-choice font.

Font-synthesis is also new, and was put in to address the issue of faux bolds and faux italics. You know, when the true italic or a heavier version of a font does not exist and the browser tries to pretend it does? It doesn't look good at all. So now you can set this property to a value of none, to tell the browser to quit it.
-->22.30
Traditional print typeset with metal slugs, the web uses CSS to set type; font-related features like writing-mode, text-orientation, also font-feature-settings for opentype features
Features that are unique to the web medium, like responsive typography, use of viewport units, fluid layouts
Design to fit the context in which typography serves its purpose most effectively
both Latin type and Chinese type.
And talk about pages that have both Latin and Chinese text, like font pairing, layout, typesetting margins etc
