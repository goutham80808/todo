import React from 'react'

function Tabs(props) {
    const tabs = ['All', 'Open', 'Closed'];
    const {todos, selectedTab, setSelectedTab} = props;

  return (
    <nav className='tab-container'>
        {tabs.map((tab, index) =>{
            const numTasks = tab === 'All' ?
            todos.length :
            tab === 'Open' ?
                todos.filter(val => !val.complete).length :
                todos.filter(val => val.complete).length;
            return(
                <button className = {'tab-button ' 
                + (tab === selectedTab ? 'tab-selected' : ' ')} 
                key={index}
                onClick={() => setSelectedTab(tab)}>
                    <h4>{tab} <span>{numTasks}</span> </h4>
                </button>
            )
        })}
        <hr />
    </nav>
  )
}

export default Tabs