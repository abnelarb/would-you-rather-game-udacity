//the middleware index page and the apply middleware function to the store
import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'
export default applyMiddleware(
    thunk,
    logger,
)