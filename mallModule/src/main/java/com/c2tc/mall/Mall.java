package com.c2tc.mall;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;
@Entity
@Table(name="mall")
public class Mall {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
@Column
private String mallAdmin;
@Column
private String mallName;
@Column
private String location;
@Column
private String shop_id;
@Column
private String categories;
public Mall() {
	super();
}
public Mall(int id, String mallAdmin, String mallName, String location, String shop_id, String categories) {
	super();
	this.id = id;
	this.mallAdmin = mallAdmin;
	this.mallName = mallName;
	this.location = location;
	this.shop_id = shop_id;
	this.categories = categories;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getMallAdmin() {
	return mallAdmin;
}
public void setMallAdmin(String mallAdmin) {
	this.mallAdmin = mallAdmin;
}
public String getMallName() {
	return mallName;
}
public void setMallName(String mallName) {
	this.mallName = mallName;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public String getShop_id() {
	return shop_id;
}


public void setShop_id(String string) {
	this.shop_id = string;
}

public String getCategories() {
	return categories;
}
public void setCategories(String categories) {
	this.categories = categories;
}
@Override
public String toString() {
	return "Mall [id=" + id + ", mallAdmin=" + mallAdmin + ", mallName=" + mallName + ", location=" + location
			+ ", shop_id=" + shop_id + ", categories=" + categories + "]";
}


}
