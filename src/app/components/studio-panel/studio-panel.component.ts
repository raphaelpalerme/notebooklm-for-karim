import { Component } from '@angular/core';
import { LucideAngularModule, Headphones, Video, Brain, FileBarChart, BookOpen, HelpCircle, BarChart3, Presentation, Table, PenLine, FileText } from 'lucide-angular';

interface StudioOption {
  icon: typeof Headphones;
  label: string;
}

@Component({
  selector: 'app-studio-panel',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <aside class="w-72 bg-white border-l border-gray-200 p-4 flex flex-col">
      <h2 class="font-medium text-gray-800 mb-4">Studio</h2>

      <!-- Options Grid -->
      <div class="grid grid-cols-2 gap-2 mb-6">
        @for (option of studioOptions; track option.label) {
          <button class="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <lucide-icon [img]="option.icon" class="w-[18px] h-[18px] text-gray-400"></lucide-icon>
            <span class="text-sm text-gray-600">{{ option.label }}</span>
          </button>
        }
      </div>

      <!-- Empty State -->
      <div class="flex-1 flex flex-col items-center justify-center text-center px-4">
        <lucide-icon [img]="PenLineIcon" class="w-[32px] h-[32px] text-gray-300 mb-3"></lucide-icon>
        <p class="text-sm text-gray-500 leading-relaxed">
          La sortie Studio sera enregistrée ici.
          Après avoir ajouté des sources, cliquez pour ajouter un résumé audio, un guide d'étude, une carte mentale et bien plus !
        </p>
      </div>

      <!-- Add Note Button -->
      <button class="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2.5 px-4 flex items-center justify-center gap-2 transition-colors mt-auto">
        <lucide-icon [img]="FileTextIcon" class="w-[18px] h-[18px]"></lucide-icon>
        Ajouter une note
      </button>
    </aside>
  `
})
export class StudioPanelComponent {
  readonly PenLineIcon = PenLine;
  readonly FileTextIcon = FileText;

  readonly studioOptions: StudioOption[] = [
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
}
