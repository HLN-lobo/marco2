import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: '', component: CadastroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
