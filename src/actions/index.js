import axios from "axios";

export const READ_EVENT = "READ_EVENT";
export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

const URL_ROOT = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${URL_ROOT}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(`${URL_ROOT}/events${QUERYSTRING}`, values);
  dispatch({ type: CREATE_EVENT, response });
};

export const putEvent = (values) => async (dispatch) => {
  const response = await axios.put(
    `${URL_ROOT}/events/${values.id}${QUERYSTRING}`,
    values
  );
  dispatch({ type: UPDATE_EVENT, response });
};

export const getEvent = (id) => async (dispatch) => {
  const response = await axios.get(`${URL_ROOT}/events/${id}${QUERYSTRING}`);
  dispatch({ type: READ_EVENT, response });
};

export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`${URL_ROOT}/events/${id}${QUERYSTRING}`);
  dispatch({ type: DELETE_EVENT, id });
};
