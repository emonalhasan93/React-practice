import React from 'react';

const Todo = (props) => {
    const{albumId,title,thumbnailUrl}=props.todo;
    return (
        <div>
            <h2>User Id :{albumId}</h2>
            <h1>Title:{title}</h1>
          <img src={thumbnailUrl} alt="" />
        </div>
    );
};

export default Todo;