import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) { }

  postQuestion(question){
    this.http.post('https://localhost:44329/api/questions', question).subscribe(res => {
      console.log('api call: ' + res);
    })
  }

  getQuestions(quizId){
    return this.http.get(`https://localhost:44329/api/questions/${quizId}`);
  }

  selectQuestion(question){
    this.selectedQuestion.next(question);
  }

  putQuestion(question){
      this.http.put(`https://localhost:44329/api/questions/${question.id}`, question).subscribe(res => {
        console.log('api call put: ' + res);
      })
  }

  postQuiz(quiz){
    this.http.post('https://localhost:44329/api/quizzes', quiz).subscribe(res => {
      console.log('api call quiz post: ' + res);
    })
  }

  getQuizzes(){
    return this.http.get('https://localhost:44329/api/quizzes');
  }

  getAllQuizzes(){
    return this.http.get('https://localhost:44329/api/quizzes/all');
  }

  putQuiz(quiz){
    this.http.put(`https://localhost:44329/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
      console.log('api call put quiz: ' + res);
    })
  }

  selectQuiz(quiz){
    this.selectedQuiz.next(quiz);
  }


}
