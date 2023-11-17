package com.c2tc.admin;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "noLinks", types = { Admin.class })
public interface AdminProjection {
	String getId();
	 String getName();
	    String getMall();
	    String getPassword();
	    String getPhone();
	    
}
