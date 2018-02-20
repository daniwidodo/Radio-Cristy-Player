import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AudioStreamProvider {

  url:string;
  stream:any;
  promise:any;

  constructor(
    private _toast: ToastController
  ) {
    
    this.url = "http://188.166.234.48:8000/radiocristy";
    this.stream = new Audio(this.url);
  }

  playProvider() {
    this.stream.play();

    let toast = this._toast.create({
      message: 'Loading ...',
      duration: 2000,
      position: 'middle'
    });
    toast.present();

    this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });
      this.stream.addEventListener('error', () => {
        reject(false);

        let toast = this._toast.create({
          message: 'Streaming Terputus!',
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      });
    });
    
   return this.promise;
 };
 
 pauseProvider() {
   this.stream.pause();
 };

}
