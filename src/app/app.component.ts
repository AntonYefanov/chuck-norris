import { Component, OnInit, NgModule } from '@angular/core';
import {HttpService} from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chuck-norris';
  joke: string = "Here will be joke";
  categoryJoke: string = "";
  //categories: string[] = ["cat1", "cat2", "cat3"];
  categories:any;
  category: string = "animal";  

  constructor(private httpService: HttpService){}

  ngOnInit() {
      this.httpService.getRandomJoke().subscribe(this.setJoke.bind(this));
      this.httpService.getCategoryJoke(this.category).subscribe(this.setCatJoke.bind(this))
      this.httpService.getCategories().subscribe(data => this.categories = data);
  }

  setJoke(data:any) {
    this.joke = data['value'];        
  }

  setCatJoke(data:any) {
    this.categoryJoke = data['value'];        
  }

  getJoke() {    
    this.httpService.getRandomJoke().subscribe(this.setJoke.bind(this));
  }

  getCategoryJoke() {
    this.httpService.getCategoryJoke(this.category).subscribe(this.setCatJoke.bind(this))
  }
}
