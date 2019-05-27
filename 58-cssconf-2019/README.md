# Using DevTools to understand modern CSS layouts

*Presented at CSSConf EU 2019*

Hello, Berlin! It's such an incredible privilege to be here at the 10th anniversary of CSSConf EU. I was here for the very first time, in Berlin, at CSSConf and JSConf, last year. It was one of the most amazing experiences of my life, so thank you to the organisers for bringing me out again.

I'm going to do something I've never done before at a conference, and that is to give a talk without slides. I know loads of amazing folks have done this before. Clearly, I'm not one of them, I've always had slides, so fingers crossed on how this will all turn out.

Basically, what happened was that late last year, my good friend, fellow Mozilla Techspeaker and Nexmo DevRel colleague, Alex, was giving a talk on DevTools at a meetup. So, he was like, do you wanna come? I was like, yeah. And, he was like, do you wanna speak? And, I was like, no?

But eventually we settled on him ceding all the CSS bits to me, while he talked about all the cool Javascript-y stuff, and because there was no time I just built a web page and talked through DevTools using that. At the end of it, he was like, that would make an interesting talk. And so, here I am. If this goes south, it's on him. Nah, I'm kidding, it's all on me.

## On how cool DevTools console can be

Although I learnt a lot of cool things about DevTools from Alex, the one thing that stood out to me was that the DevTools console can totally be styled up. But just like support of CSS on actual web pages differs between browsers, this is also the case of CSS support in the console.

Case in point, this glorious CSS-only talk title in the console. This is what it looks like in Chrome. And what it looks like the Safari. Looks way better in Firefox, but that's just my opinion. So my name is Hui Jing, and I'm a Developer Advocate at Nexmo. If you've never heard of us, we've also got a booth and many friendly faces here, so do come over and say hi.

I also love emojis, and these pretty much some up who I am as a person. If you're curious about any of them, you can ask me about them later. Finally, more proof that Firefox supports the most CSS properties in the console. I mean, come on, it's vertical writing in your console. I love it.

## Why was it harder to align vertically than horizontally?

When I started building stuff on the web, I soon realised that aligning stuff horizontally was way more straightforward than aligning stuff vertically. So I started thinking about why that is.

Historically, web technologies started out from text document beginnings. Which makes sense since Sir Tim Berners-Lee’s original proposal was to tackle the problem of sharing information about accelerators and experiments at CERN.

Information that was predominantly text-based, and given that the official languages at CERN were English and French, these texts were often laid out in a horizontal top-to-bottom direction. And if you dig a little deeper, you might notice that the earliest features of HTML revolved around the formatting of text documents, offering headings, paragraphs, even multiple types of lists.

When CSS first came about, again, focus was around text formatting. The `:first-letter` pseudo-element, now known as `:intial-letter`, had been proposed from the beginning. Of course, writing a feature into the specification and having it implemented in browsers are 2 separate things, and for this particular feature, it took a decade for it to be first seen in browsers.

My point is, from the moment designers and developers realised the web could be used for more than just academic paper format layouts, they have been complaining about how hard it is to do layout on the web.

And I don’t blame them. For a long time, it was hard to layout anything resembling the gorgeous graphic designs we saw on print magazines and posters.

Today my main goal is to share with everyone what I learned about modern CSS layouts while I was building them and inspecting them with DevTools throughout the process. I do hope that there will at least be one thing that you find useful out of all this.

## On modern CSS layouts

When I refer to modern CSS layouts, I'm talking about layouts built with Flexbox, Grid and Box alignment properties. Because conceptually, these are properties which were crafted specially for building layouts on the web.

They are different from prior techniques, like HTML tables for layout, or floats, which were more clever uses of properties whose intended use was not layouts in the first place. But resourceful developers found plenty of workarounds and hacks to work with whatever features were available.

These days, we have a much more robust toolset for doing layouts on the web.

## Content-based sizing, letting the browser do more
  
- the concept of automatic sizing has always existed
- https://motherfuckingwebsite.com/, web was responsive until we broke it
- browsers have always managed to figure out how much space content should take up without us having to explicitly declare those values
- content would reflow without overlapping
- covered in CSS Intrinsic & Extrinsic Sizing Module Level 3
- more precise terminology to allow authors to assign automatic widths to their elements
- `width` and `height` now take 3 additional keyword values, `min-content`, `max-content` and `fit-content`, same goes for the min and max size properties
- `min-content` is the smallest size a box could take that doesn't lead to overflow
- this occurs when all the soft wrap opportunities have been taken
- line breaking is a lot more complicated than most people give it credit for, because there is a lot of nuance depending on the language being used
- for a lot of languages, line breaks occur at word boundaries, where spaces or punctuation are used to explicitly separate words
- for Chinese or Japanese though, the break is per character, usually but not always, because line-breaks are prohibited before certain punctuation marks
- if there's a comma, it will not break to be alone when the width is `min-content`, and a slight difference between the proper full-width comma and regular comma
- `max-content` is a box's ideal size in a given axis when given infinite available space
- this is the narrowest inline size it can take while fitting around all its contents
- some Southeast-Asian scripts, like Thai, are written without spaces between words, so text is wrapped at syllable boundaries in addition to word boundaries
- the word “ประโยค” (prayokh) is the longest in this sentence, and if you don't read Thai, you probably wouldn't be able to tell where the break would happen

## Flexbox, where nobody knows the exact size of anything

- Covered in CSS Flexible Box Layout Module Level 1
- Optimised for distributing space and aligning content in ways that web apps and complex web pages need
- The first layout technique that introduces the concept of a parent-child relationship
- `display` property set on the parent element to create flex formatting context
    
## Grid, where we finally have real rows and columns
- All prior grid layouts did not establish a relationship between rows and columns
- Faux grids created by forcibly sizing the items to stack up neatly
- Allows us to size the grid, then place items within designated grid cells
- Rachel will be covering everything about sub-grid which is in level 2 of the specification
- Devtools will also be updated with support for subgrid
- Covered in CSS Grid Layout Module Level 1


