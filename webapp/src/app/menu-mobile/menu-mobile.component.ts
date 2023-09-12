import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  varSubmenu =  false;
  constructor() { }

  ngOnInit(): void {
  }

  subMenu() {
    this.varSubmenu = !this.varSubmenu;
  }

  upgrade(){
    Swal.fire({
      title: 'Upgrade necessário!',
      text: 'Bateu a curiosidade. Que tal finalizar o projeto?',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    this.varSubmenu = !this.varSubmenu;
  }

}
