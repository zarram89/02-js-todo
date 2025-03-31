export const todo = {
  list: [
    {
      name: "create a new practice task",
      status: "in progress",
    },
    {
      name: "make a bed",
      status: "done",
    },
    {
      name: "write a post",
      status: "to do",
    }
  ],
  
  // Добавление задачи
  addTask(task) {
    this.list.push(task);
    return this; 
  },
  
  // Изменение статуса
  changeStatus(taskName, newStatus) {
    const task = this.list.find(item => item.name === taskName);
    if (task) {
      task.status = newStatus;
    }
    return this;
  },
  
  // Удаление задачи
  removeTask(taskName) {
    this.list = this.list.filter(task => task.name !== taskName);
    return this;
  },
  
  // Сортировка по статусу (в алфавитном порядке)
  sortByStatus() {
    this.list.sort((a, b) => a.status.localeCompare(b.status));
    return this;
  },
  
  // Вывод списка с возможностью фильтрации по статусу
  showList(statusFilter = null) {
    // Применяем фильтр, если он задан
    const filteredList = statusFilter 
      ? this.list.filter(task => task.status === statusFilter)
      : this.list;
    
    if (filteredList.length === 0) {
      const message = statusFilter 
        ? `No tasks with status "${statusFilter}"`
        : "No tasks in the list";
      console.log(message);
      return this;
    }
    
    console.log(statusFilter 
      ? `Tasks with status "${statusFilter}":`
      : "All tasks:");
      
    filteredList.forEach((task, index) => {
      console.log(`${index + 1}. "${task.name}" - ${task.status}`);
    });
    
    return this;
  }
};
