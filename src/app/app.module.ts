import { SafePipe } from './../pipes/safe/safe';
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

import { HalamanBacaPage } from '../pages/halaman-baca/halaman-baca';

// Plugins
import { MusicControls } from '@ionic-native/music-controls';
import { AdMobFree } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    SafePipe,
    HomePage,
    HalamanBacaPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HalamanBacaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioStreamProvider,
    ApiProvider,
    SafePipe,
    AdMobFree,
    SocialSharing,
    MusicControls
  ]
})
export class AppModule {}
