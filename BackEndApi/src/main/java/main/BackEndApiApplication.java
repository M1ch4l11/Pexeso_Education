package main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class BackEndApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApiApplication.class, args);
	}

	//TODO:
	//michalovi pripravit metodu kt. sa zavola po prihlaseni, odosle String usernickname
	//implementovat prihlasovanie uzivatelov
}
