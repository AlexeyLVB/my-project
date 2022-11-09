import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-by-task-number',
  templateUrl: './by-task-number.component.html',
  styleUrls: ['./by-task-number.component.css']
})
export class ByTaskNumberComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;

  data: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Тестовые задания'      
      },
      {
        label: 'По номеру вопроса'      
      }
    ]

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  
  this.data = {
    labels: ['Пройдено верно','Пройдено с ошибкой','Не пройдено'],
    datasets: [
        {
            data: [650, 100, 50],
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

};


}
