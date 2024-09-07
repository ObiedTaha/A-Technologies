import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dream-house-form',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dream-house-form.component.html',
  styleUrls: ['./dream-house-form.component.scss']
})
export class DreamHouseFormComponent {


  isLogin:boolean=true;
}
