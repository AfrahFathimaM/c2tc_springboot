package com.c2tc.admin;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class AdminControllerTest {

	@Test
	void testList() {
		fail("Not yet implemented");
	}

	@Test
	void testGetAdmin() throws Exception {
		  Admin admin = new Admin();
	        admin.setName("John");
	        admin.setMall("Forum");
	        admin.setPassword("password123");
	        admin.setPhone("123456789");

	       
	}

	@Test
	void testAddAdmin() throws Exception {
		 String json = "{\"name\":\"Jane\",\"mall\":\"MallName\",\"password\":\"pwd123\",\"phone\":\"987654321\"}";
	}

	@Test
	void testUpdateAdmin() throws Exception{
		 Admin admin = new Admin();
	        admin.setName("Bob");
	        admin.setMall("MegaMall");
	        admin.setPassword("securepwd");
	        admin.setPhone("111222333");

	       
	        String json = "{\"name\":\"UpdatedName\",\"mall\":\"UpdatedMall\",\"phone\":\"999888777\"}";
	}

	@Test
	void testDelete() {
		fail("Not yet implemented");
	}

}
