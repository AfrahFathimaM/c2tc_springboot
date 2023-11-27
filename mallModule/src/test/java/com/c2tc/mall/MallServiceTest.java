package com.c2tc.mall;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class MallServiceTest {
	@Autowired
	mallRepository adrepo;
		
	@Test
	@Order(1)
	public void testCreate()
	{
		Mall ad=new Mall();
		ad.setId(19);	
	    ad.setCategories("pet");
		ad.setLocation("bihar");
		ad.setMallAdmin("kumudha");
		ad.setMallName("forum");
		ad.setShop_id("91");
	
		adrepo.save(ad);
		//using assertNotNull for writing test case
		assertNotNull(adrepo.findById(19).get());//this becomes true
	}   

	@Test
	@Order(2)
	public void testReadAll()//testing reading all records from db
	{
		List <Mall> list=adrepo.findAll();
		assertThat(list).size().isGreaterThan(0);
		}

	@Test
	@Order(3)
	public void testSingleRecord()//testing for single record from the database
	{
		Mall mall=adrepo.findById(19).get();
	
		assertEquals("91",mall.getShop_id());
		
		}

	@Test
	@Order(4)
	public void testUpdate()
	{
	Mall a=adrepo.findById(19).get();
	a.setShop_id("91");//testing by updating the password
	adrepo.save(a);
	assertNotEquals("92",adrepo.findById(19).get().getShop_id());
	}

	@Test
	@Order(5)
	public void testDelete() {
		
		adrepo.deleteById(19);
		assertThat(adrepo.existsById(19)).isFalse();
}
}