import { Worker } from 'worker_threads'

async function runWorker (filepath, workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(filepath, { workerData })

    worker.on('message', resolve)
    worker.on('error', reject)
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`))
      }
    })
  })
}

// use this line to verify the worker actually works
// runWorker('./lib/worker-cjs.js', { name: 'World' })
runWorker('./lib/load-worker.js', { name: 'World' })
  .then(result => console.log(result))
  .catch(e => console.error(e))
