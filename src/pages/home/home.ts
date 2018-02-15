import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

// Radio streaming provider
import { AudioStreamProvider } from '../../providers/audio-stream/audio-stream';

import { HalamanBacaPage } from '../../pages/halaman-baca/halaman-baca';

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
    public _apiProvider: ApiProvider
  ) {
    this.getPostList();
    this.showButton = false;
  }

  getPostList() {
    this._apiProvider.getPosts()
    .then(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  playStream(){
    console.log('Play Button clicked');
    this.showButton = true;
    this._player.playProvider();
  }

  stopStream(){
    console.log('Stop Button');
    this.showButton = false;
    this._player.pauseProvider();
  }

  Baca(post) {
    console.log('Baca ...');
    this._navCtrl.push(HalamanBacaPage, {
      'post': post
    }
    );
  }
}
