'use strict';

/**
 * @description
 * A plugin used to make blur effect on image
 * that needs to be preloaded
 * @author Erichain
 * @date 8/14/16
 */
(function (window) {
    'use strict';

    // get all the image containers from page

    var containers = document.getElementsByName('blur');

    // add class to corresponding element
    var setStyle = function setStyle(elem, className) {
        if (elem.classList) {
            elem.classList.add(className);
        } else {
            elem.className += ' ' + className;
        }
    };

    // main function to blur images
    var blurImg = function blurImg() {
        containers.forEach(function (elem, index) {
            var thumbSrc = elem.getAttribute('data-src'),
                lgSrc = elem.getAttribute('src'),
                realWidth = elem.getAttribute('data-real-width'),
                realHeight = elem.getAttribute('data-real-height');

            // set a bottom padding to avoid glimmer
            elem.style.paddingBottom = realHeight / realWidth * 100 + '%';

            var thumb = new Image();
            thumb.src = thumbSrc;
            thumb.onload = function () {
                setStyle(thumb, 'thumb-loaded');
            };
            elem.appendChild(thumb);

            var realImg = new Image();
            realImg.src = lgSrc;
            realImg.onload = function () {
                setStyle(realImg, 'large-loaded');
                setStyle(thumb, 'thumb-hidden');
            };
            elem.appendChild(realImg);
        });
    };

    window.blurImg = blurImg;
})(window);