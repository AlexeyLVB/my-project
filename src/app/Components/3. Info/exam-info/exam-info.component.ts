import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-exam-info',
  templateUrl: './exam-info.component.html',
  styleUrls: ['./exam-info.component.css']
})
export class ExamInfoComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Полезная информация'      
      },
      {
        label: 'Информация об экзамене'      
      }
    ]

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> bc66d537f94900a0b969bd8885fa3bbb89ccd98d
