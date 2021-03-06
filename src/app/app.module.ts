import { HalamanBacaPageModule } from './../pages/halaman-baca/halaman-baca.module';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AudioStreamProvider } from '../providers/audio-stream/audio-stream';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

// Plugins
import { MusicControls } from '@ionic-native/music-controls';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobFree } from '@ionic-native/admob-free';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HalamanBacaPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioStreamProvider,
    ApiProvider,
    SocialSharing,
    MusicControls,
    AdMobFree
    
    
  ]
})
export class AppModule {}
