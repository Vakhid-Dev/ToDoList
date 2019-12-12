﻿namespace ToDoList.Models.Business.Service.Implementation
{
    using ToDoList.Models.Business.Entites;
    using ToDoList.Models.Business.Service.Implementation.Converters;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;

    public class AppRoleService : IAppRole
    {
        private readonly IDataAppRole _dataAppRole;

        public AppRoleService(IDataAppRole dataAppRole)
        {
            this._dataAppRole = dataAppRole;
        }

        /// <inheritdoc/>
        public User.Role SetRole(string email, string password) =>

                       UserConverter.FromBlToDal(this._dataAppRole.SetRole(email, password));
    }
}
