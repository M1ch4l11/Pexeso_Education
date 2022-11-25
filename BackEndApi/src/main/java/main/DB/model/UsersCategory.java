package main.DB.model;


import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Table(name = "users_has_categories")
public class UsersCategory {


     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     @Column(name = "id")
     int id;

     @Column(name = "users_id")
     int idUsers;

     @Column(name = "categories_id")
     int idCategory;

     public int getIdCategory() {
          return idCategory;
     }

     public void setIdCategory(int idCategory) {
          this.idCategory = idCategory;
     }

     public int getId() {
          return id;
     }

     public void setId(int id) {
          this.id = id;
     }

     public int getIdUsers() {
          return idUsers;
     }

     public void setIdUsers(int idUsers) {
          this.idUsers = idUsers;
     }

     @Override
     public String toString() {
          return "UsersCategory{" +
                  "id=" + id +
                  ", idUsers=" + idUsers +
                  ", idCategory=" + idCategory +
                  '}';
     }
}
