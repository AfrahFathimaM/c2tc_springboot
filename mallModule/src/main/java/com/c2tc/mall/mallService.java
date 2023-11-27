package com.c2tc.mall;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import jakarta.transaction.Transactional;

@Service
@Transactional
public class mallService {
@Autowired
private mallRepository repo;
public List<Mall> listAll(){
return repo.findAll();
}
public void save(Mall mall)
{
repo.save(mall);
}
public Mall get(Integer id)
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




}