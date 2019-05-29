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

When I started building stuff on the web, I quickly realised that aligning stuff horizontally was way more straightforward than aligning stuff vertically. So I started thinking about why that was.

Historically, web technologies started out from text document beginnings. Which makes sense since Sir Tim Berners-Lee’s original proposal was to tackle the problem of sharing information about accelerators and experiments at CERN.

Information that was predominantly text-based, and given that the official languages at CERN were English and French, these texts were naturally laid out in a horizontal top-to-bottom direction. And if you dig a little deeper, you might notice that the earliest features of HTML revolved around the formatting of text documents, offering headings, paragraphs, even multiple types of lists.

When CSS first came about, again, focus was around text formatting. The `:first-letter` pseudo-element, now known as `:intial-letter`, had been proposed from the beginning. Of course, writing a feature into the specification and having it implemented in browsers are 2 separate things, and for this particular feature, it took a decade for it to be first seen in browsers.

My point is, from the moment designers and developers realised the web could be used for more than just academic paper format layouts, they have been complaining about how hard it is to do layout on the web.

And I don’t blame them. For a long time, it was hard to layout anything resembling the gorgeous designs our print counterparts could achieve on posters and in magazines.

Today my main goal is to share with everyone what I learned about modern CSS layouts while I was building them and inspecting them with DevTools throughout the process. I do hope that there will at least be one thing that you find useful out of all this.

## On modern CSS layouts

When I refer to modern CSS layouts, I'm talking about layouts built with Flexbox, Grid and Box alignment properties. Because conceptually, these are properties which were crafted specially for building layouts on the web.

They are different from prior techniques, like HTML tables for layout, or floats, which were more clever uses of properties whose intended purpose was not for layout to begin with. But resourceful developers, like yourselves, found plenty of workarounds and hacks to work with whatever features were available.

These days, we have a much more robust toolset for doing layouts on the web.

## Content-based sizing, letting the browser do more
  
- the concept of automatic sizing has always existed
- browsers have always managed to figure out how much space content should take up without any intervention from us
- content would reflow without overlapping
- covered in CSS Intrinsic & Extrinsic Sizing Module Level 3
- more precise terminology to allow authors to assign automatic widths to their elements
- `width` and `height` now take 3 additional keyword values, `min-content`, `max-content` and `fit-content`
- `min-content` is the smallest size a box could take that doesn't lead to overflow, so inline content will break multiple lines
- line breaking is a lot more complicated than most people give it credit for, because there is a lot of nuance depending on the language being used
- for a lot of languages, line breaks occur at word boundaries, where spaces or punctuation are used to explicitly separate words
- the browser won't break words though, so the word `content` plus the full stop is treated as a single entity
- and that ends up being the width of the first box
- for Chinese or Japanese though, the break is per character, usually but not always, because there are rules about certain characters that are not allowed to start or end a line
- East Asian scripts also use full-width punctuation, so with a full-width comma, this box is now 2 characters wide
- `max-content` is a box's ideal size in a given axis when given infinite available space
- content will take up as much space as required to lay itself out on 1 line
- some Southeast-Asian scripts, like Thai, are written without spaces between words, so text is wrapped at syllable boundaries in addition to word boundaries
- the word “ประโยค” (prayokh) is the longest in this sentence, and if you don't read Thai, you probably wouldn't be able to tell where the break would happen
- `fit-content` unfortunately is not a supported value at this point but all 3 keywords are supported when used in the context of a grid formatting layout
- `fit-content` is not a fixed value like the previous 2 keywords, it is a range between the `min-content` size and the `max-content` size or length-percentage defined in the function, whichever is smaller
- if you look at the Chinese and Thai examples, which have exactly the same content, their smallest size is `min-content`, while their largest size ends up being `300px`
- if I change the cap value to something larger than `max-content`, like `500px`, then `max-content` becomes the largest size

## Flexbox, where nobody knows the exact size of anything

- it's been almost a decade since Flexbox was first proposed as a working draft
- designed as a box model optimised for distributing space and aligning content in ways that web apps and complex web pages need
- the first layout technique that introduces the concept of a parent-child relationship
- once you turn a box into a flex container, you don't need to do anything to its children, they automatically become flex items
- children can be laid out in any direction, and either grow to fill unused space or shrink to avoid overflowing the parent
- Firefox is the only browser with a Flexbox inspector, locate it at the *Layout* tab, possible to change colour of overlay
- will tell you the flex direction, and the wrap status
- look at flexbox keywords and their resultant computed values, the specification recommends you use the keywords because they cover the most common use cases
- the `flex` shorthand covers `flex-grow`, `flex-shrink` and `flex-basis` in that order
- if we don't declare anything on the flex children, the browser assigns them a default value of `initial` (navigate to computed styles and search for flex), which resolves to `0 1 auto`
- if we use the keyword `none`, it resolves to `0 0 auto`, which makes the item completely inflexible, and keeps their original dimensions
- for the keyword `auto`, the browser resolves that to `1 1 auto`, meaning items grow and shrink according to space, and if things wrap down to the next line, they kind of blow up
- the last keyword is a single positive integer, which resolves to the `flex-grow` value, while the other 2 remain `1` and `0` respectively
- we will talk more about the distinction between having a `flex-basis` of `auto` versus `0` soon
- so sizing of flex items depend on the amount of space available, the amount of free space you allocate it, and the amount of content the item contains
- things get easier once you have a clearer understanding of `flex-basis`
- if I put a fixed value of `100px` as the `flex-basis`, it's not surprising that some people expect to see a box of `100px`, because we're used to being in control of our sizing instructions
- but `flex-basis` is actually the starting point from which the size of the box is calculated, key here is **starting point**, odds are the final size will **not** be `100px`
- so if we look at this next example, it appears that the browser allocates space based on content, but let's break down what's actually happening
    - reminder: browser will not break words
    - so we've got 2 flex containers with 3 flex items each, first 2 items have the same content, much longer content for the second container's last item
    - both only have `display: flex` set on the parent element and nothing on the children
    - this means all children have the values of `0 1 auto`, meaning the items won't grow beyond actual widths *resize until enough room for all content*
    - a `flex-shrink` value of `1` means all the items will shrink at the same rate if there isn't enough space for all the content to be a single line
    - when specified on a flex item, the `auto` keyword retrieves the value of the main size property as the used `flex-basis`. If that value is itself `auto`, then the used value is `content`
    - `auto` will use content size, then explicit width, then explicit `flex-basis` value as the starting point
    - first column can't shrink any more, but second and third start shrinking at the same time, then second column hits `min-content` and only the third column continues to shrink until `min-content`
    - eventually both sets of content's first and second column are the same width at `min-content`
- a key takeaway is understanding the difference between having a `flex-basis` of `auto` versus a `flex-basis` of `0`
    - again, I have 2 sets of 3 items, but this time, exactly the same content, allowed to both grow and shrink
    - the first item gets 1 unit of free space, second item gets 2, and third gets none
    - difference is first set uses `auto` as the `flex-basis`, which means the starting width for each item is the width of its content
    - whatever is left over after the widths of these 3 pieces of content gets distributed in a 1:2 ratio between item 1 and 2
    - inspector shows you that item 1 grew by x, and item 2 grew by 2x, and also shows you the starting width
    - the second set has `flex-basis` set to `0`, that means there is no starting width for each item
    - the free space available is equivalent to the total width of the container minus the `min-content` width of the third item, because again, the browser doesn't break words so that's as small as it can go
    - then that free space is divided between item 1 and 2 in the ratio of 1:2 as well
- flexbox also makes it easy to change the flow direction of flex items
    - main-axis is direction which flex items are laid out, and cross axis is perpendicular to the main axis
    - children can be laid out in any direction, so this is controlled by the `flex-direction` property
    - the default value is `row`, but you can append in a `-reverse` to make it go backwards
    - or maybe you'd like to go vertical, then you'd use `column` instead, but then you'll need a `max-height`, otherwise the items just keep going
    - so 4 directions of item flow are possible
    - and you can see how the flex line is running, items are laid out along a single continuous flex line whose direction we can change
    - for now, the direction goes this way, then folds around and continues 
    - keep in mind that making the visual order differ from the source order has accessibility implications if your users need to interact with the items
- aligning items with the box alignment properties is also a big plus
    - items are stretched along the cross axis to the full height of the flex line once you apply `display: flex`
    
## Grid, where we finally have real rows and columns

- All prior grid layouts did not establish a relationship between rows and columns
- Faux grids created by forcibly sizing the items to stack up neatly
- Allows us to size the grid, then place items within designated grid cells
- Rachel will be covering everything about sub-grid which is in level 2 of the specification
- Devtools will also be updated with support for subgrid
- Covered in CSS Grid Layout Module Level 1

- Basic inspection
- Multiple grid overlays, nested grid
- Auto-sizing, fit versus fill
- Flexible values, relative strength of space allocation
- Item placement, area names
- Alignment of grid items


