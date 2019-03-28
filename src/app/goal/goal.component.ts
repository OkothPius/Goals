import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'
import { GoalService } from '../goals/goal.service';
import { AlertsService } from '../alert-service/alerts.service';
import { HttpClient } from '@angular/common/http'
import { Quote } from '../quote-class/quote'
import {QuoteRequestService} from '../quote-http/quote-request.service'
import { Router} from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers: [GoalService,QuoteRequestService], //Add the providers to the component
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goToUrl(id){
    this.router.navigate(['goals',id])
  }

  goals: Goal[];
  alertService: AlertsService;
  quote: Quote;

  deleteGoal( index) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

      if (toDelete) {
        this.goals.splice(index, 1);
        this.alertService.alertMe("Goal has been deleted")
    }
  }


  constructor(goalService: GoalService, alertService: AlertsService, private quoteService: QuoteRequestService,private router:Router) {
    this.goals = goalService.getGoals();
    this.alertService = alertService; // make the service available to the class
  }


  ngOnInit() {

    this.quoteService.quoteRequest()
   this.quote=this.quoteService.quote
  }

}
