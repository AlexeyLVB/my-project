import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-trafic-rules',
  templateUrl: './trafic-rules.component.html',
  styleUrls: ['./trafic-rules.component.css']
})
export class TraficRulesComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Полезная информация'      
      },
      {
        label: 'Правила дорожного движения'      
      }
    ]

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }
}