import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {


  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  ShowSuccess(message: string) {
    this.toastr.success('', message, { timeOut: 3000});
  }

  ShowError(message: string) {
    this.toastr.error('', message, { timeOut: 3000});
  }

  ShowWarning() {
    this.toastr.warning('You are being warned.', 'Alert!', { timeOut: 3000});
  }

  ShowInfo() {
    this.toastr.info('Just some information for you.');
  }



}
