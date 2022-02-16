import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AfterViewInit, Component, DebugElement, ElementRef, ViewChild } from '@angular/core';

describe('AppComponent', () => {
  let fixture: any;
  let component: any;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let resultado: DebugElement;
  let app: any;
  let input:any;



  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    app = fixture.componentInstance;
    htmlElement = fixture.nativeElement;
    input = htmlElement.querySelector('input')!;
  }));

  it('should create the app', () => {
   
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Calculadora'`, () => {

    expect(app.title).toEqual('Calculadora');
  });
  describe('testing all the functions', () => {
    it('should the input be disable', () => {
      component.resultado = "";
      fixture.detectChanges();
      resultado = fixture.debugElement.query(By.css('input.resultado'));
      expect(resultado.nativeElement.getAttribute("disabled")).toEqual("disabled")
    })
    it('should input have the placeholder 0', () => {
     
      expect(input.placeholder).toEqual('0');
    })
    describe('Number Actions', () => {
      it('When function is called by click event, the number passed changes in the value', () => {
        fixture.detectChanges();
        let buttonElement = fixture.debugElement.query(By.css('button.button9'));
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.resultado.nativeElement.value).toBe('9');
        });
      })

    })
    describe('Action Functions', () => {
      it('When function is called by click event and has a number and action, the value gains the number', () => {
        fixture.detectChanges();
          
        component.resultado.nativeElement.value = '43 + ';
        component.valor = '43 + '
        component.item = ' + ';
        let buttonElement = fixture.debugElement.query(By.css('button.button9'));
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(input.value).toBe('43 + 9');
        });
      });
      it('When function is called by click event, the number passed gains 0. in the value', () => {
        fixture.detectChanges();
          
        let buttonElement = fixture.debugElement.query(By.css('button.point'));
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(input.value).toBe('0.');
        });
      })
      it('When function is called by click event, the number passed gains 0. in the value', () => {
        fixture.detectChanges();
          
        component.valor = '43';
        component.resultado.nativeElement.value = '43';
        let buttonElement = fixture.debugElement.query(By.css('button.point'));
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(input.value).toBe('43.');
        });
      })
      it('When function is called by click event, the number passed gains 0. in the value', () => {
        fixture.detectChanges();
          
        component.valor = '43.';
        component.resultado.nativeElement.value = '43.';
        let buttonElement = fixture.debugElement.query(By.css('button.point'));
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(input.value).not.toBe('43..');
        });
      })
      it('When function is called by click event, the number passed gains 0. in the value', () => {
        fixture.detectChanges();
          
        component.valor = '43 + 4';
        component.item = ' + '
        component.resultado.nativeElement.value = '43 + 4';
        let buttonElement = fixture.debugElement.query(By.css('button.point'));
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(input.value).toBe('43 + 4.');
        });
      })
      it('When function is called by click event, the number passed gains 0. in the value', () => {
        fixture.detectChanges();
          
        component.valor = '43 + ';
        component.item = ' + '
        component.resultado.nativeElement.value = '43 + 4.';
        component.segVal = '4.'
        let buttonElement = fixture.debugElement.query(By.css('button.point'));
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(input.value).not.toBe('43 + 4..');
        });
      })
    it('When function is called by click event, the value gains the action', () => {
      fixture.detectChanges();
       
      let buttonElement = fixture.debugElement.query(By.css('button.menos'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('-');
      });
    })
    it('When function is called by click event and has a number, the value gains the action', () => {
      fixture.detectChanges();
       
      input.value = '43';
      let buttonElement = fixture.debugElement.query(By.css('button.mais'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('43 + ');
      });
    })
    it('When function is called by click event and has a number and action, the value does not gains the action', () => {
      fixture.detectChanges();
       
      component.item = " + "
      component.resultado.nativeElement.value = '43 + ';
      let buttonElement = fixture.debugElement.query(By.css('button.mais'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).not.toBe('43 +  + ');
      });
    })
    it('When function is called by click event and has a number and action, the value gains the action after the number ', () => {
      fixture.detectChanges();
       
      component.comparador = '43'
      component.item = "-"
      component.valor = "-43"
      component.resultado.nativeElement.value = '-43';
      let buttonElement = fixture.debugElement.query(By.css('button.mais'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).not.toBe('-43 + ');
      });
    })
    it('When function is called by click event and has a number and action, the value gains the action after the number ', () => {
      fixture.detectChanges();
       
      component.comparador = '8'
      component.item = "-"
      component.valor = "-43"
      component.resultado.nativeElement.value = '-43';
      let buttonElement = fixture.debugElement.query(By.css('button.mais'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('-43 + ');
      });
    })
    it('When function is called by click event and has a number and action, the value does not gains the action', () => {
      fixture.detectChanges();
       
      input.value = '43 +';
      let buttonElement = fixture.debugElement.query(By.css('button.mais'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).not.toBe('43 +  +');
      });
    })
    it('When function is called by click event and has a number and action, the input value clears', () => {
      fixture.detectChanges();
       
      input.value = '43 + 3';
      let buttonElement = fixture.debugElement.query(By.css('button.clear'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('');
      });
    })
    it('When function is called by click event and has a number and action, the input value clears', () => {
      fixture.detectChanges();
       
      component.resultado.nativeElement.value = "43 + 3"
      component.item = " + "
      let buttonElement = fixture.debugElement.query(By.css('button.enter'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('46');
      });
    })
    it('When function is called by click event and has a number and action, the input value clears', () => {
      fixture.detectChanges();
       
      component.resultado.nativeElement.value = "43 - 3"
      component.item = " -"
      let buttonElement = fixture.debugElement.query(By.css('button.enter'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('40');
      });
    })
    it('When function is called by click event and has a number and action, the input value clears', () => {
      fixture.detectChanges();
       
      component.resultado.nativeElement.value = "43 x 3"
      component.item = " x "
      let buttonElement = fixture.debugElement.query(By.css('button.enter'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('129');
      });
    })
    it('When function is called by click event and has a number and action, the input value clears', () => {
      fixture.detectChanges();
       
      component.resultado.nativeElement.value = "40 / 2"
      component.item = " / "
      let buttonElement = fixture.debugElement.query(By.css('button.enter'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('20');
      });
    })
    it('When function is called by click event and has a number and action, the input value clears', () => {
      fixture.detectChanges();
       
      component.resultado.nativeElement.value = "40 / 2"
      component.item = " / "
      let buttonElement = fixture.debugElement.query(By.css('button.enter'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('20');
      });
    })
    it('When function is called by click event and has a number and action, the input value clears', () => {
      fixture.detectChanges();
       
      component.resultado.nativeElement.value = "40^2"
      component.item = "^"
      let buttonElement = fixture.debugElement.query(By.css('button.enter'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('1600');
      });
    })
    it('When function is called by click event and has a number and action, the input value clears', () => {
      fixture.detectChanges();
       
      component.resultado.nativeElement.value = "50% de 2"
      component.item = "% de "
      let buttonElement = fixture.debugElement.query(By.css('button.enter'));
      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(input.value).toBe('1');
      });
    })
  })
})
});
