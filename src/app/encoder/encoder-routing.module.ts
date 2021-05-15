import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { EncoderComponent } from './encoder.component'

const routes: Routes = [
  { path: 'default', component: EncoderComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class EncoderRoutingModule {}
