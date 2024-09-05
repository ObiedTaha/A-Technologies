import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPageComponent } from '../selection-page/selection-page.component';
import { RouterLink } from '@angular/router';
import { HeadNavComponent } from 'src/app/core/shared/head-nav/head-nav.component';

@Component({
  selector: 'app-check-box',
  standalone: true,
  imports: [CommonModule,SelectionPageComponent,RouterLink,HeadNavComponent],
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent {
  isLogin:boolean=true;

}
