package main.DB.model;
import javax.persistence.*;
@Entity
public class ResponseUserCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String username;

    String categoryName;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @Override
    public String toString() {
        return "ResponseUserCategory{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", categoryName='" + categoryName + '\'' +
                '}';
    }
}
