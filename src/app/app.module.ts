import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InputsModule, WavesModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule } from './typescripts/free';
import { FormsModule } from '@angular/forms';
import { SpeculateWaterComponent } from './speculate-water/speculate-water.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DocumentComponent } from './document/document.component';
import { BulletinComponentComponent } from './bulletin-component/bulletin-component.component';
import { ContractUsComponent } from './contract-us/contract-us.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ManageWaterDryComponent } from './manage-water-dry/manage-water-dry.component';
import { ManageWaterRainComponent } from './manage-water-rain/manage-water-rain.component';
import { ProtectRainComponent } from './protect-rain/protect-rain.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  { path: 'to-contract-us', component: ContractUsComponent },
  { path: 'to-about-us', component: AboutUsComponent },
  { path: '**', component: HomeComponentComponent, children: [
    {path: 'to-speculate', component: SpeculateWaterComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    SpeculateWaterComponent,
    NavBarComponent,
    DocumentComponent,
    BulletinComponentComponent,
    ContractUsComponent,
    HomeComponentComponent,
    ManageWaterDryComponent,
    ManageWaterRainComponent,
    ProtectRainComponent,
    AboutUsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,
        useHash: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
