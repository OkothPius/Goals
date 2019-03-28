import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GoalService } from '../goals/goal.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css'],
  providers: [GoalService]
})
export class GoalDetailsComponent implements OnInit {

  goal: Goal;
  constructor(private route: ActivatedRoute,
    private service: GoalService,private router:Router) { }
    goBack(){
      this.router.navigate(['goals'])
    }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}
