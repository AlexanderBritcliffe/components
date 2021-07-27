import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
    <div>
      <h4>Warning</h4>
    </div>
      Are you sure you want to do this?
    </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
       author ="Sam"
       timeAgo="Today at 4:45PM"
       content="Nice blog post"
       avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
      <CommentDetail
       author ="John"
       timeAgo="Today at 6:45PM"
       content="I like this writing."
       avatar={faker.image.avatar()}
         />
         </ApprovalCard>

         <ApprovalCard>
      <CommentDetail
       author ="Alex"
       timeAgo="yesterday at 12:45PM"
       content="Fantastic content!"
       avatar={faker.image.avatar()}
        />
         </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
