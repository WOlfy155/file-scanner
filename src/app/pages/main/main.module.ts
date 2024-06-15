import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { FileScannerComponent } from './components/file-scanner/file-scanner.component';
import { UrlScannerComponent } from './components/url-scanner/url-scanner.component';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from '../../shared/components/tree/tree.component';
import { VirusTableComponent } from './components/virus-table/virus-table.component';
import { ScoreComponent } from '../../shared/components/score/score.component';


@NgModule({
  declarations: [
    MainComponent,
    ScanResultComponent,
    FileScannerComponent,
    UrlScannerComponent,
    VirusTableComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TabsComponent,
    FormsModule,
    TreeComponent,
    ScoreComponent
  ]
})
export class MainModule {
}
