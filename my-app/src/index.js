
import { bugAdded} from './sctions';

store.dispatch(bugAdded("Bug 1"));

console.log(store.getState());
