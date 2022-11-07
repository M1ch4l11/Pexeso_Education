package main.DB.Repository_DAO.Implementation;

import main.DB.Repository_DAO.Interfaces.AbstractHibernateDao;
import main.DB.model.User;

public class UserDAO extends AbstractHibernateDao< User > implements main.DB.Repository_DAO.Interfaces.UserDAO   {

    public UserDAO(){
        setClazz(User.class);
    }

}
