// BaseNode.js
import { Handle, Position } from '@xyflow/react';

export const BaseNode = ({ id, data, label, handles = [], children, style = {} }) => {
  return (
    <div style={{ 
      width: 200, 
      height: 'auto', 
      minHeight: 80,
      border: '1px solid black', 
      background: 'white',
      borderRadius: '8px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      ...style 
    }}>
      {/* Handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}

      {/* Header / Label */}
      {label && (
        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
          {label}
        </div>
      )}

      {/* Content Slot */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {children}
      </div>
    </div>
  );
};
