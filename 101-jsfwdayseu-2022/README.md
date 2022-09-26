# Theming with CSS variables

*For JS Fwdays Europe 2022. This is a sort-of transcript plus my notes for the talk.*

Hello everyone! I hope you all are enjoying the conference so far. I'm always very thankful when organisers give me the chance to speak to their audience about CSS. And I want to take this opportunity to give huge props to the organisers of JS Fwdays for not only continuing on with their conference series during this challenging time, but expanding the conference across Europe.

Today, I want to share with you all an aspect of CSS that I find both fun and useful, and that is CSS custom properties. Also known as CSS variables. One of the more common use cases for CSS variables has been for handling colour, but CSS variables can be used in so many other ways. We'll try to cover some of them over the next half an hour.

But first, who am I? Well, my name is Hui Jing. It's a Chinese name, so my family name comes first. These emojis paint a relatively accurate picture of me and my interests, feel free to ask me about them later.

I also have a day job as a senior frontend developer with Shopify, because my bills won't pay themselves.

Okay, now back to the main topic of CSS custom properties. Unfortunately this is a fully online conference so it's a little harder to have real-time audience interaction. But at this point, I'd love to see how many of you have ever read any of the CSS specifications. I'm sure there will be some of you who have, but also many who have not.

I personally love the CSS specifications, even those that were written in the very early days and were not phrased in a way the average human being could understand. To me, knowing what the CSS was intended for and how it was designed to be used makes it easier for me to actually use it in my own projects.

The relevant CSS specification for today is the [CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-variables-1/). And it had been in the works for a long time, with the first public working draft published back in 2012. The original specification name was CSS Variables Module Level 1, so I guess that name still stuck.

People have been wanting to have some way to store values that repeatedly appear in our stylesheets in variables for a long time, because that would make things so much easier if and when we needed to change something across the entire site, like a button colour, or a font size. The most popular CSS pre-processors, Sass, Less and Stylus all had support of variables, which eventually compiled into actual CSS values as output during the build step.

