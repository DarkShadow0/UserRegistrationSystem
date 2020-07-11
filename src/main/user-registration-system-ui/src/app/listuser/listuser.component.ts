import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserServiceService } from '../service/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users: User[];
  constructor(private userService: UserServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.fecthAllUsers().subscribe(userData => {
      this.users = userData;
    });
  }

  editUser(id: number, user: User){
    this.userService.user = user;
    this.router.navigateByUrl('/update-user/' + id);
  }

  deleteUser(id: number){
    this.userService.deleteUserById(id).subscribe();
    console.log('inside delete');
    this.router.navigate(['/'], {relativeTo: this.route});
    console.log('update list');
  }
}
