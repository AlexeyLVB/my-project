import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { SkeletonModule } from "primeng/skeleton";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [':host ::ng-deep .p-password input{ width: 15rem}']
})

export class AccountComponent implements OnInit {
  
  items: MenuItem[] = [];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Мой профиль',
        routerLink: '/account'
      }
    ]
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
