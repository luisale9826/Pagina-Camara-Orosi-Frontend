import { Component, OnInit } from '@angular/core';
import { ImagesControl } from '../shared/images-control';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private ic: ImagesControl) {}

  ngOnInit(): void {}

  getLogo(): string {
    return this.ic.getImage('logoCamara');
  }
}
