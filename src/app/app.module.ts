import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Im1Page } from '../pages/im1/im1';
import { Na1Page } from '../pages/na1/na1';
import { Ra1Page } from '../pages/ra1/ra1';
import { DisPage } from '../pages/dis/dis';
import { Im2Page } from '../pages/im2/im2';
import { Na2Page } from '../pages/na2/na2';
import { Ra2Page } from '../pages/ra2/ra2';
import { Dis2Page } from '../pages/dis2/dis2';
import { Im3Page } from '../pages/im3/im3';
import { Na3Page } from '../pages/na3/na3';
import { Dis3Page } from '../pages/dis3/dis3';
import { Ra3Page } from '../pages/ra3/ra3';
import { Im4Page } from '../pages/im4/im4';
import { Na4Page } from '../pages/na4/na4';
import { Dis4Page } from '../pages/dis4/dis4';
import { Ra4Page } from '../pages/ra4/ra4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Im1Page,
    Na1Page,
    Ra1Page,
    DisPage,
    Im2Page,
    Na2Page,
    Ra2Page,
    Dis2Page,
    Im3Page,
    Na3Page,
    Dis3Page,
    Ra3Page,
    Im4Page,
    Na4Page,
    Dis4Page,
    Ra4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Im1Page,
    Na1Page,
    Ra1Page,
    DisPage,
    Im2Page,
    Na2Page,
    Ra2Page,
    Dis2Page,
    Im3Page,
    Na3Page,
    Dis3Page,
    Ra3Page,
    Im4Page,
    Na4Page,
    Dis4Page,
    Ra4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
