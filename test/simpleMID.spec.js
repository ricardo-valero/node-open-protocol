// @ts-check
/*
  Copyright: (c) 2018-2020, Smart-Tech Controle e Automação
  GNU General Public License v3.0+ (see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt)
*/

const {
  expect,
} = require('chai')

const helpers = require('../src/helpers')
const mids = helpers.getMids()

describe('Simple MIDs', () => {
  it('MID0003', (done) => {
    const midTest = 3
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0010', (done) => {
    const midTest = 10
    const revisions = 3

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0022', (done) => {
    const midTest = 22
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0025', (done) => {
    const midTest = 25
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0030', (done) => {
    const midTest = 30
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0040', (done) => {
    const midTest = 40
    const revisions = 5

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0042', (done) => {
    const midTest = 42
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0043', (done) => {
    const midTest = 43
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0044', (done) => {
    const midTest = 44
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0080', (done) => {
    const midTest = 80
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0091', (done) => {
    const midTest = 91
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0113', (done) => {
    const midTest = 113
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0121', (done) => {
    const midTest = 121
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0127', (done) => {
    const midTest = 127
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0128', (done) => {
    const midTest = 128
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0131', (done) => {
    const midTest = 131
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0132', (done) => {
    const midTest = 132
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0133', (done) => {
    const midTest = 133
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0152', (done) => {
    const midTest = 152
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0155', (done) => {
    const midTest = 155
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0156', (done) => {
    const midTest = 156
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0157', (done) => {
    const midTest = 157
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0211', (done) => {
    const midTest = 211
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0242', (done) => {
    const midTest = 242
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0251', (done) => {
    const midTest = 251
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0260', (done) => {
    const midTest = 260
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0262', (done) => {
    const midTest = 262
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0270', (done) => {
    const midTest = 270
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0401', (done) => {
    const midTest = 401
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0410', (done) => {
    const midTest = 410
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0421', (done) => {
    const midTest = 421
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0501', (done) => {
    const midTest = 501
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID0504', (done) => {
    const midTest = 504
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })

  it('MID2600', (done) => {
    const midTest = 2600
    const revisions = 1

    const mid = mids[midTest]
    const msg = {
      payload: Buffer.from('MID-Teste'),
    }

    mid.parser(msg, {}, (err, data) => {
      expect(err).to.be.null
      expect(data).to.be.deep.equal({
        payload: 'MID-Teste',
      })

      mid.serializer(data, {}, (err, data) => {
        expect(err).to.be.null
        expect(data).to.be.deep.equal(msg)
      })

      expect(mid.revision()).to.have.lengthOf(revisions)
      done()
    })
  })
})
