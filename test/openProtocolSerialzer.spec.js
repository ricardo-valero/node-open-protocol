// @ts-check
/*
  Copyright: (c) 2018-2020, Smart-Tech Controle e Automação
  GNU General Public License v3.0+ (see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt)
*/

const Stream = require('stream')
const {
  expect,
} = require('chai')

const OpenProtocolSerializer = require('../src/openProtocolSerializer.js')

describe('Open Protocol Serializer', () => {
  it('should be a stream', () => {
    expect(new OpenProtocolSerializer()).to.be.instanceOf(Stream)
  })

  it('should create a new instance', () => {
    expect(new OpenProtocolSerializer()).to.be.instanceOf(Stream)
  })

  it('should emit an error when input is not a object', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write(Buffer.from('test'))
  })

  it('should parse normally when the input is a object', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('data', (data) => {
      expect(data).to.be.deep.equal(Buffer.from('0022024000100101000020\u0000'))
      done()
    })

    // 0022024000100101000020[Null]

    serializer.write({
      mid: 240,
      revision: 1,
      noAck: false,
      stationID: 1,
      spindleID: 1,
      sequenceNumber: 0,
      messageParts: 0,
      messageNumber: 0,
      payload: Buffer.from('20'),
    })
  })

  it('should emit an error when input is a object with wrong mid', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write({
      mid: 'aaaa',
      revision: 2,
      noAck: false,
      stationID: 1,
      spindleID: 1,
      sequenceNumber: 0,
      messageParts: 0,
      messageNumber: 0,
      payload: Buffer.from('20'),
    })
  })

  it('should emit an error when input is a object with wrong revision', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write({
      mid: 240,
      revision: 'aaa',
      noAck: false,
      stationID: 1,
      spindleID: 1,
      sequenceNumber: 0,
      messageParts: 0,
      messageNumber: 0,
      payload: Buffer.from('20'),
    })
  })

  it('should emit an error when input is a object with wrong stationID', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write({
      mid: 240,
      revision: 1,
      noAck: false,
      stationID: 'a',
      spindleID: 1,
      sequenceNumber: 0,
      messageParts: 0,
      messageNumber: 0,
      payload: Buffer.from('20'),
    })
  })

  it('should emit an error when input is a object with wrong spindleID', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write({
      mid: 240,
      revision: 1,
      noAck: false,
      stationID: 1,
      spindleID: 'a',
      sequenceNumber: 0,
      messageParts: 0,
      messageNumber: 0,
      payload: Buffer.from('20'),
    })
  })

  it('should emit an error when input is a object with wrong sequenceNumber', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write({
      mid: 240,
      revision: 1,
      noAck: false,
      stationID: 1,
      spindleID: 1,
      sequenceNumber: 'a',
      messageParts: 0,
      messageNumber: 0,
      payload: Buffer.from('20'),
    })
  })

  it('should emit an error when input is a object with wrong messageParts', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write({
      mid: 240,
      revision: 1,
      noAck: false,
      stationID: 1,
      spindleID: 1,
      sequenceNumber: 0,
      messageParts: 'a',
      messageNumber: 0,
      payload: Buffer.from('20'),
    })
  })

  it('should emit an error when input is a object with wrong messageNumber', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write({
      mid: 240,
      revision: 1,
      noAck: false,
      stationID: 1,
      spindleID: 1,
      sequenceNumber: 0,
      messageParts: 0,
      messageNumber: 'a',
      payload: Buffer.from('20'),
    })
  })

  it('should emit an error when input is a object with wrong payload', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('error', (err) => {
      expect(err).to.be.an('error')
      done()
    })

    serializer.write({
      mid: 240,
      revision: 1,
      noAck: false,
      stationID: 1,
      spindleID: 1,
      sequenceNumber: 0,
      messageParts: 0,
      messageNumber: 0,
      payload: 250,
    })
  })

  it('should parse normally when the input is a object with spaces', (done) => {
    const serializer = new OpenProtocolSerializer()
    serializer.on('data', (data) => {
      expect(data).to.be.deep.equal(Buffer.from('00230240001001010000250\u0000'))
      done()
    })

    // 0023024000100101000020[Null]

    serializer.write({
      mid: 240,
      revision: '   ',
      noAck: false,
      stationID: 1,
      spindleID: 1,
      sequenceNumber: '  ',
      messageParts: ' ',
      messageNumber: ' ',
      payload: '250',
    })
  })
})
