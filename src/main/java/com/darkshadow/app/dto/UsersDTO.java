package com.darkshadow.app.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "Users")
public class UsersDTO {
	
	private long id;
	private String name;
	private String address;
	private String email;
	
	@Id
	@GeneratedValue
	@Column(name = "USER_ID")
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@NotEmpty(message = "error.name.empty")
	@Length(max = 145, message = "error.name.length")
	@Column(name = "NAME")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@NotEmpty(message = "error.address.empty")
	@Length(max = 145, message = "error.address.length")
	@Column(name = "ADDRESS")
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	@Email(message = "error.email.email")
	@NotEmpty(message = "error.email.empty")
	@Length(max = 145, message = "error.email.length")
	@Column(name = "EMAIL")
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Override
	public String toString() {
		return "UsersDTO [id=" + id + ", name=" + name + ", address=" + address + ", email=" + email + "]";
	}
	
}
