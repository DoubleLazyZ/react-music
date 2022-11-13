import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import { shallowEqual } from 'react-redux';
import routes from './router';
import { useAppSelector, useAppDispatch } from './store'
import { changeMessageAction } from './store/modules/counter';

import AppHeader from "@/components/app-header";
import PlayerBar from "@/views/player/player-bar";
import { fetchCurrentSongAction } from './views/player/store/player';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrentSongAction(1994863874))
  }, [])

  const { count, message } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message
  }), shallowEqual)

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
