import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)

  const removeTask = (taskToDeleteText) => {
    setTasks(tasks.filter(task => task.text !== taskToDeleteText))
  }

  const [selectedCategory, setSelectedCategory] = useState('All')

  const changeCategory = (newCat) => { 
    setSelectedCategory(newCat)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} changeCategory={changeCategory} selectedCategory={selectedCategory} />
      <NewTaskForm />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
