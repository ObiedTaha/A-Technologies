import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-radio-card',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss']
})
export class RadioCardComponent {
  selectedOption: string = '';
  isSelected: boolean = false;
  // @Input() paragraph:string='';
  // @Input() descrption:string='';
  // @Input() srcImage:string='';
  @Input() title:string='';
  @Input() srcImage:string='';



  // Optional: Use this method to perform an action when a selection is made
  onSelectionChange() {
    console.log("Selected option:", this.selectedOption);
    if (this.selectedOption) {
      this.isSelected = true;
      console.log(this.isSelected);

    }
  }
}
