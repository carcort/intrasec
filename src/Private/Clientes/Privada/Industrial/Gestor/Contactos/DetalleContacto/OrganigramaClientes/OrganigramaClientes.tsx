import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const OrganigramaClientes = () => {

  const initialNodes = [
    { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Gerente General' } },
    { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Gerente Finanzas' } },
    { id: 'n3', position: { x: -300, y: 100 }, data: { label: 'Gerente Operaciones' } },
    { id: 'n4', position: { x: 300, y: 100 }, data: { label: 'Gerente RRHH' } },
    { id: 'n5', position: { x: 600, y: 100 }, data: { label: 'Gerente Planta' } },
  ];
  
  const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];
  const initialEdges2 = [{ id: 'n1-n3', source: 'n1', target: 'n3' }];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
  

  return (
    <div className="w-full h-full ">
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />

 

  
 
  
</div>)}

export default OrganigramaClientes