# Blur-Image
A plugin used to make blur effect on image that needs to be preloaded.

## Install

**Import through `script` tag**

``` html
<script src="path/to/blur-img.js"></script>
```

**Use npm packager**

**Use bower**

## Build

## Usage

In HTML, just add tags with the same `name` attribute:

``` html
<div name="blur"></div>
<div name="blur"></div>
<!-- no matter how many tags here -->
```

Then, make your own config through your `app.js`:

``` javascript
// app.js
var config = {
    containers: document.getElementsByName('blur'),
    smSrcs: [
        '../example/images/sm.jpeg',
        '../example/images/sm.jpeg'
    ],
    lgSrcs: [
        'https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg',
        'https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg'
    ],
    transTime: '0.5s'
};
```

> Note: The length of `smSrcs` and `lgSrcs` must be as the same as the tags that has an `name` attribute in your HTML.

Finally, add the function to your `app.js` to start blur effect:

``` javascript
// app.js
blurImg(config);
```

## Contribution

## License