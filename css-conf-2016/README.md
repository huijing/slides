# How I learn to CSS

*For CSSConf.Asia 2016. This is sort of a transcript of the talk.*

Hello everyone.
Today I'm going to talk about how I learn to CSS.
I've talked a lot of people about CSS and a number of them have told me they don't like CSS, that CSS is hard to wrap their head around.
So I'm going to share with you how I wrap my head around CSS.
The purpose of CSS is to make stuff on the web look good. I mean, you can't have Cascading Style Sheets without Style. I see CSS as a tool for creative expression, you know, like writing, painting or making music. I just like to CSS.
-->
As with all creative endeavours, we need some inspiration. Well, the CSS specification, I dunno, is probably *this* thick if printed out? So there's a lot of stuff in there for us to explore and play with. Many people, myself included, write articles about CSS, some even write books. So read those, usually they include code samples that you can fork off and play with yourself.
Podcasts. I'm sure most people in this room commute in some way or another. I personally commute by bicycle, so I can't really do much else with my hands or my eyes, technically that applies if you drive as well, but your ears are free. There are a lot of good podcasts that discuss techniques and latest developments, great for discovering new stuff or old stuff you never knew existed.
If you're anything like me, you might find conferences a tad expensive. Maybe I'm up here because I was too cheap to pay for a ticket, joking, kinda. But a lot of conferences put up videos of their talks after the fact, so if you wanna skip the face-to-face interaction with like-minded people and the prospect of meeting your developer idols, then go ahead, just watch the videos for free online. Ton of good content there.
-->
And then, just start building stuff.
-->
Una Kravets once said this on a her excellent podcast, P.S. subscribe to it right now. 
People go to conferences to get inspired and to learn about things that exist or maybe an overview of how to use it. 
But then, they really learn that thing, that technology, when they go home and practice it themselves.
So hopefully by the end of today, you'll be sufficiently inspired to CSS something when you go home tonight.
-->
But that's not enough. You really ought to share what you've done with world. Either write about it or talk about it. Because when you do that, you have to explain stuff, and that forces you to really understand what's going on.
-->
So who is this person standing up here rambling on about CSS? If you were here last year, I might look familiar to you, cos I hosted this last year. So that's me, I'm Hui Jing, a self taught designer and developer working at a company called Deep Labs and I write blog posts from time to time.
-->
So I built some stuff recently, and now here I am, sharing it with you. Because I only have 15 minutes, key points only. 
First up is what I call over-the-top radio buttons. I watched a video of Ethan Marcotte's excellent talk at An Event Apart earlier this year, link in the slide, and was particularly enamoured with his demo demonstrating progressively enhanced radio buttons. 
One thing about conference talks is that, unless the speaker is live coding, the code samples are just a tiny snippet of the key functionality. There's usually a lot of mundane code they don't show you. 
Learnt that the hard way, cos I was like, aww that's not a lot of code, I could probably build this in half an hour. Wrong. Took me like, I dunno, 3 days? More? But anyway, these are the cool takeaways I got from building it.
--> *Switch tab to demo*
So here's the demo. 
Basically, when you click an option, there's some animation going on, some zooming and shifting. You can clear your selection, and stuff animates back. 
CSS handles all of it. The only Javascript involved is for adding classes.
-->
The crux of this demo is a technique known as the checkbox hack. Most of us have built HTML forms before, and we should know that form control elements like input should have an associated label element. 
So you can do this in 2 ways, either have the label contain the input, or use the for attribute on the label to point to the id of the input element. 
I actually found out recently that the 2nd method is recommended because some assistive technologies don't work properly with the wrapping method. So now when you click the label, it's as if you clicked and checked the radio button. And you can use images as part of the label too.
-->
When a radio button or checkbox is checked, we have a :checked pseudo-class that we can play with. 
Together with sibling selectors, or descendent selectors, depending on how you wrote your HTML, we can have some fun with this state change.
-->
We can have some animation. 
The way browsers work right now, there are only 2 things that can be animated cheaply, transforms and opacity. Both of which I use in this demo. 
So the sliding that you saw just now, that was translateX with nth-child selectors. 
My 4 options were laid out, using flexbox actually, in a single row. So they're only going to move along the x-axis. The selected option is always in the 2nd position, so we can set up the positioning rules using nth-child selectors. 
If the 1st option is checked, it will always move 1 position to the right, translateX 100%. The 3rd option will always move 1 position to the left, translateX -100%, while the 4th option will always move 2 positions to the left, translateX -200%.
-->
Then there's that zooming bit. Basically, there are 2 divs stacked along the z-index. That's why if you peek into the source code, you'll see some z-index rules in there. 
The stuff that displays when checked are hidden from view at first, by setting opacity to 0 and scaling it down to nothing. 
So you can see use of the :not selector here is helpful, because once you check 1 option, you want the other 3 to disappear. 
The classes prefixed with is- are added and removed via Javascript. Those were the classes I was talking about earlier.
-->
Transitions are what make the animation possible, otherwise the options would just jump into place, none of the smooth sliding and zooming. 
I use transitions quite often, but what I never used before was the transition-delay. 
Turns out that 0.1s pause after you click, does make a difference. 
I also have the demo on Codepen so you can fork it and mess around with it.
-->
Another talk I watched was by Harry Roberts, on structuring your CSS. 
It was great, there was Subway involved, like the sandwich not the trains. 
But his point was, your CSS classes shouldn't be monolithic, because that's creating a single point of failure. 
Handle layout separately from component styles, and have specialised Javascript hooks so if you change the visual style of your components by switching classes, you won't break functionality.
-->
Then someone pointed out to me that I should make the demo keyboard accessible. I'm not good at this at all, for now. 
Point is, I don't have a solution for making the checkbox hack keyboard accessible, if any of you do, please talk to me about after this. 
So the next best idea I had was to toggle the enhancement off, using a checkbox at the top of the page. 
If you've never tried using a keyboard to control a HTML form, just know that you tab to go to the next element, and use the arrow keys to navigate the options. For checkboxes, space selects or unselects the option.
-->
Right, source code on Github, and also on Codepen. 
-->
Next up, some CSS album art. 
Came across this blog post by Scott Hansen outlining his design process for his album covers. 
And I noticed his design was pretty minimalist, you know, shapes. 
Shapes that can be created using just CSS.
--> *Switch tab to demo*
So here's the demo. 
All of it is pure CSS, no images. 
Annnd, some gratuitous latest-and-greatest thrown in, with the CSS scroll snap property.
-->
For some reason, I thought it'd be cool to try this single div, if I could help it. So pseudo-elements are definitely necessary. 
But they are inserted content, which means you must have the content property for them to work. At least empty quotes. 
The thing about inserted content is it's not visible in the page's source. So ideally you probably don't wanna put any critical content on your page that way. 
For decorative purposes I think this is fine.
-->
So here we go. Shapes with CSS. We'll start off with something everyone is familiar with. 
This be a circle. Border-radius is the star of this show. For this demo, I wanted it to be responsive, you know, none of fixed-width stuff. No no no. So we be using viewport units instead. 
Units are relative to the width or height of your viewport, and vmin means your unit of length is based on current viewport width or height, whichever is smaller.
-->
Next shape is the triangle. CSS triangles are created with borders. If, unlike me, you have better things to do with your life, you probably never done this. 
Create a div of any size you choose, maybe a 200px square. Then apply a different coloured thick border, maybe 30px, for each side. 
You'll notice that the edges meet diagonally. Now if the div did not have a width or height, you'll be left with 4 triangles. And we can use this to create triangles pointing in different directions just by making the 2 adjacent borders transparent. 
So for this right-facing triangle, the top and bottom borders are transparent, while the left border is the one with the desired colour.
-->
Now this one is a cop-out shape. Because it's just a normal rectangular div with its ends clipped off using clip-path. 
Clip-path uses the same polygon syntax as SVGs and CSS shapes, with each point being a coordinate relative to the width and height of the div. 
Unfortunately, none of the Microsoft browsers support this yet, though it's under consideration as part of the "Masking Module".
-->
Ah hah, this is a fun one. So on some of the covers, there's this series of dots, hold on let me switch over. 
I once came across this fantastic site showcasing amazing single div CSS creations. I think it's aptly titled a.singlediv.com or something and I was thinking how on earth can you do all this with only 1 div?? 
You know how I said ::before and ::after gave you 2 more elements to play with, well, box shadow gives you, I dunno, unlimited more elements? 
Someone correct me on this.
But the limitation here is that it can only be 1 shape, I mean, it is a shadow of something. 
So the syntax looks like that, and you can use the offsets for positioning and the blur radius for sizing. I aligned my code for easier reading is all.
-->
This is purely gratuitous, my original Codepen demo used flexbox to align everything in the middle. 
Came across an article by Sarah Drasner on CSS tricks, so why not toss it in?
This was introduced to enforce scroll positions so users don't land at awkward scroll positions that leave a page partially on-screen when panning. 
Okay, fine. It's scroll-jacking. 
But I can sort of understand the use case. And it works well with a keyboard.
So the specification isn't stable yet. And it only works on Firefox and, surprise surprise, Edge. But Edge doesn't support clip-path. 
The key property here is scroll-snap-type on the container and scroll-snap-coordinate on the inner element. This is the kind of thing that really makes sense when you play with the code and change values and stuff.
-->
So source code and Codepen link for this demo. 
One thing to note about trying out the latest and greatest is to always check in with caniuse.com just to see how support looks like. 
But there's never been a better time than now to live on the cutting edge. Because evergreen browsers are a thing now, and new stuff is coming in faster than ever. 
You don't have to wait 6 months for a new feature anymore, *ahem* Safari.
-->
So all the related reading, in more or less the order which I talked about them. Good stuff.
-->
And that's it for me. Questions?
