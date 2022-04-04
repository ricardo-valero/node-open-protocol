// @ts-check
/*
  Copyright: (c) 2018-2020, Smart-Tech Controle e Automação
  GNU General Public License v3.0+ (see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt)
*/

import { createConnection } from 'net'
import OpenProtocolParser from './src/openProtocolParser.js'
import OpenProtocalSerializer from './src/openProtocolSerializer.js'
import MIDParser from './src/MIDParser.js'
import MIDSerializer from './src/MIDSerializer.js'
import * as helpers from './src/helpers.js'
import SessionControlClient from './src/sessionControlClient.js'

import midGroups from './src/midGroups.json'
import midCommand from './src/midCommand.json'
import midrequest from './src/midRequest.json'

function createClient(port, host, opts, connectionListener) {
  if (connectionListener === undefined) {
    if (typeof opts === 'function') {
      connectionListener = opts
      opts = {}
    }
    else {
      connectionListener = () => {
      }
    }
  }

  opts = opts || {}

  const client = new SessionControlClient(opts)

  const socket = createConnection(port, host, () => {
    socket.setTimeout(0)
    client.connect(connectionListener)
  })

  socket.setTimeout(20000)

  socket.once('timeout', () => onTimeout())

  function onTimeout() {
    const e = new Error('Socket Timeout')
    e.code = 'SOCKET_TIMEOUT'
    e.address = host
    e.port = port
    client.emit('error', e)
  }

  opts.stream = socket

  return client
}

export default {
  constants: {
    subscribes: midGroups,
    commands: midCommand,
    requests: midrequest,
  },
  OpenProtocolParser,
  OpenProtocalSerializer,
  SessionControlClient,
  MIDParser,
  MIDSerializer,
  helpers,
  createClient,
}
