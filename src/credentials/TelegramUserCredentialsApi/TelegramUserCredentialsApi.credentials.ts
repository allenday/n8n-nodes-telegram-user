import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class TelegramUserCredentialsApi implements ICredentialType {
	name = 'telegramUserCredentialsApi';
	displayName = 'Telegram User Credentials API';
	properties: INodeProperties[] = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
		{
			displayName: 'API ID',
			name: 'api_id',
			type: 'string',
			default: '',
		},
		{
			displayName: 'API hash',
			name: 'api_hash',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Session hash',
			name: 'session_hash',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
}
