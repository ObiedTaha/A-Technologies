import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SelectionPageComponent } from '../selection-page/selection-page.component';

@Component({
  selector: 'app-choose-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SelectionPageComponent],
  templateUrl: './choose-home.component.html',
  styleUrls: ['./choose-home.component.scss']
})
export class ChooseHomeComponent {
  isLogin: boolean = true;
  selectedOption: string = '';
  isSelected: boolean = false;
  // @Input() paragraph:string='';

  title: string = 'فيلا';
  srcImage: string = './assets/images/villa.svg';
  value: string = 'villa';



secSrcImage:string='./assets/images/flat.svg';
secTitle:string='شقة دوبليكس';
secValue:string='doblix';

thirdSrcImage:string='./assets/images/block.svg';
thirdTitle:string='شقة سكنية';
thirdValue:string='block';
  
btnValue:string='التالي';
routes:string='/dreamHouse'



  // Optional: Use this method to perform an action when a selection is made
  onSelectionChange() {
    console.log("Selected option:", this.selectedOption);
    if (this.selectedOption) {
      this.isSelected = true;
      console.log(this.isSelected);

    }
  }
}
