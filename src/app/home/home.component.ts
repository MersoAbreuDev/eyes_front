import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items!:any;
  home!:any;

  ngOnInit() {
    this.items = [{ label: 'BEM VINDO' }];
    this.home = {   icon: ' pi pi-home ', routerLink: '/home' };
  }

}
