import React, { useState } from 'react';

// Used for adding new resources
const AddResourceForm = ({ onCreate }) => {
    const [name, setName] = useState('');
    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ name }); // Calls onCreate with the new resource name
        setName(''); // Resets input field
    };

    return  (
        <form onSubmit={handleSubmit}>
            <h3>Add New Resource</h3>
            <input type='text' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder='Resource Name'
            />
            <button type='submit'>Add</button>
        </form>
    );
};

export default AddResourceForm