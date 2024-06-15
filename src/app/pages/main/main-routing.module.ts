import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ScanResultComponent } from './scan-result/scan-result.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'scan-result/:id', component: ScanResultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

export function SCAN_RESULT_PAGE(id: string) {
  return `/main/scan-result/${id}`
}
