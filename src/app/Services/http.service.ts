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
      'Content-Type': 'application/json',
      authorization: token,
    });
    return this.http.get(this.baseURL + 'lists/', { headers });
  }

  getTasksByListId(listId: any, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
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
}