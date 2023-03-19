import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from "./Components/main/main.component";
import { ListsComponent } from './Components/lists/lists.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NewListComponent } from './Components/new-list/new-list.component';
import { NewTodoComponent } from './Components/new-todo/new-todo.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        NewTodoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(root),
        HttpClientModule,
        ReactiveFormsModule,
        MdbAccordionModule,
        MdbCarouselModule,
        MdbCheckboxModule,
        MdbCollapseModule,
        MdbDropdownModule,
        MdbFormsModule,
        MdbModalModule,
        MdbPopoverModule,
        MdbRadioModule,
        MdbRangeModule,
        MdbRippleModule,
        MdbScrollspyModule,
        MdbTabsModule,
        MdbTooltipModule,
        MdbValidationModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
