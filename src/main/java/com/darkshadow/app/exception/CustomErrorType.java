package com.darkshadow.app.exception;

import com.darkshadow.app.dto.UsersDTO;

public class CustomErrorType extends UsersDTO{
	
	private String error;
	
	public CustomErrorType(String err) {
		error = err;
	}

	public String getError() {
		return error;
	}
	
}
