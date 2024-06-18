# The State of the Web Platform

_For Web Directions Code Leaders. This is a sort-of transcript plus my notes for the talk._

Hello everyone! It's really nice to be here at Web Directions in person again. This is the first time I'm doing Code Leaders though. The last time I was in Melbourne for Web Directions was 2018, so yeah, it's been a while. Also, can I just say, the weather is fantastic for me. It's frustratingly hot and humid where I come from.

How many of you fine folks have heard of or participated in any of the State Of surveys before? Only last week, I realised there are a some of State Of surveys run by different organisations as well, but nobody has a monopoly on the term "State Of". I mean, here I am with the "State of the Web Platform" as my session title.

But I digress. The State Of series of surveys that I'm talking about started back in 2016 when Sacha Greif (spelled G-R-E-I-F) was feeling confused about what JavaScript technologies to spend his time learning, so he decided to start a State of JS survey, which was mostly around Javascript frameworks and libraries.

One thing led to another, and the project grew from a one-man operation to a small team. The Devographics Collective (not sure if that's their official name or not) is now the team working on the much larger series of State Of surveys. It's a collective of these fine folks plus other contributors, volunteers, and translators that allow this project to continue year after year.

There have been 5 different surveys in the series so far, with the JS and CSS ones being the more established of the lot. There might not be another GraphQL one moving forward, and I'll mention why in a little bit.

The survey itself is an application that gets less attention that the survey questions and results, but work is consistently done to improve its features and user experience. Ever since the first survey, anyone could download the raw anonymised data for their own analysis. The State Of surveys from 2019 onwards had started to allow users to customise data queries via GraphQL on the application itself. Eventually, you could also update the charts to reflect the new query.

This allows folks who are versed in the ways of data analytics to explore even more insights and dive deeper into the data if they so wished. The 2023 version also introduced the concept of a reading list, such that folks going through the survey and found a property or feature or library they wanted to learn more about, they could add it to their reading list and come back to it later.

If any part of what I just said piqued your interest in any way at all, you can join us on Discord or go check out the application code on Github.

So, the GraphQL survey. What exactly is GraphQL anyway? GraphQL is a query language, specifically, an open-source data query and manipulation language for APIs and a query runtime engine. And it has implementations in almost every programming language you can think of.

GraphQL was invented by Facebook as a central intermediary layer between their many end-user-facing clients and many data sources. It was a specific problem that Facebook had, and they created a specific tool to deal with their problem. And back in 2022, GraphQL was something that had quite a bit of uncertainty and unclear best practices, and so Sacha decided to run the survey. But these days, it seems like the consensus is that GraphQL is best limited to niche use cases and use alternative less heavy-handed solutions.

Does this mean GraphQL is not useful? On the contrary. In fact, it is very useful when you encounter problems like slow loading times due to request waterfalls and overfetching or if your application has too many duplicative one-off endpoints. But if you don't need GraphQL, then you don't have to use it at all. Someone else could decide they wanted to know more about the GraphQL ecosystem moving forward, but it won't be run by the Devographics Collective.

Before we really dig into things, I want to highlight the Interop initiative, which is a strong collaboration between all major browser vendors and friends for improving the web platform across the board and to make the web platform more usable and reliable for developers, so that they can spend more time building great web experiences instead of working around browser inconsistencies.

The initiative introduced the concept of Baseline, which seeks to provide more clarity to information about browser support for web platform features. There are 2 stages, a feature can be newly available when it becomes supported by all the core browsers, and it can be widely available after 30 months has passed since the newly interoperable date. Baseline is now part of caniuse.com so features that are in Baseline will show a badge, along with the year they became available.

The State of CSS survey has had 5 editions so far, and the 2024 version will probably be out later in the year. And when looking over 5 years worth of data all at once, it reminded me of how much faster CSS is evolving today as compared to 5 years ago.

If you are coming to Code, I will be talking more in-depth about the State of CSS survey and CSS features, so if you are coming, it will not be déjà vu if you think you've seen some of these slides before. I do overlap a little bit.

When the State of CSS survey came about in 2019, in contrast to the State of JS survey, the CSS one was centred around CSS features themselves. The evolution of CSS has sped up over the past 5 years, and to be fair, browsers are also shipping new JavaScript features at a faster pace than before. This is why from the 2019 version onwards, features were also added to the JS survey.

As for CSS features, there are a lot of them. The last I checked (some time last week), there are 589 distinct property names from 81 technical reports and 83 editors' drafts. My personal opinion is that for the average web developer, there is really no practical reason to know each and every one of these properties and what they do, although I'm sure somebody does.

My take on things is to have a vague idea that something exists and can be used to do a thing. You don't have to know exactly how the property works, all its values etc. until you encounter an use-case where that something might be useful.

Like, I'm clearly not from here, I've heard of the AFL. And this might sound blasphemous but I don't know the rules, nor any of the teams or players. Now, my friend Chris suggested we go watch a game on Friday after the conference, and if I decide to say yes, then I would take the time to at least learn what the rules are. As of now, I do not.

A new feature that has seen a lot of attention this year is container queries, which allows you to apply styles based on attributes of a container rather than the entire viewport. With component-based architecture becoming the de facto design pattern for web applications, allowing components to adjust their styles based on the size of the container allows the same component to be shared across various different contexts in a more predictable manner.

Furthermore, the queries themselves are measured based on computed values on tha container element, so whichever width you specify for the query is based on the font size being used by the container, and not the site's base font size. Container queries also shipped with new `cq` units which specify lengths relatives to the dimensions of a query container.

The code to implement something like this is simplified since every book uses the same code, and adapts itself based on the context it needs to be displayed. This presents a refactoring opportunity for codebases that rely on duplicates to achieve a similar effect.

Another feature ended up being widely talked about is the `:has()` selector, which is one of the many pseudo-classes that got released recently. People like to refer to it as the parent selector, or the family selector or the god selector. The specification just calls it the relational pseudo-class, and it represents an element if any of the relative selectors passed in as arguments would match at least one element when anchored against this element.

That is a mouthful but practically, it opens up a cleaner approach to dealing with component variants. Maybe you have a product card that may or may not have an image within it, or menu items that may or may not have submenus, or heading components that may or may not have subtitles within them, or sections that just happen to have no content in them. You can select them without having to add more specialised CSS classes, I have seen and personally used ternary operators in my component markup for this purpose.

Overall, in contrast to JavaScript frameworks, which will still continue to be mainstream, at least in the near future, CSS frameworks seeing a gradual downward trend. Given how much faster CSS features are being broadly supported these days, it has gotten to a point where the frameworks are starting to fall behind in terms of supporting the latest features. I don't think they will die out altogether but I do think people will reach for them less and less moving forward.

The State of JS survey is the longest running survey and there have been 8 editions. And looking back, it gives a reminder of the state of the industry back then. This was the time when frontend frameworks started to really go mainstream.

AngularJS, which is now discontinued, was released in 2010. Ember came out in 2011, with Meteor coming out the following year. React was released in 2013. Then Vue came the year after. The rewritten Angular or Angular 2 as some people call it, was made official in 2016. It is relatively safe to consider the 2010s the boom times of JavaScript frontend frameworks.

But, why though? Why did various frontend frameworks get developed and adopted? Now I'm no expert, but I have a theory.

Mobile applications. Wait, aren't we talking about the state of the web platform? Yes. I promise I'll make it relevant again.

When iPhone OS was unveiled, Safari 3 was included and you could browse the internet from this sleek new touchscreen smartphone. Android OS, after a number of twists and turns (and acquisition by Google) was first released on the HTC Dream in 2008. It too shipped with a browser that, fun fact, was based on Webkit.

As adoption of such smartphones took off, the mobile application market also grew, or maybe it was the growth of mobile apps that pushed adoption of those smartphones, I can't say. But the fact was that more and more people could feel the UX difference between native mobile applications and websites on mobile browsers.

I posit that a lot of these frontend frameworks were created to allow web developers to recreate the smooth experience native mobile applications provided. A component-based architecture that allowed modularity and reusability across various parts of the website became a pattern that many applications were built upon.

I am, however, not in the position to explain why React gained so much traction. I did find a theory proposed by Brian Knapp who stated that there were 3 reasons. Firstly, it was because React was created by Facebook. Number 2: it solved major issues for Single Page Applications at the right time, and lastly, the concept of self-reinforcing popularity. The "because everyone else is using it" reasoning. You can agree with these reasons, you can not. But React does still sit on the top of usage charts in the State of JS survey.

HOWEVER, interest, retention and positivity toward React is trending down. I'm not sure if we are reaching a tipping point for resource hogging and JavaScript bloat when it comes to web applications but you can't deny that a framework-first approach has made basic web development an exercise in complexity.

I do think it is worth taking a step back and being more deliberate in our development choices. And I'm sure everyone here has very different working environments, with vastly different requirements. Not just between different companies, but sometimes even for different projects within the same company.

Just because one approach or framework was perfect for a project doesn't mean it will be perfect for the next one. It might, but it also might not. A lot of people groan when they hear the phrase "it depends", but tough luck, it does depend. On context. Which, if I could make a subjective statement here, as an industry, we're tragically not prolific at.

In an ideal world where unicorns shit rainbows, we would have clearly defined project requirements plus an experienced team with the time and freedom to analyse which framework would best suit the project's needs, or if a framework would be necessary at all. But the reality is that either one or all of those factors are missing in our context.

Some of you might work in places where specific frameworks are mandated because all projects need to use the same technology stack. Maybe it is to facilitate consistent and scalable deployment environments. Or the organisation wants engineers to be able to move between projects without spending too much time onboarding.

To be fair, those are perfectly good reasons, I think the issue most of the time is that these reasons are not clear nor well articulated to the team. In the best case scenario, it might be a matter of developing processes that ensure such information made known throughout the entire tech team. In the worst case scenario, the decision was arbitrary and has no good reason.

After listening to the day's sessions, I realised that many of you might be in the position to create an environment similar to the unicorn-rainbow-poop-land that I just described. I'm not a code leader, more a code acolyte, so to offer some perspective from the ground, we feel like more often than not, some framework just ends up getting shoehorned into the project whether we like it or not. Knowing the reason was not arbitrary is a morale booster.

The next best thing we can do is to be aware of the gaps, and document the whys of technical decisions. Especially when faced with constraints, since it is more likely that we make unorthodox decisions. Having a decision log where people can trace back why certain parts of the codebase ended up the way it did can be extremely helpful.

I want whoever inherits my project to be able to figure out the gotchas quickly and hit the ground running. I believe developer karma is real. Because at some point in our careers, we are going to inherit someone else's project. Think about that.

But like I said before, React is still seems like the most dominant framework at the moment, and if you would like to discover more insights, please stay tuned to the results of the State of React survey that ran late last year. Honestly, there had been plans to run a State of React survey from a while back, but attempts to collaborate with the React core team fizzled out, and it was only until last year that Sacha managed to get around to launching it.

There will also be a 2024 edition of the State of React survey, so if you know someone who uses React or do so yourself, please do participate when the survey gets released.

JavaScript is not only used for the frontend. Most web developers associate server-side JavaScript with Node.js, and rightfully so, since it is still the dominant JavaScript runtime today. If you google Node usage on websites, you will see the number 6.3 million, but never see where that number came from, everyone just uses it.

That sounds like a lot, until you look at the data published by W3Techs which says that Node.js is used by 3.3% of all websites whose web servers are known. I don't know anyone who works there to fact check their research so take all these statistics as reference not gospel.

But 3.3%? What are all these other websites running? Come on, some guesses. I'm sure someone is going to get the right answer.

Correct. PHP. Even though we do not have a State of PHP survey (nor are we planning one), I thought this fact is worth mentioning. That we should try not to get too caught up in hype cycles. There won't ever be a technology or framework or library that can solve all problems for all time. Take something like jQuery, which nobody really talks about any more. It is still widely used, and will continue to be widely used for years to come.

I love what the “You might not need jQuery” website states right when you land on it. It never says to not use jQuery ever, if it makes it easier to develop your application, go right ahead. But if you're developing a library, consider if jQuery is needed as a dependency. The site suggests thinking about the why behind the decision. And I think that applies broadly across our scope of work as developers.

Libraries and frameworks are an integral part of pushing the web platform forward, because they are indicative of what developers need to build the features they want. Perhaps a library's success indicator is that it is no longer needed because its features have become natively supported by the platform. Which makes jQuery a rousing success. Let's give a round of applause to jQuery.

And finally, the most recent survey whose results has been released is the State of HTML survey. Even if you did not participate, I think it's still interesting to see the results. The key person who did the heavy-lifting for the crafting of this survey was Lea Verou, W3C Technical Architecture Group member and contributor to numerous CSS specifications.

HTML is the OG of the web, the key pillar that has existed since everything began back in 1989. In spite of the lack of hype around HTML, things are continually evolving in this space. The State of HTML survey does go beyond pure HTML alone and almost seems like a catch-all for the things that did not make it into the JS and CSS surveys.

Turns out that developers want more interactive HTML elements, with the top missing elements all being interactive widgets of sorts. I do wonder if this ties into my mobile applications taking over the world and changing the nature of web development hypothesis. A lot of developers have spent the last decade building components that are mostly interactive widgets.

And given the rate at which developers move around, a big chunk of them must have built similarly functioning interactive widgets again and again in different frameworks, in different styles, in different design systems, you get the picture. Maybe, just maybe, we're warming to the idea that the browser could provide them for us.

But we are a tricky bunch to please, us developers. Because based on the feedback on interactive elements that already exist, largely for form inputs, the biggest pain point is styling and customisation. It seems like the message we are sending is that we want the browser to do complex things for us, but we also want to be able to make those complex things look like we built them ourselves.

But in all seriousness, this is a reasonable ask, and the folks who work on specifications and browser implementations are actively developing new initiatives to improve the situation.

For example, a feature that has recently become Baseline newly available is the Popover API. All you need is a button to trigger the popover and an element that serves as the popover. On the element, set a `popover` attribute and give it a unique ID. Then set the `popovertarget` attribute on the button to the value the popover element's ID. Without any additional scripting, you have a popover that can be dismissable by the escape key or clicking outside of it. And you are free to style it with CSS however you like. Amazing.

As for web components, that's what we have Keith for. But seriously, the results albeit a relatively small sample size have indicated that although people do use web components, the consensus is that the developer experience leaves much to be desired.

In her conclusion for the State of HTML survey, Lea Verou made an excellent point that these State Of surveys are only a snapshot of developer perspectives, and reflects the state of the web platform at a specific time.

They are one of numerous data points that the folks working on web standards and browser implementations use to push the web platform forward. Even though in many other industries, especially the very established one, standards are created and maintained in a closed manner, web standards and browser implementations are discussed and evolved in the open.

And it is in these fine folks' best interests to develop features that developers like you and I want to use. So they do keep a look out for what developers are saying on social media, blog posts, GitHub issues for the CSSWG and TC39, surveys like ours and so on. So if you do write code at all, professionally or otherwise, I encourage you to participate the next time a new one comes out.

Thanks!
