import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-sendingmessage',
  standalone: true,
  imports: [CommonModule, ProgressBarModule, ToastModule],
  templateUrl: './sendingmessage.component.html',
  styleUrls: ['./sendingmessage.component.scss'],
  providers: [MessageService]
})
export class SendingmessageComponent implements OnInit {
  isLogin: boolean = true;
  value: number = 0;

  interval: any;

  constructor(private messageService: MessageService, private ngZone: NgZone, private router: Router) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.ngZone.run(() => {
          this.value = this.value + Math.floor(Math.random() * 10) + 1;
          if (this.value >= 100) {
            this.value = 100;
            this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' })
            
            clearInterval(this.interval);
            this.router.navigate(['/final'])
          }
          
        });
      }, 1000);
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
