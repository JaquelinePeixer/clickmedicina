import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
