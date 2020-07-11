package com.darkshadow.app.Rest;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.darkshadow.app.dto.UsersDTO;
import com.darkshadow.app.exception.CustomErrorType;
import com.darkshadow.app.repo.UserJpaRepository;

@RestController
@RequestMapping("/api/user")
public class UserRegistrationRestController {
	
	@RequestMapping("/hello")
	public String hello() {
		return "test1";
	}
	
	public static final Logger logger = LoggerFactory.getLogger(UserRegistrationRestController.class);

	@Autowired
	private UserJpaRepository userJpaRepository;

	/*
	 * @Autowired public void setUserJpaRepository(UserJpaRepository
	 * userJpaRepository) { this.userJpaRepository = userJpaRepository; }
	 */
	 
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/")
	public ResponseEntity<List<UsersDTO>> listAllUsers() {
		List<UsersDTO> users = userJpaRepository.findAll();
		if(users.isEmpty()) {
			return new ResponseEntity<List<UsersDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<UsersDTO>>(users, HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value = "/", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UsersDTO> createUser(@Valid @RequestBody UsersDTO user) {
		System.out.println("testing create");
		logger.info("Creating user: {}",user);
		if(userJpaRepository.findByName(user.getName())!=null) {
			logger.error("Unable to create. A User with name {} already exist",
	                user.getName());
			return new ResponseEntity<UsersDTO>(new CustomErrorType("User already exist"),HttpStatus.CONFLICT);
		}
		userJpaRepository.save(user);
		return new ResponseEntity<UsersDTO>(user, HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{id}")
	public ResponseEntity<UsersDTO> getUserById(@PathVariable("id") Long id){
		Optional<UsersDTO> optUser = userJpaRepository.findById(id);
		UsersDTO user = optUser.get();
		System.out.println("testing getbyid");
		
		  if(user == null) { 
			  return new ResponseEntity<UsersDTO>( new
			  CustomErrorType("User with id" + id + "not found"), HttpStatus.NOT_FOUND); 
		  }
		 
		return new ResponseEntity<UsersDTO>(user,HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UsersDTO> updateUser(@PathVariable("id") Long id,@Valid @RequestBody UsersDTO user){
		Optional<UsersDTO> optCurrentUser = userJpaRepository.findById(id);
		UsersDTO currentUser = optCurrentUser.get();
		if(currentUser == null) {
			return new ResponseEntity<UsersDTO>(new CustomErrorType("No such record"),HttpStatus.NOT_FOUND);
		}
		currentUser.setName(user.getName());
		currentUser.setAddress(user.getAddress());
		currentUser.setEmail(user.getEmail());
		userJpaRepository.saveAndFlush(currentUser);
		System.out.println("testing update");
		return new ResponseEntity<UsersDTO>(currentUser,HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/{id}")
	public ResponseEntity<UsersDTO> deleteUser(@PathVariable("id") Long id){
		Optional<UsersDTO> user = userJpaRepository.findById(id);
		if(user.get() == null) {
			return new ResponseEntity<UsersDTO>(new CustomErrorType("no such record to delete"),HttpStatus.NOT_FOUND);
		}
		userJpaRepository.deleteById(id);
		
		return new ResponseEntity<UsersDTO>(HttpStatus.NO_CONTENT);
	}
}
