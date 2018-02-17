import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AdMobPro } from '@ionic-native/admob-pro';


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
    private admob: AdMobPro, private platform: Platform
  ) {
    this.post = this.navParams.get('post');
    console.log( this.post );   
  }
  
  
  ionViewWillLeave(){

    let admobIdBanner;
    if(this.platform.is('android')) {
      admobIdBanner = 'ca-app-pub-3473119910769766/6192620839';
    } else if (this.platform.is('ios')) {
      admobIdBanner = 'ca-app-pub-3473119910769766/1868919368';
    }
    this.admob.prepareInterstitial({adId: admobIdBanner})
      .then(() => { this.admob.showInterstitial(); });
   
  }
  

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
