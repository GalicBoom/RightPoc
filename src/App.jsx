import './App.css'
import Paginas from './routes/Paginas';
import Topbar from './components/Topbar';
import { Container } from './styles/styles';
import { RecoilRoot } from 'recoil';


function App() {

  return (
    <RecoilRoot>
    <div className="App">
        <Topbar/>
        <Container className='container'>
            <Paginas/>
        </Container>
    </div>
    </RecoilRoot>)
}

export default App
