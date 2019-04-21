# A deep dive into images on the web

*For ImageCon 2019. This is sort of a transcript of the talk.*

Hello! I'm pretty excited to be here, sharing the stage with so many amazing speakers. So thank you to the organisers for bringing me out. Today, I'd like to share with everyone my journey of trying to figure out images on the web. You see, I have this tendency to go down rabbit holes with things that seem rather straight-forward at first, but then, you get this little inkling that there's something more beneath the surface?

Yeah, that's me. And images. I'm also very annoying and have an incessant need to ask why. Constantly. Which is why I love and appreciate everyone who is still willing to be friends with me. I've been working on the web for a number of years now, and I learned that image optimisation is one of the low-hanging fruits when it comes to web performance.

You may not be able to discern the exact numbers from this chart but know that as page weight has steadily crept up over the years, images on average make up more than 60% of that page weight. Image sizes matter, because sending smaller images of comparable quality to your users over the interwebs is not only the smart thing to do, it's the right thing to do. 

But images are not all equal, some image formats are better suited for certain purposes over others. JPGs for photographs, choose PNGs over GIFs, don't use BMPs or TIFFs at all. I know all this. But for quite a while, I didn't know why, and it gnawed at me enough that one day I decided to find out.

My name is Hui Jing, you can also call me Jing. This is me in emojis, make what you will of them. The fox is not that obvious, but I use it to indicate that I'm a Mozilla Techspeaker, which is an initiative by Mozilla to support technical evangelists in regional communities around the world by providing resources and funding.

I also have a day job as a Developer Advocate with Nexmo. Nexmo being a platform that provides APIs for messenging, voice and authentication so developers can easily integrate communications into their applications.

## On the origins of imagemaking

Right, so images. Image making seems to be emblematic of humanity, don't you think? I tried to research if any other species creates images, and it seems that to date, no image making has ever appeared in the careers of primate artists, who would be the most logical next candidate besides human beings to ever do something like that.

Let's talk a bit about prehistoric images. I told you this was a rabbit hole, no? The earliest images date back to the Upper Paleolithic period, and some research has proposed that image making originated in the discovery of the representational capacity of lines, marks or blots of colour.

And the act of imagemaking seemed culturally agnostic. From Namibia to Tanzania, India to Brazil and Australia, prehistoric humans were attempting to reproduce the three-dimensional, full-colour world they lived in by making marks on the surfaces around them. 

If you think about it, imagemaking was an analogue process for the longest time. A pigment on a surface. Something physical, something you could touch. It was photography that brought light into the picture. But of course, the end result was still something persistent, that you could hold in your hand, that you could come back to year after year, even after the photograph had faded and yellowed with time.

## On some history of digital displays

The digital age is one of light and electronic signals. Perhaps it may be more apt to say of light created by electronic signals. I've gone on and one about ancient art work and photography, but really today's story is about this little fella, and what it represents.

Meet Pixel. No, not the Google phone, not that Pixel. This pixel has been around far longer than that phone. Pixel is a pretty well-defined character, multiple definitions if you look around, but the most common one calls a pixel the smallest unit of an image which can be displayed on a digital display device, the basic logical unit for representing digital graphics.

Computers have come a long way in a relatively short period of less than a hundred years. The earliest of them having displays that were more indicators of device health rather than program output. But those panels of light bulbs, which allowed engineers to monitor the internal state of their machine, came to be known as a *monitor*.

The binary nature of digital computing, pioneered by Konrad Zuse back in 1941, made it easier to represent data and perform calculations and logical operations, given you only had 2 states to deal with. This also made the machines easier to build and improved reliability.

Electronic displays actually pre-date digital computers, with Cathode Ray Tube (CRT) technology becoming commercially available back in 1922. They worked by firing a beam of electrons onto a phosphor-coated screen. The energy from these electrons gets absorbed by the phosphor atoms, and kicks them up to higher energy levels.

If you remember some high school physics, you may already know that this high energy state is unsustainable and the phosphor atoms will come back down, releasing the extra energy in the form of light, resulting in a bright spot on the screen.

There are 2 ways to get images to display on the screen. You could do a raster scan, where the electron beam is swept across the screen one row and a time from top to bottom. Varying beam intensity allows for a pattern of illuminated spots across the screen and each of these screen points is a single pixel.

Or you could do something called a random scan which could generate vector graphics and both types of scanning have their pros and cons. Back in the 70s, both raster displays and vector displays were used for computer graphics. The relatively high price of memory back then made vector displays more affordable, but by today, they've practically all been replaced by raster displays.

Of course, these are merely the mechanics of how an image gets displayed onto a screen. And before that can happen, we must have image data.

## On digital images

All digital files are really just long lists of numbers stored as binary on a storage device, and file formats are what allows us to read and understand the data these numbers represent. Operating systems and applications can use a number of methods to identify all these different file types.

Filename extensions is probably the most popular method used by most operating systems. Information about file formats can also be explicitly stored in the file system instead of the file itself. And files themselves, contain information about their own format. Such information is usually put at the beginning of the file as a file header, or a magic number if it's only a few bytes long.

Image files are a particular type of file format, so their file headers would contain stuff like the image format, resolution, colour space, authoring information, camera model and so on. Broadly speaking, there are 2 kinds of images, raster and vector.

A raster image is also known as a bitmap image, which are comprised of pixels in a grid. And each pixel contains a bit of colour information, a combination of the additive primary colours, red, green and blue. A bitmap is essentially a spatially mapped array of bits. The number of bits per pixel will determine how many unique colours the image can contain, this is also known as colour depth. 

## MacPaint

Before computers became a consumer product, each model pretty much had its own suite of software and file formats which weren't all that interoperable. But when the Macintosh came out in 1984, the MacPaint application introduced a well-defined and well-documented file format for saving image files created with it. And what's most notable about it is that other applications could use the image files it generated.

## Bitmap (BMP)

On the Windows side of things, we had BMP, which was released in 1987. As a kid who grew up with Microsoft, shout-out MS-DOS 6.0, I would say this was the first image format I ever encountered. I never had a Mac, so I never used MacPaint, it was MS Paint (back when it was known as Paintbrush) for me, all day, every day. 

This is an example of a 4-bit BMP image, which means a given pixel can be 1 of 16 colours. Each colour in the table is represented by a 24-bit number, 8 bits each for red, green and blue. Each colour is represented by a hexadecimal number, and we can map each pixel to its corresponding colour value based on the colour table. Such bitmaps are called palette-indexed bitmaps, but some bitmaps can store the colours themselves.

The thing is BMP files are usually not compressed, and hence, not great for web use at all.

## Graphics Interchange Format (GIF)

Which brings us to the Graphics Interchange Format. Whether you pronounce it GIF or JIF, what's not up for debate is the fact that this was the first image format built for data transfer. Developed by CompuServe and released on 15 June, 1987, this is a format that pre-dates me. At the time, memory was at a premium. So how could users access and send files to each other without locking up all their computer's memory?

Steve Wilhite and his team centred the GIF around the Lempel-Ziv-Welch compression algorithm. And as we go along, you'll see that image formats and compression algorithms practically go hand-in-hand.

MacPaint used run-length encoding, which combined repeated data into a shorter single data value and count. This was great for simple black and white pictures, which was pretty much what the MacPaint could achieve. But it couldn't do colour very well.

I won't go into details of the actual LZW algorithm, but it encodes the image by creating a dictionary of repeated sequences of colours and could achieve much better compression rates than any prior image format.

The first photo of a band published on the internet was a promotional shot for Les Horribles Cernettes, a particle physics parody pop group led by Michele de Gennaro. Proving that scientists do have fun, as well as a sense of humour. What format was this photo in? GIF. This was back in 1992 on the World Wide Web browser.

So it's definitely no surprise that when Mosaic was released in 1993, it launched with support for 2 image formats, GIF and JPEG.

## Joint Photographic Experts Group (JPEG)

JPEG is both the name of the committee that created the JPEG standard, as well as the name of the image compression algorithm itself. 

I put a note to myself here, that if Dr. Jon Syeners had already covered most of this stuff I'd just skip over it and move on. Should I have been responsible and reached out to check with him? Yes. Did I? Nope.

JPEG was revolutionary when it was released in 1992. A lot of the information here I learned from Colt McAnlis, who wrote a really in-depth explainer on how JPG works, which you should really check out if you're interested in this.

JPG converts from RGB to Y,Cb,Cr colour model, comprising Luminance, Chroma Blue and Chroma Red. This works because we notice luminance more distinctly than chrominance, so we can get away with aggressive changes to the CbCr channels.

The Cb/Cr channels don't have as much detail as the Y channel. They contain less information. So what the algorithm does is resize the Cb and CR channels to a fraction of their original size, also known as downsampling. This process is lossy, so we won't be able to recover the exact source colours anymore.

The math is centred around the Discrete Consine Transform (DCT), where the idea is that any 8-by-8 block can be represented as a sum of weighted cosine transforms, at various frequencies. After applying the requisite formula and basis functions, we end up with a matrix of 64 coefficients. The uppermost-left coefficient is called DC, while the other 63 are called AC.

The data has transformed from a spatial to a frequency domain. After this conversion, the coefficients are now real numbers instead of byte-aligned integer values, causing a bloat from 1 byte to 4 bytes. So it is necessary for a quantisation phase. JPG uses a pre-calculated matrix of quantisation factors instead of directly converting the weights-matrix back into a 0 to 255 number space.

The final matrix will end up with a large number of entries that are small values or zero, which compresses well. The matrix of quantisation factors are controlled by changing the quality level. By now you might notice that there are a larger number of zeroes toward the bottom right of the matrix, so a Zig-Zag algorithm is applied to create a linear array of values from the block. After such a reordering, further compression with run-length encoding can yield even better results.

The full process of generating a JPG file involves more steps than what I outlined but that was my general understanding of how JPG compression works. Hopefully Dr. Jon Syeners will be able to answer any further questions you might have about it.

JPG does extremely well with photographic images and effects like gradients, but not as well with line drawings or graphics with sharp contrast between the pixels. But an interesting feature of JPGs is the option of progressive JPGs.

## Progressive JPGs

I learned about how progressive JPGs from Dr Jon Sneyers, in fact, when I read his article called Progressive JPEGs and green Martians. Non-progressive JPGs encode all the coefficients of each 8-by-8 block sequentially. Instead of doing that, we can encode all the DC coefficients first, then some low-frequency AC coefficients, followed by high-frequency AC coefficients at the end.

Progressive JPGs require the encoder and decoder to make multiple passes through the image, and a typical progressive JPG has about 10 scans. So as the image gets decoded, you see a blurry image get progressively sharp as the image loads.

## libjpeg-turbo segue

libjpeg-turbo is an open source JPG image codec which is used by a large number of applications and operating systems. Chrome has been using it since version 11 and Firefox since version 5.0. Not too sure about WebKit though, they might still be using libjpeg.

## GIF patent uproar

And I was trying to figure out which image codec browsers used for GIFs when I unearthed the story of how PNG came about. If you already know this story like the back of your hand, please grant me your patience while I summarise what happened.

Turns out the LZW compression algorithm was patented by Unisys back in 1985. But when CompuServe used it to power GIF, they were not aware of its patent status. And Unisys didn't make any moves until 1993, when Mosaic came out.

If you squinted hard at my slides when I first mentioned GIFs, you may have noticed the specification said GIF87a. GIF89a was an extension that added features like transparency, and more crucially, the ability to animate the GIF.

Animated GIFs have had enormous staying power, seeing as how I've just sent more than handful just earlier today. They had been all the rage on the web once browsers supported them and in 1994, Unisys decided to enforce its patent. By December of 1994, a court agreement between Unisys and CompuServe resulted in the announcement that Unisys would start collecting royalties from all software makes who used the GIF89a format.

Outrage ensued. And in stepped The League for Programming Freedom and their idea to burn all GIFs on November 5, 1999. There was also a concrete plan developing on the usenet newsgroup <em>comp.graphics</em> on the possibilities of GIF alternatives.

## Portable Network Graphics (PNG)

They came up with a little something called Portable Network Graphics, shortened from the proposed PING, for “Ping is not GIF”. Some other suggestions were quite fun, like TNT, for “The New Thing”. Even though PNGs outperformed GIFs in a multitude of ways. It was 100% open-source and patent-free. It could support thousands of colours versus GIFs 256. It handled transparency better.

But the designers of PNG made a conscious decision not to provide animation capabilities. And that was pretty much what kept the GIF alive all these years, because there was no viable alternative to animated GIFs.

In contrast to JPG, PNG compression is lossless. And it is a 2-part process. Delta encoding is a way of storing or transferring data via differences between sequential data instead of complete files. Diff-ing, essentially.

This is advantageous for compression when the data you're dealing with is linearly correlated, so the differences in values are often repeated, low values. Before compression, filter algorithms are used to prepare the image data for optimal compression.

For each scan-line of pixels, the current pixel is encoded in relation to the pixel on its left (A), directly above it (B), and at its top-left (C). These filters are not done per pixel though, but per channel, e.g. all red values, then all blue values, then green. Developers of PNG also came up with some general rules of thumb to select the best filter based on the the type of image being processed.

After the filtering is done, the compression takes place, using the DEFLATE algorithm, which is used in gzip compressed files and zip files, in addition to PNG. So again, Colt McAnlis also has an in-depth explainer on how PNG works, but he highlights that the nature of image data brings about some interesting caveats when using DEFLATE.

Specifically, how the exact dimensions of your image could have an impact on how well image compression works. If you look at the illustration, which consists of two nearly identical images, but the one on the right is 2 pixels wider.

For the smaller image, the bytes representing the second and third kiwis fell between the LZ match range and are encoded as highly efficient LZ matches, hence the dark blue thermal pattern. But somehow, the extra to columns of pixels in the right image resulted in the bytes for the second and third kiwis to be out of match range, and they are encoded as non-matching.

## Browser rendering engines

libpng is the official PNG reference library, and is what Firefox uses for PNG support. So earlier, I mentioned libjpeg-turbo as a kind of segue into PNGs. But we really ought to talk about these image encoders in relation to browser rendering engines.

Now that Edge has moved over to Chromium, I've got mixed feelings about that, I suppose we can cover the 2 major browser rendering engines, Blink and Gecko. First of all, I am NOT a browser engineer, far from it. I know a C++ 

resolutions

transmission of data formats over the web

browser parsing image data?

streams?

video??

formats supported by browsers, bits and bytes into actual images we can see

