import { Component } from '@angular/core';
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
        <app-sources-panel />
        <app-discussion-panel />
        <app-studio-panel />
      </div>

      <app-footer />
    </div>
  `
})
export class AppComponent {}
