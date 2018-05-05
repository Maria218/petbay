import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import Categories from '/imports/ui/Categories.jsx'

route('/', Home);
route('/categories',Categories);
