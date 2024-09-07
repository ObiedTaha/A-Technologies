import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent {
  
  isLogin: boolean = true;

}
