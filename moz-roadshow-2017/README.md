# Be like water: applying Bruce Lee's philosophy to web design

*For the Mozilla Developer Asia Roadshow 2017. This is sort of a transcript of the talk.*

## Introduction

Hello everyone! I can't tell you how happy I am that the Mozilla Developer Roadshow is back in Asia, and for it to kick off here in my home court. Those of you who already know me, and may or may not have been strong-armed into being here today, unfortunately still have to sit through the introduction slide.

My name is Hui Jing, and I'm Malaysian. I played basketball for more than half my life, and it was actually what got me into web development in the first place. I'm a front-end engineer based in Singapore now, and I love CSS so much that I will write blog posts about it. I also run Talk.CSS, which is Singapore's only CSS-centric meetup at the moment.

But we're not here to talk about me, we're here to talk about Bruce Lee. You may be thinking, what on earth does Bruce Lee have to do with any of this? Did you just fall victim to click-bait? No, you have not.

I'm going to be putting forth some ideas today that I don't expect everyone to agree with, but I do hope you will hear me out. Although Bruce Lee is known for his fighting prowess, he was also a deeply self-reflective man and philosophy was an inseparable aspect of his martial arts practice.

> Be formless, shapeless, like water. Now you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now water can flow, or it can crash. Be water, my friend.

Content on the web behaves just like water. Rather than trying to wrangle every pixel into place, we need embrace the fact that content is meant to flow. If you try to make it fixed, like freezing water into ice, it's not going to fit into all the different screens that people will use to view it.

The digital age started around the 1940s when the first electronic computers came about and screens were introduced as an output device in the 50s. Before this, we've always used physical media as a means of visual communication, from writing on all kinds of surfaces, to creating art, paintings and sculptures, or even physical expression through dance and performance.

But an electronic display is a proxy medium. Whatever we see displayed on a screen comes from data encoded as electronic signals. The heart of electronic displays is light. It is transient. We cannot touch light.

When it comes to the web, HTML was invented in 1989 by Sir Tim Berners-Lee. And the first graphical web browsers were released around 1992. CSS was proposed by Håkon Wium Lie in 1994 and was developed into a W3C recommendation by 1996.

The reason I'm throwing all these dates at you is to remind you that digital is less than a hundred years old. The web isn't even 30 yet, practically a millennial, so it's really a very young medium. The likes of which we've never seen before.

## Brief history of web layouts

But do you know what we have seen before? These layouts. I was lucky enough to have a computer in the house since I was a toddler and thus remember clearly the soothing sounds of a dial-up modem and the world of hit counters, guest books and webrings.

Back in my day, every angsty teenager had their own blog where they would express their innermost thoughts and feelings in a lot more than 140 characters.

The web had started to take off and not everybody wanted to spend a lot of time building their own websites from scratch. Most blogs were hosted on blogging platforms, where you picked a cool theme from the pool of available options.

This was around the time when screen sizes started to get bigger than 640 pixels, and now we had some extra space on our hands. So what did we do? We made sidebars! Sidebars with links to other blogs or sites, or contact information, if you were entrepreneurial you could chuck an ad or 2 in there.

By the mid-2000s this was real hot. Because screen sizes had continued to grow, and so instead of 1 sidebar, why not have 2? But this layout wasn't easy to achieve, I mean, you could still use HTML tables, but come on, it was the 2000s. Cutting edge CSS with floats was the way to go.

Except that it wasn't really. You see, floats weren't meant to used for layouts either. Like using HTML tables for layout, floats were also a hack, but they were all we had at the time to achieve the layouts we wanted. To fully grasp float-based layouts, you also needed to know about clearfix, about negative margins, have good arithmetic skills to calculate gaps. No, not easy at all.

But the web was exploding in popularity. Everyone and their cat needed a website. Then Apple made the iPhone and everything just went to pieces. Nah, I'm just kidding. But it did mark the start of the mobile web. Ethan Marcotte then coined the term Responsive Web Design in 2010, and we learned to use media queries to create different layouts at different screen widths. What? More complexity?

By this time, a lot of people just threw their hands up in surrender and outsourced the pain to CSS frameworks instead. And it's so understandable. Especially if they are not familiar with CSS, or they are short of time, or they just don't like CSS in general.

## Web design is boring?

But frameworks can be quite prescriptive, and that's how we end up with a lot of websites that utilise very similar layouts. The flavour of the day at the moment is this panel style, you know, with content sectioned up in panes.

And 12 columns, almost always 12 columns. 12 is a magical number, it can be divided by 2, 3, 4 and 6. Great for responsive web design. So many ways we can rearrange the boxes on our page. Sometimes I wonder if the Sesame Street producers were the original web designers, because we also have this.

Rectangles stacked in different configurations, big rectangles, little rectangles, all the rectangles. Nah, I'm just messing with you. Rectangles are great. The web is mostly rectangles because for the longest time that's all we could have without resorting to extreme measures of hackish-ness.

When we encounter something completely new, like the web, we always try to reconcile it with something we're already familiar with. In this case, the closest thing we had to the web was print. We even used similar terminology, calling them web pages. And yes, there are many similarities, but it's not like the difference between a brown pony and a white pony...It's more like between a pony and a unicorn. With wings.

I want to establish a new normal for the web. A normal where people don't expect websites to look the same on different browsers and devices. A normal where we embrace the fluidity of content and work with it instead of against it. A normal where we cede control of our designs to the browsers that render them.

> The hardest part is changing our thinking, not our CSS.

As Jen Simmons said, the hardest part is changing our thinking. The dynamism of the web and the lack of control we have as designers and developers over the final output is something that needs to become part of this new normal.

## Websites do not need to look the same

People access information on the web predominantly through browsers. And we do have a lot of them. But they are powered largely by four main layout engines, Blink by Google, Gecko by Mozilla, EdgeHTML by Microsoft and Webkit by Apple.

With the maturation of web standards, browser behaviour is less unpredictable than before, though each browser still has their quirks. Features aren't all supported at the same time. But you know what? That's perfectly fine. If we accept this as a feature of the web, instead of a bug, we've just opened up a lot more web design possibilities.

Feature queries are key to making this approach feasible. And support for it is really good, with coverage in over 90% of browsers, including Opera Mini. The only browsers that don't support it are Internet Explorer and Blackberry Mobile.

And this is how a feature query looks like. It's a conditional that checks if the browser supports a particular property or not. If it doesn't, the entire block within the @supports rule is ignored.

This means we start off with the basic layout that works everywhere. It could be a float-based, inline-block based, or single column, largely browser default UI elements, that sort of thing. Then we layer on styles based on the features we want to use.

By organising our code in this manner, the browsers that do not support feature queries or the specified property still get styled, while those that do get a different look. We're making use of the ‘C’ in CSS. Call it ‘Cascading Web Design’, TM, yours truly.

In this example, the layout on the left is what IE11 users will see, the one in the middle is what Firefox users will see, because Firefox doesn't support CSS shapes yet, but once it does, it will then look like the layout on the right, which is what Chrome users see now.

And yes, this approach does require a level of familiarity with CSS, but it's not rocket science. It boils down to experience, and the willingness to embrace CSS for what it is. With that in mind, let's talk about what we can use for web layouts.

## Flexbox and Grid

First up, Flexbox and Grid. To me, Flexbox and Grid are like Jay-Z and Beyoncé, great on their own, but together, they're on a another level of awesome.

They both operate on what I call a container-child relationship, in that the `display` property is applied to a parent container that affects the layout of all the children in that container.

### Flexbox

Even though Flexbox has been around for a while now, I don't think we've really pushed it to its full potential. Yes, Flexbox is not as straight-forward as say, `color` or `text-decoration`, but that's because it can do a lot more than those properties.

As of 2017, the odds that someone is using a browser which supports Flexbox is overwhelming high.

The most basic use-case for Flexbox is centring stuff. When I first learnt Flexbox, I hadn't fully grasped box alignment yet. I used to centre items by applying `align-items:center` and `justify-content:center` to the parent container because all the blog posts said so. This technique works just fine, but I only found out much later that if there's only 1 flex child, `margin:auto` does the same thing.

When you have more than 1 item, an understanding of box alignment makes things much easier. Say we want to centre both these children. Setting `justify-content:center` aligns them along the inline-axis, while setting `align-items:center` aligns them along the block-axis. Flexbox by default lays out all its children in one line without wrapping, so change that to `wrap`. Wrap only kicks in when the content is longer than the container, so make the width of one of the children `100%`.

There's a difference between `align-content` and `align-items`, where content controls alignment of the box's content within its content box, while items specifies the behaviour for each individual child.

When it comes to flex children, the key property is `flex`. It is strongly recommended that we use the `flex` shorthand rather than each of the individual long-hand properties. First value for amount of growth, second value for amount of shrinkage and last value being the starting width before free space is distributed.

Anyhoo, `flex` comes with some handy keyword values for commonly desired effects, as shown in this table. If we don't set the flex value on a flex child, its default behaviour is cannot grow, will shrink.

A common issue I hear is that it's difficult to create a grid system with Flexbox. The thing about Flexbox is, even though you can make a grid system with it, it probably isn't the best idea to do so.

Flexbox is suited for laying out items in a single dimension. Where there isn't a relationship between the rows and columns. Think of it more like a daisy chain of flex children.

Here, I have a list of images. Once I apply `display:flex`, all the items are shrunk and laid out in a single row. If I turn on wrap, they all revert to their original size because now there is no limit to how much space they need to take up, if there is no space, the image will just drop down to the next row.

I'll turn on the border so you can see how each flex child behaves. Now instead of the initial behaviour of can shrink don't grow, I'll change it to can grow don't shrink and make the images take up the width of the child container. Now, there are a lot of options we can play with in terms of designing the whole layout.

I can do an `align-items:center` and create this jagged look, which is kinda interesting. Sometimes I find neat grids a bit monotonous. But if I want neat, I can also standardise the height of the flex children. This makes the aspect ratio screwed up, so a compromise could be cropping off the taller images with the `object-fit` property.

I can also change the direction of the layout by setting `flex-direction` to `column` and giving the container a defined height. Now I've got this horizontal scroll going on.

Again, I can go with the funky, jagged look by adjusting the flex children's alignment. Now that the flex direction has changed, the block and inline axes has also changed. `justify-content` shifts along the vertical axis, while `align-items` shifts along the horizontal axis.

Or I could go neat, and do the cropping thing again. Remove the alignment code, make the flex children totally flexible and images fill up their containers' heights. `calc()` is an indispensable function I use when creating layouts. Here, `calc()` let's me account for the margins of each image with respect to their container heights. I can fix the widths of the images to get something like this.

And these layouts are a demonstration of what Flexbox can do out-of-the-box. They are not hacks. These are native options that we have when it comes to designing our layouts.

So I used some supplementary CSS features in the earlier examples, namely `calc()` and `object-fit`. Support for these properties is pretty decent. And they will only continue to get better in the near future. Honestly, the evergreen browser model is one of the best things to happen to the web.

### CSS Grid

There is no better proof-point than CSS grid. This is a feature that was specifically designed for doing layout on the web. I don't think I'm exaggerating when I say CSS grid is revolutionary for web design. But what's even more impressive is the manner in which it was rolled out.

All the major browsers included CSS grid in their March update this year. And if you look at the stats today, in just 6 months, more than 70% of web users are using a browser that supports Grid.

By developing Grid behind a flag, browser vendors could ask developers to test the new feature and provide feedback, but deter them from writing production CSS that wasn't fully baked yet.

> We need to translate ideas that we find in other places, not transfer them.

Jen Simmons said this in her talk at An Event Apart a couple years ago, that we need to translate ideas instead of transfer them. Meaning that we can look for ideas, concepts and inspiration from everywhere but we have to utilise them in a manner that best suits the medium we're working in. We're gonna look at some examples of grid in a non-web context.

The grids we usually see on the web are usually regular, x number of columns all the way down, which was pretty much all the web could do without some serious hacks or Javascript manipulation. Irregular grids are way more interesting though.

Which is why I'm really excited that CSS grid here. That we can too have irregular grids on the web, and utilise them in a way that makes use of the dynamism of how browsers render stuff.

So this is the basic premise of how grid works. You define the grid, then place items in it either by yourself, or let the browser do it for you. Now, there are a myriad of options for both these actions, which is what makes grid so powerful, and why some people may find it intimidating at first. Let's see how Grid works when we let the browser do the placement.

#### Browser placement

With Grid, we can do all the things we're used to doing, except more easily. Like this fixed grid. The `repeat()` function really comes in handy when your columns or rows follow a similar pattern. In this case, I'm telling the browser to give me five 10em wide columns. It's fixed, so no size changes here.

Grid also introduces the `fr` unit, which represents a fraction of the free space in the grid container. In this example, I'm telling the browser I want each of my five columns to take up equal proportions of free space available. And so, they shrink and grow together with container.

ow this is something new we've never been able to do before. The `minmax()` function lets me tell the browser that I want to cap the shrink at 10ems but if there's extra space, grow all my columns equally. Because of the cap, once there isn't enough space to fit 5 columns, the number of columns will decrease until everything fits. Didn't need a single media query for that.

We can also define exactly where we want our grid items to go. `grid-row` and `grid-column` are the respective short-hands to refer an item's grid position.

By default, a grid item will occupy one grid cell, but we can use the `span` keyword to define how many grid tracks an item should take up. We refer to the grid lines using their numerical index, starting from 1.

#### White-space

With the manual placement of grid items, there are lots more interesting things we can do. One of which is vertical white-space. The use of white-space is important when it comes to layout design, as it serves to balance the layout and bring focus to important content.

In the pre-Grid era, every HTML element had to be rendered one after another. To achieve some semblance of vertical white-space, we used things like spacer gifs, remember those? Or other creative hacks.

But now, we can place items wherever we want on the Grid we defined. Think of it like placing pieces on a chessboard, based on the `grid-row` and `grid-column` properties on the grid item.

We can also name areas of the grid with the `grid-template-areas` property, which I find great for white-space because you can create empty cells, using the dot notation. Placement then involves telling the grid item which area it needs to go into, like how I'm going to shift the sixth shoe into grid area “f”.

#### Overlap

Another technique that makes a layout interesting is the use of overlap, because it breaks our expectation of regularity in a grid. We don't usually see overlap on the web because it used to involve a lot of tricky positioning rules and negative margins, or just cheating by processing everything into a single image. Some people even used Javascript to calculate positioning. Not any more.

Here's a simple example of overlap, just two circles behind a header. The code here is simplified to show only the placement properties. But to centre the text, I applied a `margin:auto` to the header.

Pseudo-elements are treated as children. So the two circles here are pseudo-elements of the grid container, which have been explicitly placed to overlap. Then the header overlaps them both.

The placement code is more intuitive than using absolute positioning and you don't need to do a lot of complicated math to get the alignment just right no matter how you resize the browser.

One other dimension we need to keep in mind when designing for the web is feature support for each browser, and this will vary depending on how far back your support policy goes. A browser that doesn't support Grid or feature queries will get a layout that looks like this. A basic layout that utilises Flexbox. But for browsers that do support Grid, I can layer on a fancier *overlap with vertical white-space* layout.

Designing layouts on the web requires interpolative thinking, on multiple levels. Web layouts can and most probably should morph as the viewport size changes. Our job is to make sure the layout is most effective in the space it has to perform in.

Also, there are more media queries available to us than just `min-width` and `max-width`. Like in this example, I'm using the `min-aspect-ratio` media query which triggers my fancier overlap layout only when the aspect-ratio is more than 1.

#### Firefox Grid inspector

Firefox has the best Grid Inspector tool in any browser, and the team is constantly working on adding more features to it to make our lives easier when using CSS grid. To toggle it, click on the waffle-like icon next to `display:grid` on your grid container element. It will then show all the grid lines and you can see where your grid items have been placed on the grid.

And if you're using Nightly, you'll have the Layout panel in your DevTools, which gives you the customisation options like displaying grid line numbers and grid areas, as well as setting different colours for different grids on the page. I stole this gif from the Mozilla Hacks website. So that's Grid.

## Transforms

Next up is CSS transforms. Although we tend to associate transforms with animations, there is also a case to be made for static transforms, especially when it comes to layout design.

Diagonals are a very dynamic visual direction, and when used in layout design, creates an active composition with implied movement. Such art direction is totally possible on the web.

Like for this example, we can use Grid to place the items, then use transforms to make them have this floating-out-of-the-grid look. But it's still fine to present a regular layout that works on older browsers that don't support Grid or Transforms.

If you're familiar with image editing software like Photoshop or Affinity Photo, you'll find that a lot of image manipulation techniques can now be done in CSS as well. These are the four basic transformations in the two-dimensional space. But they're also available when it comes to three-dimensional transforms.

How many people read the article ‘The Critical Request‘ by Ben Schwarz on CSS Tricks? It's a really good article on page performance, but it also had this really pretty header. It's an image on the actual article, but it definitely can be “web-ified”.

Again, for browsers that don't support Transforms or Grid, we can still present a layout that doesn't use those properties for browsers that don't support them with the help of feature queries. Sure, it'll look different, but it won't be broken.

3D transforms also make for great visual impact. The benefit of doing it with text plus CSS is that it's searchable, indexable, googl-able. Much better accessibility than presenting the text in an image.

With 3D transforms, we are operating with one more axis, which is the z-axis, for depth. So there are some additional properties like `backface-visibility` and `perspective`, for example. The `perspective` property controls how far an element appears to recede into the horizon.

The smaller the value, the more dramatic the 3D effect is. So if I change the value of `perspective` here to something smaller, you can see that the horizon recedes much further away.

Support for transforms is really good for both 2D and 3D transforms, but you don't have to use them if they don't fit your project. It's just good to know this option exists, and you can reach for it when the time comes.

## CSS Shapes

Magazine layouts are also chock full of interesting text flow shapes. Maybe we see this a bit more in fashion magazines, but shapes are not exclusive to those publications.

This one's from Bloomberg Businessweek.

Newspapers do it too.

Generally, the idea is to let the text flow around something so it's not laid out in a rectangular shape all the time.

So the CSS module that let's us do this is called CSS shapes. For now, we can only let text flow around shapes and images with the `shape-outside` property. When you apply this property to a floated element, text will flow on the opposite side of the float.

There are 4 basic shape functions we can use to define the outline around which we want the text to flow, namely, `circle()`, `ellipse()`, `inset()` and `polygon()`. These same functions are also used in the `clip-path` property, so as you can see in the `polygon()` example, both properties share the same value.

Shape from images is what really makes me happy. The image has to have transparency, because the alpha channel is used to compute the shape. Pixels which fall below the `shape-image-threshold` value are “ignored“ so text just flows into that area instead.

CSS shapes also fails really well, in that, if a browser doesn't support it, it will just behave as if `shape-outside` wasn't present at all. Like what I'm showing you right now. Because CSS shapes isn't fully supported on Firefox yet, but if you check Bug 1040714 on the issue logs, you'll see that the team at Mozilla are working on it.

If you're using Chrome, you should see something like this, where the text is flowing around Beyoncé. Ask me about Beyoncé later, if you want to. Anyway, Chrome has been supporting CSS shapes for a while now, so their DevTools shows you how the `shape-threshold` and `shape-margin` properties are being applied.

CSS shapes also has a level 2 specification, which will define how text should flow inside a shape. But this is a lot more tricky than outside because of how overflow needs to be treated. So it'll be a while longer before we can do layouts like these.

## Writing-mode

A large swathe of the world use writing systems that flow left-to-right, from top-to-bottom, languages like English and Malay. But writing systems go in all directions. Chinese and Japanese can be written vertically or horizontally. Arabic and Hebrew scripts are written from right-to-left.

That's why we have the writing-mode property. Because it's the WORLD wide web. But we're all creative people, right? So, yes, the primary use of writing-modes is to correctly present the various writing systems on the web. However, writing mode can also be used for art direction.

Vertical writing is traditionally East Asian. For Han characters, which are used in Chinese, Japanese and Korean. The inline direction is from top-to-bottom and the text is read from right-to-left. But of course, when it comes to design, we can layout text in all directions if we so choose.

This example demonstrates the `writing-mode` property's different values. There's `vertical-rl` in red, where the text runs from right to left. And `vertical-lr` in blue, where the text runs from left to right. We can also apply a rotate to make the text face the opposite direction, like the green example. But how can we use this in the context of a Latin-based writing system?

One idea is for headers. It might not be the best idea to layout long chunks of text vertically because that just makes it hard to read. But using vertical text for short titles or headers can break up the monotony of a long page.

Other subtle uses could be things like tags for blog posts, where the information is not critical to the main content, so laying it out vertically doesn't adversely affect the reading experience.

Also, depending on the number of links in your navigation menu, perhaps a vertical layout on a narrow screen could be a design option worth considering. Today's CSS really gives us a lot more creative choices as compared to when responsive design first was a thing back in 2010.

## Wrapping up

Jen Simmons and Rachel Andrew have done a lot for both developing layout on the web, as well as educating the web development community about it. Rachel has a CSS layout course which is completely online, and Jen Simmons has a wonderful collection of demos which you can check out.

Speaking of demos, I think everyone should build up a collection of demos, because that's the best way to learn and familiarise ourselves with CSS in general.

Here's the long list of resources related to the things I covered in today's talk and I'll share these slides for anybody who is interested.

CSS has been around for about 20 years now, and the last I checked, there were 501 distinct properties. And you don't have to know every single one of them, I'm just pointing out that we can achieve a lot more with CSS than ever before. CSS is an integral part of web layout, and it‘s really about combining different properties to create designs that are truly web.

Thank you.
