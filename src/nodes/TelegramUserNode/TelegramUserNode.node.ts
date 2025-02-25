import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType, NodeOperationError } from 'n8n-workflow';

export class TelegramUserNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Telegram User Node',
		name: 'telegramUserNode',
		group: ['transform'],
		version: 1,
		description: 'Telegram User Node',
		defaults: {
			name: 'Telegram User Node',
		},
		inputs: [
			{
				type: NodeConnectionType.Main,
				required: false,
			},
		],
		outputs: [
			{
				type: NodeConnectionType.Main,
				required: true,
			},
		],
		credentials: [
			{
				name: 'telegramUserCredentialsApi',
				required: true,
			},
		],
		properties: [
			// Node properties which the user gets displayed and
			// can change on the node.
			{
				displayName: 'My String',
				name: 'myString',
				type: 'string',
				default: '',
				placeholder: 'Placeholder value',
				description: 'The description text',
			},
		],
	};

	// The function below is responsible for actually doing whatever this node
	// is supposed to do. In this case, we're just appending the `myString` property
	// with whatever the user has entered.
	// You can make async calls and use `await`.
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		let item: INodeExecutionData;
		let myString: string;

		// Iterates over all input items and add the key "myString" with the
		// value the parameter "myString" resolves to.
		// (This could be a different value for each item in case it contains an expression)
		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				myString = this.getNodeParameter('myString', itemIndex, '') as string;
				item = items[itemIndex];

				item.json.myString = myString;
			} catch (error) {
				if (this.continueOnFail()) {
					const executionError = error as Error;
					items.push({
						json: this.getInputData(itemIndex)[0].json,
						error: new NodeOperationError(this.getNode(), executionError),
						pairedItem: itemIndex,
					});
				} else {
					if (error instanceof Error) {
						throw new NodeOperationError(this.getNode(), error, {
							itemIndex,
						});
					}
					throw new NodeOperationError(this.getNode(), 'Unknown error', {
						itemIndex,
					});
				}
			}
		}

		return [items];
	}
}
