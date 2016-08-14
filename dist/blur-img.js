/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	     * containers   Node Set     wrappers for images
	     * smSrcs       Array        src of small image
	     * lgSrcs       Array        src of large image
	     * transTime    String       time of the transition
	     */
	    var defaultConfig = {
	        containers: '',
	        smSrcs: '',
	        lgSrcs: '',
	        transTime: '2s'
	    };

	    // style rules
	    var containerStyle = {
	            position: 'relative',
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
	        };

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
	     * tell the srcs is empty or not
	     * @returns {boolean}
	     */
	    function srcIsEmpty() {
	        var srcs = [].slice.call(arguments);

	        return srcs.every(function ( elem ) {
	            return Object.prototype.toString.apply(elem).slice(8, -1) === 'Array' && elem.length === 0;
	        });
	    }

	    /**
	     * main function to blur image
	     * @param config
	     */
	    function blurImg( config ) {

	        // extend the origin config object
	        config = extendObj({}, defaultConfig, config);

	        var imgContainers = config.containers,
	            smImgSrcs = config.smSrcs,
	            lgImgSrcs = config.lgSrcs;

	        var transitionStyle = {
	            transition: 'all ' + config.transTime + ' linear'
	        };

	        if ( srcIsEmpty(smImgSrcs, lgImgSrcs) ) {
	            throw new Error('Can\'t find any image to load.');
	        }

	        // set image for every container
	        imgContainers.forEach(function ( elem, index ) {
	            var placeholder = document.createElement('div');

	            // create the small image and the large image
	            var smImg = new Image(),
	                lgImg = new Image();

	            setStyle(elem, containerStyle);
	            placeholder.style.paddingBottom = '66.66%';
	            elem.appendChild(placeholder);

	            setStyle(smImg, commonImgStyle);
	            setStyle(lgImg, commonImgStyle);

	            smImg.src = smImgSrcs[index];
	            smImg.onload = function () {
	                setStyle(smImg, smStyle, loadedStyle);
	            };
	            elem.insertBefore(smImg, placeholder);

	            lgImg.src = lgImgSrcs[index];
	            lgImg.onload = function () {
	                setStyle(lgImg, transitionStyle, loadedStyle);
	            };

	            elem.insertBefore(lgImg, placeholder);
	        });
	    }

	    window.blurImg = blurImg;

	})( window );

/***/ }
/******/ ]);