import PsicologosAdrogue from "./components/PsicologosAdrogue";
import PsicologosProvider from "./context/PsicologosContext";


const App = () => {
  return (
  <>
    <PsicologosProvider>
       <PsicologosAdrogue />
    </PsicologosProvider>
  </>
  );
}

export default App;
