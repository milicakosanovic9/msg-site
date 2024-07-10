import { Component, OnInit } from '@angular/core';
import { Blog } from '../data/blogs';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs:Blog[] = []
// dependency injection
  constructor(private apiService: ApiService, private window: Window){}

  ngOnInit(): void{
    this.apiService.getBlogData().subscribe(
      response=>{
        this.blogs = response.body
      }
    )
  }

  more(link: string){
    this.window.open(link, "_blank")
  }
  
}
