import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {

  pessoas: Array<any>;

  constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    this.pessoas = new Array<any>();
  }

  form_submit(f: NgForm) {
    this.angularFire.list('pessoas').push({
      nome: f.form.controls.nome.value,
      sobrenome: f.form.controls.sobrenome.value
    }).then((t: any) => {
      console.log('dados gravados: ' + t.key);
    }, (e: any) => {
      console.log(e.message);
    });

    f.form.controls.nome.setValue('');
    f.form.controls.sobrenome.setValue('');
  }
}
