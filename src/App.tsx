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
      <Suspense fallback="">
        {useRoutes(routes)}
      </Suspense>
      {/*<AppFooter />*/}
    </div>
  );
}

export default App;
