import Notes from "./components/Notes"
import Footer from "./section/Footer";
import Header from "./section/Header";
function App() {
  return (
    <div className="App" style={{display:"flex",flexDirection:"column",flexWrap:"",minHeight:"100%" ,position:"relative",}}>
      <header style={{
      
        }}>
      <Header />
      </header>
      <section style={{
       
        }}>
      <Notes />
      </section>
     <footer style={{
    
       position:"fixed",bottom:"0",left:"0",right:"0"
       }}>
       <Footer/>
     </footer>
    </div>
  );
}

export default App;
