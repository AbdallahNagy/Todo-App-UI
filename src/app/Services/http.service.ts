import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  //sign up
  createUser(user: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.baseURL + 'users/', user, { headers });
  }

  login(user: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.baseURL + 'users/login/', user, { headers });
  }

  getAllLists(token: string) {
    const headers = new HttpHeaders({
      authorization: token,
    });
    return this.http.get(this.baseURL + 'lists/', { headers });
  }

  getTasksByListId(listId: any, token: string) {
    const headers = new HttpHeaders({
      authorization: token,
    });
    return this.http.get(this.baseURL + `lists/${listId}`, { headers });
  }

  createNewList(list: object, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: token,
    });
    return this.http.post(this.baseURL + 'lists', list, { headers });
  }

  deleteListById(id: string, token: string) {
    const headers = new HttpHeaders({
      authorization: token,
    });
    return this.http.delete(this.baseURL + 'lists/' + id, { headers });
  }

  updateListById(id: string, list: object, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: token,
    });
    return this.http.patch(this.baseURL + 'lists/' + id, list, { headers });
  }

  addTodoToList(id: string, todo: object, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: token,
    });
    return this.http.post(this.baseURL + 'todos/' + id, todo, { headers });
  }

  getAllTodos(token: string) {
    const headers = new HttpHeaders({
      authorization: token,
    });
    return this.http.get(this.baseURL + 'todos', { headers });
  }

  deleteTodo(id: string, token: string) {
    const headers = new HttpHeaders({
      authorization: token,
    });
    return this.http.delete(this.baseURL + 'todos/' + id, { headers });
  }

  updateTodoById(id: string, todo: object, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: token,
    });
    return this.http.patch(this.baseURL + 'todos/' + id, todo, { headers });
  }

  getTodoById(id: string, token: string) {
    const headers = new HttpHeaders({
      authorization: token,
    });
    return this.http.get(this.baseURL + 'todos/' + id, { headers });
  }

  addTodoWithoutList(todo: object, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: token,
    });
    return this.http.post(this.baseURL + 'todos/', todo, { headers });
  }
}
