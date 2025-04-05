import React, { useEffect, useState } from "react";
import "./Algorithms.css";
import BstVisualizer from "./BSTVisualizer";
import DfsVisualizer from "./DfsVisualizer";

const Algorithms: React.FC = () => {
  const [bubbleArray, setBubbleArray] = useState<number[]>([]);
  const [quickArray, setQuickArray] = useState<number[]>([]);
  const [randomQuickArray, setRandomQuickArray] = useState<number[]>([]);
  const [heapArray, setHeapArray] = useState<number[]>([]);
  const [bucketArray, setBucketArray] = useState<number[]>([]);

  const [sorting, setSorting] = useState({
    bubble: false,
    quick: false,
    randomQuick: false,
    heap: false,
    bucket: false
  });

  useEffect(() => {
    generateNewArrays();
  }, []);

  const generateNewArrays = () => {
    const newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setBubbleArray([...newArr]);
    setQuickArray([...newArr]);
    setRandomQuickArray([...newArr]);
    setHeapArray([...newArr]);
    setBucketArray([...newArr]);
  };

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const bubbleSort = async () => {
    setSorting(prev => ({ ...prev, bubble: true }));
    const arr = [...bubbleArray];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setBubbleArray([...arr]);
          await delay(500);
        }
      }
    }
    setSorting(prev => ({ ...prev, bubble: false }));
  };

  const quickSort = async (arr: number[], start: number, end: number): Promise<void> => {
    if (start >= end) return;
    const index = await partition(arr, start, end);
    await quickSort(arr, start, index - 1);
    await quickSort(arr, index + 1, end);
  };

  const partition = async (arr: number[], start: number, end: number): Promise<number> => {
    const pivot = arr[end];
    let i = start;
    for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setQuickArray([...arr]);
        await delay(500);
        i++;
      }
    }
    [arr[i], arr[end]] = [arr[end], arr[i]];
    setQuickArray([...arr]);
    await delay(500);
    return i;
  };

  const startQuickSort = async () => {
    setSorting(prev => ({ ...prev, quick: true }));
    const arr = [...quickArray];
    await quickSort(arr, 0, arr.length - 1);
    setSorting(prev => ({ ...prev, quick: false }));
  };

  const randomizedQuickSort = async (arr: number[], start: number, end: number): Promise<void> => {
    if (start >= end) return;
    const index = await randomizedPartition(arr, start, end);
    await randomizedQuickSort(arr, start, index - 1);
    await randomizedQuickSort(arr, index + 1, end);
  };

  const randomizedPartition = async (arr: number[], start: number, end: number): Promise<number> => {
    const pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    setRandomQuickArray([...arr]);
    await delay(500);
    const pivot = arr[end];
    let i = start;
    for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setRandomQuickArray([...arr]);
        await delay(500);
        i++;
      }
    }
    [arr[i], arr[end]] = [arr[end], arr[i]];
    setRandomQuickArray([...arr]);
    await delay(500);
    return i;
  };

  const startRandomizedQuickSort = async () => {
    setSorting(prev => ({ ...prev, randomQuick: true }));
    const arr = [...randomQuickArray];
    await randomizedQuickSort(arr, 0, arr.length - 1);
    setSorting(prev => ({ ...prev, randomQuick: false }));
  };

  const heapSort = async () => {
    setSorting(prev => ({ ...prev, heap: true }));
    const arr = [...heapArray];
    const n = arr.length;
    const heapify = async (arr: number[], n: number, i: number) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        setHeapArray([...arr]);
        await delay(500);
        await heapify(arr, n, largest);
      }
    };
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setHeapArray([...arr]);
      await delay(500);
      await heapify(arr, i, 0);
    }
    setSorting(prev => ({ ...prev, heap: false }));
  };

  const bucketSort = async () => {
    setSorting(prev => ({ ...prev, bucket: true }));
    const arr = [...bucketArray];
    const n = arr.length;
    if (n <= 0) return;
    const maxVal = Math.max(...arr);
    const buckets: number[][] = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
      const idx = Math.floor((arr[i] / (maxVal + 1)) * n);
      buckets[idx].push(arr[i]);
    }
    for (let i = 0; i < buckets.length; i++) {
      buckets[i].sort((a, b) => a - b);
      await delay(200);
    }
    const sortedArr = ([] as number[]).concat(...buckets);
    for (let i = 0; i < sortedArr.length; i++) {
      await delay(200);
      setBucketArray(sortedArr.slice(0, i + 1));
    }
    setSorting(prev => ({ ...prev, bucket: false }));
  };

  return (
    <div className="algo-page">
      <h1>Algorithm Visualizer</h1>

      <div className="algo-section">
        <h2>Bubble Sort</h2>
        <div className="bar-container">
          {bubbleArray.map((value, index) => (
            <div key={index} className="bar" style={{ height: `${value * 2}px` }}>{value}</div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={generateNewArrays} disabled={Object.values(sorting).some(v => v)}>Generate</button>
          <button onClick={bubbleSort} disabled={sorting.bubble}>Start Bubble Sort</button>
        </div>
      </div>

      <div className="algo-section">
        <h2>Quick Sort</h2>
        <div className="bar-container quick">
          {quickArray.map((value, index) => (
            <div key={index} className="bar quick-bar" style={{ height: `${value * 2}px` }}>{value}</div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={generateNewArrays} disabled={Object.values(sorting).some(v => v)}>Generate</button>
          <button onClick={startQuickSort} disabled={sorting.quick}>Start Quick Sort</button>
        </div>
      </div>

      <div className="algo-section">
        <h2>Randomized Quick Sort</h2>
        <div className="bar-container quick">
          {randomQuickArray.map((value, index) => (
            <div key={index} className="bar randquick-bar" style={{ height: `${value * 2}px` }}>{value}</div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={generateNewArrays} disabled={Object.values(sorting).some(v => v)}>Generate</button>
          <button onClick={startRandomizedQuickSort} disabled={sorting.randomQuick}>Start Randomized Quick Sort</button>
        </div>
      </div>

      <div className="algo-section">
        <h2>Heap Sort</h2>
        <div className="bar-container heap">
          {heapArray.map((value, index) => (
            <div key={index} className="bar heap-bar" style={{ height: `${value * 2}px` }}>{value}</div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={generateNewArrays} disabled={Object.values(sorting).some(v => v)}>Generate</button>
          <button onClick={heapSort} disabled={sorting.heap}>Start Heap Sort</button>
        </div>
      </div>

      <div className="algo-section">
        <h2>Bucket Sort</h2>
        <div className="bar-container bucket">
          {bucketArray.map((value, index) => (
            <div key={index} className="bar bucket-bar" style={{ height: `${value * 2}px` }}>{value}</div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={generateNewArrays} disabled={Object.values(sorting).some(v => v)}>Generate</button>
          <button onClick={bucketSort} disabled={sorting.bucket}>Start Bucket Sort</button>
        </div>
      </div>

      <div className="algo-section">
        <h2>Binary Search Tree</h2>
        <BstVisualizer />
      </div>

      <div className="algo-section">
        <h2>Depth-First Search (DFS)</h2>
        <DfsVisualizer />
      </div>
    </div>
  );
};

export default Algorithms;