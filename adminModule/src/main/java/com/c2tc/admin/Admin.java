package com.c2tc.admin;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
@Entity
@Table(name="admin")
public class Admin {
@Id	
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
@Column
private String name;
@Column
private String password;
@Column
private String mall;
@Column
private String phone;
public Admin() {

}
public Admin(int id, String name, String password, String mall, String phone  ) {
this.id=id;
this.name=name;
this.password=password;
this.mall=mall;
this.phone=phone;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id=id;
}

public String getName()
{
return name;
}
public void setName(String name)
{
this.name = name;
}
public String getPassword()
{
return password;
}
public void setPassword(String password)
{
this.password=password;
}
public String getMall() {
	return mall;
}
public void setMall(String mall) {
	this.mall=mall;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone=phone;
}
@Override
public String toString() {
	return "Admin [id=" + id + ", name=" + name + ", password=" + password + ", mall=" + mall + ", phone=" + phone
			+ "]";
}


}