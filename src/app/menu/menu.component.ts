import { Component, OnInit } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';
import { MenuItem} from 'primeng/api'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent implements OnInit{
  
  items: MenuItem[] = [];
  
  constructor() { }

  ngOnInit() {
    this.items = 
    [
      {
        label: 'Профиль',
        icon: 'pi pi-fw pi-user',
        items:[
          
          {
            label: 'Мой профиль',
            icon: 'pi pi-fw pi-users',
            routerLink: 'account'
          },
          {
            label: 'Войти в аккаунт',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: 'sign-in'
          }
      ]
      },
      {
        label: 'Обучение',
        items:
          [
          {
            label: 'Темы и разделы',
            routerLink: 'topics'
          },
          {
            label: 'Задания после раздела',
            routerLink: 'topic-task'
          }
        
      ] 
      },
      {
        label: 'Тестовые задания',
        items:[
        
          {
            label: 'По номеру',
            routerLink: 'by-task-number'
          },
          {
            label: 'Экзамен',
            routerLink:'exam'
          },
          {
            label: 'Марафон',
            routerLink:'marathon'
          }
        
      ]
      },
      {
        label: 'Полезная инфорамация',
        items:[
          {
            label: 'Правила дорожного движения',
            routerLink: 'trafic-rules'
          },
          {
            label: 'Информация об экзамене',
            routerLink: 'exam-info'
          },
          {
            label: 'Дополнительные сведения',
            routerLink: 'useful-info'
          }
        ]
      
      }
    ]
  }
}