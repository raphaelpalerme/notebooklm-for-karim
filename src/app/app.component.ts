import { Component, signal, HostListener } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SourcesPanelComponent } from './components/sources-panel/sources-panel.component';
import { DiscussionPanelComponent } from './components/discussion-panel/discussion-panel.component';
import { StudioPanelComponent } from './components/studio-panel/studio-panel.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SourcesPanelComponent,
    DiscussionPanelComponent,
    StudioPanelComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50 flex flex-col">
      <app-header />

      <div class="flex flex-1 overflow-hidden">
        <app-sources-panel [style.width.px]="sourcesWidth()" />
        <div class="resizer" (mousedown)="startResize($event, 'sources')"></div>
        <app-discussion-panel class="flex-1 min-w-0" />
        <div class="resizer" (mousedown)="startResize($event, 'studio')"></div>
        <app-studio-panel [style.width.px]="studioWidth()" />
      </div>

      <app-footer />
    </div>
  `
})
export class AppComponent {
  sourcesWidth = signal(320);
  studioWidth = signal(288);

  private resizing: 'sources' | 'studio' | null = null;
  private startX = 0;
  private startWidth = 0;

  private readonly MIN_WIDTH = 200;
  private readonly MAX_WIDTH = 500;

  startResize(event: MouseEvent, panel: 'sources' | 'studio') {
    event.preventDefault();
    this.resizing = panel;
    this.startX = event.clientX;
    this.startWidth = panel === 'sources' ? this.sourcesWidth() : this.studioWidth();
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.resizing) return;

    const delta = event.clientX - this.startX;
    let newWidth: number;

    if (this.resizing === 'sources') {
      newWidth = this.startWidth + delta;
    } else {
      newWidth = this.startWidth - delta;
    }

    newWidth = Math.max(this.MIN_WIDTH, Math.min(this.MAX_WIDTH, newWidth));

    if (this.resizing === 'sources') {
      this.sourcesWidth.set(newWidth);
    } else {
      this.studioWidth.set(newWidth);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.resizing) {
      this.resizing = null;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  }
}
