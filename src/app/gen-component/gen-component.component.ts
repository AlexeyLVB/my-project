import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-component',
  templateUrl: './gen-component.component.html',
  styleUrls: ['./gen-component.component.css']
})
export class GenComponentComponent implements OnInit {
    genTitleName:string = '[Название приложения]';
    profileName!: string;
    topicsAndSections: string = "Темы и разделы";
    topicTasks: string = "Задания после раздела";
    byTaskNumber: string = "По номеру вопроса";
    exam: string = "Экзамен";
    marathon: string = "Марафон";
    traficRules: string = "Правила дорожного движения";
    examInfo: string = "Информация об экзамене";
    usefulInfo: string = "Полезная информация";
  
  isOpenTwo: boolean = false;
  isOpenOne: boolean = false;
  isOpenThree: boolean = false;
  
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
  
    constructor() { }
  
    ngOnInit() {
      this.profileName = '[Имя профиля]';
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