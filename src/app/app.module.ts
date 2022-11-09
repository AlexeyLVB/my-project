import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GenComponentComponent } from './gen-component/gen-component.component';

import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes =[
  {path: '', component:GenComponentComponent},
  {path: 'account', component:AccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GenComponentComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }