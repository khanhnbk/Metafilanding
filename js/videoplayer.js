 // Load the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/player_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // Replace the 'ytplayer' element with an <iframe> and
 // YouTube player after the API code downloads.
 var player;

 //add event onStateChange in player
 function onYouTubePlayerAPIReady() {
 player = new YT.Player('ytplayerst', {
     height: '360',
     width: '640',
     videoId: 'lo0CRy9gmTo',
     playerVars: { 'autoplay': 0, 'controls': 1 },
 });
 player = new YT.Player('ytplayer-ginseng', {
     height: '360',
     width: '640',
     videoId: 'hiPo9MFGfg0',
     playerVars: { 'autoplay': 0, 'controls': 1 },
     events: {
       'onStateChange': onPlayerStateChangeGinseng
     }
 });
 player = new YT.Player('ytplayersc', {
     height: '360',
     width: '640',
     videoId: 'dBVwfduUgKQ',
     playerVars: { 'autoplay': 0, 'controls': 1 },
     events: {
         'onStateChange': onPlayerStateChangeGinseng
     }
 });
 player = new YT.Player('ytpUseCase1', {
     height: '360',
     width: '640',
     videoId: '0T34-WHJ8d0',
     playerVars: { 'autoplay': 0, 'controls': 1 },
     events: {
         'onStateChange': onPlayerStateChangeGinseng
     }
 });
 player = new YT.Player('ytpUseCase2', {
     height: '360',
     width: '640',
     videoId: 'kTnfWOtFvsY',
     playerVars: { 'autoplay': 0, 'controls': 1 },
     events: {
         'onStateChange': onPlayerStateChangeGinseng
     }
 });
 player = new YT.Player('ytpUseCase3', {
     height: '360',
     width: '640',
     videoId: 'fpd403L_g-I',
     playerVars: { 'autoplay': 0, 'controls': 1 },
     events: {
         'onStateChange': onPlayerStateChangeGinseng
     }
 });
 player = new YT.Player('ytpUseCase4', {
     height: '360',
     width: '640',
     videoId: 'dBVwfduUgKQ',
     playerVars: { 'autoplay': 0, 'controls': 1 },
     events: {
         'onStateChange': onPlayerStateChangeGinseng
     }
 });


 player = new YT.Player('ytpGameAlpha1', {
    height: '360',
    width: '640',
    videoId: 'htla7Rd7XCw',
    playerVars: { 'autoplay': 0, 'controls': 1 },
     events: {
         'onStateChange': onPlayerStateChangeGinseng
     }
});

player = new YT.Player('ytplayerdao', {
    height: '360',
    width: '640',
    videoId: 'gUIEDkxC424',
    playerVars: { 'autoplay': 0, 'controls': 1 },
    events: {
        'onStateChange': onPlayerStateChangeGinseng
    }
});
player = new YT.Player('ytplayerCity', {
    height: '360',
    width: '640',
    videoId: 'BrzRehaEVLQ',
    playerVars: { 'autoplay': 0, 'controls': 1,},
    events: {
        'onStateChange': onPlayerStateChangeGinseng
    }
});

/*Infinity war*/
player = new YT.Player('ytplayerInfinityWar1', {
    height: '360',
    width: '640',
    videoId: 'kNIDk5dQsJU',
    playerVars: { 'autoplay': 0, 'controls': 1,},
    events: {
        'onStateChange': onPlayerStateChangeGinseng
    }
});

/*Realms of galaxy*/
player = new YT.Player('ytpGameGalaxy1', {
    height: '360',
    width: '640',
    videoId: 'RK_45Z-2QC4',
    playerVars: { 'autoplay': 0, 'controls': 1 },
    events: {
        'onStateChange': onPlayerStateChangeGinseng
    }
});


player = new YT.Player('ytplayer-dao1', {
    height: '360',
    width: '640',
    videoId: 'XZF1AfNHt4o',
    playerVars: { 'autoplay': 0, 'controls': 1 },
    events: {
        'onStateChange': onPlayerStateChangeGinseng
    }
});
player = new YT.Player('ytplayer-park', {
    height: '360',
    width: '640',
    videoId: 'gUIEDkxC424',
    playerVars: { 'autoplay': 0, 'controls': 1 },
    events: {
        'onStateChange': onPlayerStateChangeGinseng
    }
});
player = new YT.Player('ytplayer-farm', {
    height: '360',
    width: '640',
    videoId: 'yvhCzkCOWeY',
    playerVars: { 'autoplay': 0, 'controls': 1 },
    events: {
        'onStateChange': onPlayerStateChangeGinseng
    }
});
player = new YT.Player('ytplayer-fram-sc5', {
    height: '360',
    width: '640',
    videoId: 'yvhCzkCOWeY',
    playerVars: { 'autoplay': 0, 'controls': 1 },
    events: {
        'onStateChange': onPlayerStateChangeGinseng
    }
});
player = new YT.Player('video-background', {
    height: '360',
    width: '640',
    videoId: 'eRLcPVSqByQ',
    // playerVars: { 'autoplay': 0, 'controls': 1 },
    playerVars: { playlist: 'eRLcPVSqByQ',
        loop: 1, 'autoplay': 1, 'playsinline': 1,'controls': 1 },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
    }
});
}
