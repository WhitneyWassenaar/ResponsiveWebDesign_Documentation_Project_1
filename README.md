# MDN_web-project_MyFirstWebsite-Documentation
This is a documentation to follow my study progress.
I follow the "Your first website" tutorial from Mozilla Developer Network <br>
Source: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website

## Saturday | 10-5-2025 | 23:10
In the afternoon I started following the tutorial about building my first website. I already knew a lot about the basics of HTML and CSS. But when I moved to JavaScript I went in to a bit of trouble. The code on the website of MDN did not work on my website and I didn't know what was causing this. Then after a while I saw that there was a difference in declaration between the codes. I still haven't figured how JavaScript actually works. I made comments in my code to remind myself what I was thinking at that moment or writing down notes or questions to not forget important info.

But first I would like to dive into responsive webdesign. That's a skill I want to master before moving on to JavaScript.

**To do**
- Understanding basic HTML and CSS

## Sunday | 12-5-2025 } 00:18
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
<hr>

### Next question
Now I know that an image can also be seen as an inline-block element.

* I  don't understand why the other 2 yellow inline-block elements are getting below the baseline/descenders and the image not?

*Adding height to the yellow inline-block elements expands the height downwards while adding height to the image expands the height upwards.*



