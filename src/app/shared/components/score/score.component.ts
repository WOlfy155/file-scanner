import { Component, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  @Input() score: number;

  @Input() set color(color: string) {
    if (!color) {
      return;
    }

    this.elementRef?.nativeElement?.style?.setProperty('--score-color', color);
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }
}
