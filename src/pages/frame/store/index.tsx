import React, { useEffect } from 'react';
import Store from './store';

const Index = () => {
  const store = new Store();
  console.log(store)

  useEffect(() => {
    store.set('userName', '张三');
    const userName = store.get('userName');
    console.log(userName);        // {"key":"userName","data":"张三"}

    store.set('userList', [1, 2, 3, 4]);
    const userList = store.get('userList');
    console.log(userList);        // {"key":"userList","data":[1,2,3,4]}
  })

  return (
    <div>
      <h3>Store</h3>
      <hr /><br /><br />
    </div>
  )
}

export default Index;