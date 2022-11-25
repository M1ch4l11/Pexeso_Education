package main.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;
import java.util.List;


public class WebSecurityConfig /*implements SecurityFilterChain*/ {

   /* @Autowired
    private DataSource dataSource1;

    @Autowired
    AuthenticationManagerBuilder auth;
*/
   /* @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        auth.jdbcAuthentication()
                        .dataSource(dataSource1);

        http
                .authorizeRequests().anyRequest().authenticated()
              //  .antMatchers("/").authenticated()
                .and()
                .formLogin()
                .defaultSuccessUrl("/hello", true)
                .and()
                .exceptionHandling().accessDeniedPage("/accessDenied");

        return http.build();

    }*/
/*

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user =
                User.withDefaultPasswordEncoder()
                        .username("user")
                        .password("password")
                        .roles("USER")
                        .build();


        return new InMemoryUserDetailsManager(user);
    }
*/

/*    @Override
    public boolean matches(HttpServletRequest request) {
        return false;
    }

    @Override
    public List<Filter> getFilters() {
        return null;
    }*/
}