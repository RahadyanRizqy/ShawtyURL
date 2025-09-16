// Auth handlers
export * from './login.js'

// Root handler
export * from './root.js'

// Shorts handlers
export * from './shorts.js'

// Re-export all handlers as a single object
import * as login from './login.js'
import * as root from './root.js'
import * as shorts from './shorts.js'
import * as logout from './logout.js'

const handlers = {
  ...login,
  ...root,
  ...shorts,
  ...logout
}

export default handlers