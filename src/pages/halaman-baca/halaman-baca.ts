import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SocialSharing } from '@ionic-native/social-sharing';

//import { AdMobPro } from '@ionic-native/admob-pro';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-halaman-baca',
  templateUrl: 'halaman-baca.html',
})
export class HalamanBacaPage {
  post: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _apiProvider: ApiProvider,
    private socialSharing: SocialSharing,
    private adMobFree: AdMobFree, private platform: Platform
  ) {
    this.post = this.navParams.get('post');
    console.log( this.post );

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
  }

  ionViewDidLoad(){
    this.showBannerAd();
  }

  ionViewWillLeave(){
    this.closeBannerAd();
  }

  async showBannerAd() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'admobid',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.banner.config(bannerConfig);

      const result = await this.adMobFree.banner.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  };

  async closeBannerAd() {
    this.adMobFree.banner.remove()
  };


  
  compileMessage(index) :string {
    var message = this.post[index].content.rendered ;
    return message.concat(" \n Sent from my Awesome App !");
  }

  smsShare() {
    this.socialSharing.shareViaSMS("shareViaSMS", "mobile-no").then(() => {
      console.log("shareViaSMS: Success");
    }).catch(() => {
      console.error("shareViaSMS: failed");
    });
  }
  whatsappShare(index) {
    var message = this.compileMessage(index);
    this.socialSharing.shareViaWhatsApp(message).then(() => {
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: failed");
    });
  }
  facebookShare() {
    this.socialSharing.shareViaFacebook("shareViaFacebook", ).then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      console.error("shareViaFacebook: failed");
    });
  }
}
