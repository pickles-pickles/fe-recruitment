import { BrowserModule } from '@angular/platform-browser'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { StoreModule } from '@ngrx/store'
import { HomepageComponent } from './homepage/homepage.component'
import { ThumbnailComponent } from './thumbnail/thumbnail.component'
import { appReducer } from './app.reducer';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { CounterTextComponent } from './counter-text/counter-text.component';
import { CounterButtonComponent } from './counter-button/counter-button.component'

@NgModule({
  declarations: [AppComponent, HomepageComponent, ThumbnailComponent, CounterContainerComponent, CounterTextComponent, CounterButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot({ app: appReducer })
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
