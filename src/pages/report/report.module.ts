import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    PipesModule
  ],
})
export class ReportPageModule {}
