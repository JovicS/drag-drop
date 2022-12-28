import React, { useRef, useState } from 'react';
import '../index.css';

function DragAndDropBoard({data}) {

  const [list, setList] = useState(data);
  const dragItem = useRef();
  const dragCard = useRef();

   const dragStart = (e, params) => {
    // Dragged item
    dragItem.current = params;
    dragCard.current = e.target;
    dragCard.current.addEventListener('dragend', dragEnd);
   }

   const dragEnd = () => {
    dragCard.current.removeEventListener('dragend', dragEnd);
    dragItem.current = null;
    dragCard.current = null;
   }

   const dragEnter = (e, params) => {
    // Place to drag item
      const currentItem = dragItem.current;
      if(currentItem && e.target !== dragCard.current){
        setList(oldList => {
          let newList = JSON.parse(JSON.stringify(oldList));
          newList[params.groupIndex].items.splice(params.itemIndex, 0, newList[currentItem.groupIndex].items.splice(currentItem.itemIndex,1)[0]);
          dragItem.current = params;
          return newList
        })
    }
   }
   
  return (
    <div className='flexbox'>
      {list?.map((group, groupIndex)=>
        <div key={group.title} className='board' onDragEnter={!group.items?.length? (e) => {dragEnter(e,{groupIndex,itemIndex: 0})} : null}>
          <div className='title'>{group.title}</div>
          {group.items?.map((item, itemIndex)=>(
            <div key={item} className={+item<3? 'non-draggable-card' : 'card'} draggable={+item>=3}
                onDragStart={+item>=3? (e)=>dragStart(e, {groupIndex, itemIndex}) : null} 
                onDragEnter={(e)=>dragEnter(e,{groupIndex, itemIndex})}>
              {item}
            </div>)
          )}
        </div>
      )}
    </div>
  );
}

export default DragAndDropBoard