# CSS variables for work and play

*For JS Fwdays Europe 2022. This is a sort-of transcript plus my notes for the talk.*

Hello everyone! I hope you all are enjoying the conference so far. I'm always very thankful when organisers give me the chance to speak to their audience about CSS. And I want to take this opportunity to give huge props to the organisers of JS Fwdays for not only continuing on with their conference series during this challenging time, but expanding the conference across Europe.

Today, I want to share with you all an aspect of CSS that I find both fun and useful, and that is CSS custom properties. Also known as CSS variables. One of the more common use cases for CSS variables has been for handling colour, but CSS variables can be used in so many other ways. We'll try to cover some of them over the next half an hour.

But first, who am I? Well, my name is Hui Jing. It's a Chinese name, so my family name comes first. These emojis paint a relatively accurate picture of me and my interests, feel free to ask me about them later.

I also have a day job as a senior frontend developer with Shopify, because my bills won't pay themselves.

Okay, now back to the main topic of CSS custom properties. Unfortunately this is a fully online conference so it's a little harder to have real-time audience interaction. But at this point, I'd love to see how many of you have ever read any of the CSS specifications. I'm sure there will be some of you who have, but also many who have not.

I personally love the CSS specifications, even those that were written in the very early days and were not phrased in a way the average human being could understand. To me, knowing what the CSS was intended for and how it was designed to be used makes it easier for me to actually use it in my own projects.

The relevant CSS specification for today is the [CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-variables-1/). And it had been in the works for a long time, with the first public working draft published back in 2012. The original specification name was CSS Variables Module Level 1, so I guess that name still stuck.

People have been wanting to have some way to store values that repeatedly appear in our stylesheets in variables for a long time, because that would make things so much easier if and when we needed to change something across the entire site, like a button colour, or a font size. The most popular CSS pre-processors, Sass, Less and Stylus all had support of variables, which eventually compiled into actual CSS values as output during the build step.

But if we wanted to dynamically update the variable, that was not really possible. The official Sass documentation explains this quite nicely. CSS variables, unlike Sass variables are included in the CSS output, and they can have different values for different elements. Sass variables will only ever be a single value, set at compile time.

Also, if you use a Sass variable, then modify its value down the code, the previous usage of the variable will not change. However, if you update a CSS variable, the previous use will also be modified. This implies that we can do some exciting things with CSS variables that were not possible previously.

But before that, let's briefly run through the syntax of CSS variables and how to use them. First of all, there is the variable definition, with the double dash syntax. This is where we set the value of our variable for use later in our CSS rules. You're pretty free to name your CSS custom properties however you want, for the most part.

The general guidance is to stick with letters, numbers and dashes or underscores. I tried a couple weirder combinations as well, just to see if they worked or not. Like having the property begin with double-dash number or many dashes or double-dash underscore. They actually worked. Special characters are generally a no-go. Also, they are case-sensitive.

Using these defined values in your CSS requires the `var()` function. It takes 2 arguments, your custom property, and an optional fall-back. Most of the time, I almost never see people using the fall-back. Unsure if people don't know it exists, or that they're not sure how it works.

The point of the fallback value is that, if the custom property name used in the first argument is not defined, then the fallback value will be used instead.

If you look at most tutorials and blog posts about CSS custom properties, you will see this selector used very often. Because it represents the root element, defining your variables in this scope essentially makes your CSS custom properties global.

CSS variables also has cascade and inheritance built in. Personally, I had to experiment around quite a bit before I fully understood things, but this is what I realised about inheriting these variable values.

Depending on where you declare your variables, you can scope them to specific selectors. You can then modify their values within descendants, however, for them to take effect, these values have to be used in properties on the selector you're trying to target.

*In this example, I have some elements set up already. The primary background variable is set on the root, while the primary text variable is set on the divs. Both these variable values have been used on properties for the divs, i.e. the background-color and color.*

*When I modify primary-bg on the .a-box class selector, the element itself already has the background-color property using that variable value, so I can just change the variable value to another colour and see it take effect.*

*On the p element, however, the primary-txt value is only used on the border property. So if I set the primary-txt value to something else, only the border changes colour but the text colour remains the one set on its parent div.*

We've pretty much covered most of the basic principles of CSS variables and how they can be used, so let's explore some real-world use cases. A popular use-case for CSS variables is colours and theming.
