import { Component } from '@angular/core';
import { NavController, LoadingController, /*Platform*/ } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

import { AudioStreamProvider } from '../../providers/audio-stream/audio-stream';
import { HalamanBacaPage } from '../../pages/halaman-baca/halaman-baca';
import { MusicControls } from '@ionic-native/music-controls';
//import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
//import { AdMobPro } from '@ionic-native/admob-pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    showButton : boolean;
    posts: any;
    

  constructor(
    public _navCtrl: NavController,
    public _player: AudioStreamProvider,
    public _apiProvider: ApiProvider,
    private _musicControls: MusicControls,
    public _loading: LoadingController,
  // private _admob: AdMobFree,
  // private admob: AdMobPro, private platform: Platform
  ) {
    this.getPostList();
    this.showButton = false;
    // this.showBannerAd();
    this._musicControls.listen();
    this._musicControls.updateIsPlaying(true);
  }

  /*
  ionViewWillUnload(){
    let admobIdBanner;
    if(this.platform.is('android')) {
      admobIdBanner = 'ca-app-pub-3473119910769766/6192620839';
    } else if (this.platform.is('ios')) {
      admobIdBanner = 'ca-app-pub-3473119910769766/1868919368';
    }
    this.admob.prepareInterstitial({adId: admobIdBanner})
      .then(() => { this.admob.showInterstitial(); });
  }
  */
  
  getPostList() {
    this._apiProvider.getPosts()
      .then(data => {
      this.posts = data;
      console.log(this.posts);
    });
    
  }
  
  startMusicControls(){
    this._musicControls.destroy(); // it's the same with or without the destroy 
    this._musicControls.create({
      track       : 'Radio Cristy',        // optional, default : ''
      artist      : '828 AM - Makassar',                       // optional, default : ''
      cover       : 'assets/imgs/hero-home.png',      // optional, default : nothing
      // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
      //           or a remote url ('http://...', 'https://...', 'ftp://...')
      isPlaying   : true,                         // optional, default : true
      dismissable : true,                         // optional, default : false
    
      // hide previous/next/close buttons:
      hasPrev   : false,      // show previous button, optional, default: true
      hasNext   : false,      // show next button, optional, default: true
      hasClose  : true,       // show close button, optional, default: false
      hasSkipForward : false,  // show skip forward button, optional, default: false
      hasSkipBackward : false, // show skip backward button, optional, default: false
      skipForwardInterval: 0, // display number for skip forward, optional, default: 0
      skipBackwardInterval: 0, // display number for skip backward, optional, default: 0
    // iOS only, optional
      album       : 'Radio Cristy Player',     // optional, default: ''
      duration : 0, // optional, default: 0
      elapsed : 0, // optional, default: 0
    
      // Android only, optional
      // text displayed in the status bar when the notific\ation (and the ticker) are updated
      ticker    : 'Now playing'
     });
     this._musicControls.subscribe().subscribe((action) => {
      console.log('action', action);
          const message = JSON.parse(action).message;
          console.log('message', message);
          switch(message) {
            case 'music-controls-next':
               // Do something
               break;
            case 'music-controls-previous':
               // Do something
               break;
            case 'music-controls-pause':
               // Do something
               console.log('music pause');
               this._player.pauseProvider();
               this._musicControls.listen(); 
               this._musicControls.updateIsPlaying(false);
               break;
            case 'music-controls-play':
               // Do something
               console.log('music play');
               
               this._player.playProvider();
               this._musicControls.listen(); 
               this._musicControls.updateIsPlaying(true);
               break;
            case 'music-controls-destroy':
               // Do something
               break;
            // External controls (iOS only)
            case 'music-controls-toggle-play-pause' :
              // Do something
              break;
            case 'music-controls-seek-to':
              // Do something
              break;
            case 'music-controls-skip-forward':
              // Do something
              break;
            case 'music-controls-skip-backward':
              // Do something
              break;

              // Headset events (Android only)
              // All media button events are listed below
            case 'music-controls-media-button' :
                // Do something
                break;
            case 'music-controls-headset-unplugged':
                // Do something
                break;
            case 'music-controls-headset-plugged':
                // Do something
                break;
            default:
                break;
          }
    });
    this._musicControls.listen(); // activates the observable above
    this._musicControls.updateIsPlaying(true);
  }

  playStream(){
    console.log('Play Button clicked');
    this.showButton = true;
    this._player.playProvider();
    this.startMusicControls();
  }

  stopStream(){
    console.log('Stop Button');
    this.showButton = false;
    this._player.pauseProvider();
    this._musicControls.updateIsPlaying(true);
    
  }

  klikBaca(post) {
    console.log('Baca ...');
    this._navCtrl.push(HalamanBacaPage, {
      'post': post
    }
    );
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
