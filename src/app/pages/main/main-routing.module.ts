import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UrlScanResultComponent } from './url-scan-result/url-scan-result.component';
import { FileScanResultComponent } from './file-scan-result/file-scan-result.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'url-scan-result/:id', component: UrlScanResultComponent},
  {path: 'file-scan-result/:id', component: FileScanResultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

export function URL_SCAN_RESULT_PAGE(id: string) {
  return `/main/url-scan-result/${id}`;
}

export function FILE_SCAN_RESULT_PAGE(id: string) {
  return `/main/file-scan-result/${id}`;
}
