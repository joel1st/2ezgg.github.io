function tabSystem(){if(currentUrl.match(/youtubevideos/i)||"youtube"==appSettings.ezHomePage&&web.homePage())$("#iframe-holder").html(" ").css("display","none"),$("#main-content").css("display","block"),$("header").css({height:"100px",display:"block"}),$("#youtube-content").css("display","block"),$("#reddit-content").css("display","none"),$("#twitch-content").css("display","none"),$("#settings-content").css("display","none"),$("a#youtube li").addClass("selected-link"),reddit.getThreads(reddit.currentYoutubeSettings[0],reddit.currentYoutubeSettings[1],reddit.currentYoutubeSettings[2],reddit.currentYoutubeSettings[3],reddit.nextPageYoutube).done(function(){reddit.youtubeArea(),reddit.mainPage(),$(window).height()>1080&&reddit.youtubeArea()}),web.twitchInUse="no";else if(currentUrl.match(/settings/i))$("#iframe-holder").html(" ").css("display","none"),$("#main-content").css("display","block"),$("header").css({height:"28px",display:"block"}),$("#youtube-content").css("display","none"),$("#reddit-content").css("display","none"),$("#twitch-content").css("display","none"),$("#settings-content").css("display","block"),$("a#settings li").addClass("selected-link"),reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function(){reddit.mainPage(),web.youtubeInUse="contentAvailable"}),web.twitchInUse="no",web.youtubeInUse="no";else if(currentUrl.match(/twitchstreams/i)||"twitch"==appSettings.ezHomePage&&web.homePage())$("#iframe-holder").html(" ").css("display","none"),$("#main-content").css("display","block"),$("header").css({height:"28px",display:"block"}),$("#youtube-content").css("display","none"),$("#reddit-content").css("display","none"),$("#settings-content").css("display","none"),$("#twitch-content").css("display","block"),$("#twitch-content").css("display","block"),$("a#twitch li").addClass("selected-link"),web.youtubeInUse="no",web.redditInUse="no";else if(web.checkIfBelongs()||"redditthreads"!=appSettings.ezHomePage&&web.homePage()){if(!detectmob()){var a;web.homePageAccessed?(a=$("#"+appSettings.ezHomePage).attr("href"),$("a#"+appSettings.ezHomePage+" li").addClass("selected-link")):((sessionActive="yes")&&(league.name=league.getUrlParams("name")||localStorage.getItem("name"),league.server=league.getUrlParams("server")||localStorage.getItem("server"),league.champ=league.getUrlParams("champ")||localStorage.getItem("champ"),league.account(league.name,league.server,!0),league.champion(league.champ)),a=web.checkIfBelongs(null,!0)),$("#iframe-holder").css("display","block"),web.makeIframe(a)}web.youtubeInUse="no",web.redditInUse="no",web.twitchInUse="no"}else{if($("a#redditthreads li").addClass("selected-link"),web.enableRedditStyleSheet(),currentUrl.match(/back/i)&&parseInt(localStorage.getItem("redditLastRetrieved"))+36e5>=Date.now()){reddit.redditThreads=JSON.parse(localStorage.getItem("redditThreads")),reddit.nextPageReddit=localStorage.getItem("nextPage");var b=parseInt(localStorage.getItem("yScroll"));reddit.currentRedditSettings=JSON.parse(localStorage.getItem("redditSettings")),reddit.mainPage(!0),$("#sidebar").css("display",localStorage.getItem("sidebarOpen")),setTimeout(function(){$(window).scrollTop(b)},333),setTimeout(function(){history.pushState("","","#")},3755),$(".subreddit-setting").removeClass("setting-chosen"),$(".subreddit-"+reddit.currentRedditSettings[1]+" ").addClass("setting-chosen"),$(".dropdown-subreddit").val(reddit.currentRedditSettings[1]),$(".dropdown-reddit-options").val(null!=reddit.currentRedditSettings[3]?reddit.currentRedditSettings[2]+reddit.currentRedditSettings[3]:reddit.currentRedditSettings[2]),null!=reddit.currentRedditSettings[0]&&"hot"!=reddit.currentRedditSettings[2]&&($(".reddit-setting").removeClass("setting-chosen"),$("."+reddit.currentRedditSettings[3]+reddit.currentRedditSettings[2]+"-reddit").addClass("setting-chosen")),web.youtubeInUse="no",web.redditInUse="no",web.twitchInUse="no"}else reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function(){reddit.mainPage(),web.youtubeInUse="contentAvailable"}),web.twitchInUse="no",web.youtubeInUse="no";reddit.displayAbout(),$("#iframe-holder").html(" ").css("display","none"),$("#main-content").css("display","block"),$("header").css({height:"100px",display:"block"}),$("#youtube-content").css("display","none"),$("#reddit-content").css("display","block"),$("#settings-content").css("display","none"),$("#twitch-content").css("display","none")}}var currentUrl=window.location.href,league=new LeagueLinks,streams=new StreamChannels,reddit=new RedditLol,web=new WebInterface;web.registerScreen(),web.rearangeSidebar(),web.saveSidebar("all"),web.testIfSearchShouldBeShown(),web.setSettings();var sessionActive="no";window.onpopstate=function(){"yes"!=sessionActive||0==web.hashWithoutParams().length&&window.location.href!=window.location.origin+"/"||($(".nav-button li").removeClass("selected-link"),tabSystem(),web.tabSystemProcessed=1)},0==web.tabSystemProcessed&&(tabSystem(),setTimeout(function(){sessionActive="yes"},5e3));