import { Component, signal, HostListener } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SourcesPanelComponent } from './components/sources-panel/sources-panel.component';
import { DiscussionPanelComponent } from './components/discussion-panel/discussion-panel.component';
import { StudioPanelComponent } from './components/studio-panel/studio-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  LucideAngularModule,
  PanelLeftOpen,
  PanelRightOpen,
  Plus,
  Headphones,
  Video,
  Brain,
  FileBarChart,
  BookOpen,
  HelpCircle,
  BarChart3,
  Presentation,
  Table,
  FileText
} from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SourcesPanelComponent,
    DiscussionPanelComponent,
    StudioPanelComponent,
    FooterComponent,
    LucideAngularModule
  ],
  template: `
    <div class="min-h-screen bg-gray-50 flex flex-col">
      <app-header />

      <div class="flex flex-1 overflow-hidden">
        @if (sourcesCollapsed()) {
          <div class="collapsed-panel border-r border-gray-200">
            <button
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              (click)="toggleSourcesPanel()"
              title="Ouvrir le panneau Sources"
            >
              <lucide-icon [img]="PanelLeftOpenIcon" class="w-[18px] h-[18px] text-gray-500"></lucide-icon>
            </button>
            <button
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors mt-2"
              title="Ajouter des sources"
            >
              <lucide-icon [img]="PlusIcon" class="w-[18px] h-[18px] text-gray-500"></lucide-icon>
            </button>
          </div>
        } @else {
          <app-sources-panel
            [style.width.px]="sourcesWidth()"
            (collapse)="toggleSourcesPanel()"
          />
          <div class="resizer" (mousedown)="startResize($event, 'sources')"></div>
        }

        <app-discussion-panel class="flex-1 min-w-0" />

        @if (studioCollapsed()) {
          <div class="collapsed-panel border-l border-gray-200">
            <button
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              (click)="toggleStudioPanel()"
              title="Ouvrir le panneau Studio"
            >
              <lucide-icon [img]="PanelRightOpenIcon" class="w-[18px] h-[18px] text-gray-500"></lucide-icon>
            </button>
            <div class="flex-1 flex flex-col gap-1 mt-4">
              @for (option of studioOptions; track option.label) {
                <button
                  class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  [title]="option.label"
                >
                  <lucide-icon [img]="option.icon" class="w-[18px] h-[18px] text-gray-400"></lucide-icon>
                </button>
              }
            </div>
            <button
              class="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors mt-auto"
              title="Ajouter une note"
            >
              <lucide-icon [img]="FileTextIcon" class="w-[18px] h-[18px] text-white"></lucide-icon>
            </button>
          </div>
        } @else {
          <div class="resizer" (mousedown)="startResize($event, 'studio')"></div>
          <app-studio-panel
            [style.width.px]="studioWidth()"
            (collapse)="toggleStudioPanel()"
          />
        }
      </div>

      <app-footer />
    </div>
  `
})
export class AppComponent {
  readonly PanelLeftOpenIcon = PanelLeftOpen;
  readonly PanelRightOpenIcon = PanelRightOpen;
  readonly PlusIcon = Plus;
  readonly FileTextIcon = FileText;

  readonly studioOptions = [
    { icon: Headphones, label: 'Résumé audio' },
    { icon: Video, label: 'Résumé vidéo' },
    { icon: Brain, label: 'Carte mentale' },
    { icon: FileBarChart, label: 'Rapports' },
    { icon: BookOpen, label: 'Fiches...' },
    { icon: HelpCircle, label: 'Quiz' },
    { icon: BarChart3, label: 'Infographie' },
    { icon: Presentation, label: 'Présentation' },
    { icon: Table, label: 'Tableau de...' },
  ];

  sourcesWidth = signal(320);
  studioWidth = signal(288);
  sourcesCollapsed = signal(false);
  studioCollapsed = signal(false);

  private resizing: 'sources' | 'studio' | null = null;
  private startX = 0;
  private startWidth = 0;

  private readonly MIN_WIDTH = 320;
  private readonly MAX_WIDTH = 500;

  toggleSourcesPanel() {
    this.sourcesCollapsed.update(v => !v);
  }

  toggleStudioPanel() {
    this.studioCollapsed.update(v => !v);
  }

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
