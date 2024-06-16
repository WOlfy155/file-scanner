import { VirusScanResult } from './components/vulnerabilities-table/vulnerabilities-table.component';

export const allScannerTypes = ['File', 'Url'] as const;
export type ScannerType = (typeof allScannerTypes)[number]


export type ProcessNode = {
  label: string,
  children: ProcessNode[]
}

export type ScanResult = {
  vulnerabilitiesCount: number,
  trapCount: number,
  codeQualityScore: number,
  fileScanResults: VirusScanResult[],
  reportId: string
  processNode: ProcessNode
}

export type FileScanResultData = {
  category: string,
  engine_name: string,
  engine_update: string,
  engine_version: string,
  method: string,
  result: string
}

export type FileScanResultResponse = {
  data: {
    attributes: {
      date: Date,
      results: Record<string, FileScanResultData>,
      'stats': {
        'confirmed-timeout': number,
        'failure': number,
        'harmless': number,
        'malicious': number,
        'suspicious': number,
        'timeout': number,
        'type-unsupported': number,
        'undetected': number
      },
      'status': string
    },
    id: string,
    'type': string
  }
}

export type UrlScanResultResponse = {
  data: {
    attributes: {
      date: Date,
      results: Record<string, FileScanResultData>,
      'stats': {
        'confirmed-timeout': number,
        'failure': number,
        'harmless': number,
        'malicious': number,
        'suspicious': number,
        'timeout': number,
        'type-unsupported': number,
        'undetected': number
      },
      'status': string
    },
    id: string,
    'type': string
  }
}
