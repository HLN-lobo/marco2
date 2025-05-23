import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = [
    {
      label: 'MARCAS',
      submenu: [
        { label: 'DARK LAB' },
        { label: 'MAX TITANIUM' },
        { label: 'BLACK SKULL' },
        { label: 'GROWTH SUPLEMENTS' },
      ]
    },
    { label: 'CREATINA', link: '/produtos/creatina' },
    { label: 'PROTEÍNA', link: '/produtos/proteina' },
    { label: 'PRÉ-TREINO', link: '/produtos/pre-treino' },
    { label: 'Entrar', link: '/login', class: 'entrar' },
    { label: 'Cadastrar-se', link: '/cadastro', class: 'entrar' }
  ];
}
