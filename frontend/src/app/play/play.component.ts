import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  quizzes: any = {}
  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllQuizzes().subscribe(res => {
      this.quizzes = res;
    })
  }

}
