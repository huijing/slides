# The State of CSS

_For Web Directions Code. This is a sort-of transcript plus my notes for the talk._

ello everyone! It's really nice to be here at Web Directions Code in person again. The last time I was in Melbourne for this was 2018, so yeah, it's been a while. And I said it before yesterday, but I'll say it again, as a child of the tropics, I love this frigid weather. The tropics are frustratingly hot and humid right now.

I currently work at the Interledger Foundation. In a nutshell, we are developing a new protocol to enable an interoperable global payments network. If any of those words mean anything to you and you'd like to find out more, happy to have a chat later. Or just talk to me about CSS, I'd love that too.

That was a segue back to what I'm here to talk about. CSS! Or more specifically, the state of CSS, both in general, and also the survey that I helped out with last year.

How many of you fine folks have heard of or participated in any of the State Of surveys before? Only last week, I realised there are a some of State Of surveys run by different organisations as well, but nobody has a monopoly on the term “State Of”. And rightfully so, otherwise all the wonderful speakers later today would have had to rename their talks.

So the series which the State of CSS surveys belong to started back in 2016 with Sacha Grief (spelled G-R-E-I-F) feeling confused about what Javascript technologies to spend his time learning, so he decided to crowdsource an answer by starting a State of JS survey.

One thing led to another, and the project grew from a one-man operation to a small team. The Devographics Collective (not sure if that's their official name or not) is now the team working on the much larger series of State Of surveys. It's a collective of these fine folks plus other contributors, volunteers, and translators that allow this project to continue year after year.

The State of JS survey has been running annually since 2016. And the most recent survey whose results has been released is the State of HTML survey. Even if you did not participate, I think it's still interesting to see the results.

Lea Verou was the key person who helped craft the HTML survey and in her conclusion she made an excellent point that these surveys are only a snapshot of developer perspectives, and reflects the state of the web platform at the time.

It is one of numerous data points that the folks working on web standards and browser implementations use to push the web platform forward, so I do encourage all of you to participate whenever a new survey comes out.

The survey itself is an application that gets less attention than the survey questions and results, but work is consistently done to improve its features and user experience. For example, The State Of surveys from 2019 onwards had started to allow users to customise data queries via GraphQL. Eventually, you could also update the charts to reflect the new query.

This allows folks who are versed in the ways of data analytics to explore even more insights and dive deeper into the data if they so wished. The 2023 version also introduced the concept of a reading list, such that folks going through the survey and found a property they wanted to learn more about, they could add it to their reading list and come back to it later.

If you too are interested to contribute in any way at all, you can join us on Discord or go check out the code on Github.

Before we really dig into things, I want to highlight the Interop initiative, which is a strong collaboration between all major browser vendors and friends for improving the web platform across the board. The point is to make the web platform more usable and reliable for developers, like you and I, so that we can spend more time building great web experiences instead of working around browser inconsistencies.

The initiative introduced the concept of Baseline, which seeks to provide more clarity to information about browser support for web platform features. There are 2 stages, a feature can be newly available when it becomes supported by all the core browsers, and it can be widely available after 30 months has passed since the newly interoperable date. Baseline is now part of caniuse.com so features that are in Baseline will show a badge, along with the year they became available.

The State of CSS survey has had 5 editions so far, and the 2024 version will probably be out later in the year. We covered quite a few CSS features, impossible to cover them all in 30 minutes. So I made some executive decisions and picked a handful to talk about today. While crafting this talk and looking over 5 years worth of data all at once, I was reminded once again of how much faster CSS is evolving today as compared to 5 years ago.

I mean, I'm far from someone like John, who has seen most, if not all of the web platform's evolution, but still, I came in just at the tail-end of table-based layouts.

Similar to Ben, I too have an eras reference, what can I say, it's a great descriptor for time periods. If we talk about eras (of CSS, not Taylor Swift), the early part of my career was the entirety of the floats era. And there will be eras to come, even if we cannot fully imagine what those might look like yet.

Layout is a striking part of visual design because it encompasses the broad structure of what we see in entirety, but I'll have you know, CSS wasn't even meant to be used for layout back when it first became a W3C recommendation back in 1996. If you don't believe me, you can go check CSS Level 1 under Appendix E: The applicability and extensibility of CSS1.

CSS is a lot more than layouts. As of last week when I checked, there are 589 distinct property names from 81 technical reports and 83 editors' drafts. My personal opinion is that for the average web developer, there is really no practical reason to know each and every one of these properties and what they do, although I'm sure somebody does.

My take on things is to have a vague idea that something exists and can be used to do a thing. You don't have to know exactly how the property works, all its values etc. until you encounter an use-case where that something might be useful.

Like, I'm clearly not from here, I've heard of the AFL. And this might sound blasphemous but I don't know the rules, nor any of the teams or players. Now, my friend Chris suggested we go watch a game this evening, and if I do decide to go, then I'm going to sneak off later to at least learn what the rules are. As of now, ¯\_(ツ)\_/¯

The survey has evolved over the past 5 years based on external feedback as well as internal reflection. For the 2023 edition, it started with Sacha and myself going through the list of CSS properties from the 2022 survey to figure out if we still wanted to keep them for 2023. Generally, we want to observe trends around new CSS features. Take Flex, for example, after 3 straight years of more than 95% usage numbers, we figured there wasn't much insight to be gleaned.

Another reason why features are "graduated" is to make room for new ones, because we also understand that if the survey grows beyond a certain number of questions, nobody is going to finish it. Which brought us to the next bit, of which new features to add. Our criteria was that the feature had to be usable by developers, so those that did not have implementations were not considered.

Generally, we expect the awareness of new CSS properties to gradually increase over time, usually it's the rate of increase that varies. Then, at some point, properties relate to more specific or narrow use-cases will see some sort of plateau, because if you never encounter a scenario that requires those properties, you probably will never learn it, much less use it.

Like blend-mode for example, which is used to determine how 2 colours are mixed when overlaid one on top of another. That is a rather specific use-case, which is why I think the awareness and usage has been stable over time.

Same goes for `overscroll-behavior`, which allows developers to deal with the default behaviour of scroll chaining, where scrolling is propagated from one scroll container to another. It is one of those properties where it's meant to change the default behaviour, which most of the time is an acceptable experience.

The only property that bucked the trend was content-visibility. It is a property that controls whether or not an element renders its contents at all. As part of the bigger concept of containment, you can think of it as belonging to the performance optimisation category of CSS features.

However, the proper usage of such properties usually requires in-depth knowledge of browser optimisations in order to achieve the intended results. I think a good way to describe this category of CSS is that it needs the developer to be very deliberate in where and when to apply them. Otherwise, it could even cause unnecessary overheads and make performance worse.

The `content-visibility` property sits in the CSS Containment Module Level 2. This specification was meant for the contain property, used to indicate that an element's subtree is independent from the rest of the page. Such a feature would allow user agents to use stronger optimisations during page rendering, provided contain was used properly.

The ideas introduced in this specification also helped pave the way for container queries. Container queries was one of those feature requests that browser implementers found particularly hard to solve. Miriam Suzanne, who played a pivotal role in the development of the container queries specification explains it as, container queries fundamentally breaks the idea of how flow works on the web.

Flow is a powerful concept unique to the web platform where content reflows to a container and containers that grow based on content. Layout information goes in both directions from context in and also from content out in this layout loop. But then, you also can't measure something in the middle of that loop.

David Baron of the CSSWG came up with a proposal that container queries should be possible if an element has both layout containment and has size containment in the axis used for the container queries. As Miriam Suzanne puts it, CSS containment is a promise from a container that certain things will not escape that container.

Size containment turns off intrinsic sizing, where content influences the size of the box. But it can be dangerous, see CSS is Awesome meme. As an aside, this meme is not as straightforward to perfect as it seems, especially if you want each word on its own line and the border to be between O and M, just saying.

But anyway, for container queries to become a reality, the discussion turned toward containment in a single dimension, specifically the inline axis. A new value had to be introduced to the `contain` property, namely `inline-size`, which prevents the inline-size of an element from directly depending on its contents.

From a browser implementation engineering perspective, there was a lot to work on, and it wasn't clear if this was possible at all, but they got it done. It is Baseline newly available now.

The recommended syntax to define a container by setting a container-type on the element in question. For size container queries, the value you want is inline-size. Now you can query the size of the container and apply styles based on the container's size.

What's cool is that the size used by the query is relative to the container's computed font size rather than the root font-size, commonly 16px. And to complete the suite of properties, we now have something called container query units, or cq units that allow you to set sizes of things relative to the size of the container.

The ability to apply styles based on the attributes of a container rather than the entire viewport fits very well in the component-based architecture that is fairly prevalent today. Such an approach allows the same component to be shared across various different contexts in a more predictable manner.

The code to implement something like this bookstore interface is more simplified than without container queries since every book uses the same code, and adapts itself based on the context where it needs to be displayed. This presents a refactoring opportunity for codebases that rely on duplicates to achieve a similar effect.

Moving on, we are going into colour in CSS. I personally love colours. I also love CSS. Therefore, CSS multiplied by colours equals much fun and happiness. A lot of colour-related features shipped over the past 2 years, so much that we were able to have an entire category for just for colour.

I was surprised by the awareness numbers for `currentColor`, which had been supported for the longest time, it even works on IE. 30% of our respondents had not heard of it.

I tend to use it for inline SVG icons quite a bit. Especially for icons that are fairly generic and get used in various different contexts and need to be in different colours. If you set the SVG fill to `currentColor`, changing the color of the element will apply to the SVG as well.

`accent-color` is genuinely newer, and hence less surprisingly that half our respondents never heard of it. But basically it allows us to change to the colour of these 4 input elements. And I know people want more customisability on input elements in general, but I think this is a good low-effort tweak we can make use of right now.

And we have come to the point in the talk where I might lose people because we're going to gently touch on colour spaces, which is a way we organise colours in the digital world.

sRGB (standard Red Green Blue) is an RGB colour space created by HP and Microsoft for monitors, printers and the Web. Even though there were better systems available at the time, RGB was deemed “good enough” and colours in CSS ended up being first specified in this format.

HSL is an alternative representation of the RGB colour model, but utilises a cylindrical geometry, with hue being in the angular dimension, saturation along the radial direction and lightness from top to bottom.

It's based on the organisation and conceptualisation of colours in human vision and was added to CSS in 2002 from the desire to have some sort of hue wheel system. But due to the cylindrical nature of the HSL colour space, it does not account for the complexity of how our eyes perceive maximum saturations for different colour hues.

What we end up with is an inaccurate lightness component. If you remember my poorly drawn diagram, you'll notice that blue and yellow are directly opposite from each other on the hue colour wheel. It just so happens that humans are least sensitive to blue, but perceive yellow as brightest.

Changing the lightness on HSL doesn't affect our perception of yellows and blues in the same way, and the perceived hue also seems a little wonky.

The CIELAB colour space was defined by the International Commission on Illumination in 1976 and was meant to approximate human vision and aspires to perceptual uniformity. Without going into the details of colour science which I am not qualified to do, the long and short of it, is that LCH and LAB have theoretically unbounded chroma values, and should be able to represent the entire spectrum of human vision.

TLDR: more colours. And also, a lightness component that is more intuitive to humans. The only issue was a bug in the math that resulted in an unexpected hue shift on chroma and lightness changes in blue colors. A Swedish software engineer, Björn Ottosson, created the OKLab colour space to resolve the bug and improve upon the math behind the colour axes.

When we modify the lightness value of OKLCH colours, even between yellow and blue, the perceived lightness between the 2 now matches much better.

Colour spaces are three-dimensional, which can be tricky to imagine but a linear gradient can offer us a look at what a slice of the colour space would look like when we move between the same start and end values.

This is adapted from Adam Argyle's colour exploration but you can see how each colour space differs for all the colours in between. Generally speaking, the gradients in OKLCH are more vibrant, and doesn't have the issue of stretches of dullness or greyness between the 2 colour stops.

So what can we do with these fresh new colour formats? A lot more, it turns out. How many of us have used a preprocessor to generate darker or lighter colours from a main accent colour? CSS Colors Level 5 introduces a new relative colour syntax that lets us do this with plain CSS.

You have to start with a colour, and that's the "from colour" bit. Then you can pick which colour space you want the output colour to be in. And each of the 3 colour component values can either be a percentage between 0% to 100% or absolute numbers between 0 and 1. Opacity is optional.

Optional, but highly useful in my opinion. Regardless of what format your original colour was in, be it hex or named CSS colour, you can add transparency to it. And all the colour spaces return the same result. A lovely bit of consistency for once, if you ask me.

The syntax destructures the colour into its component parts such that you can start playing around with them. You can use this syntax in any of the colourspace functions, I'm going with OKLCH for this example.

And since we can reliably use the lightness component in OKLCH, an entire palette of colours can be reliably generated based off our main colour. We are fairly close to Baseline newly available because it will be shipped in Firefox 128, which is the next stable Firefox release.

We do an Awards section at the end of every survey just for fun, and the feature that won "Most Adopted Feature", which is awarded to the feature with the largest year-over-year ”have used” progression was the `:has()` selector.

The `:has()` selector sits in the Selectors Level 4 specification under the Logical Combinations section, and it has been in there since around early 2018. But we only added it to the survey in 2022 because that was when browsers started shipping it.

Parent selectors have been requested for years, and it is not for the lack of trying. If I did not lose you during the container queries explanation, this is a rather similar situation where the challenge for browser implementers is how to manage the performance implications.

I have included links to some history in the references, but to summarise, Igalia finally made some forays into a workable prototype in 2021, and things started to move forward from there.

`:has()` reached Baseline newly available in December 2023, and folks from the browser side of things are trying to encourage developers to think of :has() as more than just a parent selector.

The specification calls it the relational pseudo-class, and it represents an element if any of the relative selectors passed in as arguments would match at least one element when anchored against this element.

That is a mouthful but practically, it opens up a cleaner approach to dealing with component variants. Maybe you have a product card that may or may not have an image within it, or menu items that may or may not have submenus, or heading components that may or may not have subtitles within them, or sections that just happen to have no content in them. You can select them without having to add more specialised CSS classes, I have seen and personally used ternary operators in my component markup for this purpose.

In the event that you are somehow unable to add CSS classes for whatever reason, all is not lost. Depending on your context, you might be able to chain enough pseudo-classes together and things will all work out. Like this run-of-the-mill form with required fields, for example.

We also ask people what they think are missing from CSS and the winner of that poll was "Animating to auto". It has been one of those things that developers have had to write JavaScript for.

More often than not, the use-case is animating to auto height, be it for accordions or dropdown menus. That's where we see hacks like animating to `max-height` instead, often using some arbitrarily large value for that. Or resorting to JavaScript.

The one feature that I felt we missed out during the survey was people's awareness of the ability to animate grid rows and grid columns. Firefox shipped this in 2019. I remember the year because that was when I excitedly built a CodePen that made use of this feature. Grid tracks were meant to be animatable from the start. But due to implementation complications, browsers deferred this implementation till later.

It would take all the other browsers until 2022 to implement this in their stable versions. But this also presented a rather slick CSS-only solution to the animate to auto height problem.

Nelson Menezes proposed this solution back in 2021. The crux of the technique involves setting the grid track size to `0fr` when the content is hidden, and back to `1fr` when the content is expanded.

The issue with interpolating to or from `auto`, is that there must be some way to describe the interpolation states in between. In the CSSWG discussions, it was suggested that `calc()` could be used for this purpose, except that currently `calc()` does not support auto as an argument. Interested parties can read the 177 comment thread on GitHub, but the resolution was to add a new math function that can take `auto` as an argument, final syntax yet to be determined.

And I think we are at time. If you want to be notified about the next CSS survey, you can sign up on the State of CSS home page.

Thank you!
