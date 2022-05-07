import './App.css';
import Main from './main';
import SideA from './sidebar-a';
import SideB from './sidebar-b';

function App() {
  return (
    <div className="grid-container">
      <SideA ></SideA>      
      <Main></Main>
      <SideB></SideB>
    </div>
  );
}

export default App;
