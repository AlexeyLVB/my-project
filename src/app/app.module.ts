import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';
import { MenuModule } from "primeng/menu";
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from "primeng/button";
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import { MegaMenu, MegaMenuModule } from "primeng/megamenu";
import { PanelMenuModule } from "primeng/panelmenu";
import { SplitterModule } from "primeng/splitter";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { TabMenuModule } from "primeng/tabmenu";
import { PanelModule } from "primeng/panel";
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import {ChartModule} from 'primeng/chart';

import { AppComponent } from './app.component';
import { GenComponentComponent } from './gen-component/gen-component.component';
import { AccountComponent } from './account/account.component';
import { TopicsComponent } from './Components/1. Learning/topics/topics.component';
import { TopicTaskComponent } from './Components/1. Learning/topic-task/topic-task.component';
import { ByTaskNumberComponent } from './Components/2. Tasks/by-task-number/by-task-number.component';
import { ExamComponent } from './Components/2. Tasks/exam/exam.component';
import { MarathonComponent } from './Components/2. Tasks/marathon/marathon.component';
import { TraficRulesComponent } from './Components/3. Info/trafic-rules/trafic-rules.component';
import { ExamInfoComponent } from './Components/3. Info/exam-info/exam-info.component';
import { UsefulInfoComponent } from './Components/3. Info/useful-info/useful-info.component';
import { DatePipe } from '@angular/common';
import { LearningComponent } from './Components/1. Learning/learning/learning.component';
import { TasksComponent } from './Components/2. Tasks/tasks/tasks.component';
import { InfoComponent } from './Components/3. Info/info/info.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SkeletonModule } from 'primeng/skeleton';
import { FieldsetModule } from "primeng/fieldset";

const appRoutes: Routes =[
  {path: '', component:GenComponentComponent},
  {path: 'account', component:AccountComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'topics', component: TopicsComponent},
  {path: 'topic-task', component: TopicTaskComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'by-task-number', component:ByTaskNumberComponent},
  {path: 'exam', component: ExamComponent},
  {path: 'marathon', component: MarathonComponent},
  {path: 'info', component: InfoComponent},
  {path: 'exam-info', component: ExamInfoComponent},
  {path: 'trafic-rules', component: TraficRulesComponent},
  {path: 'useful-info', component: UsefulInfoComponent},
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GenComponentComponent,
    AccountComponent,
    MenuComponent,
    TopicsComponent,
    TopicTaskComponent,
    ByTaskNumberComponent,
    ExamComponent,
    MarathonComponent,
    TraficRulesComponent,
    ExamInfoComponent,
    UsefulInfoComponent,
    LearningComponent,
    TasksComponent,
    InfoComponent,
    SignInComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DropdownModule,
    MenubarModule,
    AccordionModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenuModule,
    MegaMenuModule,
    PanelMenuModule,
    SplitterModule,
    BreadcrumbModule,
    TabMenuModule,
    PanelModule,
    PasswordModule,
    DividerModule,
    SkeletonModule,
    FieldsetModule,
    ChartModule

  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
