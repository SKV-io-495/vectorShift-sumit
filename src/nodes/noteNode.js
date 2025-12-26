// noteNode.js
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label="Note"
      handles={[]} // Notes typically don't have handles, or strictly visual
      style={{ background: '#fff9c4' }} // Light yellow for post-it look
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <textarea 
            placeholder="Type your note here..."
            style={{ 
                border: 'none', 
                background: 'transparent', 
                resize: 'none', 
                outline: 'none', 
                width: '100%', 
                height: '60px',
                fontFamily: 'inherit'
            }}
        />
      </div>
    </BaseNode>
  );
};
