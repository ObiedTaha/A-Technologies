import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selection-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.scss']
})
export class SelectionPageComponent {

  selectedOption: string = '';
  isSelected: boolean = false;

  @Input() srcImage:string='';
  @Input() title:string='';
  @Input() value:string='';

  @Input() secSrcImage:string='';
  @Input() secTitle:string='';
  @Input() secValue:string='';

  @Input() thirdSrcImage:string='';
  @Input() thirdTitle:string='';
  @Input() thirdValue:string='';
  
  @Input() btnValue:string='';
  @Input() btnIcon:string='';

  //  @Input() routerLink: string | any[];


  // Optional: Use this method to perform an action when a selection is made
  onSelectionChange() {
    console.log("Selected option:", this.selectedOption);
    if (this.selectedOption) {
      this.isSelected = true;
      console.log(this.isSelected);

    }
  }
}
