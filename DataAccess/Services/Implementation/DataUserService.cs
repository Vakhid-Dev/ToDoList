﻿namespace ToDoList.DataAccess.EfCore.Services.Implementation
{
    using System.Collections.Generic;
    using ToDoList.DataAccess.EfCore;
    using ToDoList.DataAccess.EfCore.Services.Contract;
    using ToDoList.DataAccess.Entites;

    public class DataUserService : IDataUserService
    {
        private readonly ToDoListContext _toDoListContext;
        public DataUserService(ToDoListContext toDoListContext)
        {
            _toDoListContext = toDoListContext;
        }
        public void Create(User user)
        {
            if(user != null)
            {
                _toDoListContext.Users.Add(user);
                _toDoListContext.SaveChanges(); 
            }
            
        }

       public List<User> GetUsers()
        {
            return _toDoListContext.Users.ToList();
        }

       public User GetUserByEmail(string email)
        {
            return _toDoListContext.Users.FirstOrDefault(u => u.Email == email);
        }
    }
}
