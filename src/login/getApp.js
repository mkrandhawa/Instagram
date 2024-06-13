import React from "react";

function GetApp() {
  return (
    <div className="download">
      <div className="getApp">
        <span>Get the app.</span>
      </div>
      <div className="store">
      <a
          className="apple"
          href="https://apps.apple.com/us/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo"
        >
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
            alt="Microsoft"
          ></img>
        </a>
        <a
          className="playStore"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DDA26B152-9E2C-4508-B0F6-E3CF848A4E41%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.bing.com%252F"
        >
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt="Play Store"
          ></img>
        </a>
        
      </div>
    </div>
  );
}

export default GetApp;
