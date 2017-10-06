import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaListComponent } from './cadastro-pessoa-list.component';

describe('CadastroPessoaListComponent', () => {
  let component: CadastroPessoaListComponent;
  let fixture: ComponentFixture<CadastroPessoaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPessoaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
