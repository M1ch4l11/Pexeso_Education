package main.DB.Repository_DAO.Interfaces;

import main.DB.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import java.io.Serializable;
import java.util.List;

public abstract class AbstractHibernateDao<T extends Serializable> {
    private Class<T> clazz;

    @Autowired
    protected SessionFactory sessionFactory = new Configuration()
            .configure("hibernate.cfg.xml")
            .addAnnotatedClass(User.class)    //add all model classes here
            .buildSessionFactory()
            ;

    public final void setClazz(final Class<T> clazzToSet) {
        if (clazzToSet != null) {
            clazz = clazzToSet;
        }else throw new RuntimeException("Class is null!" + clazzToSet.toString());
    }

    // API
    public T findOne(final long id) {
        return (T) getCurrentSession().get(clazz, id);
    }

    public List<T> findAll() {
        getCurrentSession().beginTransaction();
        return getCurrentSession().createQuery("from " + clazz.getName()).list();
    }

    public T create(final T entity) {

        getCurrentSession().saveOrUpdate(entity);
        return entity;
    }

    public T update(final T entity) {

        return (T) getCurrentSession().merge(entity);
    }

    public void delete(final T entity) {

        getCurrentSession().delete(entity);
    }

    public void deleteById(final long entityId) {
        final T entity = findOne(entityId);
        delete(entity);
    }

    protected Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }
}
