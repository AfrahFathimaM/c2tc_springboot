package com.c2tc.admin;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import java.util.List;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class AdminServiceTest {
	@Autowired
AdminRepository adrepo;
	
@Test
@Order(1)
public void testCreate()
{
	Admin ad=new Admin();
	ad.setId(15);
	ad.setName("sherlin");
	ad.setMall("skywalk");
	ad.setPassword("1111");
	ad.setPhone("64000000");
	
	adrepo.save(ad);
	//using assertNotNull for writing test case
	assertNotNull(adrepo.findById(15).get());//this becomes true
}   

@Test
@Order(2)
public void testReadAll()//testing reading all records from db
{
	List <Admin> list=adrepo.findAll();
	assertThat(list).size().isGreaterThan(0);
	}

@Test
@Order(3)
public void testSingleRecord()//testing for single record from the database
{
	Admin admin=adrepo.findById(15).get();
	assertEquals("1111",admin.getPassword());
	
	}

@Test
@Order(4)
public void testUpdate()
{
Admin a=adrepo.findById(15).get();
a.setPassword("2222");//testing by updating the password
adrepo.save(a);
assertNotEquals("1111",adrepo.findById(15).get().getPassword());
}

@Test
@Order(5)
public void testDelete() {
	
	adrepo.deleteById(15);
	assertThat(adrepo.existsById(15)).isFalse();
}
    }

