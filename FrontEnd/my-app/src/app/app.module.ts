import { BrowserModule,DomSanitizer } from '@angular/platform-browser';
import { NgModule,Pipe, PipeTransform  } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MySitesComponent } from './my-sites/my-sites.component';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MySitesComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
