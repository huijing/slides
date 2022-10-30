# CSS variables for work and play

*For JS Fwdays Europe 2022. This is a sort-of transcript plus my notes for the talk.*

Hello everyone! I hope you all are enjoying the conference so far. I'm always very thankful when organisers give me the chance to speak to their audience about CSS. And I want to take this opportunity to give huge props to the organisers of JS Fwdays for not only continuing on with their conference series during this challenging time, but expanding the conference across Europe.

Today, I want to share with you all an aspect of CSS that I find both fun and useful, and that is CSS custom properties. Also known as CSS variables. One of the more common use cases for CSS variables has been for handling colour, but CSS variables can be used in so many other ways. We'll try to cover some of them over the next half an hour.

But first, who am I? Well, my name is Hui Jing. It's a Chinese name, so my family name comes first. These emojis paint a relatively accurate picture of me and my interests, feel free to ask me about them later.

I also have a day job as a senior frontend developer with Shopify, because my bills won't pay themselves.

Okay, now back to the main topic of CSS custom properties. Unfortunately this is a fully online conference so it's a little harder to have real-time audience interaction. But at this point, I'd love to see how many of you have ever read any of the CSS specifications. I'm sure there will be some of you who have, but also many who have not.

I personally love the CSS specifications, even those that were written in the very early days and were not phrased in a way the average human being could understand. To me, knowing what the CSS was intended for and how it was designed to be used makes it easier for me to actually use it in my own projects.

The relevant CSS specification for today is the [CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-variables-1/). And it had been in the works for a long time, with the first public working draft published back in 2012. The original specification name was CSS Variables Module Level 1, so I guess that name still stuck.

People have been wanting to have some way to store values that repeatedly appear in their stylesheets in variables for a long time, because that would make things so much easier if and when you needed to change something across the entire site, like a button colour, or a font size. The most popular CSS pre-processors, Sass, Less and Stylus all had support of variables, which eventually compiled into actual CSS values as output during the build step.

But if you wanted to dynamically update the variable, that was not really possible. The official Sass documentation explains this quite nicely. CSS variables, unlike Sass variables are included in the CSS output, and they can have different values for different elements. Sass variables will only ever be a single value, set at compile time.

Also, if you use a Sass variable, then modify its value down the code, the previous usage of the variable will not change. However, if you update a CSS variable, the previous use will also be modified. This implies that you can do some exciting things with CSS variables that were not possible previously.

But before that, let's briefly run through the syntax of CSS variables and how to use them. First of all, there is the variable definition, with the double dash syntax. This is where you set the value of your variable for use later in your CSS rules. You're pretty free to name your CSS custom properties however you want, for the most part.

The general guidance is to stick with letters, numbers and dashes or underscores. I tried a couple weirder combinations as well, just to see if they worked or not. Like having the property begin with double-dash number or many dashes or double-dash underscore. They actually worked. Special characters are generally a no-go. Also, they are case-sensitive.

Using these defined values in your CSS requires the `var()` function. It takes 2 arguments, your custom property, and an optional fall-back. Most of the time, I almost never see people using the fall-back. Unsure if people don't know it exists, or that they're not sure how it works.

The point of the fallback value is that, if the custom property name used in the first argument is not defined, then the fallback value will be used instead. Not defined, in this case, should be familiar to most of us who do front-end. It's when the browser cannot match the variable to any value. So if I spelled `--dinosaur` wrong, it would trigger the fallback, but if I typo-ed on the value itself, fallback does not kick in.

The selector I'm using up top is the `:root` selector. If you look at most tutorials and blog posts about CSS custom properties, you will see this selector used very often. Because it represents the root element, defining your variables in this scope essentially makes your CSS custom properties global.

CSS variables also has cascade and inheritance built in. Personally, I had to experiment around quite a bit before I fully understood things, but this is what I realised about inheriting these variable values.

Depending on where you declare your variables, you can scope them to specific selectors. You can then modify their values within descendants, however, for them to take effect, these values have to be used in properties on the selector you're trying to target.

*In this example, I have some elements set up already. The primary background variable is set on the root, while the primary text variable is set on the divs. Both these variable values have been used on properties for the divs, i.e. the background-color and color.*

*When I modify primary-bg on the .a-box class selector, the element itself already has the background-color property using that variable value, so I can just change the variable value to another colour and see it take effect.*

*On the p element, however, the primary-txt value is only used on the border property. So if I set the primary-txt value to something else, only the border changes colour but the text colour remains the one set on its parent div.*

In terms of debugging and the development process, all the major browser Devtools have pretty good support for CSS variables. In my opinion, the successful adoption of any new CSS hinges on how well the accompanying Devtool-ing is for that new feature. Anyway, if you inspect an element that uses a custom property, hovering over the variable should give you its computed value. For Chrome, if you click on the variable, it will bring you to where the property was defined, which is really nice as well.

We've pretty much covered most of the basic principles of CSS variables and how they can be used, so let's explore some real-world use cases. A popular use-case for CSS variables is colours and theming. So my first example is the most cliched one you can think of, the light/dark mode toggle.

This example only focuses on the CSS part and not the extra functionality of having persistence across reloads (you'll need some sprinkling of Javascript for that, which I will show in the next slide). But the idea here is that your theme colours are stored in CSS variables, and when the toggle is checked, the variable values are updated accordingly without having to override the original properties set on the elements.

If you really want something a little bit more production ready, consider sprinkling on some Javascript to make use of localStorage for persistence. And also, using data attributes instead of CSS classes could be a neat way of doing things as well, from the perspective of code organisation.

The dark mode colours are declared under data-theme=dark and the attribute value is modified when onchange is triggered on the toggle. localStorage can be used to store this value, and checked every time the user loads the page. But we're digressing from CSS variables now, so let's bring it back.

For this next example, we'll make things a little bit fancier by going with a frame outline style with rounded borders, which actually isn't that straightforward to implement. It's this odd combination of wanting a gradient border combined with rounded corners. But hey, it's still possible.

Ignoring the fanciness of things, this example here makes use of the inheritance of CSS variables and modifies the value of the `--frame-outline` on different theme classes. In this example here, you can see that there are 4 custom properties defined. And there's nothing stopping you from using a variable in another variable.

Like these 2 gradient values here, can be used to modify the frame-outline variable for a different CSS class. CSS variables can hold the full value of a CSS property, or just a single value within a multiple value property, like `border` or `background`.

Let's take `background` as an example, if you want to write the code for `radial-gradient`, it has lot of values for different aspects of the gradient. By assigning the component values to CSS variables, the code for variants becomes a lot neater because you only need to update the variables.

*So here, you can put the parts of the gradient value that may vary into their own CSS variables, like the position of the gradient, the two colours for the gradient. But the color-stop-list can be as many colours as you'd like. Instead of rewriting the gradient for each card, you can update the variable value instead.*

When combined with the `calc()` function, you then have the opportunity to make your code a lot neater, or at least, reduce the amount of magic numbers in your stylesheets. Like having a size multiplier to manage various image sizes, for example. Of course, some of you might be thinking, we already do this with Sass variables. And that's true. What I've described is on-par with what Sass can achieve.

Although the fact that I can show you this demo live on the slides already demonstrates the difference between CSS and Sass variables. Being able to dynamically change the values of a CSS property and see its result in real-time opens up some creative possibilities that were either impossible or unfeasible in the past.

Being able to update CSS variable values within media queries is definitely a welcome edition, because it allows you to do things like this without having to explicitly create new variables for every point which the font size changes. It also simplifies the code logic since you can handle the font size changes with just 2 variables, `text-base-size` and `text-to-heading-ratio`, and let `calc()` handle the rest.

And such a concept can be applied to numerous things, like margins and paddings across different viewport sizes, image sizes, anything that you'd like to have some mathematical relationship can now be done with CSS alone, I think that's pretty handy.

CSS variables also gives you a more convenient mechanism for Javascript to hook into your styles. You can get a property value using `getPropertyValue` and set it via `setProperty`. This means that I have a straight-forward way of updating my CSS values with values calculated from Javascript.

For example, if I want to make something move with my cursor, I grab the x and y coordinates on `mousemove` and set those values on the transform property for the `x` and `y` translation respectively. Even with the styles that only serve to make the `div` look like this gradient ball, it's 5 lines of CSS. And the Javascript is almost equally short.

And like I mentioned earlier in the talk, any interaction that can be translated into a mathematical relationship with an element's style property can be leveraged to do some interesting things. You generate colours based off mouse position, if that's something you wanted.

If you want to look further into future possibilities, you can keep in mind the `@property` at-rule, which is part of the CSS Properties and Values API Level 1, AKA CSS Houdini. This particular CSS module defines an API for registering new CSS properties, which get a parse syntax defining its type, inheritance behaviour, and its initial value. Even though support is pretty much limited to Chromium-based browsers, it's still good to know how it works.

One thing that you could not do in the past was to animate gradients which were set as background images. The `background-image` property is not an animatable property. The browser can only animate something if it knows how to interpolate between the start and end values. The `@property` has a `syntax` descriptor that allows you to tell the browser the type of property you're defining so the browser knows how it needs to interpolate the value.

In this case, I'm telling the browser this property is an angle. Then the `keyframes` code becomes quite succinct, where I'm saying animate to 360 degrees, then making it go on forever with the `animation` property. And there are a lot more possibilities that just this, which I hope you are intrigued enough to play around and explore on your own.
