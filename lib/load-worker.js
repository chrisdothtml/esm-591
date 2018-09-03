// not sure if there's a simpler way than this to load
// the worker with esm
require('esm')(module)('./worker.js')
