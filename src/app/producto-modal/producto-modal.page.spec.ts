import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoModalPage } from './producto-modal.page';

describe('ProductoModalPage', () => {
  let component: ProductoModalPage;
  let fixture: ComponentFixture<ProductoModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
