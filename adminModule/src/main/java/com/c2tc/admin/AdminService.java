
package com.c2tc.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminService {
	@Autowired
private AdminRepository repo;
	public List<Admin> listAll()
	{
	return repo.findAll();
	}
	public void save(Admin admin)
	{
	repo.save(admin);
	}
	public Admin get(Integer id)
	{
	return repo.findById(id).get();
	}
	public void delete(Integer id)
	{
	repo.deleteById(id);
	}
	public void setThrowException(boolean b) {
		// TODO Auto-generated method stub
		
	}
	public boolean isSaveCalled() {
		// TODO Auto-generated method stub
		return false;
	}
	public Object getSavedAdmin() {
		// TODO Auto-generated method stub
		return null;
	}
	public boolean isDeleteCalled() {
		// TODO Auto-generated method stub
		return false;
	}
	public Object getDeletedAdminId() {
		// TODO Auto-generated method stub
		return null;
	}
}

