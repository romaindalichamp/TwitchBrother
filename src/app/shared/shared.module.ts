import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import { CustomFooterComponent } from './components/footer/custom-footer.component';
import { CustomHeaderComponent } from './components/header/custom-header.component';

@NgModule({
  declarations: [
    CustomFooterComponent,
    CustomHeaderComponent
  ],
  exports: [
    CustomHeaderComponent,
    CustomFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
