# Be like water: applying Bruce Lee's philosophy to web design

*For View Source 2018. This is sort of a transcript of the talk.*

Hello everyone! Wow, this has been such an amazing conference, and I feel so privileged to be sharing the stage with all these wonderful speakers. I've recently been in London proper for the first time about a month ago.

Honestly I thought I had been to London before. I'd gone through Heathrow so many times I could tell you where the toilets were, where to charge your stuff… Until someone pointed out that wasn't exactly having “been to London”.

Anyway, my name is Hui Jing. And I'm from Malaysia. Used to play basketball full-time and inadvertently kick-started my web career from doing that. I absolutely adore CSS so I'll often write blog posts about CSS, among other things.

I'm also a Mozilla Techspeaker, an initiative by Mozilla to support technical evangelists in regional communities around the world by providing resources and funding. You've heard from some of my fellow TechSpeakers earlier today, and if you're interested, applications for the Winter cohort are now open.

So the reason I finally visited London properly was that I got a new job. I'm now a Developer Advocate at Nexmo. Out of curiosity, has anybody heard of Nexmo?

For those who haven't, Nexmo is a platform which makes it easier for developers to integrate communications into their applications by providing APIs for messaging, voice and authentication. If this is something that might be useful to you, come chat with me or Alex later.

## On Bruce Lee

But that's too much about me. Now, we're going to talk about Bruce Lee. I see some sceptical faces. Some of you might be thinking, what does Bruce Lee have to do with web design? Maybe some of you never even heard of Bruce Lee.

Bruce Lee was the most impactful martial artist of this generation. His legendary fighting prowess translated well onto the silver screen, where he became an iconic kung-fu superstar.   But he was also a deeply self-reflective man, who developed profound philosophical insights about the world around him and life itself.

Bruce Lee was a student of both Western and Eastern philosophy. And drew inspiration from the Taoist principles of 老子, recorded in the Chinese classic 道德经. A remarkably timeless publication, given it was authored during the 4th century BC.

Water is a key metaphor in Taoist philosophy, and it can also be applied to the web.

## On content on the web

Content on the web behaves just like water. Rather than trying to wrangle every pixel into place, we need embrace the fact that content is meant to flow. When you freeze water into ice, it can no longer flow into containers of different shapes and sizes.

Content that is fixed can only look good on specific screens. Also, if I throw a ball of ice at you, it's gonna hurt.

Designing for the web requires an intimate knowledge of the browser that will be rendering the final output. We can't stick our hands in there and change things directly. Instead, we have to modify the instructions we give to the browser, explaining how we would like things to be rendered.

If you paid attention during Mariko's talk, you'd have realised that the web has changed and evolved over the past 3 decades. As have I. I wasn't very useful in my early days. Couldn't walk, couldn't understand most instructions. Did whatever I felt like doing. Sort of like how browsers were back in the day.

But as the years passed, browser capabilities advanced. Mine did too. I developed the ability to run, throw a ball, even drive a car. I could also now understand much more complicated instructions than before.

What modern CSS gives us, is a wider vocabulary with which to communicate with the browser.

## On frameworks

Bootstrap, which is arguably the most popular front-end framework around, originally started out as a framework to encourage consistency across internal tools within Twitter. When its creators released it as an open source project in 2011, it really took off.

It wasn't long before other frameworks started to pop up as well. What frameworks offer are a set of pre-written styles that developers can use to build out apps or sites by applying the relevant CSS classes. These frameworks provide consistent options for things like layouts, UI elements, interactions and so on.

Consistent, but limited. Frameworks themselves are not a problem. It's a great concept, but only if the framework is built and developed to cater to the requirements for the project in question.

There may be a number of use-cases for adopting an off-the-shelf framework, but if we choose to learn a framework, and learn it well, all we get is the ability to manoeuvre within the bounds of the framework.

In this day and age, browsers are constantly being updated with new features and bug fixes. The web is ever changing, at odds with the fixed patterns of frameworks.

We need a new normal for the web. A normal where people don't expect websites to look the same on different browsers and devices. A normal where we embrace the fluidity of content and work with it instead of against it. A normal where we cede control of our designs to the browsers that render them.

People access information on the web predominantly through browsers, and boy, do we have a lot of them. All these browsers are powered largely by four major layout engines, Blink by Google, Gecko by Mozilla, EdgeHTML by Microsoft and Webkit by Apple.

With the maturation of web standards, browser behaviour is less unpredictable than before. Things aren't perfect, features aren't all supported at the same time, sometimes there are browser-specific bugs. But you know what? That's perfectly fine. If we accept this as a feature of the web, instead of a bug, we've opened ourselves up a lot more web design possibilities.

## On feature queries

Feature queries are key to making this approach feasible. What they do is provide CSS feature detection using native CSS.

Support for feature queries is really good, with coverage in over 90% of browsers, even Opera Mini. The only browsers that don't support it are Internet Explorer and Blackberry Mobile. And that's actually not too big of an issue.

This is how a feature query looks like. It's a conditional that checks if the browser supports a particular property or not. If it doesn't, the entire block within the @supports rule is ignored.

This means we start off with the basic layout that works everywhere. It could be a float-based layout, or even single column, maybe largely browser default UI elements, that sort of thing. Then we layer on styles based on the features we want to use.

By organising our code in this manner, both browsers that do not support feature queries, or the specified properties will still get styled. Albeit a more basic style. The newer browsers will get enhanced layouts, if they support some or all the newer features within each feature query.

This is a website that utilises such an approach. A basic single column layout serves as the baseline experience. For browsers that support newer features, certain components will have an enhanced layout.

The browser in the middle has Grid support, but not Shapes, while the browser on the right supports both. All 3 layouts work off the same codebase, and if any browser starts supporting a newer feature, we don't have to go back and change our code.

Such an approach does require a level of familiarity with CSS, but it's not rocket science. It boils down to experience, and the willingness to understand and embrace CSS for what it is.

Even though layout is a pretty big part of web design, it's interesting to note that when CSS was first introduced, it wasn't meant for doing layout. Fast-forward to today, we are at a point where we can almost match what is possible in print.

However, we need to keep in mind that the web is a different medium from print. Just like there are some things print can do that the web can't, there are numerous things the web can do that print can't either.

Often, with CSS, there are multiple ways to achieve the same effect, however, the amount of effort required depends on whether we choose the right tool for the job.

## On transforms

CSS transforms is one such tool. Although we tend to associate transforms with animations, there is also a case to be made for static transforms, especially when it comes to layout design.

Diagonals are a very dynamic visual direction, and when used in layout design, create an active composition that implies movement or depth. Such art direction is totally possible on the web.

If you're familiar with image editing software like Photoshop, you'll find that a lot of image manipulation techniques can now be done in CSS as well. These are the four basic transformations for the 2D space. And you can also use them for 3D transforms.

This here was based off the header graphic on a CSS Tricks article called ‘The Critical Request‘. I thought it was beautifully designed, and upon further inspection, realised it was an image. This image can totally be recreated in CSS, allowing it to morph depending on the context it is viewed in.

On a narrow screen, it's not that feasible to use diagonals given the limited space, but on a wider layout, it turns out pretty well. For browsers that don't support Transforms, we can still present a layout that doesn't use those properties with the help of feature queries.

Things get interesting when we aren't fixated on making things look the same all the time.

3D transforms also make for great visual impact. The benefit of doing it with text plus CSS is that it provides much better accessibility than sticking the text in an image.

With 3D transforms, we are operating with one more axis, which is the z-axis, for depth. So there are some additional properties like `backface-visibility` and `perspective`, for example. The `perspective` property controls how far an element appears to recede into the horizon. The smaller the value, the more dramatic the 3D effect is.

So if I change the value of `perspective` here to something smaller, you can see that the horizon recedes much further away.

Support for transforms is really good for both 2D and 3D transforms, but you don't have to use them if they don't fit your project. It's just good to know this option exists when you do need it.

## On CSS shapes

Magazine layouts are chock full of interesting text flow shapes. Maybe we see this a bit more in fashion magazines, but shaped text is not exclusive to those publications.

Here's one from Bloomberg Businessweek.

Newspapers do it too, sometimes.

Generally, the idea is to let the text flow around something so it's not laid out in a rectangular shape all the time.

The CSS module that let's us do this is called CSS shapes. For now, we can only let text flow around shapes and images with the shape-outside property. When you apply this property to a floated element, text will flow on the opposite side of the float.

There are 4 basic shape functions we can use to define the outline around which we want the text to flow, namely, `circle()`, `ellipse()`, `inset()` and `polygon()`.

These same functions are also used in the `clip-path` property, so as you can see in the `polygon()` example, both properties share the same value.

Firefox shipped support for Shapes in 62, and with it comes a nifty Shapes editor, that allows us to see and edit shapes created by `clip-path` as well as basic shapes from the shape-outside property.

If you inspect an element that uses `clip-path` or shapes, you should be able to see an icon next to the shape function to toggle the editor, which you can then manipulate in the browser and see the values update.

My personal favourite is shapes from images. Somehow seeing text flow around the outline of an image makes me happy. The image has to have transparency, because the alpha channel is used to compute the shape. Pixels which fall below the `shape-image-threshold` value are “ignored“ so text just flows into that area instead.

The only browser hold-out at the moment is Edge, but the property is under consideration, so I encourage all of you to vote for this feature. I myself have tossed in 3 votes for this.

## On writing-mode

Another aspect of layout we are close to matching in the digital world is the ability to typeset writing systems other than those which flow horizontally from top-to-bottom. Arabic and Hebrew scripts are read from right-to-left.

We also have East Asian scripts like Chinese and Japanese that can be written both horizontally and vertically. And the writing-mode property allows us to cater for vertical writing on the web via CSS.

Like I mentioned, vertical writing is traditionally East Asian. For Han characters, which are used in Chinese, Japanese and Korean. The inline direction is from top-to-bottom and the text is read from right-to-left.

But you don't have to miss out on the fun just because you don't design for those languages. Vertical text has been part of print design for quite a while now, and it's about time the web got in on it as well.

This example demonstrates the `writing-mode` property's different values, `vertical-rl` and `vertical-lr`. We can combine `writing-mode` with other properties, like transforms.

It is also possible to control the orientation of individual characters with the `text-orientation` property, like so. But how can we use this in the context of a horizontal writing system?

One idea is for headers. It might not be the best idea to layout long chunks of text vertically because that just makes it hard to read. But using vertical text for short titles or headers can break up the monotony of a long page.

There are a number of small components where we can subtly sneak in some vertical text without affecting the users' reading experience. Things like tags on blog posts, or wherever information is not critical to the main content.

Stripe's online publication, Increment, chose to use vertical text on its menu links on landscape view, but once the viewport grows narrow, they morph back to a horizontal layout. That's why we have media queries, no?

Also, depending on the number of links in your navigation menu, perhaps a vertical layout on a narrow screen could be a design option worth considering.

Today's CSS really gives us a lot more creative choices as compared to when responsive design first was a thing back in 2010.

## On the evolution in web layouts

A major evolution in web layout is the ability to position and align content in both the inline and block directions.

Alignment along the inline axis was generally well supported from the start, especially for languages that were read horizontally from top-to-bottom. Moving text or blocks of content horizontally wasn't too complicated, we had `text-align`, we could use auto-margins to centre blocks.

But vertical alignment required a lot of workarounds, a lot of hacks and frustration. Luckily, CSS is not a fixed technology. Changes were introduced, improvements were made, and now we have a suite of tools for two-dimensional alignment and layout.

## On Flexbox

Flexbox is short for flexible box, and it was conceived as a powerful tool for the distributing space and aligning content in ways that web apps and complex websites often need. Yes, I quoted from the specification.

When people complain that Flexbox doesn't make sense, and their items are not sized the way they want, they are fighting against the flexible nature of items in a flex formatting context.

Because flex formatting contexts can operate in both dimensions, the auto-margins technique makes centring components much less painful.

Any positive free space will be distributed to auto margins in their respective dimensions. So if I set a `margin-left: auto`, Boxie here ends up all the way on the other end of the container. And if I do a `margin-top: auto`, Boxie gets sent all the way down.

If we don't specify a dimension, then any free space will be equally distributed on either side of the flex item. And I love showing this example to people who have just started out with CSS and ran into a wall when it comes to centring items.

A common issue I hear is that it's difficult to create a grid system with Flexbox. The thing about Flexbox is, even though you can make a grid system with it, it's not the best tool for building a grid system.

Items in a flex formatting context are aware of each other in a single dimension, either vertically or horizontally. When flex items of equal width wrap to the next line, it may seem like we get rows and columns, but there is no relationship between flex items stacked on top of each other.

Does that mean you can't use flexbox to layout large numbers of items? Not at all.

Here, I have a list of images. Once I apply `display: flex`, all the items are shrunk and laid out in a single row. If I turn on wrap, they all revert to their original size and wrap down to the following row if there's insufficient space on the current flex line.

I'll turn on the border so you can see how each flex child behaves. Now instead of the initial behaviour of shrink but not grow, I'll change it to grow but don't shrink and make the images take up the width of the child container. Now we can play with alignment.

I can do an `align-items: center` and create this jagged look. But maybe we want it a bit neater. We can do that by standardising the height of the flex children. But this makes the aspect ratio screwed up, so a compromise could be cropping off the taller images with the `object-fit` property.

I can also change the direction of the layout by setting `flex-direction` to `column` and giving the container a defined height. Now I've got this horizontal scroll going on.

And again, we can play with alignment. Now that the flex direction has changed, the block and inline axes have also changed. `justify-content` now shifts along the vertical axis, while `align-items` shifts along the horizontal axis.

But maybe we don't want all those gaps. Remove the alignment code, make the flex children totally flexible and images fill up their containers' heights. Using `calc()` allows me to account for the margins of each image with respect to their container heights. Let's fix the standardise the widths of all the images.

Such layouts are a demonstration of what Flexbox can do out-of-the-box. They are not hacks. These are native options that we have when it comes to designing our layouts.

Support for the auxiliary properties, `calc()` and `object-fit`, is pretty good. Lots of green. And they will only continue to get better in the near future. So feel free to experiment with them and see where they can fit in your projects.

## On grid

But back to the topic of grids. When we want to build proper grids with rows and columns, then Grid is the tool we want to reach for. Grid, like Flexbox, is also really good at dealing with free space without us having to explicitly account for it.

Grid introduces the `fr` unit, which represents a fraction of the free space in the grid container. Tracks sized using `fr` will adjust depending on how much free space is left over, and fill up the available space accordingly.

A common use case that `fr` units can solve for, are responsive uniform grids that need to adjust to the width of the viewport.

For layout methods that revolve around the width of the grid item, like floats or `inline-block`, multiple media queries are necessary because the width of each item has to be explicitly stated at each breakpoint.

With the `fr` unit, we cede control of the sizing of each grid item to the browser, allowing the browser to figure out how large each grid item should be based on the parameters we provide through some new functions that CSS grid introduces.

One such function is the `minmax()` function. This function allows us to do something we never could before, which is to define a range of values. Now I can tell the browser that I want my grid columns or rows to be between a value of x and y, and the browser can figure out exactly what that value should be.

Also, if your design calls for a rather complex and large grid, you probably don't want to type out each track's width by hand. The `repeat()` function let's us repeat patterns of track sizes so we won't end up with ridiculously long lines of column or row sizes.

The `repeat()` function also takes in the keywords of `auto-fit` and `auto-fill`, which are very similar.

Both these keywords tell the browser to generate the number of tracks required based on the track list specified as the second argument. The minor difference is that for `auto-fit`, any empty tracks are collapsed.

This becomes more evident if you're using a flexible range for track sizing.

In this example, I have asked the browser to make me columns that are at least 150px wide, but can grow if free space permits. Currently, the keyword set to `auto-fill`. The available space can contain 8 columns. Even though I didn't have enough grid items to fill up the last 2 columns, those columns still take up space.

When I change it to `auto-fit`, the last 2 columns are collapsed and the columns that do contain grid items grow to fill up the empty space.

Let's put it all together. Now, we're telling the browser that when the viewport size shrinks, to cap the shrink of each column at 10ems but if there's extra space, grow all the columns equally.

By using `auto-fill` (or `auto-fit`), the browser will calculate how many columns fulfil the requirement. When the viewport size changes, the number of columns will decrease or increase until everything fits. And because the maximum value is a flexible unit, if there is an excess of space, all the columns will grow equally to fill up that extra space, so there will never be awkward whitespace on the sides at any point.

One more thing I want to mention is the concept of an implicit grid. The explicit grid is the one we define using `grid-template-columns` and `grid-template-rows`. But there's nothing stopping us from placing an item outside the bounds of this grid. What happens then?

I've defined a 3x2 grid here, but there are more than 6 grid items. The browser then generates implicit rows and columns to hold the extra items.

The explicit grid column lines here only go up to 4, but if I place an item on line 6, the browser generates 3 more implicit columns so my item can be placed accordingly. These columns take up enough space to hold the items' content, but we can adjust this with the `grid-auto-*` properties.

The `grid-auto-flow` property lets us adjust the direction and density of grid items. When your layout consists of items of varying sizes, you end up with gaps in between them, and some of them are rather large gaps. What we can do is add the `dense` keyword, to pack in those gaps with any items that can fit.

We can also use the `column` value to switch up the direction of flow. Let me change up some values, and voila, a horizontal scrolling layout. We can also pack them close if we want to.

If you plan to start exploring Grid, or already are using it, I highly suggest using Firefox for its excellent Grid inspector. To toggle it, click on the waffle-like icon next to `display: grid` on your grid container element. It will then show all the grid lines and you can see where your grid items have been placed on the grid.

We also get a Layout panel which provides additional customisation options like displaying grid line numbers and grid areas, as well as setting different colours if there are multiple grids on the same page.

## Wrapping up

So we've covered quite a bit by now. But I hope I've shown how much CSS has evolved, and how it calls for us to revisit some of the practices and mindsets we have built up over the years.

Bruce Lee had put forth a criticism of martial arts masters who build up an illusion of fixed forms, who attempt to solidify the ever flowing. He called such practitioners insensitised patternised robots who merely perform methodical routines as responses rather than responding to “what is”.

Perhaps we too, should allow our web designs to respond to “what is”. Perhaps we should be coming up with designs that “listen” to the circumstances of the different browsers that render them.

Back in 1996, there were around less than 100 properties in the first version of CSS. Today, there are currently 511 distinct CSS properties in the index, each serving a distinct purpose. There are properties for colour, sizing, typography, layout, animation, visual effects, even sound. When we explore the myriad of potential combinations, the possibilities for the web are pretty endless.

Here's a list of resources related to the things I covered in today's talk and I'll share these slides for anybody who is interested.

I want to leave you all with one final Bruce Lee quote. That true observation begins when one is devoid of set patterns and freedom of expression occurs when one is beyond systems.

And I hope that this will inspire you to create designs that truly embrace the nature of the web.
