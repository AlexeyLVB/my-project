import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-useful-info',
  templateUrl: './useful-info.component.html',
  styleUrls: ['./useful-info.component.css']
})
export class UsefulInfoComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Полезная информация'      
      },
      {
        label: 'Дополнительные сведения'      
      }
    ]

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}