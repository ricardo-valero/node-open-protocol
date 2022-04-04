type K =
  | 'autoDisableSettings'
  | 'histogramUpload'
  | 'ioDeviceStatus'
  | 'jobDataUpload'
  | 'jobIdUpload'
  | 'keepAlive'
  | 'modeDataUpload'
  | 'modeIdUpload'
  | 'oldTighteningResultUpload'
  | 'psetData'
  | 'psetID'
  | 'readTimeUpload'
  | 'toolDataUpload'
  | 'toolTagID'

interface P {
  generic: boolean
  reply: number
  request: number
}

type MidRequest = Record<K, P>

const midRequest: MidRequest = {
  autoDisableSettings: {
    generic: true,
    reply: 411,
    request: 410,
  },
  histogramUpload: {
    generic: true,
    reply: 301,
    request: 300,
  },
  ioDeviceStatus: {
    generic: true,
    reply: 215,
    request: 214,
  },
  jobDataUpload: {
    generic: true,
    reply: 33,
    request: 32,
  },
  jobIdUpload: {
    generic: true,
    reply: 31,
    request: 30,
  },
  keepAlive: {
    generic: false,
    reply: 9999,
    request: 9999,
  },
  modeDataUpload: {
    generic: false,
    reply: 2603,
    request: 2602,
  },
  modeIdUpload: {
    generic: false,
    reply: 2601,
    request: 2600,
  },
  oldTighteningResultUpload: {
    generic: false,
    reply: 65,
    request: 64,
  },
  psetData: {
    generic: true,
    reply: 13,
    request: 12,
  },
  psetID: {
    generic: true,
    reply: 11,
    request: 10,
  },
  readTimeUpload: {
    generic: true,
    reply: 81,
    request: 80,
  },
  toolDataUpload: {
    generic: true,
    reply: 41,
    request: 40,
  },
  toolTagID: {
    generic: true,
    reply: 262,
    request: 260,
  },
}

export default midRequest
