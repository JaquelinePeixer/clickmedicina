import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chamadas = [
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '',
      nome: 'Michaela Hamilton',
      presencial: false,
      virtual: true,
      confirmado: false
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: true,
      virtual: false,
      confirmado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: false,
      virtual: true,
      confirmado: true
    },
    {
      image: 'https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-feminino-como-fazer.jpg',
      dataAgendamento: '03/08/2020 - 16:30',
      nome: 'Michaela Hamilton',
      presencial: true,
      virtual: false,
      confirmado: true
    }

  ];

  notificacao = true;

  tabProximo_Anterior = false;

  constructor() {
    this.opcaoTab();
  }

  ngOnInit(): void {
  }

  opcaoTab() {
    this.tabProximo_Anterior = !this.tabProximo_Anterior;   

  }

  upgrade(){
    Swal.fire({
      title: 'Upgrade necessário!',
      text: 'Bateu a curiosidade. Que tal finalizar o projeto?',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
}
