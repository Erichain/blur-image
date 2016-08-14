/**
 * @description
 * @author Erichain
 * @date 8/14/16
 */
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

blurImg(config);