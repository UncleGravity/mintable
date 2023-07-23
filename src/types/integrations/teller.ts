import { BaseIntegrationConfig, IntegrationId, IntegrationType } from '../integrations'

export interface TellerConfig extends BaseIntegrationConfig {
    id: IntegrationId.Teller
    type: IntegrationType.Import

    cert: string, // base64 encoded certificate string
    privateKey: string, // base64 encoded private key string
    appId: string
}

export const defaultTellerConfig: TellerConfig = {
    name: '',
    id: IntegrationId.Teller,
    type: IntegrationType.Import,

    cert: '', // base64 encoded certificate string
    privateKey: '', // base64 encoded private key string
    appId: ''
}

export interface TellerTransaction {
    account_id: string,
    amount: string,
    date: string,
    description: string,
    details: TellerTransactionDetails,
    status: string,
    id: string,
    links: TellerTransactionLinks,
    running_balance?: string,
    type: string
}

export interface TellerTransactionDetails {
    category?: string,
    counterparty?: string,
    processing_status: string
}

export interface TellerTransactionLinks {
    account: string,
    self: string
}
