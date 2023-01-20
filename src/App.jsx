import './App.css'
import Paginas from './routes/Paginas';
import Topbar from './components/Topbar';
import { Container } from './styles/styles';
import { RecoilRoot } from 'recoil';
import { RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

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
