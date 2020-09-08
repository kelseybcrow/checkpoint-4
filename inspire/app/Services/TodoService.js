import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";

let url = 'KelseyCrow/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    //TODO Handle this response from the server
    ProxyState.todos = res.data.data.map(t => new todo(t))

  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    ProxyState.todos = [...ProxyState.todos, new todo(res.data.data)]


  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let res = await api.delete(todoId)

  }
}

const todoService = new TodoService();
export default todoService;