import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ɵɵngDeclareInjectable,
} from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';
import { NewListComponent } from '../new-list/new-list.component';
import { UpdateListComponent } from '../update-list/update-list.component';
import { AddTodoToListComponent } from '../add-todo-to-list/add-todo-to-list.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lists: any;
  todos: any;
  token: string = localStorage.getItem('token');
  modalRefNewList: MdbModalRef<NewListComponent> | null = null;
  modalRefToAddTodo: MdbModalRef<UpdateListComponent> | null = null;

  @Output() getTasksEvent = new EventEmitter();

  constructor(
    private http: HttpService,
    private modalService: MdbModalService
  ) {}
  
  ngOnInit(): void {
    this.getLists();
  }

  // for creating new list
  openModalNewList() {
    this.modalRefNewList = this.modalService.open(NewListComponent);
    this.modalRefNewList.onClose.subscribe((addedList: any) => {
      console.log(addedList);
      this.lists.push(addedList);
    });
  }

  // for updating a list
  openModalUpdateList(id: string) {
    this.modalRefToAddTodo = this.modalService.open(UpdateListComponent, {
      data: { id },
    });
    this.modalRefToAddTodo.onClose.subscribe((updatedList: any) => {
      if (!updatedList) return;
      this.lists = this.lists.map((list: any) =>
        list._id == updatedList._id ? { ...updatedList } : { ...list }
      );
    });
  }

  // add todo to list
  openModalAddTodo(listId: string): void {
    this.modalRefToAddTodo = this.modalService.open(AddTodoToListComponent, {
      data: { listId },
    });
    this.modalRefToAddTodo.onClose.subscribe((todo: any) => {
      if (!todo) return;

      this.todos.push(todo);
    });
  }

  getLists(): void {
    this.http.getAllLists(this.token).subscribe({
      next: (res) => {
        this.lists = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  showTodos(id: any): void {
    this.http.getTasksByListId(id, this.token).subscribe({
      next: (res) => {        
        this.todos = res;
        
        // why when i try to put this line outside next and
        // inside the same func doesn't work?
        this.getTasksEvent.emit(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteList(id: string): void {
    this.http.deleteListById(id, this.token).subscribe({
      next: (res: any) => {
        console.log(res);
        this.lists = this.lists.filter((list: any) => list._id !== res._id);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
