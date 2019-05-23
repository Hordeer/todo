import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from '../components/todo-list';
import {editTodo} from '../actions';
import { getFilteredTodos } from '../selectors/todos';
import { getSortedCategories } from '../selectors/categories';

function mapStateToProps(state) {
  return {
    todos: getFilteredTodos(state),
    categories: getSortedCategories(state),
    currentCategoryId: state.currentCategoryId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onEditTodo: editTodo,
  }, dispatch);
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;