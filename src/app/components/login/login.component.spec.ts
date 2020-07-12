import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { FooterComponent } from '../footer/footer.component';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';
import { TestBarComponent } from '../test-bar/test-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule  } from "@angular/router/testing";
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [LoginComponent, FooterComponent, AdminHeaderComponent, TestBarComponent],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.get(AuthService);
  });

  fdescribe('load the component', () => {

    fit('should create', () => {
      expect(component).toBeTruthy();
    });

  });

  fdescribe('test for the form', () => {

    fit('form invalid when empty', () => {
      expect(component.form.valid).toBeFalsy(); 
    });

    fit('user field validity', () => {
      let user = component.form.controls['user_name'];
      expect(user.valid).toBeFalsy();

      let errors = {};
      errors = user.errors || {}
      expect(errors['required']).toBeTruthy();
    });

    fit('password field validity', () => {
      let password = component.form.controls['password'];
      expect(password.valid).toBeFalsy();

      let errors = {};
      errors = password.errors || {}
      expect(errors['required']).toBeTruthy();
    });

  });

  fdescribe('submitting of the form', ()=> {
    
    fit('onSubmit() function should call authservice', () => {
      expect(component.form.valid).toBeFalsy();
      component.form.controls['user_name'].setValue('test_user');
      component.form.controls['password'].setValue('password');
      const userServiceSpy = spyOn(authService, 'authenticateUser').and.returnValue({ subscribe: () => {} });
      expect(userServiceSpy).not.toHaveBeenCalled();

      component.onSubmit();
      
      expect(userServiceSpy).toHaveBeenCalledTimes(1);
    });

  }); 

});
