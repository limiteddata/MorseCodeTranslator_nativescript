import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { DecoderRoutingModule } from './decoder-routing.module'
import { DecoderComponent } from './decoder.component'

@NgModule({
  imports: [NativeScriptCommonModule, DecoderRoutingModule],
  declarations: [DecoderComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DecoderModule {}
