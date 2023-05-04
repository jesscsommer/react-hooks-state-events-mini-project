import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text: '',
    category: 'Code'
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value 

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const catOptions = categories.map(category => {
    if (category !== 'All') {
       return <option key={category}>{category}</option>}
    })

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(formData)
  }


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" value={formData.details}/>
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={formData.category}>
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
