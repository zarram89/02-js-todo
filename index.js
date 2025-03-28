const toDo = {
  list: {
    "create a new practice task": "In Progress", 
	  "make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	  "write a post": "To Do", // задача "написать пост" в статусе "Надо сделать"
  },
  changeStatus(task, status) {
    this.list[task] = status;
  },
  addTask(task) {
    this.list[name] = task; 
  },
  deleteTask(task) {
    delete this.list[task];
  },
  showList() {
    console.log(this.list);
  }
};

// показывет лист
toDo.showList();
toDo.changeStatus("write a post", "Done");
toDo.showList();
toDo.deleteTask("make a bed");
toDo.showList();