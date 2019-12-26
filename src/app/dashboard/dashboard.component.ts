import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  drawerOpen: boolean = true;
  change: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleDrawer()
  {
    this.drawerOpen = !this.drawerOpen;
    this.change = ! this.change;
  }

}
