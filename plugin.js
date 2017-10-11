// Ignite CLI plugin for ReduxDevtools
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'remote-redux-devtools'
const NPM_MODULE_VERSION = '^0.5.12'

const APP_PATH = process.cwd()

const add = async function (context) {
  const { ignite } = context

  // install the NPM module
  await ignite.addModule(NPM_MODULE_NAME, { version: NPM_MODULE_VERSION })

  // Set useReduxDevTools DebugConfig.js
  ignite.setDebugConfig('useReduxDevTools', '__DEV__', true)

  // Patch CreateStore.js
  ignite.patchInFile(`${APP_PATH}/App/Redux/CreateStore.js`, {
    insert: `import { composeWithDevTools } from 'remote-redux-devtools'`,
    before: `import Config from '../Config/DebugConfig'`
  })

  ignite.patchInFile(`${APP_PATH}/App/Redux/CreateStore.js`, {
    insert: `  const composer = Config.useReduxDevTools ? composeWithDevTools({hostname: 'remotedev.io'}) : compose`,
    before: `const store = createAppropriateStore`
  })

  ignite.patchInFile(`${APP_PATH}/App/Redux/CreateStore.js`, {
    insert: `composer(...enhancers)`,
    replace: `compose(...enhancers)`
  })
}

const remove = async function (context) {
  const { ignite } = context

  // remove the NPM module
  await ignite.removeModule(NPM_MODULE_NAME)

  // Remove useReduxDevTools from DebugConfig.js
  ignite.removeDebugConfig('useReduxDevTools')

  // Unpatch CreateStore.js
  ignite.patchInFile(`${APP_PATH}/App/Redux/CreateStore.js`, {
    delete: `import { composeWithDevTools } from 'remote-redux-devtools'`
  })

  ignite.patchInFile(`${APP_PATH}/App/Redux/CreateStore.js`, {
    delete: `const composer = Config.useReduxDevTools ? composeWithDevTools({hostname: 'remotedev.io'}) : compose`
  })

  ignite.patchInFile(`${APP_PATH}/App/Redux/CreateStore.js`, {
    insert: `compose(...enhancers)`,
    replace: `composer(...enhancers)`
  })
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }
