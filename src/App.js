import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Education } from './components/education/Education';
import { Footer } from './components/footer/Footer';
import { Hobbies } from './components/hobbies/Hobbies';
import { Home } from './components/home/Home';
import { Menu } from './components/navbar/Menu';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import ScrollSpy from "react-ui-scrollspy";

export const App = () => {
  return (
    <>
      <Menu />
      <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetTop={-100}>
        <Home />
        <About />
        <Skills />
        <Hobbies />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </ScrollSpy>
    </>
  )
}
