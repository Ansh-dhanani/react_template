import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
function App() {
  /*
"font-apple-garamond"
"font-merapro"
"font-boone"
"font-default-lingo"    
"font-minecraft"
"font-montblanc"
"font-palmore"
"font-tan-kulture"
*/

// for colour variables use the following format:
/**
bg-[var(--color-bg)]
text-[var(--color-text)]
border-[var(--color-border)]
hover:bg-[var(--color-secondary)]
bg-[var(--color-primary)]
*/


// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  return (
    <>
    <h1>Template</h1>
    </>
  );
}

export default App;
