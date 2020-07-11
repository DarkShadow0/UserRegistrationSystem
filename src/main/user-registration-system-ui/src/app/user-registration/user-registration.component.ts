import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistrationServiceService } from '../service/registration-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  formgroup: FormGroup;
  constructor(private regService: RegistrationServiceService,
              private router: Router, 
              private route: ActivatedRoute) { }


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
      this.regService.register(this.formgroup.value).subscribe(result => {
        let user_id;
        localStorage.setItem(user_id, result.id);
      });
      this.router.navigateByUrl('/list-all-users');
    }
    else{
      alert('Fill required detail!');
    }
  }
  resetForm(){
    this.formgroup.reset();
  }
  ngOnInit(): void {
    console.log('inside init');
    this.initForm();
  }

}
