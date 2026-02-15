const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => [...arr1, ...arr2].sort((a, b) => a - b);
