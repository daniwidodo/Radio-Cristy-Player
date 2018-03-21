import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

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
//    private adMobFree: AdMobFree,
  ) {
    platform.ready().then(() => {
      /*
      // Admob Free
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
        
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.showInterstitialAd();
      */
      statusBar.styleBlackTranslucent();
      splashScreen.hide();

    });
  }

  /*
  async showInterstitialAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'admobid',
        isTesting: false,
        autoShow: true
      }

      this.adMobFree.interstitial.config(interstitialConfig);

      const result = await this.adMobFree.interstitial.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e)
    }
  }
  */
  
}

