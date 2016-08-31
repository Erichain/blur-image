/**
 * @description
 * A plugin used to make blur effect on image
 * that needs to be preloaded
 * @author Erichain
 * @date 8/14/16
 */
(( window ) => {
    'use strict';

    // get all the image containers from page
    let containers = document.getElementsByName('blur');

    // add class to corresponding element
    let setStyle = ( elem, className ) => {
        if ( elem.classList ) {
            elem.classList.add(className);
        }
        else {
            elem.className += ` ${className}`;
        }
    };

    // main function to blur images
    let blurImg = () => {
        containers = [...containers];

        if ( containers.length === 0 ) {
            throw new Error('You have\'t add any photo!');
        }
        containers.forEach(( elem, index ) => {
            let thumbSrc = elem.getAttribute('data-src'),
                lgSrc = elem.getAttribute('src'),
                realWidth = elem.getAttribute('data-real-width'),
                realHeight = elem.getAttribute('data-real-height');

            // set a bottom padding to avoid glimmer
            elem.style.paddingBottom = `${(realHeight / realWidth) * 100}%`;

            let thumb = new Image();
            thumb.src = thumbSrc;
            thumb.onload = () => {
                setStyle(thumb, 'thumb-loaded');
            };
            elem.appendChild(thumb);

            let realImg = new Image();
            realImg.src = lgSrc;
            realImg.onload = () => {
                setStyle(realImg, 'large-loaded');
                setStyle(thumb, 'thumb-hidden');
            };
            elem.appendChild(realImg);
        });
    };

    window.blurImg = blurImg;

})( window );