/**
 * @description
 * A plugin used to make blur effect on image
 * that needs to be preloaded
 * @author Erichain
 * @date 8/14/16
 */
(function ( window ) {

    var containers = document.getElementsByName('blur');

    containers.forEach(function ( elem, index ) {
        var thumbSrc = elem.getAttribute('data-src'),
            lgSrc = elem.getAttribute('src'),
            realWidth = elem.getAttribute('data-real-width'),
            realHeight = elem.getAttribute('data-real-height');

        elem.style.paddingBottom = (realHeight / realWidth) * 100 + '%';

        var thumb = new Image();
        thumb.src = thumbSrc;
        thumb.onload = function () {
            thumb.classList.add('thumb-loaded');
        };
        elem.appendChild(thumb);

        var realImg = new Image();
        realImg.src = lgSrc;
        realImg.onload = function () {
            realImg.classList.add('large-loaded');
            thumb.classList.add('thumb-hidden');
        };
        elem.appendChild(realImg);
    });

})( window );