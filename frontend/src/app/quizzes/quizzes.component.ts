import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quiz: any = {};
  quizzes: any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getQuizzes().subscribe(res => {
      this.quizzes = res;
    })
  }

}
