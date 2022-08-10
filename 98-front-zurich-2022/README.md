# The many flavours of enterprise CSS grid

*For Front Conference Zurich 2022. This is a sort-of transcript plus my notes for the talk.*

Hello everyone! This is the first conference I'm speaking at since COVID happened so it does feel kind of surreal. I'm very happy to be here and grateful to the organisers for giving me the opportunity to talk to all of you about my favourite topic in the world, CSS.

We're at a frontend conference today, right? So I'm going to assume a lot of us are in the business of how displaying web content on a digital screen. Which could be of any and all sizes. For the next half an hour, we're going to think about, more specifically, the laying out of content these screens.

If your content is going to be rendered by a browser engine, then your main mode of communication with the browser for styling content has to be CSS. And I'm sure everyone today has their own opinion about CSS, some of you might love it as much as I do, while others might see of it as a hard-to-deal with API you would like to avoid as much as possible.

Regardless of your opinions on CSS, I'm not here to tell you what to think or how to feel. The reality is that browser engines today are much more capable than before, they can lay out content much better than before. And we need to know how to make full use of the browser's web layout capabilities.

Technology evolves very fast, I know, but as of now, most web interactions involve a screen. And these screens can be as small as a watch-face or as large as a 70-inch super HDTV. And you, the developer or designer or creator, can't really control this.

This means, the way we think about designing layouts on the web cannot be like anything else that is fixed. It's quite a different mental model, and so, the tools we use must suit this fluid, interactive medium. Luckily for us, now that Flexbox and Grid are very well supported across all major browsers, our toolbox has been greatly upgraded.

Both of these layout models were introduced after the web had evolved into more than just a document viewer. They were built to handle application interfaces which would be viewed across many different screen sizes.

Admittedly, Flexbox had a relatively more rocky rollout, as browsers implemented experimental versions of the syntax before the specification had been nailed down. But by 2015, all the major browsers had updated to use the latest specification and the implementation was considered stable.

Browser vendors and specification authors learned from the Flexbox rollout and did Grid differently. They still needed to developers like you and I to test out this new layout model, but instead of using vendor prefixes, they chose to implement the pre-finalised version of Grid behind a feature flag.

This meant that if developers wanted to use it, they had to manually go to the browser configuration, you know, that page that warns you your warranty is null and void if you change things? No, I'm kidding, but it does make it clear that you could potentially break something.

Non-developers would most likely never encounter nor attempt to, hence, this approach allowed browser vendors to still collect feedback from web developers while minimising the odds that they would actually ship to production before the implementation itself was ready and mature.

Grid was rolled out in a very coordinated manner back in 2017, with the four major browsers all shipping in the month of March, and by October, even Edge and Samsung Internet got it.

Fast forward to today, the percentage of internet users surfing the web with browsers that support Flexbox and Grid is overwhelmingly high. So browser support is no longer a valid argument for why adoption rates are lower than expected.

Okay, for what it's worth, Flexbox is everywhere. It has become the go-to for many web layouts, and after seeing my thousandth “how to centre something vertically” article, I'm not surprised it caught on well.

And even though this survey has a relatively small sample size of 8075 developers, it did prompt me to wonder why and how Grid's usage numbers could be higher.

I have a theory. 
