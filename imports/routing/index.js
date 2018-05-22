import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import Dogs from '/imports/ui/Dogs.jsx';
import Cats from '/imports/ui/Cats.jsx';
import Birds from '/imports/ui/Birds.jsx';
import PetCare from '/imports/ui/PetCare.jsx';
import Volunteer from '/imports/ui/Volunteer.jsx';
import Report from '/imports/ui/Report.jsx';
import Vets from '/imports/ui/Vets.jsx';
import Homing from '/imports/ui/Homing.jsx';
import {ContactUs} from '/imports/ui/ContactUs.jsx';
import AboutUs from '/imports/ui/AboutUs.jsx';
import LogIn from '/imports/ui/LogIn.jsx';
import Dashboard from '/imports/ui/Dashboard.jsx';
import Dashboard2 from '/imports/ui/Dashboard2.jsx';
import Uploads from '/imports/ui/Upload.jsx';
import Uploads2 from '/imports/ui/Upload2.jsx';

route('/', Home);
route('/dogs', Dogs);
route('/cats', Cats);
route('/birds', Birds);
route('/petcare', PetCare);
route('/volunteer', Volunteer);
route('/report', Report);
route('/vets', Vets);
route('/homing', Homing);
route('/contactus', ContactUs);
route('/aboutus', AboutUs)
route('/login', LogIn);
route('/dashboard', Dashboard);
route('/dashboard2', Dashboard2);

route('/upload', Uploads);
route('/upload2', Uploads2);
