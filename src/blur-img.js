/**
 * @description
 * A plugin used to make blur effect on image
 * that needs to be preloaded
 * @author Erichain
 * @date 8/14/16
 */
(function ( window ) {

    /**
     * initialize default config
     * container   Node     wrapper for image
     * smSrc       String   src of small image
     * lgSrc       String   src of large image
     * transTime   String   time of the transition
     */
    var defaultConfig = {
        container: '',
        smSrc: '',
        lgSrc: '',
        transTime: '2s'
    };

    // create the small image and the large image
    var smImg = new Image(),
        lgImg = new Image();

    // style rules
    var containerStyle = {
            position: 'relative',
            background: '#f6f6f6 no-repeat',
            backgroundSize: 'cover',
            overflow: 'hidden'
        },
        commonImgStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
        },

        // style for small image
        smStyle = {
            filter: 'blur(50px)',
            transform: 'scale(1)'
        },
        loadedStyle = {
            opacity: 1
        },
        placeholder = document.createElement('div');

    /**
     * set style rules for specified element
     * @param elem
     */
    function setStyle( elem ) {
        for ( var i = 1, len = arguments.length; i < len; i++ ) {
            for ( var attrName in arguments[i] ) {
                if ( !arguments[i].hasOwnProperty(attrName) ) {
                    return;
                }
                elem.style[attrName] = arguments[i][attrName];
            }
        }
    }

    /**
     * extend object
     * @param dest
     * @returns {*}
     */
    function extendObj( dest ) {
        for ( var i = 1, len = arguments.length; i < len; i++ ) {
            for ( var key in arguments[i] ) {
                if ( !arguments[i].hasOwnProperty(key) ) {
                    return;
                }
                dest[key] = arguments[i][key];
            }
        }

        return dest;
    }

    /**
     * main function to blur image
     * @param config
     */
    function blurImg( config ) {

        // extend the origin config object
        config = extendObj({}, defaultConfig, config);

        var imgContainer = config.container,
            smImgUrl = config.smSrc,
            lgImgUrl = config.lgSrc;

        var transitionStyle = {
            transition: 'all ' + config.transTime + ' linear'
        };

        setStyle(imgContainer, containerStyle);
        placeholder.style.paddingBottom = '66.66%';
        imgContainer.appendChild(placeholder);

        setStyle(smImg, commonImgStyle);
        setStyle(lgImg, commonImgStyle);

        smImg.src = smImgUrl;
        smImg.onload = function () {
            setStyle(smImg, smStyle, loadedStyle);
        };
        imgContainer.insertBefore(smImg, placeholder);

        lgImg.src = lgImgUrl;
        lgImg.onload = function () {
            setStyle(lgImg, transitionStyle, loadedStyle);
        };
        imgContainer.insertBefore(lgImg, placeholder);
    }

    window.blurImg = blurImg;

})( window );