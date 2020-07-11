import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../model/user.model';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit, OnDestroy {

  user: User;
  users: User[];
  subscription: Subscription;
  constructor(private userService: UserServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  sendUsers(){
    return this.users;
  }

  getAllUsers(){
    this.subscription = this.userService.fecthAllUsers().subscribe(result => {
      this.users = result;
    });
  }
  editUser(id: number, user: User){
    this.userService.user = user;
    this.router.navigateByUrl('/update-user/' + id);
  }

  deleteUser(user: User){
    this.users = this.users.filter(u => u !== user);
    this.subscription = this.userService.deleteUserById(user.id).subscribe();
    console.log('inside delete');
    console.log('update list');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
