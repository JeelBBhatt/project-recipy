import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {HttpEvent} from "@angular/common/http";
import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable} from "rxjs/index";
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export  class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(private dataStorageervice: DataStorageService,
              public authService: AuthService,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
   this.authState = this.store.select('auth');
  }
  onSaveData() {
      this.dataStorageervice.storeRecipes().subscribe(
        (response: HttpEvent<Object>) => {console.log(response); }
      );
  }
  onFetchData() {
      this.dataStorageervice.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
}
