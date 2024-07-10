import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog, Blogs } from 'src/app/data/blogs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "https://sgthubyy9a.execute-api.eu-west-1.amazonaws.com/demo/"

  constructor(private http: HttpClient) { }

  getBlogData() :Observable<Blogs>{
    return this.http.get<Blogs>(this.apiUrl + 'blogs/')
  }
}
