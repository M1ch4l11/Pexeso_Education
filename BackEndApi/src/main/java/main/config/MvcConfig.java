package main.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.sql.DataSource;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"main"})
public class MvcConfig implements WebMvcConfigurer {

    public void addViewControllers(ViewControllerRegistry registry) {

        registry.addViewController("/hello").setViewName("hello");
    }



    @Bean
    public DataSource dataSource1() {

        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        //nastavenie DB informacii
        dataSource.setUsername("root");
        dataSource.setPassword("");
        dataSource.setUrl("jdbc:mysql://localhost:3306/pexeso?useSSL=false");  //nastavenie url k DB, SSL moze byt vypnute
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");   //cesta z driver.class

        return dataSource;
    }


}