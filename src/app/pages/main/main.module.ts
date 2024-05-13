import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatButtonModule} from '@angular/material/button';
import { FileInfoComponent } from './file-info/file-info.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { UrlInfoComponent } from './url-info/url-info.component';
import {TabsComponent} from '../../shared/components/tabs/tabs.component';
import {MatInputModule} from '@angular/material/input';
import { FileScannerComponent } from './file-scanner/file-scanner.component';
import { UrlScannerComponent } from './url-scanner/url-scanner.component';
import {FormsModule} from '@angular/forms';
import { VirusTableComponent } from './virus-table/virus-table.component';
import { TreeComponent } from '../../shared/components/tree/tree.component';


@NgModule({
  declarations: [
    MainComponent,
    FileInfoComponent,
    UrlInfoComponent,
    FileScannerComponent,
    UrlScannerComponent,
    VirusTableComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    TabsComponent,
    MatInputModule,
    FormsModule,
    TreeComponent
  ]
})
export class MainModule { }
