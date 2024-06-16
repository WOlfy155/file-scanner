import { AfterViewInit, Component, ElementRef, inject, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TreeNode = {
  label: string,
  children: TreeNode[]
}

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements AfterViewInit, OnDestroy {
  @Input() root: TreeNode;
  @ViewChild('drawLayer') drawLayer: ElementRef<SVGElement>;

  private tree = inject(ElementRef<HTMLElement>);

  private renderer = inject(Renderer2);

  async ngAfterViewInit() {
    await this.preloadFont();
    this.drawArrows();
    window.addEventListener('resize', this.drawArrows);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.drawArrows);
  }

  private drawArrows = () => {
    const self = this;
    const root = this.tree.nativeElement.firstChild;
    let arrowCount = 0;
    this.drawLayer.nativeElement.innerHTML = '';

    drawArrowForNode(root as HTMLElement);

    function drawArrowForNode(element: HTMLElement) {
      // @ts-ignore
      const [label, childrenContainer] = [...element.children] as HTMLElement[];

      const startX = label.offsetLeft + label.offsetWidth;
      const startY = label.offsetTop + (label.offsetHeight / 2);

      // @ts-ignore
      for (let child of childrenContainer.children) {
        drawArrow(child.firstChild);
        drawArrowForNode(child);
      }

      function drawArrow(child: HTMLElement) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

        const endX = child.offsetLeft;
        const endY = child.offsetTop + (label.offsetHeight / 2);

        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');

        const markerId = `arrowhead-${arrowCount}`;
        const arrowColor = '#86aaf9';

        marker.setAttribute('markerWidth', '3');
        marker.setAttribute('markerHeight', '3');
        marker.setAttribute('refX', '5');
        marker.setAttribute('refY', '5');
        marker.setAttribute('orient', 'auto');
        marker.setAttribute('id', markerId);
        marker.setAttribute('viewBox', '0 0 10 10');
        marker.setAttribute('style', `stroke-width: 2px; stroke: ${arrowColor}; fill: ${arrowColor}`);

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M 0 0 L 10 5 L 0 10 z`);
        path.setAttribute('style', `stroke: ${arrowColor}`);
        marker.append(path);

        line.setAttribute('x1', '' + startX);
        line.setAttribute('y1', '' + startY);
        line.setAttribute('x2', '' + endX);
        line.setAttribute('y2', '' + endY);
        line.setAttribute('marker-end', `url(#${markerId})`);

        line.setAttribute('style', `stroke-width: 2px; stroke: ${arrowColor};`);
        line.style.setProperty('--fade-in-delay', (Number(element?.style?.getPropertyValue('--fade-in-delay')) + 1).toFixed());
        line.classList.add('fade-in');

        self.renderer.appendChild(self.drawLayer.nativeElement, marker);
        self.renderer.appendChild(self.drawLayer.nativeElement, line);
        arrowCount++;
      }
    }
  };

  private async preloadFont() {
    const font = new FontFace('Manrope', 'url(./assets/fonts/manrope/fonts/Manrope-Medium.woff2)');
    await font.load();
    await document.fonts.ready;
  }
}
