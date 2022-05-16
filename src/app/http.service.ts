import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  

  getRandomJoke() {
    return this.http.get("https://api.chucknorris.io/jokes/random");
  }

  getCategoryJoke(category: string) {
    return this.http.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    
  }

  getCategories() {
    return this.http.get("https://api.chucknorris.io/jokes/categories");
  }
}
