# MDN_web-project_MyFirstWebsite-Documentation
This is a documentation to follow my study progress.
I follow the "Your first website" tutorial from Mozilla Developer Network <br>
Source: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website

## Saturday | 10-5-2025 | 23:10
In the afternoon I started following the tutorial about building my first website. I already knew a lot about the basics of HTML and CSS. But when I moved to JavaScript I went in to a bit of trouble. The code on the website of MDN did not work on my website and I didn't know what was causing this. Then after a while I saw that there was a difference in declaration between the codes. I still haven't figured how JavaScript actually works. I made comments in my code to remind myself what I was thinking at that moment or writing down notes or questions to not forget important info.

But first I would like to dive into responsive webdesign. That's a skill I want to master before moving on to JavaScript.

**To do**
- Understanding basic HTML and CSS

## Sunday | 12-5-2025 | 00:18
When studying the basics of HTML and CSS I have to admit it is kind of addicting wanting to know everything. So I’m actively trying my best to find the answer on my own but a lot of times I really need help of other enthusiastic and fanatic developers.

After a lot of minutes (almost 30 minutes) trying to find out what I did wrong, I only found out the solution to the problem.

When I made this image into a clickable link (image link) I saw that there was extra space at the bottom. Adding an anchor link to the image causes extra space at the bottom of the image. I thought it was a problem with the margin of the image or a padding problem of the container.
<img src="https://global.discourse-cdn.com/freecodecamp/original/4X/a/b/8/ab8909c0ee9b48613f5ea831dca3b5aca0cbbb87.jpeg">

But no. It was the anchor link that was causing the problem. I found out that adding “display:block;” to the image was doing the trick.
<img src="https://global.discourse-cdn.com/freecodecamp/original/4X/c/0/a/c0aa938aa46acf85037ed17d87121811faec5125.jpeg">
## Why does adding an anchor link to an image cause extra space.<br> And what does “display:block;” do to remove that extra space?

**What did I do to confirm the conclusions?**

* I wrote a simple text that has default display of inline
* I took an <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1">example of W3Schools</a> of inline-block elements to see their behavior. 
* I placed an image link between the text

**Conclusions**
* Anchor element is by default an inline element
* Image behaves also like inline element
* It is true that because of the descenders, there is extra space at the bottom of the image link
* Applying the same height to image and container does not remove the extra clickable space at the bottom of the image. The image does fit in the container precisely, but it hides the extra clickable space below the border of the container.

 **I think I do understand why an image can also be seen as an inline-block.**

1. INLINE: Because it's aligned on the baseline of the text.
2. BLOCK: Image does have a default width and height (or you can assign width and height)

<img src="https://global.discourse-cdn.com/freecodecamp/original/4X/a/2/3/a232efedc621bb9c0315c105e947c1814ceadb92.png">

### Why does adding an anchor link to an image cause extra space. And what does “display:block;” do to remove that extra space?
Answer: 
>1. Because the anchor element has by default a display of inline there’s extra space reserved for descenders of a text. When an image is enclosed in an anchor element, it does not use the reserved space for descenders. That's why you see "extra" space at the bottom of the image.
>2. Block level elements take up as much space as possible by default . In this case setting display to block of the image removes the inline property of the anchor element so that the image can take up as much space as possible by default. Each block level element will start a new line on the page, stacking down the page. In addition to stacking vertically, block level elements will also take up as much horizontal space as possible.

Now I know that an image can also be seen as an inline-block element.
<hr>

### Why do an empty span (inline-block) element and an image expand upwards when increasing the height, while a span element containing text expands downwards when increasing the height?

  <img src="https://global.discourse-cdn.com/freecodecamp/original/4X/1/7/c/17c7c71ebcab4294c98baaf7941c1ace8e07864f.png">
  
Answer:
>1. An image is a replaced element. It's an element whose content can not be styled by CSS, the content is external just like video and input element for example. You can give it width and height but because it’s aligned to the baseline, it will grow upwards. When an empty span element has display set to inline-block, the width and height will be present because of the "block" , and stays on the baseline because of "inline".
<img src="https://global.discourse-cdn.com/freecodecamp/original/4X/0/d/f/0dfb5343958463b85a9c0d1cb33a6b147f9dabf0.png">

>2. When you add the text to the span element, the browser aligns that text to the baseline. It moves downward so that the baseline of the surrounding text matches that of the span’s inner text.
<img src="https://global.discourse-cdn.com/freecodecamp/original/4X/d/b/8/db80f4c8dc1a2cac84542e186c6397a9800fbb3f.png">

<hr>

## Thursday | 15-5-2025 | 15:23
### Diving into responsive web design
This is the part I have to invest more time in understanding the basics of flexbox and grid in combination with mediaqueries. I came to the conslusion that I don't like the way MDN is teaching responsive webdesign. The layout and instructions are a bit unclear to my opinion and I found the website: <a href="https://web.dev/learn/design/welcome" alt="Link to webpage">www.web.dev</a> having a much better way of showing instructions and examples.

## Friday | 16-5-2025 | 13:44
### My first responsive website
When I looked at the code of my website, I felt a little bit lost. When reading the documentation about responsive webdesign, I knew that I had to start over. According to web.dev's introduction article: https://web.dev/learn/design/intro. My design was from the year 2000, a fixed width design :). So I had to change my mind and needed to learn working with relative positions and sizes. I had to find a workflow I could easily understand. This video helped me a lot understanding the basics of one of the many responsive webdesign workflow. The one I know now is working from mobile device width to I-pad and then to desktop. <br>This was a useful video: https://www.youtube.com/watch?v=ZYV6dYtz4HA.

This time I used flexbox to organise the elements. I"ll try grid in another project.

You can view the project website <a href="https://codepen.io/Wassenaar/full/raaRKxx">here</a>









