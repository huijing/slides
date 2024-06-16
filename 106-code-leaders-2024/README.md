# The State of the Web Platform

_For Web Directions Code Leaders. This is a sort-of transcript plus my notes for the talk._

Hello everyone! It's really nice to be here at Web Directions Code in person again. The last time I was in Melbourne for this was 2018, so yeah, it's been a while. Also, can I just say, the weather is fantastic for me. It's frustratingly hot and humid where I come from.

I currently work at the Interledger Foundation. In a nutshell, we are developing a new protocol to enable an interoperable global payments network. If any of those words mean anything to you and you'd like to find out more, happy to have a chat later. Or just talk to me about CSS, I'd love that too.

How many of you fine folks have heard of or participated in any of the State Of surveys before? Only last week, I realised there are a some of State Of surveys run by different organisations as well, but nobody has a monopoly on the term "State Of". I mean, here I am with the "State of the Web Platform" as my session title.

But I digress. The State Of series of surveys started back in 2016 when Sacha Greif (spelled G-R-E-I-F) was feeling confused about what JavaScript technologies to spend his time learning, so he decided to start a State of JS survey.

One thing led to another, and the project grew from a one-man operation to a small team. The Devographics Collective (not sure if that's their official name or not) is now the team working on the much larger series of State Of surveys. It's a collective of these fine folks plus other contributors, volunteers, and translators that allow this project to continue year after year.

The State of JS survey has been running annually since 2016. And the most recent survey whose results has been released is the State of HTML survey. Even if you did not participate, I think it's still interesting to see the results.

Lea Verou was the key person who helped craft this survey and in her conclusion she made an excellent point that these surveys are only a snapshot of developer perspectives, and reflects the state of the web platform at the time.

It is one of numerous data points that the folks working on web standards and browser implementations use to push the web platform forward, so if you do write code at all, professionally or otherwise, I encourage to participate the next time a new edition comes out.

The survey itself is an application that gets less attention that the survey questions and results, but work is consistently done to improve its features and user experience. Ever since the first survey, anyone could download the raw anonymised data for their own analysis. The State Of surveys from 2019 onwards had started to allow users to customise data queries via GraphQL on the application itself. Eventually, you could also update the charts to reflect the new query.

This allows folks who are versed in the ways of data analytics to explore even more insights and dive deeper into the data if they so wished. The 2023 version also introduced the concept of a reading list, such that folks going through the survey and found a property they wanted to learn more about, they could add it to their reading list and come back to it later.

If you too are interested to contribute in any way at all, you can join us on Discord or go check out the code on Github.

The State of JS survey is the longest running survey and there have been 8 editions. The first survey back in 2016 mostly covered frameworks and libraries. And looking back, it gives a reminder of the state of the industry back then. This was the time when frontend frameworks started to really go mainstream.

AngularJS, which is now discontinued, was released in 2010. Ember came out in 2011, with Meteor coming out the following year. React was released in 2013. Then Vue came the year after. The rewritten Angular or Angular 2 as some people call it, was made official in 2016. It is relatively safe to consider the 2010s the boom times of JavaScript frontend frameworks.

But, why though? Why did various frontend frameworks get developed and adopted? Now I'm no expert, but I have a theory.

Mobile applications. Wait, aren't we talking about the state of the web platform? Yes. I promise I'll make it relevant again.

When iPhone OS was unveiled, Safari 3 was included and you could browse the internet from this new touchscreen smartphone. Android, after a number of twists and turns was first released on the HTC Dream in 2008. Fun fact, it was based on Webkit.

As adoption of these smartphones took off, the mobile application market also grew, or maybe it was the growth of mobile apps that pushed adoption of smartphones, I can't say. But the fact was that more and more people could feel the UX difference between native mobile applications and websites on mobile browsers.

A lot of these frontend frameworks were created to allow web developers to recreate the smooth experience native mobile applications provided. A component-based architecture that allowed modularity and reusability across various parts of the website became a pattern that many applications were built upon.

I am, however, not in the position to explain why React gained so much traction. I did find a theory proposed by Brian Knapp who stated that it was because React was created by Facebook, it solved major issues for Single Page Applications at the right time, and the concept of self-reinforcing popularity. The "because everyone else is using it" reasoning. You can agree, you can not. But React does still sit on the top of usage charts in the State of JS survey.

HOWEVER, interest, retention and positivity toward React is trending down. I'm not sure if we are reaching a tipping point for resource hogging and JavaScript bloating when it comes to web applications but the framework first approach has made basic web development an exercise in complexity.

I do think it is worth taking a step back and being more deliberate in our development choices. And I'm sure everyone here has very different working environments, with vastly different requirements. Not just between different companies, but sometimes even for different projects within the same company.

Just because one approach or framework was perfect for a project doesn't mean it will be perfect for the next one. It might, but it also might not. A lot of people groan when they hear the phrase "it depends", but tough luck, it does depend. On context. Which, if I could make a subjective statement here, as an industry, we're tragically not prolific at.

Some of you might work in places were specific frameworks are mandated because all projects should use the same technology stack. Maybe it is to facilitate consistent and scalable deployment environments. Or the organisation wants engineers to be able to move between projects without spending too much time onboarding. That's context.

Even if you end up having to use a framework that might not be the best choice for the project at hand, it should be possible to assess the gaps between the framework and the required features earlier on in the project, and make deliberate decisions to plug those gaps the best you and your team can.

This sounds high level because individual implementation details really do hinge on individual project contexts and team circumstances.

But like I said before, React is still seems like the most dominant framework at the moment, and if you would like to discover more insights, please stay tuned to the results of the State of React survey that ran late last year. Honestly, there had been plans to run a State of React survey from a while back, but attempts to collaborate with the React core team fizzled out, and it was only until last year that Sacha managed to get around to launching it.

There will also be a 2024 edition of the State of React survey, so if you know someone who uses React or do so yourself, please do participate when the survey gets released.

JavaScript is not only used for the frontend. Although most web developers associate server-side JavaScript with Node.js, and rightfully so, since it is still the dominant JavaScript runtime today. If you google Node usage on websites, you will see the number 6.3 million, but never see where that number came from, everyone just uses it.

That sounds like a lot, until you look at the data published by W3Techs which says that Node.js is used by 3.3% of all websites whose web servers are known. I don't know anyone who works there to fact check their research so take all these statistics as reference not gospel.

But 3.3%? What are all these other websites running? Come on, some guesses. I'm sure someone is going to get the right answer.

Correct. PHP. Even though we do not have a State of PHP survey (nor are we planning one), I thought this fact is worth mentioning. That we should try not to get too caught up in hype cycles. There won't ever be a technology or framework or library that can solve all problems. Conversely, something like jQuery, which nobody really talks about any more is widely used, and will continue to be widely used for years to come.

I love what the You might not need jQuery website states right when you land on it. It never says to not use jQuery ever, if it makes it easier to develop your application, go right ahead. But if you're developing a library, consider if jQuery is needed as a dependency. The site suggests thinking about the why behind the decision. And I think that applies broadly across our scope of work as developers.

Libraries and frameworks are an integral part of pushing the web platform forward, because they are indicative of what developers need to build the features they want. Perhaps a library's success indicator is that it is no longer needed because its features have become natively supported by the platform. Which makes jQuery a rousing success. Let's give a round of applause to jQuery.

And to wrap up the JavaScript portion of this session, I'm just briefly going to mention the State of GraphQL survey. To be fair, GraphQL is a query language, specifically, an open-source data query and manipulation language for APIs and a query runtime engine. And it has implementations in almost every programming language you can think of, not just JavaScript.

GraphQL was invented by Facebook as a central intermediary layer between their many end-user-facing clients and many data sources. It was a specific problem that Facebook had, and they created a specific tool to deal with their problem. And back in 2022, GraphQL was something that had quite a bit of uncertainty and unclear best practices, and so Sacha decided to run the survey. But these days, it seems like the consensus is that GraphQL is best limited to niche use cases and use alternative less heavy-handed solutions.

The State of CSS survey has had 5 editions so far, and the 2024 version will probably be out later in the year. And when looking over 5 years worth of data all at once, it reminded me of how much faster CSS is evolving today as compared to 5 years ago.

If you are coming to Code, I will be talking more in-depth about the State of CSS survey and CSS features, so if you are coming, it's not déjà vu if you think you've seen some of these slides before. I do overlap a little bit.

When the State of CSS survey came about in 2019, in contrast to the State of JS survey, the CSS one was centred around CSS features themselves. The evolution of CSS has sped up over the past 5 years, and to be fair, browsers are also shipping new JavaScript features at a faster pace than before. This is why from the 2019 version onwards, features were also added to the JS survey.

As for CSS features, there are a lot of them. The last I checked (some time last week), there are 589 distinct property names from 81 technical reports and 83 editors' drafts. My personal opinion is that for the average web developer, there is really no practical reason to know each and every one of these properties and what they do, although I'm sure somebody does.

My take on things is to have a vague idea that something exists and can be used to do a thing. You don't have to know exactly how the property works, all its values etc. until you encounter an use-case where that something might be useful.

Like, I'm clearly not from here, I've heard of the AFL. And this might sound blasphemous but I don't know the rules, nor any of the teams or players. Now, my friend Chris suggested we go watch a game on Friday after the conference, and if I decide to say yes, then I would take the time to at least learn what the rules are. As of now, I do not.
