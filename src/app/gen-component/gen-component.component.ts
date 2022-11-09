import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { MenuItemContent } from 'primeng/menu';
import { DatePipe } from "@angular/common";
import { Observable, timer } from 'rxjs';
import { map } from "rxjs/operators";
import { TabMenuModule } from "primeng/tabmenu";
import { Button } from 'primeng/button';

@Component({
  selector: 'app-gen-component',
  templateUrl: './gen-component.component.html',
  styleUrls: ['./gen-component.component.scss']
})
export class GenComponentComponent implements OnInit {
    genTitleName:string = 'Крутое название приложения';
    profileName!: string;
    topicsAndSections: string = "Темы и разделы";
    topicTasks: string = "Задания после раздела";
    byTaskNumber: string = "По номеру вопроса";
    exam: string = "Экзамен";
    marathon: string = "Марафон";
    traficRules: string = "Правила дорожного движения";
    examInfo: string = "Информация об экзамене";
    usefulInfo: string = "Дополнительные сведения";
      
    isOpenTwo: boolean = false;
    isOpenOne: boolean = false;
    isOpenThree: boolean = false;


    items: MenuItem[] = [];
    home!: MenuItem;
  
    learning(){
        this.topicsAndSections = "Темы и разделы";
        this.topicTasks = "Задания после раздела";
      }  
    testTask(){
      this.byTaskNumber;
      this.exam;
      this.marathon;
    }
    
    helpInfo(){
      this.traficRules;
      this.examInfo;
      this.usefulInfo;
    }

  public dateTime: Observable<Date> = timer(0.1000).pipe(map(() =>  new Date()));
  
    constructor() {
  }
  
    
    ngOnInit() {
      this.profileName = '[Имя профиля]';
      this.home = {icon: 'pi pi-home', routerLink: '/'};
    }
  
    openLearning(){
      this.isOpenOne=!this.isOpenOne;
    }
    openTask(){
      this.isOpenTwo=!this.isOpenTwo;
    }
    openInfo(){
      this.isOpenThree=!this.isOpenThree;
    }
}