/**
 * @description
 * @author Erichain
 * @date 8/14/16
 */
var config = {
    containers: document.getElementsByName('blur'),
    smSrcs: [
        '../example/images/sm.jpeg',
        '../example/images/sm2.jpeg'
    ],
    lgSrcs: [
        'https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg',
        'https://cdn-images-1.medium.com/max/2000/1*0WwtDkE1q6HGZwD6Kn9SuQ.jpeg'
    ],
    transTime: '0.5s'
};

blurImg(config);