import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { user } from '../models/user'
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  fdescribe('retrieve user from the API via GET with authenticateUser', () => {

    fit('get correct user', ()=> {

      const c_user = {
        user_name: 'test_user_qa',
        password: 'Daniel1212123',
      };
      
      const response = {
        expiresIn: 86400,
        success: true,
        token: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYXZvcml0ZXMiOltdLCJfaWQiOiI1ZjBiMjc1YTk5YjBjMjAwMTc3OGY4M2MiLCJmX25hbWUiOiJUZXN0IiwibF9uYW1lIjoiVXNlciIsImVtYWlsIjoidGVzdEBob3RtYWlsLmNvbSIsInVzZXJfbmFtZSI6InRlc3RfdXNlcl9xYSIsInBhc3N3b3JkIjoiJDJhJDEwJHRCM0NPUVphMjcuVy9aN1FhTzRLTU8uNkRUV1VuMWp3dWx3QzlhbklDRWNqRmZJQXBWUGtxIiwiYmlydGhkYXkiOiIxOTk4LTA0LTAyVDAwOjAwOjAwLjAwMFoiLCJhdmFpbGFibGUiOnRydWUsImlzQWRtaW4iOmZhbHNlLCJfX3YiOjAsImlhdCI6MTU5NDU3Mjk0NywiZXhwIjoxNTk0NjU5MzQ3fQ.87yLnAnRjFaJpvRcoM6seLnVdYM1-a96wXsiCwk-W5U",
        user: {
          available: true,
          birthday: "1998-04-02T00:00:00.000Z",
          email: "test@hotmail.com",
          f_name: "Test",
          favorites: [],
          id: "5f0b275a99b0c2001778f83c",
          isAdmin: false,
          l_name: "User",
          user_name: "test_user_qa"
        }
      }
      service.authenticateUser(c_user).subscribe( value  => {
        expect(value).toBeDefined();
        expect(value).toEqual(response);
      });

      const request = httpMock.expectOne('https://drinklyapi.herokuapp.com/api/user/authenticate');

      expect(request.request.method).toBe('POST');
      request.flush(response);
    });

    fit('register user correctly', ()=> {

      const c_user = {
        _id: "",
        password: 'Daniel1212123',
        f_name: 'Test',
        l_name: 'User',
        email: 'test@hotmail.com',
        user_name: 'test_user_qa',
        birthday: "1998/04/02",
        available: true,
        favorites: [],
        isAdmin: false,
      };
      
      const user = {
          available: true,
          birthday: "1998/04/02",
          email: "test@hotmail.com",
          f_name: "Test",
          favorites: [],
          isAdmin: false,
          l_name: "User",
          password: 'Daniel1212123',
          user_name: "test_user_qa",
          _id: ''
      }

      service.registerUser(c_user).subscribe( value  => {
        expect(value).toBeDefined();
        expect(value).toEqual(user);
      });

      const request = httpMock.expectOne('https://drinklyapi.herokuapp.com/api/user/register');

      expect(request.request.method).toBe('POST');
      request.flush(user);
    });

  });
  
});
