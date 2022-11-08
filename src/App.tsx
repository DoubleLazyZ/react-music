import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom'
import { shallowEqual } from 'react-redux';
import routes from './router';
import { useAppSelector, useAppDispatch } from './store'
import { changeMessageAction } from './store/modules/counter';

import AppHeader from "@/components/app-header";
import PlayerBar from "@/views/player/player-bar";

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
      <PlayerBar/>
    </div>
  );
}

export default App;
