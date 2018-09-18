# Rich dynamic design with modern CSS

*For W3C Workshop on Digital Publication Layout and Presentation (from Manga to Magazines). This is sort of a transcript of the presentation.*

Good day, everyone. Today I would like to share some demos utilising some of the relatively newer CSS properties for laying out content on the web.

For the longest time, we have always transmitted and recorded knowledge on analogue mediums, on things that we can feel and touch. Digital, on the other hand, is relatively new, and all of us who work on this medium are still trying to figure things out along the way.

The web has made great strides in terms of the visual presentation of content, from layout to typography. At this point, I believe we are close to being able to match analogue typesetting.

CSS is our typesetting tool for the web medium, as with it, we can fine-tune the way our content is displayed to our readers, on the typography level as well as the layout level.

Font feature properties were introduced in Fonts Level 3. allowing us to utilise a variety of typographic features like swashes, ligatures, old-style numerals and so on. As long as the font you're using supports these features, we can toggle them with CSS.

There's one particular font variant property for East Asian text, allowing us to control glyph substitution and positioning for Han characters.

Depending on the language, the same character does not necessarily use the same glyph. This property allows us to toggle between variant glyphs of certain characters.

OpenType Font Variations, AKA variable fonts, were introduced in September 2016, and has been gaining quite a bit of traction this year.

A variable font is the equivalent of multiple individual fonts, compactly packaged within a single font file, which can potentially be a big plus when it comes to performance. And is especially significant for fonts with large glyph sets, like CJK fonts.

Depending on the font designer, a variable font can have 5 axes of variation, weight, width, italic, slant and optical size. These variations are exposed to CSS via font properties like font-style and font-weight.

Currently, there are only a few variable fonts available for East Asian languages like Chinese and Japanese, understandably because the effort for creating East Asian language fonts in general takes much larger effort due to their large glyph sets.

It is also possible for custom font axes to be controlled with CSS via the font-variation-settings property.

So in addition to performance benefits, the dynamism of variable fonts makes it perfect for the web medium, and opens up a world of creative possibility.

CSS shapes is a property that lets us address a use-case regularly seen in print magazines, to allow text to flow around a shape.

There are 4 basic shape functions we can use to define the outline around which we want the text to flow. And with the release of Firefox 62 earlier this month, 82% of internet users are now using a browser that supports shapes.

It is also possible for text to flow around an image. The image has to have transparency, because the alpha channel is used to compute the shape. Pixels which fall below the shape-image-threshold value are “ignored“ so text can flow into that area instead.

And even if a browser does not support CSS shapes, the design will not be broken, the text will behave as though the property was not applied.

Combined with the interactivity of the web, designs can respond to user actions like scrolling, and provide more compelling experiences for readers that we are unable to achieve on printed physical media.

Another thing that we are now able to do reasonably well on the web is vertical writing. Writing mode is not exactly a new thing, with Internet Explorer 6 pioneering in 2001 using an older version of the specification.

Although support did not roll out universally across browsers, right now, it is well supported, even on mobile. And that is a great opportunity, for typesetting East Asian publications, as well as for graphic design in other languages that do not have a vertical writing mode.

Currently, we have 5 values for writing-mode, of which 2 have been deferred to level 4 of the specification. Modifying the writing mode of an element changes the flow of its contents on both the block and inline level.

The specification also defines a property that lets us control the orientation of characters on a line of text, other than their default orientation as determined by the unicode Vertical_Orientation (vo) property.

We can also fit runs of characters into the space of a single character when the writing mode is vertical with the text-combine-upright property.

Right now, without the digits value supported, we can't really limit the number of characters to be squeezed into the one character space. Excessively long runs of characters will end up being distorted quite badly.

Together, all these properties allow to us to typeset vertical text that is generally comparable to print standards.

In a dynamic digital medium like the web, we can make use of the medium's interactivity to allow readers to change the writing mode of a document on the fly.

Adjustments will need to be made at each writing mode to ensure the spacing and kerning of characters provide a comfortable reading experience in either orientation.

To this end, the development of CSS logical properties, which allow the use of logical directions rather than physical directions can simplify the code required.

Without logical properties, authors would need to change the directions of margins and paddings when the writing-mode is switched.

One of the questions earlier was with regards to laying content in different directions. And the response was it isn't a technical problem. This example I just added to illustrate this point.

Combinations of the writing-mode property, the flex-direction and the flex-wrap property will determine the flow of content on your page.

Another major development in CSS is the release of CSS grid. Grid has been supported in stable editions of major browsers for more than a year now. And it offers an unprecedented level of control over the placement of elements on a page.

The ability to overlap elements on a design may seem trivial in print design, but until Grid came along, it was difficult to achieve on the web.

Grid makes it relatively simple to layer elements on top of each other, allowing us to further enhance our designs with visual effects that make use of blend-modes.

This is a simplified example that illustrates what I just described using solid blocks of colour, but more elaborate effects can be achieved if we size our grid columns with flexible units, or allow images to overlap and blend.

Vertical spacing was another challenge the web medium faced before CSS grid came along. Use of margins and paddings was unwieldy, especially when the viewport size changed. Absolute positioning disrupted the normal document flow and was tricky to maintain as well.

With CSS grid, this is no longer a challenge, as placing items on a page becomes as straightforward as moving pieces on a chessboard.

A  challenge for web designers is the fact that we have no control over the environment in which our content is viewed. Media queries give us the means to cater for the wide spectrum of viewports our designs show up in.

As newer media features are added to the specification, web designs will be able to adapt to the users' environment and preferences as well.

The digital medium's advantage is its ability to adapt and morph before its reader's eyes. We are increasingly having more web APIs that allow us to support adaptive behaviour. For example, the picture element, which allows the serving of specific different images depending on the media query specified.

The most commonly seen media query is width. Using width to determine layout works fairly well when elements are sized with fixed units, because it becomes a matter of stacking blocks in an optimum manner.

But once we use viewport units, which are lengths that correspond the width and height of the user's viewport, we lose the solidity of each individual block.

For example, some designs work best on a landscape orientation, so using width as a media query is insufficient, as the height is not accounted for. Using an aspect ratio media query can counteract this issue by introducing height as a factor as well.

CSS used to be seen as a limitation when it came to designing compelling experiences, but as the capabilities of the web platform evolve based on feedback from various avenues, CSS can now be a tool that empowers designers to better leverage the interactivity and dynamism of a digital medium.

Thank you.
