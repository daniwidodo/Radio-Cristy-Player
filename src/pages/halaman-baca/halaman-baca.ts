import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


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
    public _apiProvider: ApiProvider
  ) {
    this.post = this.navParams.get('post');
    console.log( this.post );
    
  }
}
