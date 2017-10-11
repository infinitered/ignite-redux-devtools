const test = require('ava')
const sinon = require('sinon')
const plugin = require('../plugin')

test('removes the npm module and config', async t => {
  const removeModule = sinon.spy()
  const removeDebugConfig = sinon.spy()
  const patchInFile = sinon.spy()

  const context = {
    ignite: { removeModule, removeDebugConfig, patchInFile }
  }

  await plugin.remove(context)

  t.true(removeModule.calledWith('remote-redux-devtools'))
  t.true(removeDebugConfig.calledWith('useReduxDevTools'))
  t.true(patchInFile.called)
})
