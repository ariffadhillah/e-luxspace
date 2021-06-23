import {useState, useCallback} from 'react'

const defaultState = {
  data: null, status: "idle", error: null
}

export default function useAsync_step_one(initialState) {
  const [ {data, status, error}, setState] = useState({...defaultState, ...initialState})

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) throw new Error(`The argument passed UseAsync().run must be a promise`) 
      setState({status: " pending"});
      return promise.then ((data) =>{
        setState({data, status: "resolved"});

        return data;
      },
      (error) => {
        setState({ status: "rejected", error: JSON.parse(error.message )});
        }
      );
    },
    [setState]
  );
  return {data, status, error, run};
}
