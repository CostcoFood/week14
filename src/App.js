import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddResourceForm from './components/AddResourceForm';
import ResourceList from './components/ResourceList';
import UpdateResourceForm from './components/UpdateResourceForm';

const MockAPIUrl = 'https://6677ab7e145714a1bd75522d.mockapi.io/PromineoTechAPI/week14';

const App = () => {
  const [resources, setResources] = useState([]);
  const [editingResource, setEditingResource] = useState(null);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await axios.get(MockAPIUrl);
      setResources(response.data);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const handleCreate = async (newResource) => {
    try {
      const response = await axios.post(MockAPIUrl, newResource);
      setResources([...resources, response.data]);
    } catch (error) {
      console.error('Error creating resource:', error);
    }
  };

  const handleUpdate = async (id, updatedResource) => {
    try {
      const response = await axios.put(`${MockAPIUrl}/${id}`, updatedResource);
      const updatedResources = resources.map((resource) =>
        resource.id === id ? response.data : resource
      );
      setResources(updatedResources);
      setEditingResource(null);
    } catch (error) {
      console.error('Error updating resource:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${MockAPIUrl}/${id}`);
      const filteredResources = resources.filter((resource) => resource.id !== id);
      setResources(filteredResources);
    } catch (error) {
      console.error('Error deleting resource:', error);
    }
  };

  const handleEdit = (resource) => {
    setEditingResource(resource);
  };

  return (
    <div>
      <h1>CRUD App with MockAPI</h1>
      <AddResourceForm onCreate={handleCreate} />
      {editingResource && (
        <UpdateResourceForm resource={editingResource} onUpdate={handleUpdate} />
      )}
      <ResourceList resources={resources} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
