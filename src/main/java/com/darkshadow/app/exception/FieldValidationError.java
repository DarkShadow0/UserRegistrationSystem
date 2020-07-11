package com.darkshadow.app.exception;

public class FieldValidationError {
	
	private String field;
	private String message;
	private MessageType type;
	
	public enum MessageType{
		SUCCESS, INFO, WARNING, ERROR
	}
	
	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public MessageType getType() {
		return type;
	}

	public void setType(MessageType error) {
		this.type = error;
	}

	@Override
	public String toString() {
		return "FieldValidationError [field=" + field + ", message=" + message + ", type=" + type + "]";
	}

}
