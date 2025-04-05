import React, { useEffect, useState } from "react";
import "./Algorithms.css";

interface GraphNode {
  id: number;
  x: number;
  y: number;
  neighbors: number[];
}

const generateGraph = (): GraphNode[] => {
  return [
    { id: 0, x: 300, y: 50, neighbors: [1, 2] },
    { id: 1, x: 200, y: 150, neighbors: [3, 4] },
    { id: 2, x: 400, y: 150, neighbors: [5] },
    { id: 3, x: 150, y: 250, neighbors: [] },
    { id: 4, x: 250, y: 250, neighbors: [] },
    { id: 5, x: 450, y: 250, neighbors: [] },
  ];
};

const DfsVisualizer: React.FC = () => {
  const [graph, setGraph] = useState<GraphNode[]>([]);
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const [dfsOrder, setDfsOrder] = useState<number[]>([]);

  useEffect(() => {
    setGraph(generateGraph());
  }, []);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const dfs = async (startId: number) => {
    const visitedSet = new Set<number>();
    const order: number[] = [];

    const visit = async (nodeId: number) => {
      if (visitedSet.has(nodeId)) return;
      visitedSet.add(nodeId);
      order.push(nodeId);
      setVisited(new Set(visitedSet));
      await delay(600);

      const node = graph.find((n) => n.id === nodeId);
      if (node) {
        for (const neighbor of node.neighbors) {
          await visit(neighbor);
        }
      }
    };

    await visit(startId);
    setDfsOrder(order);
  };

  return (
    <div className="dfs-visualizer">
      <h2>DFS Graph Traversal</h2>
      <button onClick={() => dfs(0)}>Start DFS from Node 0</button>
      <svg width="600" height="400">
        {graph.map((node) => (
          node.neighbors.map((nId) => {
            const target = graph.find((n) => n.id === nId);
            return (
              <line
                key={`edge-${node.id}-${nId}`}
                x1={node.x}
                y1={node.y}
                x2={target?.x}
                y2={target?.y}
                stroke="#999"
              />
            );
          })
        ))}
        {graph.map((node) => (
          <g key={`node-${node.id}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={25}
              fill={visited.has(node.id) ? "#ff9800" : "#6f42c1"}
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="white"
              fontSize={14}
            >
              {node.id}
            </text>
          </g>
        ))}
      </svg>
      <div className="output">
        <strong>DFS Order:</strong> {dfsOrder.join(" → ")}
      </div>
    </div>
  );
};

export default DfsVisualizer;