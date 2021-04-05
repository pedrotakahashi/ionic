import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) {}

  ionBlurTk(): void{
    console.log('rodou')
  }

  async presentAlert() {
    console.log("botao alert rodou")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Botao alert rodando',
      buttons: ['OK']
    });

    await alert.present();
  }

}
