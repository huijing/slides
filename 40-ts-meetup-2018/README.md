# The case for modern CSS

*For Mozilla TechSpeakers Paris Meetup. This is sort of a transcript of the talk.*

Hello everyone! My name is Hui Jing. I'm a front-end developer based in Singapore at the moment. Today I'm going to be presenting an elevator pitch on the case for modern CSS.

How many people here have used CSS in their projects? And how many of these memes are familiar to you?

Personally, I don't like these memes very much. And I do recognise that I am very fond of CSS, and may be slightly biased toward it, but I feel CSS unfairly bears the brunt of many such jokes.

Perhaps it's a defence-mechanism by *some* developers against something that is outside their comfort zone. CSS does require a different mental model from programming languages like Javascript, for example.

The cascade makes some developers uncomfortable. I get that. But I don't see it as justification for pooping on CSS. That's just a bit rude.

This was a poll by Max Stoiber just a week ago, and it's surprisingly disappointing how many people don't really understand how the C in CSS works.

## On the history of CSS

CSS started out as a simple style sheet mechanism which allowed authors and readers to attach style to HTML documents. And over the past 22 years, let's just say it's evolved quite a bit.

In the earliest versions of CSS, it wasn't even meant for doing layout. The specification provided examples of what CSS wouldn't do on the layout front, AND made the list open-ended.

But what I like most about the web is that its APIs grow and adapt with the needs and requests of its users, developers like you and I, as well as our audiences.

Modern CSS is not a clearly defined term, I'll admit, it's not like an age limit where only CSS specifications written after X date make it into this category.

No. What I'm referring to, is the landscape of what we can achieve right now.

There are currently 503 distinct CSS properties in the index so clearly, 5 minutes is not enough to cover them all. Instead, I will highlight three of the most impactful CSS features we can use today to supercharge our web designs.

## On CSS grid

CSS grid. It's a pretty big CSS thing. In the pre-Grid era, we were trapped. Trapped by the fact that our elements always had to line up next to each other.

Sure you could space things out with margins and paddings. Some brave souls even try to wrangle with positioning rules, but that usually ends up snowballing into an avalanche of styles just to move an image to the lower-right side of the page.

CSS grid gives us a straightforward means to position items on a page wherever we want.

If you're new to Grid, it's a 2-step process. Define your grid, then place items in it. That's the gist of it. The beauty of grid is that it can be as simple as you need, but also as elaborate as you want.

You need all of 2 lines for a fully responsive grid. Media queries not required.

And if you need full-scale art-directed page layouts, grid definitely has you covered as well.

Moving on.

## On CSS custom properties

Anybody in the room uses preprocessors for their styles? One of the key reasons a lot of us use them, is the ability to define and utilise variables.

But those variables are static, you can't change them on the fly with Javascript, because they have to compiled into CSS to take effect.

Custom properties, on the other hand, are dynamic. And that opens up a lot of possibilities.

The top bit is how the styles for this presentation have been set up. With my `h2` element styled using the `--accent-colour` variable.

CSS variables behave like any other CSS property, so we can make use of selectors to scope them.

If I change the `--accent-colour` value here to `green`, I change all the `h2`s on my slides. But I can also keep it to this one slide with a more specific class.

Because they behave like any other CSS property, custom properties can also be defined and used within media queries, something we couldn't do with preprocessors.

When used together with the `calc()` function, we can build complex values for more complicated use-cases, like the values for transform properties.

And you can't get more dynamic than combining custom properties with Javascript. With the `getPropertyValue()` method, we can access the value of a custom property. While the `setProperty()` method lets us modify the value at runtime.

## On feature queries

Lastly, feature queries.

They're really the unsung hero of this lot. Browsers started implementing feature queries in late 2012, but they only started to gain traction after Grid officially shipped. Because Grid was a great use-case for feature queries.

Feature detection in native CSS, what's not to like?

We start off with basic styles that work universally across all browsers. Then add on styles, not per browser, but per feature we want to enhance our design with.

Browsers that don't support the feature in question simply ignore the entire code block. Thus avoiding the issue of half-applied styles breaking your beautiful page.

Making use of the cascade is **the** key strategy here. Universal styles first, so even if the browser does not support feature queries, you're still safe.

Some time ago, I built a website that uses a number of relatively newer CSS features, like Grid, Shapes and so on. And I did not modify the code since I launched it, but its design, when viewed in Firefox, has evolved, as the browser continues to update.

## Wrapping up

For a short talk of 7 minutes, this is my cop-out slide.

Each CSS feature I mentioned could warrant full length talks on their own, so here's a list of resources that go into each topic with much greater depth.

Hopefully, I piqued the curiosity of at least 1 of you to want to find out more.

At the end of the day, HTML, CSS and Javascript are the pillars on which the web is built, and there's never any harm in strengthening foundations.

So embrace the cascade, and let's build a better web together.
