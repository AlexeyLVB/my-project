import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Тестовые задания'      
      },
      {
        label: 'Экзамен'      
      }
    ]
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
