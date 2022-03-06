import { About } from './components/about/About';
import { Home } from './components/home/Home';
import { Menu } from './components/navbar/Menu';
import { Skills } from './components/skills/Skills';

export const App = () => {
  return (
    <>
    <Menu />
    <Home />
    <About />
    <Skills />
    </>
  )
}
