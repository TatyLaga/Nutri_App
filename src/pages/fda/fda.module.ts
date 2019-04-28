import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FdaPage } from './fda';

@NgModule({
  declarations: [
    FdaPage,
  ],
  imports: [
    IonicPageModule.forChild(FdaPage),
  ],
})
export class FdaPageModule {}
