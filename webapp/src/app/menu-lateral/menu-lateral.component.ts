import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
