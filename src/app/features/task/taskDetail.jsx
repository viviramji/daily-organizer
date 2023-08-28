import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TaskDetail = ({ id, task, isCompleted, comments, groups }) => (
  <div>
    <div>
      <input value={task.name} />
    </div>
    <div>
      <button>Complete / Reopen Task </button>
    </div>

    <div>
      <select>
        {
          groups.map(group => (
            <option key={group.id} value={group.id}>{group.name}</option>
          ))
        }
      </select>
    </div>

    <div>
      <Link to="/dashboard">
        <button>Done</button>
      </Link>
    </div>

  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;
  // let comments = state.comments.filter(comment => comment.task === id);
  return {
    id,
    task,
    isCompleted: task.isCompleted,
    groups,
  };
};

export const ConnectedTaskDetail = connect(mapStateToProps)(TaskDetail);
