import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

@Injectable()
export class ApiProvider {
  posts: any;
  private  apiUrl = 'http://www.warungsatekamu.org/wp-json/wp/v2';
  constructor(
    public http: HttpClient,
    public _loading: LoadingController,
    private _toast: ToastController
  ) {  }

  async getPosts() {

    let loading = this._loading.create({
      content: 'Sedang Mengambil Data ...'
    });
    loading.present();

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts/?_embed')
        .subscribe(data => {
        resolve(data);

        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
        let toast = this._toast.create({
          message: 'Tidak terhubung dengan server!',
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      });
    });
  }
}
