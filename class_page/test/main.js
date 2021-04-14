function getContent(fragmentId, callback){

    var pages = {
      home: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"app.css\" />\n    <link rel=\"manifest\" href=\"manifest.json\" />\n\n    <!-- Generated from npx pwa-asset-generator -->\n\n    <link rel=\"shortcut icon\" href=\"logo.png\" type=\"image/x-icon\" />\n\n    <link rel=\"apple-touch-icon\" href=\"icons/apple-icon-180.png\" />\n\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2048-2732.jpg\"\n      media=\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2732-2048.jpg\"\n      media=\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1668-2388.jpg\"\n      media=\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2388-1668.jpg\"\n      media=\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1536-2048.jpg\"\n      media=\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2048-1536.jpg\"\n      media=\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1668-2224.jpg\"\n      media=\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2224-1668.jpg\"\n      media=\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1620-2160.jpg\"\n      media=\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2160-1620.jpg\"\n      media=\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1284-2778.jpg\"\n      media=\"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2778-1284.jpg\"\n      media=\"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1170-2532.jpg\"\n      media=\"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2532-1170.jpg\"\n      media=\"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1125-2436.jpg\"\n      media=\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2436-1125.jpg\"\n      media=\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1242-2688.jpg\"\n      media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2688-1242.jpg\"\n      media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-828-1792.jpg\"\n      media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1792-828.jpg\"\n      media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1242-2208.jpg\"\n      media=\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-2208-1242.jpg\"\n      media=\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-750-1334.jpg\"\n      media=\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1334-750.jpg\"\n      media=\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-640-1136.jpg\"\n      media=\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\"\n    />\n    <link\n      rel=\"apple-touch-startup-image\"\n      href=\"icons/apple-splash-1136-640.jpg\"\n      media=\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\"\n    />\n\n    <title>MandraSaptak</title>\n  </head>\n  <body>\n    <script>\n      if (\"serviceWorker\" in navigator) {\n        navigator.serviceWorker.register(\"service-worker.js\");\n      }\n    </script>\n\n    <div class=\"grid-container\">\n      <div class=\"title\">\n        <div class=\"schoolname\">\n          <h1 class=\"schooltext\">Delhi Public School</h1>\n        </div>\n        <div class=\"menu\">\n          <a href=\"#menu\"\n            ><img id=\"menuimg\" src=\"resources/menu.svg\" alt=\"menu\"\n          /></a>\n        </div>\n      </div>\n      <div class=\"student\">\n        <h1>Hello,<br />Students</h1>\n      </div>\n      <div class=\"announcement\">\n        <a href=\"https://t.me/announcementtest1234\"><h1>Announcement</h1></a>\n      </div>\n\n      <!-- add anchoer to iconcontainer -->\n\n      <div class=\"notice\">\n        <div class=\"studentcorner\">\n          <div class=\"iconcontainer\">\n            <a href=\"https://mandrasaptakdev.blogspot.com/\"\n              ><button class=\"iconbox\">\n                <img src=\"ico/class.svg\" alt=\"studentcorner\" /></button\n            ></a>\n            <h1 class=\"iconfont\">Student<br />Corner</h1>\n          </div>\n        </div>\n        <div class=\"question\">\n          <div class=\"iconcontainer\">\n            <a href=\"http://192.168.0.1/\"\n              ><button class=\"iconbox\"><img src=\"ico/qb.svg\" alt=\"qb\" /></button\n            ></a>\n            <h1 class=\"iconfont\">Question<br />Bank</h1>\n          </div>\n        </div>\n        <div class=\"events\">\n          <div class=\"iconcontainer\">\n            <a href=\"http://192.168.0.1/\"\n              ><button class=\"iconbox\">\n                <img src=\"ico/calender.svg\" alt=\"events\" /></button\n            ></a>\n            <h1 class=\"iconfont\">Events</h1>\n          </div>\n        </div>\n        <div class=\"fees\">\n          <!-- RENAMED TO BOOKMARKS  -->\n          <div class=\"iconcontainer\">\n            <a href=\"https://raindrop.io/collection/14514085\"\n              ><button class=\"iconbox\">\n                <img src=\"ico/bookmark.svg\" alt=\"bookmark\" /></button\n            ></a>\n            <h1 class=\"iconfont\">Bookmarks</h1>\n          </div>\n        </div>\n        <div class=\"notice-inner\"></div>\n      </div>\n      <div class=\"buttons\">\n        <div class=\"buttonright\">\n          <a href=\"class.html\"\n            ><button class=\"classbutton\"><h1>Classes</h1></button></a\n          >\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n",
      about: "This page will describe what my site is about",
      menu: "Contact me on this page if you have any questions"
    };
  
    callback(pages[fragmentId]);
  }
  
  
  
  function loadContent(){
  
    var contentDiv = document.getElementById("app"),
        fragmentId = location.hash.substr(1);
  
    getContent(fragmentId, function (content) {
      contentDiv.innerHTML = content;
    });
  
  }
  
  if(!location.hash) {
    location.hash = "#home";
  }
  
  loadContent();
  
  window.addEventListener("hashchange", loadContent)