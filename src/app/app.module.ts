import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { ConvertorComponent } from './convertor/convertor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    ConvertorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    CurrencyComponent,
    ConvertorComponent
  ]
})
export class AppModule { }
