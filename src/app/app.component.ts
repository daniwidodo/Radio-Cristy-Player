import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobPro } from '@ionic-native/admob-pro';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    private platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private admob: AdMobPro,
  ) {
    platform.ready().then(() => {
      // AdmobPro
      let admobid;
        if(this.platform.is('android')) {
          admobid = {
            banner: 'ca-app-pub-3473119910769766/7357690393',
            interstitial: 'ca-app-pub-3473119910769766/6192620839'
          };
        } else if (this.platform.is('ios')) {
          admobid = {
            banner: 'ca-app-pub-3473119910769766/6491331288',
            interstitial: 'ca-app-pub-3473119910769766/1868919368'
          };
        };

    this.admob.createBanner({
        adId: admobid.banner,
        isTesting: true,
        autoShow: true,
        position: this.admob.AD_POSITION.BOTTOM_CENTER
    });

    this.admob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: true,
        autoShow: false
    });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleBlackTranslucent();
      splashScreen.hide();

      this.showInterstitialAd();
    });
  }

  showInterstitialAd() {
    if (AdMobPro) {
        this.admob.showInterstitial();
    }
}
  
}

