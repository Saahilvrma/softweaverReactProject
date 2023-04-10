import { Routes, Route } from 'react-router-dom';
import Artwork from './pages/Artwork';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import AddArtwork from './pages/AddArtwork';
import ArtworkGrid from './pages/ArtworkGrid';
import ArtworkListing from './pages/ArtworkListing';
import NewContact from './pages/NewContact';
import Contacts from './pages/Contacts';
import Settings from './pages/Settings';
import Email from './pages/Email';
import SendEmail from './pages/SendEmail';
import EditEvent from './pages/EditEvent';
import Calendar from './pages/Calendar';


function App() {
  return (
    <Routes>
      <Route exact path='/sidebar' element={<Sidebar />} />
      <Route exact path="/artwork" element={<Artwork />} />
      <Route exact path="/artwork/grid" element={<ArtworkGrid/>} />
      <Route exact path="/artwork/listing" element={<ArtworkListing/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/artwork/create" element={<AddArtwork/>} />
      <Route exact path="/contact/create" element={<NewContact/>} />
      <Route exact path="/contact" element={<Contacts/>} />
      <Route exact path="/settings" element={<Settings/>} />
      <Route exact path="/emails" element={<Email/>} />
      <Route exact path="/email/send" element={<SendEmail/>} />
      <Route exact path="/event/edit" element={<EditEvent/>} />
      <Route exact path="/calendar" element={<Calendar/>} />
    </Routes>
  );
}

export default App;
