import { Component } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  showLoader: boolean = false
  constructor(private _loaderServices: LoaderService) {
    this._loaderServices.isloading.subscribe((value) => {
      this.showLoader = value;
    });
  }
}
