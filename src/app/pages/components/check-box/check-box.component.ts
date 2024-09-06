import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPageComponent } from '../selection-page/selection-page.component';
import { RouterLink } from '@angular/router';
import { HeadNavComponent } from 'src/app/core/shared/head-nav/head-nav.component';

@Component({
  selector: 'app-check-box',
  standalone: true,
  imports: [CommonModule, SelectionPageComponent, RouterLink, HeadNavComponent],
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent {
  isLogin: boolean = true;

  title: string = 'القاهرة';
  srcImage: string = './assets/images/home.svg';
  value: string = 'cairo';



  secSrcImage: string = './assets/images/car.svg';
  secTitle: string = ' الساحل الشمالي';
  secValue: string = 'north cost';

  thirdSrcImage: string = './assets/images/dublicate.svg';
  thirdTitle: string = ' دهب';
  thirdValue: string = 'dahab';

  btnValue: string = 'أبدأ الأن';
  btnIcon: string = './assets/images/Primary.svg';

}
