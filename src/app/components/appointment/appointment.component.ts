import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
 loading = true;
  screenURL: any;
  screen: any;
   private iframeLoadFallback: any;

constructor(private sanitizer: DomSanitizer){

}
  ngOnInit() {
    this.loading=true;
    const url = 'https://script.google.com/macros/s/AKfycbxvoh70cz65WzD9qban-L3X4CnksSZB3KetCvfq0ZgtxMCFqlJoEnqlJPLcOP2BBBnm/exec';
    this.screen = this.sanitizer.bypassSecurityTrustResourceUrl(url);


  }
  onLoaded(event: any) {
    console.log('Iframe loaded ✅', event);
    this.loading = false;
    clearTimeout(this.iframeLoadFallback);
  }
}
