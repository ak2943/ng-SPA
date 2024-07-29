import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Mastercomponent } from './HomeApp.Mastercomponent';

describe('Mastercomponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Mastercomponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Mastercomponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PrimePurchase'`, () => {
    const fixture = TestBed.createComponent(Mastercomponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PrimePurchase');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Mastercomponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, PrimePurchase');
  });
});
