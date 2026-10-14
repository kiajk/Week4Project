import { useReducer } from "react";
import { mockIssues } from "../data/mockIssues";
import { issuesReducer } from "../reducers/issuesReducer";
import {
  ADD_ISSUE,
  DELETE_ISSUE,
  CHANGE_STATUS,
} from "../reducers/issuesActions";

export function useIssues() {
  const [issues, dispatch] = useReducer(issuesReducer, mockIssues);

  const addIssue = (issue) => dispatch({ type: ADD_ISSUE, payload: issue });

  const deleteIssue = (id) =>
    dispatch({ type: DELETE_ISSUE, payload: { id } });

  const changeStatus = (id, status) =>
    dispatch({ type: CHANGE_STATUS, payload: { id, status } });

  const updateIssue = (updatedIssue) =>
     dispatch({
    type: UPDATE_ISSUE,
    payload: updatedIssue,
  });

  return { issues, addIssue, deleteIssue, changeStatus, updateIssue };
}