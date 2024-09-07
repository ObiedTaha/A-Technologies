import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-descrption',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home-descrption.component.html',
  styleUrls: ['./home-descrption.component.scss']
})
export class HomeDescrptionComponent {
  isLogin: boolean = true;

}
