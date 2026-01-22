import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-white border-t border-gray-200 py-2 text-center">
      <p class="text-xs text-gray-400">NotebookLM peut se tromper. Veuillez donc vérifier ses réponses.</p>
    </footer>
  `
})
export class FooterComponent {}
