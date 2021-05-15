import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { EncoderRoutingModule } from './encoder-routing.module'
import { EncoderComponent } from './encoder.component'
@NgModule({
  imports: [NativeScriptCommonModule, EncoderRoutingModule],
  declarations: [EncoderComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EncoderModule {}
