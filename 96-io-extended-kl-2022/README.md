# A deep dive into Flexbox and Grid

*For I/O Extended KL 2022. This is a sort-of transcript plus my notes for the talk.*

Hello everyone!

I haven't been back to KL since before COVID, so it's very nice to be here. Thank you to the organisers for allowing me to come and talk to you about my favourite topic in the world, CSS. My name is Hui Jing, and I'm currently based in Singapore, and working as a frontend developer.

I know that CSS is not everyone's cup of tea, and I'm not here to tell you to love CSS as much as I do. But regardless of your FEELINGS about CSS, if you happen to work on the frontend of the web, odds are you will still have to cross paths with CSS somehow.

Again, you don't have to love it, but I'm here to share with you that it is now easier than before to build layouts that are suitable for the web, which is a medium that is quite special. If you think about it, there are not that many places where something you design is almost never viewed in exactly the same way.

Technology evolves very fast, I know, but as of now, most web interactions involve a screen. And these screens can be as small as a watch-face or as large as a 70-inch super HDTV. And you, the developer or designer or creator, can't really control this.

This means, the way we think about designing layouts on the web cannot be like anything else that is fixed. It's quite a different mental model, and so, the tools we use must suit this fluid, interactive medium. Luckily for us, now that Flexbox and Grid are very well supported across all major browsers, our toolbox has been greatly upgraded.

These 2 layout models were introduced after the web started evolving to be more than just a document viewer. They were built to handle application interfaces which would be viewed across many different screen sizes.

Laying out and sizing block boxes or inline boxes involves applying properties onto the boxes themselves. Block and inline boxes are, in a way, unaware of the boxes around themselves. In order to layout boxes in a specific manner, you would have to adjust each box individually.

Both Flexbox and Grid operate on a parent-child relationship. Relevant display properties applied onto a parent container will affect the direct children within it, and the child items themselves will have an “awareness” of their siblings within the same formatting context.

This relationship does not extend beyond the immediate child elements, so that's something to keep in mind when debugging. Especially for those of you who work in codebases where you don't have full control over the markup, or if the markup is spread over different levels of nested components.

When you set the display property of a box to `flex`, it creates a flex formatting context for its immediate children. Elements in a flex formatting context have a different set of behaviours from those in block or inline formatting contexts.

These behaviours are:
- the flex container's margins will not collapse with those of its children
- `float` and `clear` do not apply to flex items
- `vertical-align`, no effect on flex items either
- flex items can still be taken out of flow with absolute positioning
- flex items are flex-level boxes, not block-level boxes

The term flexbox is short for flexible box, which means that the size of the flexbox can grow and shrink to adapt to the amount of free space available in its parent container. This concept was completely different from what most web developers were used to when it was first introduced, and many folks found it hard to understand.

This was because the size of a box was usually a direct reflection of the width or height values we set on it, but in a flex formatting context, the final size of a flexbox may not necessarily be that exact value you declared. Today, we have the benefit of Devtools that can break down and show you what the browser is doing when calculating the sizes of your flexboxes.

The `flex` property only applies to flex items and specifies the components of a flexible sizing. `flex` is actually the shorthand property for `flex-grow`, `flex-shrink` and `flex-basis`. The specification encourages you to use the shorthand instead of the individual longhand properties because the shorthand resets unspecified component values to accommodate the most common use-cases.

When you apply `display: flex` to an element, all its immediate children have their `flex` property set to `0 1 auto`, which resolves to a `flex-grow` of `0`, a `flex-shrink` of `1` and a `flex-basis` of `auto`.

`flex-grow` determines how much of the available free space ought to be distributed to a particular flex item. It is only relevant when the flex container is larger than the total widths of the flex items within it, because only then will there be free space to distribute.

Let’s say we have 3 boxes, A, B and C, and their widths are `170px`, `140px` and `160px` respectively. These 3 boxes live within a parent container of `800px`. Which means there is `330px` of free space within that container.

In a flex formatting context, how this extra `330px` is distributed between the 3 boxes is determined by the flex-grow value. It is a number value that determines the flex grow factor of a flex item. If all 3 boxes have a flex-grow of `1`, then they each an equal amount of free space and end up with an extra `110px` each.

Or if you only want space evenly distributed to the first 2 boxes but none to the last, you would set the flex-grow for A and B to be 1 and leave C alone, which would give A and B an extra `165px` each and C would not grow at all.

It is important to remember that the flex grow factor impacts the amount of extra free space distributed and not the size of the flex item directly.

`flex-shrink` is very similar to `flex-grow` but in the opposite direction. In other words, this value determines how much a flex item should shrink so it can still fit within the bounds of its parent container. It only becomes relevant when the width of the parent container is less than the sum of all the widths of the flex items.

The calculations for how much a flex item should shrink is not as straightforward as for flex grow. Again, if you have Firefox Devtools, you will be able to see the calculations up to 2 decimal points but that’s how the browser got to those values.

If you do not want any shrinking to occur, you set the flex-shrink value on your flex item to 0. This will prevent the flex item from shrinking below its original width but may result in your flex items overflowing their parent container.

Lastly, `flex-basis`. This property is key for understanding how sizing works with flexbox. The `flex-basis` value determines the starting value of the flex item, which, depending on the situation, may not be the final value of the flex item.

The initial value of this property is `auto`, which is the width value of the flex item if one was explicitly set. If no width value was set, then this value will be whatever the size of the content is in the flex item.

If a width value is present while the `flex-basis` value is set to `auto`, then `width` will be used as the starting value from which the browser calculates the final size.

But if an explicit `flex-basis` value is set, then that value is used as the starting value from which the browser calculates the final size.

Earlier, we talked about the concept of free space being whatever space leftover in the parent container after accounting for the space taken up by flex items. This space taken up by flex items can *either* be the width of the content in the flex item, an explicit width set on the flex item or its `flex-basis` value.

There is, however, a way to let the browser treat the entire parent container as “free space“ and distribute it according to the `flex-grow` values. You can do that by setting `flex-basis` to `0`.

Content flow is closely related to the writing system being used. Most of us are familiar with the horizontal, top-to-bottom orientation used in English and Malay. But writing systems can be right-to-left for Jawi or Hebrew, and vertical, right-to-left for Chinese or Japanese. Traditional Mongolian script is vertical, left-to-right.

Before flexbox came along, if you wanted to do content that flowed from bottom to top, it would be almost impossible. Not without maybe using Javascript to rearrange the source order. But with `flex-direction`, you are not limited to any particular direction at all. Any of the 4 directions are possible.

In the default horizontal, top-to-bottom writing mode, flex items along the main axis flow from left to right and if they wrap, will continue down along the cross axis. If you change the `flex-direction` value to column, then the flex items along the main axis flow from top to bottom, and wrap from left to right along the cross axis.

You can even reverse things, and end up with content that flows from bottom to top.

But as nice as flexbox is, there is still a limitation. Or maybe its more accurate to say, it is something that flexbox was not meant to do. And that is to create actual grids that recognise an x and y axis.

All other layout models on the web only provide control in a single dimension. Elements in every layout model are laid out one after another. And when we force them to be the same width, they naturally just line up in a grid. However, every element has no idea of its own position in relation to any other element around it.

Grid systems built on these single dimension layout models rely on math to get items to line up neatly in rows and columns. This is a large reason why there were numerous grid libraries that would do the math for you and provide you the appropriate CSS classes to apply to your elements instead.

CSS grid provides an actual two-dimensional grid which you can explicitly place your grid items in based on their row and column positions. It requires the developer to have a clear picture of the entire grid’s structure and sizing so grid items can be presented in the desired manner.

Grid introduces some properties and values that make building grids a lot more intuitive and convenient than before. So the basic scenario we have is to have a 4 equal-width column grid with a 20px gap between each column. 

We can do something like this, which is actually a 7x2 grid. This sort of works but there are a couple issues with this approach. In this grid, the spacing between our “main” columns are actually columns themselves, which means content could get rendered in these “faux” gaps. There is a better way.

The `gap` property provides a very clean way of adding spaces between your columns. So with both overlays turned on, you can see the grid may look the same, but you can be sure that items will not end up in your gap columns by mistake.

This grid is very fixed, too fixed for the web. It should be able to grow and shrink with the viewport, so let's make it responsive, with relative sizing. `25%` seems very reasonable, but with the overlay turned on, you can see there's an unwanted overflow. This is because the total size of the columns plus gaps has exceeded 100%.

When setting column widths with percentages, you will have to account for the size of the gaps yourself. You can use `calc()` to help you and come up with the column widths like so. But it's a pain to have to repeat such a lengthy formula multiple times.

We can use the `repeat()` function to simplify the code. This function allows you to repeat *patterns* of grid row or grid column sizes. It takes in 2 arguments. The first argument defines the number of repetitions, while the second argument defines the pattern to be repeated. So you could rewrite the grid-template-columns value to something much simpler.

Even though it now looks slightly better, I still find this a bit ridiculous. Can you imagine having to update this code with new calculations every time you want to change the size of the gap or number of columns? Also, the browser is better than me at math, why am I the one doing the math?? 

In order to let the browser take over the math, we can use the `fr` unit. It is a flexible length unit that represents a fraction of leftover space in the grid container. The advantage of having the browser figure out how to handle free space in the browser reduces the odds of having layouts “break” when you hit certain edge cases. Let the browser do the maths, I say.

And this is finally a decent looking block of grid code we can explore further.

So far the grids have been empty, so let's add some items to the grid. If you don’t explicitly place the grid items, they will fill up the grid one after another according to the writing mode direction. Items will by default take up the space of 1 single grid cell unless otherwise specified.

Explicitly placing items on the grid is similar to plotting points on a graph using x and y coordinates. You would set these properties on the grid item itself, and define the position on the grid via grid line numbers.

The properties to let you do this are `grid-row` and `grid-column`. The first value for both properties indicates the start line, and the second value for both properties indicates the end line in each respective dimension.

If your grid has many many items, it doesn't make sense to place all of them individually. The grid algorithm is quite smart, and the order of auto-placed items seems quite logical. The browser will check if the `order` property applied anywhere and items will be placed in that specified order. If not, the source order is followed.

The grid will first place any items that have an explicit position, e.g. if you defined a grid-row or grid-column value. Items without any placement properties will fill up the empty spaces in the grid if they can fit. If they cannot fit, then they will be placed further down the grid.

Grid also makes it much easier to do overlap designs. Because as long as you specify the row and column value, the browser knows what to do with the item. And the stacking order follows the source order, unless you define `z-index` explicitly.

One more thing I want to highlight from the long list of features Grid introduces is named grid areas. This feature is really handy for building responsive layouts. After defining the grid, you can additionally div-y up the grid into specific areas with `grid-template-areas`. Then you can allocate your grid items into those areas with `grid-area`.

Alignment isn't really magic, but it is almost like the glue that pulls everything together. Alignment properties are only available for flex and grid at the moment, but there is discussion on getting this for all layout models in the further future.

There are 6 properties, and grid can use them all, but for flex, `justify-items` and `justify-self` are not applicable. If you can see the diagram for each “set“ of properties, the `content` ones are for moving all the content within any free space in the container.

The `items` ones adjust all the items within their allocated space. So for flex items, only the `align-items` property applies, because it is possible to have free space along the cross axis. But along the main axis, items are always flush against each other, with no opportunity for any free space at all.

The `self` ones work the same way as the `items` ones, except they only apply to one item, instead of adjusting all of them at once.

Okay, now it's time to put it all together.
