# Blur-Image
A plugin used to make blur effect on image that needs to be preloaded.

## Install

**Use bower**

``` shell
bower install --save blur-img
```

Then, you just import the JavaScript file and Style file into your page as following.

``` html
<link rel="stylesheet" href="bower_components/blur-img/dist/blur-img.css">
<script src="bower_components/blur-img/dist/blur-img.js"></script>
```

**Use npm packager**

``` shell
npm install --save blur-img
```

And import the files.

``` html
<link rel="stylesheet" href="node_modules/blur-img/dist/blur-img.css">
```

``` javascript
let blurImg = require('blur-img');
```

## Usage

In HTML, just add tags with the following attributes:

``` html
<figure name="blur"
        class="blur-img-container"
        data-real-width="1174"
        data-real-height="670"
        data-src="images/sm2.jpeg"
        src="https://cdn-images-1.medium.com/max/2000/1*0WwtDkE1q6HGZwD6Kn9SuQ.jpeg"
></figure>
<!-- no matter how many tags here -->
```

- `name`: Must be `blur`.
- `class`: Must be `blur-img-container` (Of course, you can change this in the css file).
- `data-real-width`: Your image's real width.
- `data-real-height`: Your image's real height.
- `data-src`: The small image url to load first in you local directory.
- `src`: The large image's url.

Then, in your `app.js`, just one line, yes, that's it , you're all done.

``` javascript
blurImg();
```

## License

Release under the MIT license.