import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import Dogs from '/imports/ui/Dogs.jsx';
import Cats from '/imports/ui/Cats.jsx';
import Birds from '/imports/ui/Birds.jsx';
import PetCare from '/imports/ui/PetCare.jsx';
import Advertise from '/imports/ui/Advertise.jsx';
import Volunteer from '/imports/ui/Volunteer.jsx';
import Report from '/imports/ui/Report.jsx';
import Vets from '/imports/ui/Vets.jsx';
import Homing from '/imports/ui/Homing.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import LogIn from '/imports/ui/LogIn.jsx';
import Dashboard from '/imports/ui/Dashboard.jsx';
import Uploads from '/imports/ui/Upload.jsx';

route('/', Home);
route('/dogs', Dogs);
route('/cats', Cats);
route('/birds', Birds);
route('/petcare', PetCare);
route('/advertise', Advertise);
route('/volunteer', Volunteer);
route('/report', Report);
route('/vets', Vets);
route('/homing', Homing);
route('/contactus', ContactUs);
route('/login', LogIn);
route('/dashboard', Dashboard);

// route('/dashboard', Dashboard, {},
//  { triggersEnter : [
//     () => {
//       if (!Meteor.user()) {
//         return route('/'); // this would be cleaner if it can work, am not sure
//       }
//     },
//   ]},);

// route('/dashboard', Dashboard, {},
//   { triggersEnter: [
//     () => {
//       if (!(Meteor.loggingIn() || Meteor.userId())) {
//         return route('/'); //not better way
//       }
//     },
//   ]},);

route('/upload', Uploads);
