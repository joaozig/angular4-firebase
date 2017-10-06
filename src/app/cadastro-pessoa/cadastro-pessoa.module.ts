import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireDatabase } from 'angularfire2/database';

import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListComponent } from './cadastro-pessoa-list/cadastro-pessoa-list.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers: [
    AngularFireDatabase
  ],
  exports: [
    CadastroPessoaComponent,
    CadastroPessoaFormComponent,
    CadastroPessoaListComponent
  ],
  declarations: [
    CadastroPessoaComponent,
    CadastroPessoaFormComponent,
    CadastroPessoaListComponent
  ]
})
export class CadastroPessoaModule { }
