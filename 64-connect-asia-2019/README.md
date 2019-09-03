# Creating art with CSS

*For CONNECT Asia 2019. This is sort of a transcript of the talk.*

Hello everyone. It's not often that I get the chance to address a room full of women in tech, so thank you to the organisers for putting me on this stage. Today, I'll be talking about creating art with CSS.

My name is Hui Jing, and these are the emojis that pretty much describe who I am as a person. Feel free to interpret them however you like. If any of them don't make sense to you, you can always ask me about them later.

I also have a day job, because gainful employment is a kind of a good look. Currently, I'm with Nexmo as a Developer Advocate. Nexmo being a company that does communication APIs for messaging, voice, verification among many others.

But enough about me. Let's talk about art. What do you think about when you see or hear this word? Do any of these famous paintings cross your minds? Or maybe you're more of a sculpture person? What about more contemporary pieces? Some people might not consider them works of art but personally I find them aesthetically pleasing.

This is the definition of “Art” from the 1913 edition of Webster's dictionary. The application of skill to the production of the beautiful. Art in and of itself is subjective, and hence there is not a single universal definition, but I think this one is pretty good.

I think most of us went through some basic drawing and art lessons in school. I can confirm this for people in my generation who went to school in Singapore or Malaysia. Nowadays, I don't know what the kids are learning, nor do I know what you actually learnt, but I got some basic knowledge about colours and shapes.

I'm also a terrible student, in that, when I was told to do art, I didn't want to. When I was not supposed to be drawing, that's all I did. This is the kind of nonsense I did in class. So now you know why I'm not in teaching. Karma is real, my friends.

But what I figured out from all that doodling is that capturing something in the real world onto a piece of paper is a mainly about observing and breaking down what I see into simpler and simpler shapes.

## Basic shapes with CSS

So let's talk about shapes. Let's talk about how to create basic shapes with CSS.

CSS stands for cascading stylesheets, which is a declarative method of telling the browser how you want elements on your page to look like. I'll be honest, I prepared this talk not sure what the audience mix would be like, but even if the code doesn't make sense to you, don't worry about it.

I think the point of attending a conference is to get inspired, to learn about what new things exist today, or maybe an overview of how they are used. But you would really learn that thing, that technology, when you go home tonight and try it out yourself.

This is a rectangle. A rectangle is a quadrilateral with 4 right angles, AKA an equilateral quadrilateral. Sometimes also called an oblong. Or you can say a parallelogram containing a right angle. Think about it, you cannot have a parallelogram with only 1 right angle. If 1 is a right angle, all will be right angles.

Anyway, we can also call this shape a box. And the web is made of boxes. Boxes lined up next to each other, stacked on top of one another. Boxes nested within other boxes.

Anything and everything rendered by the browser follows this box model. All the shapes we'll be talking about today are modifications onto this most basic box. The borders of a box are exceptionally versatile and one of the key properties for creating CSS art.

Circles are another basic shape, and they make use of a property known as border-radius. The value itself represents the radius of the circle at the corner of the box which affects how large the round corner is going to be.

If you can see here, by setting the border-radius to 50% of the width and height of a square box, we can get a perfect circle. The CSS for making is circle is not too complicated, but there is a lot more to the `border-radius` property.

There are many CSS properties in existence, and some of them are shorthand properties, which allow us to set the values of multiple other CSS properties simultaneously. This is applicable to common properties acting on the same theme, like `border-radius`.

A box has 4 corners, so the border-radius property takes anything from 1 to 4 values. And the order in which these values are applied to the box is a clockwise direction starting from the top left corner.

To make a semi-circle, we would want to chop a circle in half. Since we made a circle by carving off the sharp corners of a square box, half of that we are only carving 2 corners off a rectangle whose width is double the height or vice versa.

And if we want a quarter-circle, the `border-radius` of any one of the corners has to expand to 100% of the width of the box to achieve this desired effect.

Moving onto another basic shape: triangles. Pure CSS triangles are made with borders. Often, we use borders that are relatively thin, and hence most people never notice what happens when borders meet at a corner.

Turns out, they meet diagonally. We can work with that. What if we have a box of just borders and no actual height and width? This means that the thicker the width of the border, the larger the triangles created.

Most of the time, we don't want all 4 triangles at the same time. So we make the other 3 invisible by setting a border colour of `transparent` on the sides we don't want. And this is the technique for creating isosceles triangles, pointing in each of the 4 directions.

Right-angled triangles are kind of interesting as well, but still operate on the same principles. It's about hiding the sections of the border that you don't want.

Some of you who are more mathematically inclined may have already realised that with some trigonometry, adjusting the widths of 1 border can give you a specific scalene triangle as well. And you thought high school math wasn't relevant in CSS.

## Complex shapes with CSS

Rectangles, circles and triangles are great, but sometimes you need more complex shapes or more nuanced curves. And we have CSS properties to do that as well.

A relatively newer CSS property called `clip-path` lets us make more complex shapes by creating a clipping region which defines which parts of the box is visible. You could use basic shape functions like `circle()` and `ellipse()`. Or you could define a more custom shape with the `polygon()` function.

Each point is on the shape is defined by 2 values, like x and y coordinates on a cartesian plane. And you can define as many points as you like.

There are tools that can make this point plotting much easier. If you use Firefox, this is built into the DevTools already. You can toggle this particular tool by clicking on that little icon next to your function and handles will appear on your shape. You can drag those handles to adjust the shape and then copy the result into your code.

My earlier explanation of border-radius was incomplete. The rounded corner does not necessarily have to be an uniform circle. You can very much define an ellipse by providing different values for the 2 dimensions. The 2 values are delimited by a slash, and the first value specifies the horizontal value, while the second value specifies the vertical value.

This opens up many possibilities for irregular shapes. Your `border-radius` could potentially have up to 8 values. But the order remains the same, for example, the first corner for top-left, has a horizontal radius value of 100%, and a vertical radius value of 60%.

Now you can write all those values by hand, but if there's a tool available to do it more easily, why not? Somebody made a fancy border radius generator that will calculate all the requisite values for you that you can copy and plug into your own code.

CSS also has a transform function, which if you are familiar with image editing software, behaves pretty similarly in that you can rotate, scale, translate and skew an element on the page.

Transforms are also cumulative, which means that you can combine multiple transforms, BUT, they have to be within the same CSS declaration. Otherwise, because of the cascading nature of CSS, your previous transforms will not apply, and only the last declaration would be in effect.

## Creating/combining multiple shapes

Now that we have all these shapes, we need some way to put them all together. This is the most fun part of CSS, in my opinion, because even though the individual properties are pretty cool, the full power of CSS comes from using various properties in different combinations to do amazing things.

I want to bring to your attention one of my favourite CSS projects on the web today, which is called A Single Div by Lynn Fisher. She has created all these amazing illustrations on the web with pure CSS using only a single div element. And so this next section is going to cover CSS properties that lets us do things like that, and how to use them.

One way to get around the limitation of having only 1 element to work with is to utilise pseudo-elements. Using `::before` creates a child element that is the first child of the selected element while using `::after` creates a child element which is the last child. So instead of just 1 element, we can now have 3 elements to work with.

In order for the browser to render these pseudo-elements though, they must have the content property set, regardless of whether or not there is content between the quotes.

The `position` property in CSS lets us set how an element is positioned in a document. Under normal circumstances, the browser renders elements on the page sequentially according to the order they appear in the source. Think of them as all existing on the same level.

When we set a position of `absolute` of an element, we have removed it from the normal flow. But we can also then position it however we want relative to a parent element with the `top`, `right`, `bottom` and `left` properties.

Before we move on, let's see how we can create a simple illustration of a heart with only 1 div using the techniques we've just covered. We start off with a red square, height and width of `30vmin`. To make the round parts of a heart, we will need to use both pseudo-elements, so that's what the content property is for.

We want to position those 2 round pseudo-elements relative to the square, so we have `position: relative` on the parent and `position: absolute` on the pseudos. After that, it's a matter of tweaking the position of the circles and rotating the whole thing by `45deg`.

What if 3 elements is not enough for the piece we had in mind? Looking at some of Lynn Fisher's creations, there is clearly no way only 3 elements were involved. Gradients can be another way to add elements to your art piece.

This is the syntax for setting a linear gradient on an element. There is no limit to how many colour stops you want to apply, so you could get some pretty realistic effects by blending the right colours.

But in addition to adding shading and depth to our creations by mimicking the existence of a light source, we can also define clean colour stops to make it seem we have more elements that we actually have. Or create stripes, which are essentially bands of colour.

Just make sure the end of the previous colour stop matches exactly the start of the next one to get a sharp edge.

If what you need are concentric circles, then radial gradients are probably what you're looking for. They operate similar to linear gradients except with some additional positioning values.

So you can shift the centre of your concentric circles to achieve different effects. For that you can use keyword values like top, right, bottom and left, or CSS length units. The length will be distance of the centre from the edge of the box.

Lastly, I'm going to talk about shadows. A shadow is cast by an object. Which means the shadow will always be the same shape as the object which cast it. So shadows are great for creating multiple copies of the same shape.

The syntax may seem a bit complicated, but similar to the other CSS properties we covered today, if you can remember the exact syntax, great. Good for you and your strong memory. Otherwise, it's fairly trivial to check the MDN web docs for the correct syntax.

A pattern of circles can be created with a single div. Can you tell which is the original?

We also have text shadows, which like box shadows, have no limit to how many shadows you want to apply but if you do use more than 1, then keep in mind they are applied front-to-back, meaning the first specified shadow on top.

If you decide to make the offset significantly large, you would have duplicated the original text. Textual content is more than just alphanumeric characters though. Something multi-coloured, like emoji, end up as a flat colour. Because it is a shadow, and shadows don't have colour.

## Building pure CSS national flags

Today is the national day of my country, Malaysia. Our national flag, Jalur Gemilang, or Stripes of Glory, is made up of 14 alternating red and white stripes along the fly, and a blue canton with a crescent and a 14-point star called Bintang Persekutuan (Federal Star).

I had a conversation with Gao Wei, who's giving a workshop in the other room right this minute, about how most kindergarteners will never get this flag right. There are so many things that could go wrong.

But, that 14-point star is a challenge, a challenge for Malaysian web developers to create in pure CSS to celebrate national day.

Building this flag requires a lot of the techniques mentioned earlier, like border-radius, transforms, gradients and so on. One thing I didn't mention is the calc() function, which allows you to do arithmetic in the browser.

I use it extensively here because I want my flag proportions to be just right. And it also makes it easier to change the size of the flag. We start with a linear gradient to create stripes. 14 stripes! Using 14 clean colour stops.

Then comes the blue canton, which we can use a pseudo-element to create. Why waste an extra element so early in the process? The canton should take up the height of 8 stripes, while the width should be half of the whole flag.

The next part would be the crescent. If you think about it, a crescent can be made with 2 circles, one slightly larger than the other. As long as the smaller circle is the same colour as the background, we can offset it until we get a crescent in the width and direction we want. So we can use the `::after` pseudo-element here for the larger circle.

Here's where I ran out of brain cells, and started using child elements. This here is the smaller circle I was talking about, and positioned slightly off to the right from the bigger circle, creating the illusion of a crescent.

Now is the most exciting part. The infamous 14-point star. This is definitely not the only way to create it, it's just the method I chose to use. Start off with the core of the star, positioning it relative to the crescent. You don't see anything because there is no width or height on this core, it's for positioning purposes.

Now we start building the star. Starting off with a simple rectangle. Remember that 1 element can actually become 3, so use the `::before` pseudo-element with the triangle border trick for the top point. And do the same with `::after` for the bottom point.

We need to repeat this 6 more times, with each pair of points rotated so they fill up the entire core of the star. Here is where the transform property comes in handy. And so, I present national day fireworks. These are also pure CSS, and I'll just leave this hanging so those of you who are interested will go find out how to make them.

But we are here now, in lovely Singapore, so I must talk about the Singapore flag as well, because you can make it with just a single div. The Singapore flag also has a crescent.

Another method of creating the crescent is via the radial gradient property we discussed earlier. Because there is no limit to the number of gradients you can apply to an element, 2 circles made from 2 radial gradients, offset in a similar manner as the previous method, can give you this crescent.

The stars on the flag, are regular 5-point stars. Which are Unicode characters, i.e. text. Which means, we can text shadow it and save more elements. Pseudo-elements can totally be shadowed, and that's where the 5 stars come from.

## Some inspiration for interested people...

By now, you already have a good basic knowledge of the CSS properties for drawing stuff in your browser. And I'm just going to show you what is possible, with a lot of patience and many many more elements. Anime art. Totally possible. Created by a friend of mine, Van, who is also based in Singapore. Don't think she's here today, but she is pretty amazing.

Old school Gameboy? Sure, why not. If you enough well-placed gradients, then you get this effect of realism, kinda like painting. The full code actually includes sound, so if you have some time, check out the CodePen.

And now we move into the realm of nuts. Nuts because this level of CSS art creation takes a lot of effort and patience, but the end result is stunning. This one is also by the same guy, Ben Evans. I've linked to his blog post on this subject. He doesn't actually tell you how he does it, his source code is public on Codepen though.

This piece actually hit mainstream news because social media works in mysterious ways. Might be because people started viewing it in any and every browser they could find and the end results were quite interesting. Link to one of the articles written about it included at the end as well.

I'm sure some people would think, creating art with CSS seems pretty useless. What's the business case for it? Where's the ROI? But to me, doing things for the sake of it is a very good thing.

To end off, I want to quote another friend of mine, who makes cool stuff on the web as well, like mind-controlled Javascript and using motion to control stuff in the browser. That useless is not worthless.

There is worth in spending time just doing things because you feel like it. There is worth in learning how to use standard everyday techniques in new and creative ways. There is worth because you created something beautiful. And that is something you cannot put a price on.

Thank you for your time.