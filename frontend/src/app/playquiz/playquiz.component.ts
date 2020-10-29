import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FinishedComponent } from '../finished/finished.component';

@Component({
  selector: 'playquiz',
  templateUrl: './playquiz.component.html',
  styleUrls: ['./playquiz.component.css']
})
export class PlayQuizComponent implements OnInit {

  quizId
  questions

  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res;
      this.questions.forEach(element => {
        element.answers = [
          element.correctAnswer,
          element.answer1,
          element.answer2,
          element.answer3
        ]
        shuffle(element.answers);
      });

    })
  }

finish(){
  var correct = 0;
  this.questions.forEach(element => {
    if (element.correctAnswer == element.selectedAnswer) {
      correct++;
    }

  });
  console.log(correct);
  const dialogRef = this.dialog.open(FinishedComponent, {
    data: {correct, total: this.questions.length}
  });
}

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

function shuffle(a){
  for (let index = a.length; index; index--) {
    let j = Math.floor(Math.random() * index);
    [a[index-1], a[j]] = [a[j], a[index - 1]];

  }
}
