import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-marathon',
  templateUrl: './marathon.component.html',
  styleUrls: ['./marathon.component.css']
})
export class MarathonComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;

  data: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Тестовые задания'      
      },
      {
        label: 'Марафон'      
      }
    ]
    this.home = {icon: 'pi pi-home', routerLink: '/'};
    this.data = {
      labels: ['Пройдено верно','Пройдено с ошибкой','Не пройдено'],
      datasets: [
          {
              data: [230, 100, 470],
              backgroundColor: [
                  "#77DD77",
                  "#F66257",
                  "#1E90FF"
              ],
              hoverBackgroundColor: [
                  "#66FF00",
                  "#FF0000",
                  "#00BFFF"
              ]
          }
      ]
  };
  }
}