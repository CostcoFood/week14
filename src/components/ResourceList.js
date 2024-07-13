import React from "react";
//Used to list all resources
const ResourceList = ({ resources, onDelete, onEdit }) => {
    return (
        <div>
            <h3>Resource List</h3>
            <ul>
                {resources.map((resource) => (
                    <li key={resource.id}>
                        {resource.name}
                        <button onClick={() => onEdit(resource)}>Edit</button>
                        <button onClick={() => onDelete(resource.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;