import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/(encoderTab:encoder/default//decoderTab:decoder/default)',
    pathMatch: 'full',
  },

  {
    path: 'encoder',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/encoder/encoder.module').then((m) => m.EncoderModule),
    outlet: 'encoderTab',
  },
  {
    path: 'decoder',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/decoder/decoder.module').then((m) => m.DecoderModule),
    outlet: 'decoderTab',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
