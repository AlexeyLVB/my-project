import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  value!: string;

  items: MenuItem[] = [];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Войти в аккаунт'
      }
    ]
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }
}