import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { FooterComponent } from '../footer/footer.component';
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';
import { TestBarComponent } from '../test-bar/test-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule  } from "@angular/router/testing";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule, BsDatepickerModule],
      declarations: [RegisterComponent, FooterComponent, AdminHeaderComponent, TestBarComponent],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
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

      component.form.controls['password'].setValue('test');

      let errors2 = {};
      errors2 = password.errors || {}
      expect(errors2['hasNum']).toBeTruthy();
      expect(errors2['hasUpper']).toBeTruthy();
      expect(errors2['hasUpper']['actualLength']).not.toBeGreaterThanOrEqual(8);

      component.form.controls['password'].setValue('TEST');

      let errors3 = {};
      errors3 = password.errors || {}
      expect(errors3['hasLower']).toBeTruthy();
    });

    fit('user first name and last name field validity', () => {
      let fname = component.form.controls['l_name'];
      let lmane = component.form.controls['l_name'];
      expect(fname.valid).toBeFalsy();
      expect(lmane.valid).toBeFalsy();

      let errors1 = {};
      let errors2 = {};
      errors1 = fname.errors || {}
      expect(errors1['required']).toBeTruthy();
      errors2 = lmane.errors || {}
      expect(errors2['required']).toBeTruthy();
    });

    fit('email field validity', () => {
      let user = component.form.controls['email'];
      expect(user.valid).toBeFalsy();

      let errors = {};
      errors = user.errors || {}
      expect(errors['required']).toBeTruthy();

      component.form.controls['email'].setValue('test');

      let errors2 = {};
      errors2 = user.errors || {}
      expect(errors2['email']).toBeTruthy();
    });

  });

  fdescribe('submitting of the form', ()=> {
    
    fit('onSubmit() function should call authservice', () => {
      expect(component.form.valid).toBeFalsy();
      component.form.controls['user_name'].setValue('test_user_qa');
      component.form.controls['password'].setValue('Daniel1212123');
      component.form.controls['email'].setValue('test@hotmail.com');
      component.form.controls['f_name'].setValue('Test');
      component.form.controls['l_name'].setValue('User');
      component.form.controls['birthday'].setValue('1998-04-02T00:00:00.000Z');
      const userServiceSpy = spyOn(authService, 'registerUser').and.returnValue({ subscribe: () => {} });
      expect(userServiceSpy).not.toHaveBeenCalled();

      component.onSubmit();
      
      expect(userServiceSpy).toHaveBeenCalledTimes(1);
    });

  }); 

});

/*password: this.form.value.password,
      f_name: this.form.value.f_name,
      l_name: this.form.value.l_name,
      email: this.form.value.email,
      user_name: this.form.value.user_name,
      birthday: this.form.value.birthdate,*/ 