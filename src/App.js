import './App.css';
import DragAndDropBoard from './dragAndDrop/DragAndDropBoard';
import Card from './dragAndDrop/Card';

function App() {
  return (
    <div className="flexbox">
      <DragAndDropBoard id='board-1' className='board'>
        <Card id='card-1' className='card' draggable='true'>
          <p>ONE</p>
        </Card>
        <Card id='card-3' className='card' draggable='true'>
          <h1>THREE</h1>
        </Card>
      </DragAndDropBoard>

      <DragAndDropBoard id='board-2' className='board'>
        <Card id='card-2' className='card' draggable='true'>
          <p>TWO</p>
        </Card>
        <Card id='card-4' className='card' draggable='true'>
          <div style={{color: 'red', fontSize: 'large'}}>
            <span>
              FOUR
            </span>
          </div>
        </Card>
      </DragAndDropBoard>
    </div>
  );
}

export default App;
