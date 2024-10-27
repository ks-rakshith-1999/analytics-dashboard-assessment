/// <reference lib="webworker" />
import * as Papa from 'papaparse';

addEventListener('message', ({ data }) => {
  Papa.parse(data, {
    header: true,
    dynamicTyping: true,
    chunkSize: 1000,
    chunk: (results) => {
      postMessage({ type: 'chunk', data: results.data });
    },
    complete: () => {
      postMessage({ type: 'complete' });
    }
  });
});
