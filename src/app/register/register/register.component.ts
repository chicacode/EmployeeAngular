import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services/authentication.service';
import { User } from '@app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:  ['', Validators.required]
  });
  }
  // tslint:disable-next-line: typedef
  get f() { return this.registerForm.controls; }

  onSubmit(): void{
    const account: User = Object.assign({}, this.registerForm.value);
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;

    this.accountService.register(account)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['../login'], { relativeTo: this.route });
        }
      });
    console.log('submited');
  }

}
