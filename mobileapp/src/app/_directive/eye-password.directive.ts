import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEyePassword]'
})
export class EyePasswordDirective {

  private _shown = false;
  
  constructor(private el: ElementRef) {
      this.setup();
    }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = "<div class='eye'> <i class='fas fa-eye-slash'></i> <div>";
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = "<div class='eye'> <i class='fas fa-eye'></i> <div>";
    }
  }

  setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML += "<div class='eye'> <i class='fas fa-eye'></i> <div>";
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }

}
