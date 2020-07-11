import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User;
  formgroup: FormGroup;
  constructor(private userService: UserServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('inside init');
    this.initForm();
  }
  initForm(){
    this.formgroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
  }

  submitUserForm(){
    console.log('inside submit');
    if (this.formgroup.valid){
      this.userService.register(this.formgroup.value).subscribe(result => {
        let user_id;
        localStorage.setItem(user_id, result.id);
        this.user = result;
      });
      this.resetForm();
      alert('Thank You for registering');
    }
    else{
      alert('Fill required detail!');
    }
  }

  resetForm(){
    this.formgroup.reset();
  }

}
