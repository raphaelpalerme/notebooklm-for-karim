import { Component, signal } from '@angular/core';
import { LucideAngularModule, Settings, Upload } from 'lucide-angular';

@Component({
  selector: 'app-discussion-panel',
  standalone: true,
  imports: [LucideAngularModule],
  host: { class: 'flex-1 flex' },
  template: `
    <main class="flex-1 flex flex-col bg-white">
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h2 class="font-medium text-gray-800">Discussion</h2>
        <div class="flex items-center gap-2">
          <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <lucide-icon [img]="SettingsIcon" class="w-[18px] h-[18px] text-gray-500"></lucide-icon>
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          <lucide-icon [img]="UploadIcon" class="w-[24px] h-[24px] text-blue-500"></lucide-icon>
        </div>
        <h3 class="text-xl text-gray-700 mb-4">Ajoutez une source pour commencer</h3>
        <button class="border border-gray-300 rounded-full px-6 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors">
          Importer une source
        </button>
      </div>

      <!-- Input -->
      <div class="p-4 border-t border-gray-200">
        <div class="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-4 py-3">
          <input
            type="text"
            placeholder="Importez une source pour commencer"
            class="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400"
            [value]="message()"
            (input)="onMessageInput($event)"
          />
          <span class="text-sm text-gray-400">0 source</span>
          <button class="w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
            <span class="text-white">→</span>
          </button>
        </div>
      </div>
    </main>
  `
})
export class DiscussionPanelComponent {
  readonly SettingsIcon = Settings;
  readonly UploadIcon = Upload;

  message = signal('');

  onMessageInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.message.set(target.value);
  }
}
