import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-updation',
  templateUrl: './user-updation.component.html',
  styleUrls: ['./user-updation.component.css']
})
export class UserUpdationComponent implements OnInit {

  u: User;
  formgroup: FormGroup;
  constructor(private router: Router,
              private userService: UserServiceService) { }

  initForm() {
    this.formgroup = new FormGroup({
      name: new FormControl(this.u.name, [Validators.required]),
      email: new FormControl(this.u.email, [Validators.required]),
      address: new FormControl(this.u.address, [Validators.required])
    });
  }
  ngOnInit(): void {
    this.u = this.userService.user;
    this.initForm();
  }

  resetForm() {
    this.formgroup.reset();
  }

  submitUserForm() {
    console.log('inside submit');
    if (this.formgroup.valid) {
      this.userService.updateUser(this.formgroup.value, this.u.id).subscribe();
      this.router.navigateByUrl('/home');
    }
    else {
      alert('Fill required detail!');
    }
  }
}
