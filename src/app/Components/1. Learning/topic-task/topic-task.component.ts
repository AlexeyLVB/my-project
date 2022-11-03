import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-topic-task',
  templateUrl: './topic-task.component.html',
  styleUrls: ['./topic-task.component.css']
})
export class TopicTaskComponent implements OnInit {

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