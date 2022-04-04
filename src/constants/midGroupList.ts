type K1 =
    | 'alarm'
    | 'automaticManualMode'
    | 'digitalInputFunction'
    | 'jobInfo'
    | 'jobLineControl'
    | 'lastPowerMACSTighteningResultStationData'
    | 'lastTightening'
    | 'lockAtBatchDoneUpload'
    | 'motorTuningResultData'
    | 'multiSpindleResult'
    | 'multiSpindleStatus'
    | 'multipleIdentifierResultParts'
    | 'openProtocolCommandsDisabled'
    | 'psetSelected'
    | 'relayFunction'
    | 'selectorSocketInfo'
    | 'statusExternallyMonitoredInputs'
    | 'toolTagID'
    | 'userData'
    | 'vin'

interface P1 {
  data: number
  subscribe: number
  unsubscribe: number
  ack: number
  generic: boolean
}

type K2 =
    | 'alarmAcknowledged'
    | 'alarmStatus'

interface P2 {
  data: number
  ack: number
  outList: boolean
}

export type MidGroupList = Record<K1, P1> & Record<K2, P2>

const midGroupList: MidGroupList = {
  alarm: {
    ack: 72,
    data: 71,
    generic: true,
    subscribe: 70,
    unsubscribe: 73,
  },
  alarmAcknowledged: {
    ack: 75,
    data: 74,
    outList: true,
  },
  alarmStatus: {
    ack: 77,
    data: 76,
    outList: true,
  },
  automaticManualMode: {
    ack: 402,
    data: 401,
    generic: true,
    subscribe: 400,
    unsubscribe: 403,
  },
  digitalInputFunction: {
    ack: 222,
    data: 221,
    generic: true,
    subscribe: 220,
    unsubscribe: 223,
  },
  jobInfo: {
    ack: 36,
    data: 35,
    generic: true,
    subscribe: 34,
    unsubscribe: 37,
  },
  jobLineControl: {
    ack: 125,
    data: 121,
    generic: true,
    subscribe: 120,
    unsubscribe: 126,
  },
  lastPowerMACSTighteningResultStationData: {
    ack: 108,
    data: 106,
    generic: true,
    subscribe: 105,
    unsubscribe: 109,
  },
  lastTightening: {
    ack: 62,
    data: 61,
    generic: true,
    subscribe: 60,
    unsubscribe: 63,
  },
  lockAtBatchDoneUpload: {
    ack: 23,
    data: 22,
    generic: true,
    subscribe: 21,
    unsubscribe: 24,
  },
  motorTuningResultData: {
    ack: 502,
    data: 501,
    generic: true,
    subscribe: 500,
    unsubscribe: 503,
  },
  multiSpindleResult: {
    ack: 102,
    data: 101,
    generic: true,
    subscribe: 100,
    unsubscribe: 103,
  },
  multiSpindleStatus: {
    ack: 92,
    data: 91,
    generic: true,
    subscribe: 90,
    unsubscribe: 93,
  },
  multipleIdentifierResultParts: {
    ack: 153,
    data: 152,
    generic: true,
    subscribe: 151,
    unsubscribe: 154,
  },
  openProtocolCommandsDisabled: {
    ack: 422,
    data: 421,
    generic: true,
    subscribe: 420,
    unsubscribe: 423,
  },
  psetSelected: {
    ack: 16,
    data: 15,
    generic: true,
    subscribe: 14,
    unsubscribe: 17,
  },
  relayFunction: {
    ack: 218,
    data: 217,
    generic: true,
    subscribe: 216,
    unsubscribe: 219,
  },
  selectorSocketInfo: {
    ack: 252,
    data: 251,
    generic: true,
    subscribe: 250,
    unsubscribe: 253,
  },
  statusExternallyMonitoredInputs: {
    ack: 212,
    data: 211,
    generic: true,
    subscribe: 210,
    unsubscribe: 213,
  },
  toolTagID: {
    ack: 263,
    data: 262,
    generic: true,
    subscribe: 261,
    unsubscribe: 264,
  },
  userData: {
    ack: 243,
    data: 242,
    generic: true,
    subscribe: 241,
    unsubscribe: 244,
  },
  vin: {
    ack: 53,
    data: 52,
    generic: true,
    subscribe: 51,
    unsubscribe: 54,
  },
}

export default midGroupList
