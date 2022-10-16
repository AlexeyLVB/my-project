import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-component',
  templateUrl: './gen-component.component.html',
  styleUrls: ['./gen-component.component.css']
})
export class GenComponentComponent implements OnInit {
  genTitleName:string = 'Application name';
    profileName!: string;
    topicsAndSections!: string;
    topicTasks!: string;
    byTaskNumber!: string;
    exam!: string;
    marathon!: string;
    traficRules!: string;
    examInfo!: string;
    usefulInfo!: string;
  
  isOpenTwo: any;
  isOpenOne: any;
  isOpenThree: any;
  
    learning(){
      this.topicsAndSections = "Topic and Section";
      this.topicTasks = "Topic task";
  
      
    }
  
    testTask(){
      this.byTaskNumber = "By task number";
      this.exam = "Exam";
      this.marathon = "Marathon";
    }
    
    helpInfo(){
      this.traficRules = "Trafic rules";
      this.examInfo = "Exam info";
      this.usefulInfo = "Useful info";
    }
  
    constructor() { }
  
    ngOnInit() {
      this.profileName = 'ProfileName';
  
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