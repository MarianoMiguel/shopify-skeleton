import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import { baseFiles } from '../lib/filesToAssert'
import {
  shopName,
  shopKey,
  shopPassword,
  shopSecret,
  shopThemeId
} from '../lib/mockPrompts'

describe('Base Files', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        noAnims: true
      })
      .withPrompts({
        projectName: 'Awesome Test Project',
        setShopNow: true,
        shopName,
        shopKey,
        shopPassword,
        shopSecret,
        shopThemeId
      })
      .toPromise()
  })

  it('creates expected base files', function () {
    assert.file(baseFiles)
  })

  it('Writes our options where we need them', function () {
    assert.fileContent('.env', shopName)
    assert.fileContent('.env', shopKey)
    assert.fileContent('.env', shopPassword)
    assert.fileContent('.env', shopSecret)
    assert.fileContent('.env', shopThemeId)
  })
})
