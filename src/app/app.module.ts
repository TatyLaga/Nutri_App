import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { FdaPage } from "../pages/fda/fda";
import { HistoricalPage } from "../pages/historical/historical";
import { NaranjoPage } from "../pages/naranjo/naranjo";
import { ReportPage } from "../pages/report/report";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProveedorcountryProvider } from '../providers/proveedorcountry/proveedorcountry';

import { ProvreportProvider } from '../providers/provreport/provreport';
import { ProvregisterProvider } from '../providers/provregister/provregister';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { NaranfdaPage } from "../pages/naranfda/naranfda";

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../config';
import { AngularFireAuth } from 'angularfire2/auth';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    FdaPage,
    HistoricalPage,
    NaranjoPage,
    ReportPage,
    NaranfdaPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    PipesModule,
    AngularFireModule.initializeApp(environment.firebase), // firebase connection module
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    FdaPage,
    HistoricalPage,
    NaranjoPage,
    ReportPage,
    NaranfdaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProveedorcountryProvider,
    ProvreportProvider,
    ProvregisterProvider,
    AuthProvider,
    AngularFireAuth,
    UserProvider
  ]
})
export class AppModule {}
