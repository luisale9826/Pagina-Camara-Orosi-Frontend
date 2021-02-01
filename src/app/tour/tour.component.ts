import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openGalery(): void {
    this.router.navigate(['/tour/galery']);
  }
}
