# Many Flavours of Enterprise CSS Grid

*For JSConf Korea 2022. This is a sort-of transcript plus my notes for the talk.*

안녕하세요. 저는 CSS를 제일 사랑하는 Hui Jing 입니다. 아쉽게도 저는 한국어를 잘 못했어 영어로 말할 것입니다.

That is my name in Hanja, not sure how it sounds in Korean though, but I'm guessing the pronunciation is slightly different. I'm not a complicated person, so these emojis pretty much cover who I am as a person.

I also have a day job, with Shopify, as a senior frontend developer. Because you know, I like being able to pay my rent and stuff.

Today's talk is focused on CSS, because if your content is going to be rendered by a browser engine, then your main mode of communication with the browser for styling content has to be CSS. Browser engines today are much more capable than before, they can lay out content much better than before. And it's in our best interest to know how to make full use of the browser's web layout capabilities.

A major issue with web content is that because your users could be using a screen as small as a smart watch-face or as large as a 70-inch super HDTV. And you, the developer or designer or creator, can't really control this.

This means, the way we think about designing layouts on the web cannot be like anything else that is fixed. It's quite a different mental model, and so, the tools we use must suit this fluid, interactive medium. Luckily for us, now that Flexbox and Grid are very well supported across all major browsers, our toolbox has been greatly upgraded.

Both of these layout models were introduced after the web had evolved into more than just a document viewer. They were built to handle application interfaces which would be viewed across many different screen sizes.

Admittedly, Flexbox had a relatively rocky rollout, as browsers implemented experimental versions of the syntax before the specification had been nailed down. But by 2015, all the major browsers had updated to use the latest specification and the implementation was considered stable.

Browser vendors and specification authors learned from the Flexbox rollout and developed Grid behind a feature flag instead of using vendor prefixes. Grid was rolled out in a very coordinated manner back in 2017, with the four major browsers all shipping in the month of March, and by October, even Edge and Samsung Internet got it.

Fast forward to today, the percentage of internet users surfing the web with browsers that support Flexbox and Grid is overwhelmingly high. So browser support is no longer a valid argument for why adoption rates are lower than expected.

Honestly, Flexbox is everywhere. It has become the go-to for many web layouts, and after seeing my thousandth “how to centre something vertically with Flexbox” article, I'm not surprised it is so commonly used now.

And even though this survey has a relatively small sample size of 8075 developers, it still prompted me to wonder why Grid's usage numbers are not as high as I expected.

Among the 13 links I have in my bookmarks bar, I could only find Grid usage on CodePen, Discord, Imbox and Spotify. And only Spotify seemed to really embrace Grid as a page layout tool. Named grid areas and all.

Javascript was introduced in 1995 and a couple years later, the concept of AJAX, short for Asynchronous Javascript and XML, started to take off because it allowed content on the page to be updated dynamically without reloading the entire page. The concept on which Single Page Applications or SPAs are built on.

This term “Single Page” seems misleading, because a single page of a book doesn't feel very large. But when you think about a lot of the SPAs out there these days, it's more like a page the size of this room.

With this increase in scale and hence complexity, the organisation of code becomes a lot more crucial. Frameworks can help provide structure, but with them come some restrictions on how to do things.

Let's do a quick run-through of how Grid works and how to use it. Similar to Flexbox, it involves a parent-child relationship between the container and its immediate children. Grid properties on the container can have an impact on the grid items and items themselves have an "awareness" of their siblings.

The bare minimum to start using grid as a layout tool is setting `display` to `grid`, then defining some columns. Theoretically, you don't even have to be explicit with the rows unless you want to. Because the row height will naturally be whatever it needs for the content to fit.

If your grid needs to be more complicated, there are helpful properties and functions available to keep your code neat. The gap property makes it easy to have spacing between your grid items. The `repeat()` function, which can let you DRY out your code. You can have a fully responsive grid without writing extra media queries.

```
.basic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  gap: 1em;
}
```

A particularly useful feature which I'm a big fan of is named grid areas. Which you might have noticed in the screenshot earlier of Spotify's interface. After you've set up your rows and columns, you can explicitly name specific areas of the grid via a rather visual syntax.

The structure of the `grid-template-areas` value is a reflection of your grid, so each of these 3 lines enclosed with quotes corresponds to the 3 rows, while each value within the line corresponds to a column.

I make use of this for designs that need to break at multiple viewport widths because all my changes can be contained on the parent selector. Once I've assigned each grid item its area, I don't need to change it regardless of what I do to the parent.

Naming grid areas is optional, a “regular” way of placing items is to define its `grid-row` and `grid-column` properties. If you turn on the grid inspector, you can see the grid line numbers and decide where you want your items to start and end.

Grid makes overlapping elements in your design more controllable than other methods which involve absolute positioning, transforms or negative margins. Because you can plan how the overlap should occur across the range of viewports you're working with.

There's more to Grid than what I've mentioned, but this is sufficient for a large range of use cases already. A major difference between building layouts with Grid versus other layout models is that CSS grid layouts are “led” by the container. You implement your intended layout on the container in a sort of big-picture way, and the items are placed accordingly.

Whereas the other layout models focus on the item, where the sizing and positioning of each item is determined by properties on the items themselves. It is a little different from what a lot of folks are used to, and perhaps that is a contributing factor to why CSS grid is not as widespread as it could be.

But it's not like you must use Grid for everything now. Grid is just one more additional tool we have in our toolbox. Floats are still great for actually floating content. Flexbox is great for handling free space in your layout. Grid is perfect for when you want structured rows and columns.

As an application grows bigger, with more features, more components and more pages, you end up having to adopt some sort of design system, or at least, develop some design guidelines to maintain consistency across the application. And often, a grid system is part of that.

A common pattern for grid systems in frontend libraries, like Bootstrap, rely on generating all the classes needed for all the percentages needed for the sizing of each item in the grid. To migrate from using floats to flexbox is actually not that drastic a refactor, because your sizing still happens on the item class. Migrating to grid, on the other hand, is relatively more complicated.

Let's simplify things a little bit for the sake of discussion. Say we have the luxury of implementing a brand new design system, and we want to build out the grid system for that. So here, we have these specifications for a rather standard looking grid. It has different values to accommodate a range of viewport sizes.

There are many different approaches you could take to write CSS grid code to implement this in an application powered by a Javascript framework. We'll go through a couple of them just to give you an idea. I'm using React here, but I think these ideas are transferable to other frameworks as well.

One option is to just write the CSS. The rationale for this approach is that the grid would inform where everything on the application would sit within the interface. Hence, it could live in the global stylesheet that gets loaded everywhere, since the expectation is that it would be used everywhere.

All of the specifications from the table above would be defined on the grid container, while placement of items within the grid can be assigned to each individual grid item (if necessary) or be auto-placed by the browser.

This approach allows the item placement code to go on the component styles. And if there are common placement patterns that recur very often in the design, then you could consider having some pre-written styles to cater to those situations.

And if you do need some custom placement, that code could go into the component-specific styles instead.

Another approach is to have wrapper components for the container and item respectively. This means the grid code is tied to the wrapper components instead of being loaded in the global stylesheet.

The setup involves creating a `Grid` component and a `Col` component and their corresponding stylesheets.

These components don’t do much other than provide grid-related styling, so they’re not very big or complicated. They have props for passing custom class names, modifying the element tag (which defaults to `div`) but generally does not restrict users from passing in other props either.

The styles would be the same as in option 1 but because this approach uses CSS modules, you can sort of be more “casual” with naming your classes? Option 1 used a BEM class naming convention, but with this option you can afford to be less strict.

Again, if you have very custom placement, you can write them into the component styles as well.

I'll be up front about this, I'm not the biggest fan of how Tailwind does CSS. The major issue I have with it is, it sees the cascade as a problem to be fixed, rather than attribute to be embraced. If you use Tailwind the way it was intended, the cascade is almost completely negated.

It is called Cascading Stylesheets for a reason. Maybe call it “Tailwind SS” instead? That being said, I'm not overly stubborn about this. If my job needs me to write Tailwind, I can still do it the way it was intended.

For now, I accept the reality that there are quite a number of teams that use Tailwind CSS in their applications and it’s working well for them. That’s great. And if those teams want to use CSS grid? Well, it is absolutely doable.

Tailwind has exposed almost every API possible for you to modify the default configuration to suit your custom specifications. The grid specification can be set up like so (abstracted to just show the breakpoints).

You would then have to apply these classes to your component accordingly. Maybe you could abstract the most regularly used combinations of classes into something DRY-er but this is the most basic version and it achieves the same end result as the other options.

We've covered 3 options but I’m sure there are more possible approaches to implement these Grid specifications. Are any one of these approaches the “correct” one or the “best” one? I cannot answer that. Not without taking into account the context in which the code needs to be used.

Technically, every approach does the job. The level of difficulty of the technical implementation sometimes pale in comparison to the issues and considerations around code organisation, maintainability and developer experience. Especially for larger teams.

Every organisation is different. Some applications have individual teams in charge of specific components, others could have a few frontend specialists maintaining a component library used by everyone else. The permutations are endless.

Company culture also varies between organisations. In some teams, engineers have all the autonomy to make decisions, in others, sometimes a director who used to code might come in and mandate the team to use X technology because he likes it.

Such things are out of your control. And that’s okay. But if you do get the chance to influence technical decisions, I find that asking the following questions can help you make a more informed choice.

What are the preferred technology stacks used in your organisation, if any? 
- Usually there is one, for example, it's public knowledge that Shopify is a Ruby on Rails shop. It's not like we refuse to use anything else, and there are projects that don't but we need a good reason to deviate from the standard stack
- From a CSS perspective, this would impact where your code lives, whether you use a preprocessor or not, how your selectors might look depending on how much control over the markup you have and so on

The size and structure of your application again will also have a significant impact on how your final CSS will actually look like and live.

The more flexible your design system is, the more complicated your code might end up becoming. Because you have to cater for more use-cases. This is where having a close relationship with the design team really helps. A design system might start out as the output from a design team, but its success hinges on the code actually reflecting what was intended.

The last two points here are related, because if there are new folks being on-boarded to contribute to the project regularly, there needs to be solid documentation to explain what the expectations are, and how things work. Otherwise, the code descends into chaos fairly quickly.

Maintenance might not be the most exciting thing in the world. But hey, systems work because someone is maintaining them and keeping them humming along. So who are these people for your project?

Is it a centralised setup or spread across different teams? The skill level of the folks on these teams should also be taken into account for your choice of approach here. I have a unorthodox suggestion for decision making. And that is not to look at the pros of each approach you're considering, but rather, analyse the cons and see which ones you can live with.

And after you've taken all this time and effort to figure out a suitable approach, there's one more critical thing to do before diving into writing the code. It is, to document the “Why”. 

If you were not part of the team who built the application from the start, there may be many parts of the codebase that seem odd at first. Instead of being judgemental, I strongly suggest asking why things were done a certain way.

Sometimes, you might find that it really was a bad idea and someone just put something up because they had a deadline or honestly did not know better. But you might also discover some constraints or dependencies that were not obvious at all at first glance.

“Why” documentation is different from “How” documentation. A paper trail that explains why things are, is like whisky. It only gets better with time.

Is it possible to use CSS grid in a large commercial application, from a technical perspective, definitely possible. Is there a best way to implement it? Well, there will be a best way for your team to do it, which will be different from the best way for my team to do it, because of all these factors I just talked about.

So if you ever get the chance to implement CSS grid in your project, I would love to hear you talk or write about it, if you can. Even though your approach is specific to your situation, it might still inspire someone else who is working on theirs.
