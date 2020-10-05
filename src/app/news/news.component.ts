import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : any = [];

  constructor(public data: DataService) { }

  ngOnInit(): void {

    this.getNews();
  }

  getNews() {
    this.news = [];
    this.data.getNews().subscribe((data: {}) => {
      this.news = data['articles'];
      console.log(this.news);
    })
  }

}
