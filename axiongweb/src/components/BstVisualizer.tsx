import React, { useEffect, useState } from "react";
import "./Algorithms.css";

interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  x?: number;
  y?: number;
  visited?: boolean;
}

const generateRandomArray = (length: number, max: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
};

const insertToBST = (root: TreeNode | null, value: number): TreeNode => {
  if (!root) return { value, left: null, right: null };
  if (value < root.value) root.left = insertToBST(root.left, value);
  else root.right = insertToBST(root.right, value);
  return root;
};

const layoutTree = (node: TreeNode | null, x = 400, y = 40, gap = 60): void => {
  if (!node) return;
  node.x = x;
  node.y = y;
  layoutTree(node.left, x - gap, y + 80, gap * 0.8);
  layoutTree(node.right, x + gap, y + 80, gap * 0.8);
};

const BstVisualizer: React.FC = () => {
  const [bstRoot, setBstRoot] = useState<TreeNode | null>(null);
  const [traversalOutput, setTraversalOutput] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    generateRandomTree();
  }, []);

  const generateRandomTree = () => {
    const values = generateRandomArray(10, 100);
    let root: TreeNode | null = null;
    for (const val of values) {
      root = insertToBST(root, val);
    }
    layoutTree(root);
    setBstRoot(root);
    setTraversalOutput([]);
    setHighlighted(null);
  };

  const traverse = async (type: "in" | "pre" | "post") => {
    const result: number[] = [];
    const visit = async (node: TreeNode | null) => {
      if (!node) return;
      if (type === "pre") {
        result.push(node.value);
        setHighlighted(node.value);
        await delay(500);
      }
      await visit(node.left);
      if (type === "in") {
        result.push(node.value);
        setHighlighted(node.value);
        await delay(500);
      }
      await visit(node.right);
      if (type === "post") {
        result.push(node.value);
        setHighlighted(node.value);
        await delay(500);
      }
    };

    await visit(bstRoot);
    setHighlighted(null);
    setTraversalOutput(result);
  };

  const renderTree = (node: TreeNode | null): JSX.Element[] => {
    if (!node) return [];
    const lines: JSX.Element[] = [];

    if (node.left && node.x !== undefined && node.y !== undefined) {
      lines.push(
        <line
          key={`line-${node.value}-${node.left.value}`}
          x1={node.x}
          y1={node.y}
          x2={node.left.x}
          y2={node.left.y}
          stroke="black"
        />
      );
    }
    if (node.right && node.x !== undefined && node.y !== undefined) {
      lines.push(
        <line
          key={`line-${node.value}-${node.right.value}`}
          x1={node.x}
          y1={node.y}
          x2={node.right.x}
          y2={node.right.y}
          stroke="black"
        />
      );
    }

    const children = [
      ...renderTree(node.left),
      ...renderTree(node.right),
      <g key={`node-${node.value}`}>
        <circle
          cx={node.x}
          cy={node.y}
          r={20}
          fill={highlighted === node.value ? "orange" : "#6f42c1"}
        />
        <text x={node.x} y={node.y! + 5} textAnchor="middle" fill="white">
          {node.value}
        </text>
      </g>
    ];
    return [...lines, ...children];
  };

  return (
    <div className="bst-visualizer">
      <div className="controls">
        <button onClick={generateRandomTree}>Regenerate Tree</button>
        <button onClick={() => traverse("in")}>In-Order</button>
        <button onClick={() => traverse("pre")}>Pre-Order</button>
        <button onClick={() => traverse("post")}>Post-Order</button>
      </div>
      <svg width="100%" height="500">
        {renderTree(bstRoot)}
      </svg>
      <div className="output">
        <strong>Traversal Output:</strong> {traversalOutput.join(" → ")}
      </div>
    </div>
  );
};

export default BstVisualizer;