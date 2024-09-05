import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-sidesection',
  standalone: true,
  imports: [CommonModule,SideMenuComponent],
  templateUrl: './sidesection.component.html',
  styleUrls: ['./sidesection.component.scss']
})
export class SidesectionComponent {

}
