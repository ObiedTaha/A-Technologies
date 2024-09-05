import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SelectionPageComponent } from '../selection-page/selection-page.component';

@Component({
  selector: 'app-choose-home',
  standalone: true,
  imports: [CommonModule,RouterLink,SelectionPageComponent],
  templateUrl: './choose-home.component.html',
  styleUrls: ['./choose-home.component.scss']
})
export class ChooseHomeComponent {
  isLogin:boolean=true;
  selectedOption: string = '';
  isSelected: boolean = false;
  // @Input() paragraph:string='';
  // @Input() descrption:string='';
  // @Input() srcImage:string='';



  // Optional: Use this method to perform an action when a selection is made
  onSelectionChange() {
    console.log("Selected option:", this.selectedOption);
    if (this.selectedOption) {
      this.isSelected = true;
      console.log(this.isSelected);

    }
  }
}
