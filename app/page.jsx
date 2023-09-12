'use client'
import  Navbar  from './components/navbar';
import  Home  from './components/home';
import Myskills from './components/myskills';
import Aboutme from './components/aboutme';
import Projects from './components/projects';
import Certificates from './components/certificates';


 function Page() {
  return (
    <>
    <Navbar />
    <Home />
    <Myskills />
    <Aboutme />
    <Projects />
    <Certificates />
    </>
  )
}
export default Page