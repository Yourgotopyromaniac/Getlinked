# Getlinked - Did someone say Pixel-perfect?

I'm Awoyemi Abiola and this repository is the official hosting repository for my entry into the getlinked pre-hackathon competition. 

This readme contains everything you need to know about my development process, my noteworthy level of attention to detail in creating a pixel-perfect implementation, and key visual and optimization features that makes my solution stand out from the rest.


## Contents 

### 1.0 Designer Requests
### 2.0 Key Features and Optimization
### 3.0 Pixel Perfection
### 4.0 Custom Component Documentation





## 1.0 Designer Requests

Going through the figma file, I noticed the designer put several comments in different sections of the page, requesting certain animations, this would have been easy to miss and would even be difficult to implement in such a short timeframe, but I didn't falter, I implemented all of these animations and more as requested by the designer; 

1. Star blinking animations ✅
2. Hero main Image animation ✅
3. Hero Header Typing animations ✅
4. Animations on all headings, subheadings and section illustrations ✅


## 2.0 Key Features and Optimization

This is a fully functional website, I've set up the registration and contact forms to successfully collect and send required user data using the backend API provided in the challenge, that's right, no corner-cutting here 🙅.

Some of the png files on the figma file are quite large and unoptimized for a website, using these results to a poor performance on the webpage, leading to a poor user experience for anyone interested in the hackathon 😔.

I've avoided this by optimizing these images, converting them from PNG to WebP, A superior and more optimized image format developed by Google, resulting in a highly performant and more user-friendly website.

Accessibility improvements were also made, with alt texts for description on all images.


## 3.0 Pixel Perfection
Notice anything different when going through my solution side-by-side with the figma file, No? Me neither 😁.

I've made sure to follow every dimension and specification in the figma file to the T while converting to code.🔍

A minor detail a lot of people might have missed, on the prizes and rewards section, the background appears to be dimmer than the rest of the web site, I initially assumed a different background color must've been used, but upon further inspection 🕵️‍♂️, I realized a background image was used, with a color-burn and opacity effect to overlay over the main page background color, creating a grain effect and dimmer background, I implemented this especially well, using the CSS mix-blend-mode: color-burn property and applying the indicated opacity - 19%, yes I still remember 😁.

Another element I paid particular attention to in conversion from design to code is the hamburger button on mobile, rather than just using two images and having them abruptly transition between each other, I created a standalone element with smooth and slick animations between the two menu states.

## 4.0 Custom Component Documentation.
I like to add these cause as important as user-experience is, Developer experience should also receive just as much attention.

I've made use of only 1 Custom and resusable component in this application which is the CustomButton component, it accepts the following props :

ButtonText : type - string

Now the button can be used anywhere by simply calling CustomButton and passing it's desired text. All of its styling has already been handled.


## 5.0 Conclusion
If you've read this far down as a judge, Thank you for your time and dedication and for the opportunity to participate in this competition. I hope you have been able to see just how much dedication I've put into it and I really hope I come out on top as a new laptop or funds to purchase one would be of great use as I have none right now.

### Thank you for reading 
