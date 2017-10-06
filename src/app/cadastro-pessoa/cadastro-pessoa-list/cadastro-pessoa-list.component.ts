import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cadastro-pessoa-list',
  templateUrl: './cadastro-pessoa-list.component.html',
  styleUrls: ['./cadastro-pessoa-list.component.css']
})
export class CadastroPessoaListComponent implements OnInit {

  pessoas: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.pessoas = db.list('pessoas').valueChanges();
  }

  ngOnInit() { }
}
