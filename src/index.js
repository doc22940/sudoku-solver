import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SudokuBoard, Buttons } from './containers';
import SudokuReducer from './reducers';

const store = createStore(SudokuReducer);

const SudokuApp = () => (
  <div className="sudoku-app">
    <SudokuBoard />
    <Buttons />
  </div>
);

render(
  <Provider store={store}>
    <SudokuApp />
  </Provider>,
  document.getElementById('root')
);

// tests
//
// const sudokuBoard = [
//   [2,0,0,7,0,0,0,0,0],
//   [0,4,0,6,0,0,0,5,9],
//   [0,0,5,0,4,9,8,0,0],
//   [0,0,0,0,0,0,0,9,0],
//   [7,0,2,0,0,0,5,0,1],
//   [0,9,0,0,0,0,0,0,0],
//   [0,0,3,4,1,0,9,0,0],
//   [6,2,0,0,0,5,0,3,0],
//   [0,0,0,0,0,3,0,0,6]
// ];
//
// const sudokuBoard1 = [
//   [0,0,0,8,7,1,6,3,2],
//   [0,0,0,4,9,6,7,5,8],
//   [8,7,6,5,2,3,4,9,1],
//   [3,1,2,6,8,9,5,4,7],
//   [5,6,8,2,4,7,3,1,9],
//   [7,4,9,1,3,5,8,2,6],
//   [6,3,4,7,1,2,9,8,5],
//   [2,8,7,9,5,4,1,6,3],
//   [9,5,1,3,6,8,2,7,4]
// ];
//
// const sudokuBoard2 = [
//   [5,1,7,6,0,0,0,3,4],
//   [2,8,9,0,0,4,0,0,0],
//   [3,4,6,2,0,5,0,9,0],
//   [6,0,2,0,0,0,0,1,0],
//   [0,3,8,0,0,6,0,4,7],
//   [0,0,0,0,0,0,0,0,0],
//   [0,9,0,0,0,0,0,7,8],
//   [7,0,3,4,0,0,5,6,0],
//   [0,0,0,0,0,0,0,0,0],
// ];
