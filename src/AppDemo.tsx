import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom'
import { shallowEqual } from 'react-redux';
import routes from './router';
import { useAppSelector, useAppDispatch } from './store'
import { changeMessageAction } from './store/modules/counter';
import ClassDemo from "@/views/demo/ClassDemo";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
// import { IRootState } from './store';


function App() {

  const { count, message } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message
  }), shallowEqual)

  const dispatch = useAppDispatch();
  function handleChangeMessage() {
    dispatch(changeMessageAction("testData"))
  }

  return (
    <div className="App">
      < AppHeader />
      <AppFooter />

      <Suspense fallback="">
        {useRoutes(routes)}
      </Suspense>

      <button onClick={handleChangeMessage}>修改message</button>
      <h2>當前計數: { count } {message}</h2>
      <ClassDemo name="wyatt"/>

    </div>
  );
}

export default App;
