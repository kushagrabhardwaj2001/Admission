import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AdminPanel from "./components/admin/AdminPanel";
import Adminuniversity from "./components/admin/Adminuniversity";
import UPUniversities from "./components/stateuniversity/UPUniversities";
import Karnataka from "./components/stateuniversity/karnataka";
import Meghalaya from "./components/stateuniversity/Meghalaya";
import Punjab from "./components/stateuniversity/Punjab";
import Pondicherry from "./components/stateuniversity/Pondicherry";
import Gujarat from "./components/stateuniversity/Gujarat";
import Rajasthan from "./components/stateuniversity/Rajasthan";
import Assam from "./components/stateuniversity/Assam";
import Kerala from "./components/stateuniversity/Kerala";
import Sikkim from "./components/stateuniversity/Sikkim";
import Goa from "./components/stateuniversity/Goa";
import Chandigarh from "./components/stateuniversity/Chandigarh";
import Delhi from "./components/stateuniversity/Delhi";
import Maharashtra from "./components/stateuniversity/Maharashtra";
import Jammukashmir from "./components/stateuniversity/Jammukashmir";
import Bihar from "./components/stateuniversity/Bihar";
import Himachalpradesh from "./components/stateuniversity/Himachalpradesh";
import Arunachalpradesh from "./components/stateuniversity/Arunachalpradesh";
import Andhrapradesh from "./components/stateuniversity/Andhrapradesh";
import Madhyapradesh from "./components/stateuniversity/Madhyapradesh";
import Tamilnadu from "./components/stateuniversity/Tamilnadu";
import Uttarpradesh from "./components/stateuniversity/UPUniversities";
import Orissa from "./components/stateuniversity/Orissa";
import Mizoram from "./components/stateuniversity/Mizoram";
import Chhattisgarh from "./components/stateuniversity/Chhatisgarh";
import Telangana from "./components/stateuniversity/Telangana";
import CollegePage from "./components/Collegepage/CollegePage";
import Bangladesh from "./components/Abroad/Bangladesh";
import Philippines from "./components/Abroad/Philippines";
import Georgia from "./components/Abroad/Georgia";
import Kyrgystan from "./components/Abroad/Kyrgystan";
import Russia from "./components/Abroad/Russia";
import Footer from "./components/Footer/Footer";
import MBBS from "./components/Courseuniversity/MBBS";
import MD from "./components/Courseuniversity/MD";
// import MS from "./components/Courseuniversity/MS";
import MCH from "./components/Courseuniversity/MCH";
import DM from "./components/Courseuniversity/DM";
import DIP from "./components/Courseuniversity/DIP";
import Uttarakhand from "./components/stateuniversity/Uttarakhand";
import Contact from "./components/Contact";
import Register from "./components/Auth/Register";
import Adminblog from "./components/admin/Adminblog";
import AddBlog from "./components/Blog/Blog";
import SingleBlogPage from "./components/Blog/SingleBlogPage";
import Blog from "./components/Blog/Blog";
import Login from "./components/Auth/Login";
import UniversitiesListiningPage from "./pages/UniversitiesListiningPage";
import { Heading } from "@chakra-ui/react";
import TopRecommendedCollSingle from "./components/Collegepage/TopRecommendedCollSingle";
import Gallery from "./components/Gallery";
import AdminDashboard from "./components/admin/AdminDashboard";
import InternationalPage from "./pages/InternationalPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/adminuniversity" element={<Adminuniversity />} />
          <Route path="/state/UttarPradesh" element={<Uttarpradesh />} />
          <Route path="/state/Bihar" element={<Bihar />} />
          <Route path="/state/Karnataka" element={<Karnataka />} />
          <Route
            path="/state/universities/:state"
            element={<UniversitiesListiningPage />}
          />
          <Route
            path="/international/universities/:state"
            element={<InternationalPage/>}
          />
          <Route path="/state/Jammukashmir" element={<Jammukashmir />} />
          <Route path="/state/Mizoram" element={<Mizoram />} />
          <Route path="/state/Meghalaya" element={<Meghalaya />} />
          <Route path="/state/Pondicherry" element={<Pondicherry />} />
          <Route path="/state/Gujarat" element={<Gujarat />} />
          <Route path="/state/Rajasthan" element={<Rajasthan />} />
          <Route path="/state/Assam" element={<Assam />} />
          <Route path="/state/Orissa" element={<Orissa />} />
          <Route path="/state/Sikkim" element={<Sikkim />} />
          <Route path="/state/Uttarakhand" element={<Uttarakhand />} />
          <Route path="/state/Telanagna" element={<Telangana />} />
          <Route path="/state/Punjab" element={<Punjab />} />
          <Route path="/state/Goa" element={<Goa />} />
          <Route path="/state/Chandigarh" element={<Chandigarh />} />
          <Route path="/state/Delhi" element={<Delhi />} />
          <Route path="/state/Kerala" element={<Kerala />} />
          <Route path="/state/Maharashtra" element={<Maharashtra />} />
          <Route path="/state/Himachalpradesh" element={<Himachalpradesh />} />
          <Route
            path="/state/Arunachalpradesh"
            element={<Arunachalpradesh />}
          />
          <Route path="/state/Andhrapradesh" element={<Andhrapradesh />} />
          <Route path="/state/Tamilnadu" element={<Tamilnadu />} />
          <Route path="/state/Madhyapradesh" element={<Madhyapradesh />} />
          <Route path="/state/Chhattisgarh" element={<Chhattisgarh />} />
          <Route path="/state/Bangladesh" element={<Bangladesh />} />
          <Route path="/state/Philippines" element={<Philippines />} />
          <Route path="/state/Russia" element={<Russia />} />
          <Route path="/state/Kyrgystan" element={<Kyrgystan />} />
          <Route path="/state/Georgia" element={<Georgia />} />

          <Route path="/universities/state/:id" element={<CollegePage />} />
          <Route path="/courses/MBBS" element={<MBBS />} />
          {/* <Route path="/courses/MS" element={<MS />} /> */}
          <Route path="/courses/MD" element={<MD />} />
          <Route path="/courses/MCH" element={<MCH />} />
          <Route path="/courses/DM" element={<DM />} />
          <Route path="/courses/DIP" element={<DIP />} />

          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route
            path="/blogs/singleblogpage/:id"
            element={<SingleBlogPage />}
          />
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path='/admin/blog' element={<Contact/>}></Route> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login/user" element={<Login />} />

          <Route path="/add-blogs" element={<Adminblog />} />
          <Route
            path="/recommended-college-details/:id"
            element={<TopRecommendedCollSingle />}
          />
          <Route
            path="/admin-dashboard"
            element={<AdminDashboard />}
          />
          <Route path="*" element={<Heading>Page Not Found !!</Heading>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
