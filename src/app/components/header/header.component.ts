import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Reminders'
  showAddTask: boolean = false
  subscription: Subscription

  constructor(private uiService:UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value
    })
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }
// Only a test to check functionality. I willi keep it by pedagogical porpuose
  doSome() {
    console.warn('Click is working')
  }
// This set the button to only shows when router is '/'
  hasRoute(route: String) {
    return this.router.url === route
  }
}
