import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'adrian';
  public nameUpper: string = 'ADRIAN';
  public fullName: string = 'aDRian poRTUguez';
  public customDate: Date = new Date()
}
