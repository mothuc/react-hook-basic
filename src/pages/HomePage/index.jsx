import React, { useEffect, useState } from "react";
import queryString from "query-string";
import "./HomePage.scss";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";

function App() {
  const initTodoList = [
    {
      id: 1,
      title: "Work hard",
    },
    {
      id: 2,
      title: "Play hard",
    },
    {
      id: 3,
      title: "Head Up Man!",
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (formValues) => {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  //======================PostList and Pagination======================================//
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function fetchpostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }
    fetchpostList();
  }, [filters]);

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  function handleFiltersChange(newFilter) {
    console.log(newFilter);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }

  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <h1>React hooks - Postlist</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <BetterClock /> */}

      <MagicBox />
    </div>
  );
}

export default App;
