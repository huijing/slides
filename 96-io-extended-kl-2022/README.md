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

This property determines how much of the available free space ought to be distributed to a particular flex item. It is only apparent when the flex container is larger than the total widths of the flex items within it, hence the available free space for distribution.
