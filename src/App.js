import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import Button from '@atlaskit/button';
import Textfeild from '@atlaskit/textfield';
import {useCallback, useState} from 'react'; 
import {v4} from 'uuid';

import NameForm from './components/Test'


function App() {

  const [TodoList, setTodoList]= useState([]);
  const [textInput, setTextInput]= useState("");

  const onTextInputChange = (e) =>{
    setTextInput(e.target.value);
  };

  const onAddBtnClick =(e) =>{
    //Them text input vao danh sach todolist
    setTodoList([...TodoList, {id: v4 , name: textInput, isCompleted: false}]);
  }
  return (
    <>
        {/* <h3>Danh sách cần làm </h3>
        <Textfeild 
          name ="add-todo"
          placeholder='Thêm việc cần làm....'

          elemAfterInput ={
            <Button isDisable ={true}  
            appearance='primary' 
            onclick= {onAddBtnClick}>
            Thêm 
            </Button>
          }
          css={{padding: "2px 4px 2px"}}
          value = {textInput}
          onChange
        >          
        </Textfeild>
        <TodoList /> */}

        <NameForm/>
    </>
  );
}

export default App;
