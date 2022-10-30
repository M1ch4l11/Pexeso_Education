package main.BackEndApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class BackEndApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApiApplication.class, args);
	}

}
