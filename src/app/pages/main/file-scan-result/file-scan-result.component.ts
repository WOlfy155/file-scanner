import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { defer, map, Observable, shareReplay, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FileScanResultResponse } from '../main.types';
import { FileScannerController } from '../../../shared/controllers/file-scanner-controller';
import { TreeNode } from '../../../shared/components/tree/tree.component';

@Component({
  selector: 'app-url-scan-result',
  templateUrl: './file-scan-result.component.html',
  styleUrls: ['./file-scan-result.component.scss'],
  host: {
    class: 'page'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileScanResultComponent {
  private route = inject(ActivatedRoute);
  private controller = inject(FileScannerController);
  private cdr = inject(ChangeDetectorRef);

  urlScanResult$: Observable<FileScanResultResponse> = defer(() => this.controller.loadScanResult(this.route.snapshot.params?.['id']).pipe(
    tap(result => this.setVirusTree(result))
  )).pipe(shareReplay());
  stats$: Observable<string[]> = defer(() => this.urlScanResult$?.pipe(map(r => Object.keys(r?.data?.attributes?.stats || {}))));

  virusTree: TreeNode;

  downloadReport(type: 'docx' | 'pdf') {
    return this.controller.downloadReport(type);
  }

  private setVirusTree(result: FileScanResultResponse) {
    const tree = localStorage.getItem(`tree-${this.route.snapshot.params?.['id']}`);

    if (tree) {
      this.virusTree = JSON.parse(tree);
      return;
    }

    const viruses = Object?.values(result?.data?.attributes?.results)?.map(v => v?.result)?.filter(r => r);
    this.virusTree = generateRandomTree(viruses, 4);
    this.cdr.detectChanges();

    localStorage.setItem(`tree-${this.route.snapshot.params?.['id']}`, JSON.stringify(this.virusTree));

    function generateRandomTree(labels: string[], maxDepth: number): TreeNode {
      // Helper function to recursively generate a random tree
      function generateNode(depth: number): TreeNode {
        if (depth >= maxDepth) {
          return null; // Stop recursion at max depth
        }

        let label = labels[Math.floor(Math.random() * labels.length)];

        let children = [];

        let numChildren = Math.floor(Math.random() * 4);

        for (let i = 0; i < numChildren; i++) {
          let childNode: any = generateNode(depth + 1);
          if (childNode) {
            children.push(childNode);
          }
        }

        return {label, children};
      }

      // Start tree generation from root node
      return generateNode(0);
    }
  }
}
