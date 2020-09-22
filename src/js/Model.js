export default class Model {
    constructor() {
      this.tasks = [];
      this.progress = [];
      this.done = [];
    }
  
    getTasks() {
      return this.tasks;
    }
  
    getProgress() {
      return this.progress;
    }
  
    getDone() {
      return this.done;
    }
  
    add(task, parent) {
      switch (parent) {
        case 'todo':
          this.tasks.push(task);
          break;
        case 'progress':
          this.progress.push(task);
          break;
        case 'done':
          this.done.push(task);
          break;
        default:
          break;
      }
    }
  
    delete(id, parent) {
      switch (parent) {
        case 'todo':
          this.tasks = this.tasks.filter((elem) => elem.id !== id);
          break;
        case 'progress':
          this.progress = this.progress.filter((elem) => elem.id !== id);
          break;
        case 'done':
          this.done = this.done.filter((elem) => elem.id !== id);
          break;
        default:
          break;
      }
    }
  }