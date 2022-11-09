import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Обучение',
        routerLink: 'learning'     
      },
      {
        label: 'Темы и разделы'
      }
    ]

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
