import { NgModule } from '@angular/core';

import { LcScrollBox } from './components/lc-scroll-box/lc-scroll-box.component';
import { LcShiftBox } from './components/lc-shift-box/lc-shift-box.component';


@NgModule({
  declarations: [
    LcScrollBox,
    LcShiftBox
  ],
  imports: [],
  exports: [
    LcScrollBox,
    LcShiftBox
  ],
  providers: [],
  bootstrap: []
})
export class LiquidContainersModule { }