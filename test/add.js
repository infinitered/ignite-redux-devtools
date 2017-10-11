const test = require('ava')
const sinon = require('sinon')
const plugin = require('../plugin')

test('adds the proper npm module and config', async t => {
  // spy on few things so we know they're called
  const addModule = sinon.spy()
  const setDebugConfig = sinon.spy()
  const patchInFile = sinon.spy()

  // mock a context
  const context = {
    ignite: { addModule, setDebugConfig, patchInFile }
  }

  await plugin.add(context)

  t.true(addModule.calledWith('remote-redux-devtools'))
  t.true(setDebugConfig.calledWith('useReduxDevTools', '__DEV__', true))
  t.true(patchInFile.called)
})
