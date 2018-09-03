import { parentPort, workerData } from 'worker_threads'

parentPort.postmessage(`Hello, ${workerData.name}!`)
