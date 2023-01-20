import './App.css'
import Paginas from './routes/Paginas';
import Topbar from './components/Topbar';
import { Container } from './styles/styles';


function App() {

  return (
    <div className="App">
        <Topbar/>
        <Container className='container'>
            <Paginas/>
        </Container>
    </div>
  )
}

export default App
