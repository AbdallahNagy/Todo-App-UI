import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private router:Router) {
    console.log('main');    
    if(!localStorage.getItem('token')) this.router.navigate(['/signup']);

  }
  ngOnInit(): void {
  }
  tasks:any

  getTasks(tasks:any) {
    this.tasks = tasks
  }
}
