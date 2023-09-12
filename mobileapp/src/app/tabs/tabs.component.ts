import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() { }

  async upgrade() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Upgrade necessário!',
      message: 'Bateu a curiosidade. Que tal finalizar-mos o projeto?',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        }
      ]
    });

    await alert.present();
  }

}
