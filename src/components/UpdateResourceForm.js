import React, { useState, useEffect } from "react";
// Used to update existing resources
const UpdateResourceForm = ({ resource, onUpdate }) => {
    const [name, setName] = useState(resource.name);
// Updates the input field when resource prop changes
    useEffect(() => {
        setName(resource.name);
    }, [resource]);
// Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(resource.id, { name }); // Call onUpdate prop with the updated resource data
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update Resource</h3>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Resource Name"
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateResourceForm;