import { Injectable } from '@angular/core';

@Injectable()
export class AudioStreamProvider {

  url:string;
  stream:any;
  promise:any;

  constructor() {
    console.log('Hello AudioStreamProvider Provider');
    this.url = "http://188.166.234.48:8000/radiocristy";
    this.stream = new Audio(this.url);
  }

  playProvider() {
    this.stream.play();
    this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });
 
      this.stream.addEventListener('error', () => {
        reject(false);
      });
    });
    
   return this.promise;
 };
 
 pauseProvider() {
   this.stream.pause();
 };

}
