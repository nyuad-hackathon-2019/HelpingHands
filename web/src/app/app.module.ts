import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisService } from './services/crisis.service';
import { HttpClientModule} from '@angular/common/http';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const services = [
  CrisisService,
];
@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    [...services]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
