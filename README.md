# recolor
my little framework

`recolored.js` is a simpje jQuery plugin that desaturates images and resaturates them on hover.

##Usage
1. Include the stylesheet on your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="recolored.css">
  </head>
```

2. Include jQuery and recolored.js on your document's `<head>`

  ```html
  <head>
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script src="recolored.js"></script>
  </head>
```

3. Use the jQuery selector to select the image you want to desaturate! You can choose to use an ID to make one image desaturated, or you can use a classname to make more or even all your images desaturated!
  ```javascript
$("#img").recolor();
```

4. You can even change the CSS file, to change the amount of desaturation or the speed of the effect!
  ```css
filter: gray; /* IE6-9 */
	filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
	-webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
	filter-name: grayscale;
	-webkit-filter-name: grayscale;
 	-o-transition:1s;
 	 -ms-transition:1s;
  	-moz-transition:1s;
  	-webkit-transition:1s;
 	 transition:1s;
```
