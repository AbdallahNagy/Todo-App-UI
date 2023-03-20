import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalModule  } from 'mdb-angular-ui-kit/modal';

import { AppComponent } from './app.component';
import { MainComponent } from "./Components/main/main.component";
import { ListsComponent } from './Components/lists/lists.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NewListComponent } from './Components/new-list/new-list.component';
import { NewTodoComponent } from './Components/new-todo/new-todo.component';
import { UpdateListComponent } from './Components/update-list/update-list.component';
import { AddTodoToListComponent } from './Components/add-todo-to-list/add-todo-to-list.component';

const root: Routes = [
  {path: '', component:MainComponent},
  {path: 'home', 
    component:MainComponent,
    children: [{
            path: 'new-list',
            component: NewListComponent
        },
        {
            path: 'new-todo',
            component: NewTodoComponent
        }]},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
//   {path: 'home/new-list', component:NewListComponent},
//   {path: 'home/new-todo', component:NewTodoComponent},
]

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ListsComponent,
        TasksComponent,
        LoginComponent,
        SignupComponent,
        NewListComponent,
        NewTodoComponent,
        UpdateListComponent,
        AddTodoToListComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(root),
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MdbModalModule
    ]
})
export class AppModule { }
