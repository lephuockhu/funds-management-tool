import React from 'react'

import { FaUserEdit, FaTrash } from 'react-icons/fa'

const DisplayRows = ({ history, users, setUsers, setEditUserId, setEditUserForm }) => {

    //  Check if the user is checked and set the users to the state using the setUsers() method.
    const handleChecked = e => {
        const { id, value, checked } = e.target;
        let newUsers = users.map(user => history.id === id && history.name === value ? { ...user, isChecked: checked } : user);
        setUsers(newUsers);
    };

    //  Edit the user data and set the user data to the state using the setEditUserForm() method.
    const handleUserEdit = (e, user) => {
        e.preventDefault();
        setEditUserId(history.id);
        const formValues = {
            id: history.id,
            name: history.name,
            email: history.email,
            role: history.role,
        };
        setEditUserForm(formValues);
    };
    
    //  Delete the user from the users array and set the users to the state using the setUsers() method.
    const handleUserDelete = userId => {
        const newUsers = [ ...users ];
        const index = users.findIndex(user => history.id === userId);
        newUsers.splice(index, 1);
        setUsers(newUsers);
    };

    return (
        <tr data-testid="display-rows" id={history.id} className={`data-row bg-white dark:bg-dark whitespace-nowrap hover:cursor-default hover:bg-blue-light dark:hover:bg-blue-dark hover:text-white ${history?.isChecked ? 'bg-gray-100 dark:bg-gray-800' : null}`}>
            <td className="px-6 py-2 whitespace-nowrap text-center">
                <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 outline-none focus:outline-none" 
                    id={history.id}
                    onChange={handleChecked}
                    checked={history?.isChecked || false}
                    value={history.name}
                />
            </td>
            <td className="px-6 py-2 whitespace-nowrap text-left">{history.name}</td>
            <td className="px-6 py-2 whitespace-nowrap text-left">{history.email}</td>
            <td className="px-6 py-2 whitespace-nowrap text-left">{history.role}</td>
            <td className="px-6 py-2 whitespace-nowrap text-center">
                <button 
                    type="button" 
                    title="Edit" 
                    className="btn p-2 mr-2 text-blue-light rounded dark:text-blue-dark" 
                    onClick={(e) => handleUserEdit(e, user)} 
                >
                    <FaUserEdit />
                </button>
                <button 
                    type="button" 
                    title="Delete" 
                    className="btn p-2 ml-2 text-red-500 rounded" 
                    onClick={() => handleUserDelete(history.id)} 
                >
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}

export default DisplayRows
