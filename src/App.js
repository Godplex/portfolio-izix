import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Education } from './components/education/Education';
import { Hobbies } from './components/hobbies/Hobbies';
import { Home } from './components/home/Home';
import { Menu } from './components/navbar/Menu';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';

export const App = () => {
  return (
    <>
      <Menu />
      <Home />
      <About />
      <Skills />
      <Hobbies />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}
