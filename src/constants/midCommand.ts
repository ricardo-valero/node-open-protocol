 type K1 =
  | 'abortJob'
  | 'bypassIdentifier'
  | 'communicationStop'
  | 'controllerReboot'
  | 'deviceCommand'
  | 'disableTool'
  | 'disconnectTool'
  | 'displayUserTextOnCompact'
  | 'displayUserTextOnGraph'
  | 'enableTool'
  | 'executeDynamicJob'
  | 'flashGreenLightOnTool'
  | 'identifierDownload'
  | 'jobBatchDecrement'
  | 'jobBatchIncrement'
  | 'jobOff'
  | 'jobRestart'
  | 'motorTuning'
  | 'parameterUserSetDownload'
  | 'passwordRequest'
  | 'passwordResponse'
  | 'resetAllIdentifiers'
  | 'resetDigitalInputFunction'
  | 'resetLatestIdentifier'
  | 'resetPsetBatchCounter'
  | 'selectJob'
  | 'selectMode'
  | 'selectParameterSetDynamically'
  | 'selectPset'
  | 'selectorControlGreenLights'
  | 'selectorControlRedLights'
  | 'setCalibrationValue'
  | 'setDigitalInputFunction'
  | 'setExternallyControlledRelays'
  | 'setJobLineAlert1'
  | 'setJobLineAlert2'
  | 'setJobLineControlStart'
  | 'setPrimaryTool'
  | 'setPsetBatchSize'
  | 'setTime'
  | 'toolPairingHandling'
  | 'userDataDownloadWithOffset'
  | 'vinDownload'

interface P1 {
  request: number
}

type K2 = 'userDataDownload'

interface P2 extends P1 {
  reply: number
}

export type MidCommand = Record<K1, P1> & Record<K2, P2>

const midCommand: MidCommand = {
  abortJob: {
    request: 127,
  },
  bypassIdentifier: {
    request: 155,
  },
  communicationStop: {
    request: 3,
  },
  controllerReboot: {
    request: 270,
  },
  deviceCommand: {
    request: 2100,
  },
  disableTool: {
    request: 42,
  },
  disconnectTool: {
    request: 44,
  },
  displayUserTextOnCompact: {
    request: 110,
  },
  displayUserTextOnGraph: {
    request: 111,
  },
  enableTool: {
    request: 43,
  },
  executeDynamicJob: {
    request: 140,
  },
  flashGreenLightOnTool: {
    request: 113,
  },
  identifierDownload: {
    request: 150,
  },
  jobBatchDecrement: {
    request: 129,
  },
  jobBatchIncrement: {
    request: 128,
  },
  jobOff: {
    request: 130,
  },
  jobRestart: {
    request: 39,
  },
  motorTuning: {
    request: 504,
  },
  parameterUserSetDownload: {
    request: 25,
  },
  passwordRequest: {
    request: 2502,
  },
  passwordResponse: {
    request: 2503,
  },
  resetAllIdentifiers: {
    request: 157,
  },
  resetDigitalInputFunction: {
    request: 225,
  },
  resetLatestIdentifier: {
    request: 156,
  },
  resetPsetBatchCounter: {
    request: 20,
  },
  selectJob: {
    request: 38,
  },
  selectMode: {
    request: 2606,
  },
  selectParameterSetDynamically: {
    request: 2505,
  },
  selectPset: {
    request: 18,
  },
  selectorControlGreenLights: {
    request: 254,
  },
  selectorControlRedLights: {
    request: 255,
  },
  setCalibrationValue: {
    request: 45,
  },
  setDigitalInputFunction: {
    request: 224,
  },
  setExternallyControlledRelays: {
    request: 200,
  },
  setJobLineAlert1: {
    request: 132,
  },
  setJobLineAlert2: {
    request: 133,
  },
  setJobLineControlStart: {
    request: 131,
  },
  setPrimaryTool: {
    request: 46,
  },
  setPsetBatchSize: {
    request: 19,
  },
  setTime: {
    request: 82,
  },
  toolPairingHandling: {
    request: 47,
  },
  userDataDownload: {
    reply: 242,
    request: 240,
  },
  userDataDownloadWithOffset: {
    request: 245,
  },
  vinDownload: {
    request: 50,
  },
}

export default midCommand
