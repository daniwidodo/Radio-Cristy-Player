import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HalamanBacaPage } from './halaman-baca';

@NgModule({
  declarations: [
    HalamanBacaPage,
  ],
  imports: [
    IonicPageModule.forChild(HalamanBacaPage),
  ],
})
export class HalamanBacaPageModule {}
