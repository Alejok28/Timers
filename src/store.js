import { createStore } from 'redux';

const initialState = {
	timers: [
		{id:1, title:'Practice squat', project:'Gym Chores', count:1, setVar: 0}, {id:2,title:'Bake squash', project:'Kitchen Chores', count:1, setVar: 0}
	]
};
const reducer = (state = initialState, action) => {
	if (action.type === 'ADD_TIMER') {
		
	}else if (action.type === 'TICK_TIMERS') {

	}
	return state
}

export default createStore(reducer);
