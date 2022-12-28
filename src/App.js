import DragAndDropBoard from './dragAndDrop/DragAndDropBoard';

function App() {
  
  const data = [
    {title: 'Group 1', items: ['1', '2', '3']},
    {title: 'Group 2', items: ['4', '5']}
  ]

  return (
    <DragAndDropBoard data={data}/>
  );
}

export default App;
