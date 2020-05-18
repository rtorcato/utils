import { expect } from 'chai'
import { helloWorld } from './../src'

describe('helloWorld', () => {
  it('Should return greetings', () => {
    expect(helloWorld()).equals('Howdy!')
  })
})
