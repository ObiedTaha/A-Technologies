import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioCardComponent } from '../radio-card/radio-card.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule,FormsModule,RadioCardComponent],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  isLogin:boolean=true;
  // paragraph:string='اختيار يدوي';
  // discription:string='قم بإنشاء رسالة طلب سكنك بشكل يدوي ودقيق. اختر كلماتك بعناية، ';
  // srcImage='./assets/images/manual.svg';


  // secondParagraph:string='اختيار عن طريق الذكاء الأصطناعي';
  // secondDiscription:string='قم بإنشاء رسالة طلب سكنك بشكل يدوي ودقيق. اختر كلماتك بعناية، ';
  // secondSrcImage='./assets/images/AI.svg';

}
