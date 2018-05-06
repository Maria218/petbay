import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import Dogs from '/imports/ui/Dogs.jsx';
import Cats from '/imports/ui/Cats.jsx';
import Birds from '/imports/ui/Birds.jsx';

route('/', Home);
route('/dogs', Dogs);
route('/cats', Cats);
route('/birds', Birds);
