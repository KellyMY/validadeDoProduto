import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheProdutoPage } from './detalhe-produto.page';

describe('DetalheProdutoPage', () => {
  let component: DetalheProdutoPage;
  let fixture: ComponentFixture<DetalheProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalheProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
