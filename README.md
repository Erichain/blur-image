# Blur-Image
A plugin used to make blur effect on image that needs to be preloaded.

Just as Medium does:

![](http://recordit.co/ZuaKyenT0m)

## Install

**Use bower**

``` shell
bower install --save blur-image
```

Then, you just import the JavaScript file and Style file into your page as following.

``` html
<link rel="stylesheet" href="bower_components/blur-image/dist/blur-image.css">
<script src="bower_components/blur-image/dist/blur-image.js"></script>
```

**Use npm packager**

``` shell
npm install --save blur-image
```

And import the files.

``` html
<link rel="stylesheet" href="node_modules/blur-image/dist/blur-image.css">
```

In your JavaScript file, you can use `require` to import.

``` javascript
let blurImg = require('blur-image');
```

## Usage

In HTML, just add tags with the following attributes:

``` html
<figure name="blur"
        class="blur-image-container"
        data-real-width="1174"
        data-real-height="670"
        data-src="images/sm2.jpeg"
        src="https://cdn-images-1.medium.com/max/2000/1*0WwtDkE1q6HGZwD6Kn9SuQ.jpeg"
></figure>
<!-- no matter how many tags here -->
```

- `name`: Must be `blur`.
- `class`: Must be `blur-image-container` (Of course, you can change this in the css file).
- `data-real-width`: Your image's real width.
- `data-real-height`: Your image's real height.
- `data-src`: The small image url to load first in you local directory.
- `src`: The large image's url.

Then, in your `app.js`, just one line, you're all done.

``` javascript
blurImg();
```

## Build

``` shell
git clone https://github.com/Erichain/blur-image.git
```

Run `npm install`.

Run `npm run dev` to start local development.

Run `npm run build` to build.

## License

Release under the MIT license.