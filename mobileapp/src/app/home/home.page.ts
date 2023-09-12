import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chamadas = [
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '',
      nome: 'Michaela Hamilton',
      presencial: false,
      virtual: false,
      cancelar: true,
      ligar: true,
      agendado: false
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: true,
      virtual: false,
      cancelar: false,
      ligar: false,
      agendado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: false,
      virtual: true,
      cancelar: false,
      ligar: false,
      agendado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: true,
      virtual: false,
      cancelar: false,
      ligar: false,
      agendado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: false,
      virtual: true,
      cancelar: false,
      ligar: false,
      agendado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: true,
      virtual: false,
      cancelar: false,
      ligar: false,
      agendado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: false,
      virtual: true,
      cancelar: false,
      ligar: false,
      agendado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: true,
      virtual: false,
      cancelar: false,
      ligar: false,
      agendado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: false,
      virtual: true,
      cancelar: false,
      ligar: false,
      agendado: true
    }

  ];
  constructor(
    public alertController: AlertController
  ) {}

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
