import { Component, Output } from '@angular/core';
import { NgxScannerQrcodeService, SelectedFiles, BaseConfig } from 'ngx-scanner-qrcode';
import { QrcodeService } from './services/qrcode.service';
// import { cambeep_base64 } from './beep.audio';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
// create a function to get request to get data from this http https://tst.agrofintech.kz/api/v1/getUser/ 
// and then use this data to create a qr code
// and then use this qr code to create a pdf file
// and then use this pdf file to send it to the email
// and then use this email to send it to the user
  users: any = [];
  dataLoaded = false;
  curHash = '3bf3d9f0f118ec7db25fc4a9cc92b305';


  public config: BaseConfig = {
    isAuto: false,
    isDraw: true,
    isAlwaysEmit: true,
    text: { font: '25px serif' }, // Hiden { font: '0px', bottom: 40 },
    frame: { lineWidth: 8 },
    medias: {
      audio: false,
      video: {
        facingMode: 'environment', // Front and back camera { facingMode: front ? "user" : "environment" } 
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }
  };

  public selectedFiles: SelectedFiles[] = [];

  constructor(private qrcode: NgxScannerQrcodeService, private qrcodeService: QrcodeService ) { }

  public onEvent(e: any): void {
    // new Audio(cambeep_base64).play();
    console.log(e)
    this.curHash = e.data;
    this.dataLoaded = false;
    this.ngOnInit();

  }

  ngOnInit() {
    this.qrcodeService.getUser(this.curHash).subscribe((data: any) => {
      this.users.push(data);
      this.dataLoaded = true;
    });
  }


  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, console.error);
  }

  public onSelects(files: any) {
    this.qrcode.loadFiles(files, {...this.config, isDraw: false}).subscribe(res => {
      this.selectedFiles = res.filter(f => f.urlQR);
      console.log(res);
    });
  }
}
