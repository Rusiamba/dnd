export default class Controller {
    constructor(view, model) {
      this.view = view;
      this.model = model;
      this.id = 0;
      this.addCard = this.addCard.bind(this);
      this.delete = this.delete.bind(this);
    }
  
    start() {
      const todo = this.model.getTasks();
      const progress = this.model.getProgress();
      const done = this.model.getDone();
      this.view.getMark(todo, progress, done);
      this.view.deleteTask = this.delete;
      this.view.addCard = this.addCard;
      this.view.addListenerShowAndDel();
      this.view.addListenerDnd();
    }
  
    delete(id, parent) {
      this.model.delete(id, parent);
      this.view.clear();
      this.start();
    }
  
    addCard(event, value, parent) {
      this.model.add({ text: value, id: this.id }, parent.classList[0]);
      this.id += 1;
      this.view.clear();
      this.start();
    }
}