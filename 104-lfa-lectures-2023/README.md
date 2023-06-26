# Working with CSS doesn’t have to make you cry

_For Letterform Lectures. This is a sort-of transcript plus my notes for the talk._

Hello everyone! Thank you all for being here today. I've been a member of the Letterform Archive since 2018 and I think I managed to visit once back then. So having this opportunity to present a Letterform Lecture is pretty mind-blowing to me.

As you can see from the title, this talk is probably slightly different from the other Letterform Lectures in that it leans a little more toward technology than design. More similar to the excellent "A Byte Sized History of Computer Typography" with Ben Zotto back in February, do watch it if you haven't.

My name is Hui Jing. It's a Chinese name, so our family name comes first. And these are my representative emojis, if you will. I've been gainfully employed as a web developer for more than a decade. Also managed to work with a lot of different designers, and I wanted to share some knowledge that might help improve communication between us. So I want to start off with a little bit of history, just to build up more context on how we got to where we are now.

I don't want to assume everybody knows what CSS stands for. It's short for cascading style sheets, and is a mechanism for adding styles to web documents. There's a defined syntax for it such that all the different browsers can understand and parse our instructions correctly.

When a designer asks us to make that logo larger, or move this banner to another position, CSS is what we use to make those changes to a web page. We will go into typography specific CSS later on in the talk. But back to context portion of this talk.

Fonts on the web are essentially digital fonts, which is a significant change from what was being used for the physical process of printing. Instead of metal alloys, or stone or wood, which are things we can touch and feel, digital fonts exist as light.

One thing that came up during my research and is important for me to mention is that the first Japanese patent for phototypesetting was filed by Nobuo Morisawa and Ishii Mokichi in 1924. That was the same Morisawa who founded Morisawa Inc., currently still one of Japan's leading font foundries. They did hardware back then. It's just that this isn't always mentioned when phototypesetting history is talked about, but in my opinion it should.

A change in medium brought about new design constraints. Projected light is less sharp and crisp when compared with solid metal types, so type designers had to modify their characters to suit the technology that was manifesting their designs in real life. Adrian Frutiger, when talking about redrawing his fonts for the Lumitype, called them aberrations.

The first instance of digital typesetting, where no physical material was involved in the creation of the characters was the Digiset 50 T 1, a 3rd-generation CRT typesetter. It was developed by Dr. Rudolf Hell in 1964, and made commercially available in 1965. The Digiset used cathode-ray tubes which swept electron beams across the screen one row at a time from top to bottom. Each illuminated screen point is a single pixel.

The introduction of CRT screens for typesetting was significant for type design itself because of how the technology worked. Characters had to be converted into a bitmap form, which was terribly low-resolution. Adobe then released PostScript in 1984, the first ever vector font format, which was yet again a significant development in type history.

Back in 1987 when Adobe only had around 70 employees worldwide, current CEO of Morisawa, Akihiko Morisawa went to the USA to take a training course at Adobe and was mentored by Adobe founders John Warnock and Charles Geschke. Morisawa and Adobe worked together to further develop the PostScript format.

Which is now a great segue to start going into font formats. Different font formats store information about the font, like their glyphs, encodings, metadata about the font etc., differently based on how their specifications were written.

Given how successful PostScript was, TrueType was Apple and Microsoft's answer to Adobe's font monopoly. Microsoft came up with TrueType Open in 1994 and eventually Adobe joined in and together they developed OpenType.

Microsoft also came up with EOT or embedded OpenType, a proprietary format for use on web pages. Although they tried to submit this as a W3C recommendation, it was rejected in favour of WOFF, or the Web Open Font Format. WOFF2 is an improvement over WOFF with significantly better compression rates.

Compression rates are significant when it comes to web pages because of how fonts get delivered to our end users. Most people probably don't give a second thought to how content appears on their screen when they click on a link, but most do notice when the page takes forever to load. It's not a great experience.

Whether you enter a URL into the address bar or click a link, they all have this format of a protocol, a server and a file path. People love to talk about the cloud like it's some invisible sea of data floating above our heads, but it's all physical servers housed across the world, most likely in lower temperature countries, all connected via reams and reams of fibreglass or copper cables.

Anyway, the .com portion is the human-readable address for the server on which the content lives in. Once you click the link or press enter on your address bar, your browser sends a request to the server, which will then handle the request and returns the correct content that you asked for.
