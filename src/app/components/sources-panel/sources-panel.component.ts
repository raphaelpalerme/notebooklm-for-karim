import { Component, signal, output } from '@angular/core';
import { LucideAngularModule, Plus, Sparkles, Search, Globe, Zap, FileText, PanelLeftClose } from 'lucide-angular';

@Component({
  selector: 'app-sources-panel',
  standalone: true,
  imports: [LucideAngularModule],
  host: { class: 'flex flex-shrink-0 min-w-[320px] overflow-hidden' },
  template: `
    <aside class="w-full h-full bg-white border-r border-gray-200 p-4 flex flex-col">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-medium text-gray-800">Sources</h2>
        <button
          class="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          (click)="collapse.emit()"
          title="Réduire le panneau"
        >
          <lucide-icon [img]="PanelLeftCloseIcon" class="w-[18px] h-[18px] text-gray-500"></lucide-icon>
        </button>
      </div>

      <button class="w-full border border-gray-300 rounded-lg py-2.5 px-4 text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors mb-3">
        <lucide-icon [img]="PlusIcon" class="w-[18px] h-[18px]"></lucide-icon>
        Ajouter des sources
      </button>

      <!-- Deep Research Banner -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg p-3 mb-3">
        <div class="flex items-start gap-2">
          <lucide-icon [img]="SparklesIcon" class="w-[18px] h-[18px] text-purple-500 mt-0.5"></lucide-icon>
          <p class="text-sm text-gray-700">
            <span class="text-blue-600 font-medium cursor-pointer hover:underline">Essayez Deep Research</span>
            pour obtenir un rapport détaillé et de nouvelles sources !
          </p>
        </div>
      </div>

      <!-- Web Search -->
      <div class="border border-gray-200 rounded-lg p-3 mb-4">
        <div class="flex items-center gap-2 text-gray-500 mb-2">
          <lucide-icon [img]="SearchIcon" class="w-[16px] h-[16px]"></lucide-icon>
          <span class="text-sm">Rechercher de nouvelles sources sur le Web</span>
        </div>
        <div class="flex items-center gap-2">
          <button class="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-600 transition-colors">
            <lucide-icon [img]="GlobeIcon" class="w-[14px] h-[14px]"></lucide-icon>
            Web
          </button>
          <button class="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-600 transition-colors">
            <lucide-icon [img]="ZapIcon" class="w-[14px] h-[14px]"></lucide-icon>
            Fast Research
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div class="flex-1 flex flex-col items-center justify-center text-center px-4">
        <lucide-icon [img]="FileTextIcon" class="w-[40px] h-[40px] text-gray-300 mb-3"></lucide-icon>
        <p class="text-sm text-gray-500 leading-relaxed">
          Les sources enregistrées s'afficheront ici.
          Cliquez sur "Ajouter une source" ci-dessus pour ajouter des PDF, des sites Web, du texte, des vidéos ou des fichiers audio. Vous pouvez aussi importer un fichier directement depuis Google Drive.
        </p>
      </div>
    </aside>
  `
})
export class SourcesPanelComponent {
  readonly PlusIcon = Plus;
  readonly SparklesIcon = Sparkles;
  readonly SearchIcon = Search;
  readonly GlobeIcon = Globe;
  readonly ZapIcon = Zap;
  readonly FileTextIcon = FileText;
  readonly PanelLeftCloseIcon = PanelLeftClose;

  collapse = output<void>();

  sources = signal<string[]>([]);
}
