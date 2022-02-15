import './style.css';
import { addTask, createList } from './addtask.js';
import clearAll from './clearCompleted.js';

let tasks = [];

const getLocalData = () => {
  if (localStorage.getItem('localData')) {
    tasks = JSON.parse(localStorage.localData);
  }
};

getLocalData();
createList(tasks);
addTask(tasks);
clearAll(tasks);