import { parentPort, workerData } from 'worker_threads'

parentPort.postMessage(`Hello, ${workerData.name}!`)
