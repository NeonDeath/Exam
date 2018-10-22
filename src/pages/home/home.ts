import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Im1Page } from '../im1/im1';
import { Na1Page } from '../na1/na1';
import { Ra1Page } from '../ra1/ra1';
import { DisPage } from '../dis/dis';
import { Im2Page } from '../im2/im2';
import { Na2Page } from '../na2/na2';
import { Dis2Page } from '../dis2/dis2';
import { Ra2Page } from '../ra2/ra2';
import { Im3Page } from '../im3/im3';
import { Na3Page } from '../na3/na3';
import { Dis3Page } from '../dis3/dis3';
import { Ra3Page } from '../ra3/ra3';
import { Im4Page } from '../im4/im4';
import { Na4Page } from '../na4/na4';
import { Dis4Page } from '../dis4/dis4';
import { Ra4Page } from '../ra4/ra4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image1 = Im1Page;
  name1 = Na1Page;
  disc1 = DisPage;
  rate1 = Ra1Page;
  
  image2 = Im2Page;
  name2 = Na2Page;
  disc2 = Dis2Page;
  rate2 = Ra2Page;

  image3 = Im3Page;
  name3 = Na3Page;
  disc3 = Dis3Page;
  rate3 = Ra3Page;

  image4 = Im4Page;
  name4 = Na4Page;
  disc4 = Dis4Page;
  rate4 = Ra4Page;


  constructor(public navCtrl: NavController) 
  {

  }

  i1()
  {
    this.navCtrl.push(this.image1);
  }

  n1()
  {
    this.navCtrl.push(this.name1);
  }

  d1()
  {
    this.navCtrl.push(this.disc1);
  }

  r1()
  {
    this.navCtrl.push(this.rate1);
  }

  i2()
  {
    this.navCtrl.push(this.image2);
  }

  n2()
  {
    this.navCtrl.push(this.name2);
  }

  d2()
  {
    this.navCtrl.push(this.disc2);
  }

  r2()
  {
    this.navCtrl.push(this.rate2);
  }

  i3()
  {
    this.navCtrl.push(this.image3);
  }

  n3()
  {
    this.navCtrl.push(this.name3);
  }

  d3()
  {
    this.navCtrl.push(this.disc3);
  }

  r3()
  {
    this.navCtrl.push(this.rate3);
  }

  i4()
  {
    this.navCtrl.push(this.image4);
  }

  n4()
  {
    this.navCtrl.push(this.name4);
  }

  d4()
  {
    this.navCtrl.push(this.disc4);
  }

  r4()
  {
    this.navCtrl.push(this.rate4);
  }


}
