import { Component } from '@angular/core';
import { LucideAngularModule, Plus, Share2, Settings } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <header class="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
          <span class="text-white text-lg">🎧</span>
        </div>
        <h1 class="text-lg font-medium text-gray-800">Karim notebook</h1>
      </div>
      <div class="flex items-center gap-2">
        <button class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          <lucide-icon [img]="PlusIcon" class="w-[18px] h-[18px]"></lucide-icon>
          Créer un notebook
        </button>
        <button class="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm transition-colors">
          <lucide-icon [img]="Share2Icon" class="w-[18px] h-[18px]"></lucide-icon>
          Partager
        </button>
        <button class="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm transition-colors">
          <lucide-icon [img]="SettingsIcon" class="w-[18px] h-[18px]"></lucide-icon>
          Paramètres
        </button>
        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium ml-2">
          K
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly PlusIcon = Plus;
  readonly Share2Icon = Share2;
  readonly SettingsIcon = Settings;
}
