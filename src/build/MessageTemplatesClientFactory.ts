import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';

import { MessageTemplatesDirectClientV1 } from '../version1/MessageTemplatesDirectClientV1';
import { MessageTemplatesHttpClientV1 } from '../version1/MessageTemplatesHttpClientV1';
import { MessageTemplatesSenecaClientV1 } from '../version1/MessageTemplatesSenecaClientV1';

export class MessageTemplatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-msgtemplates', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-msgtemplates', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-msgtemplates', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-msgtemplates', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(MessageTemplatesClientFactory.DirectClientV1Descriptor, MessageTemplatesDirectClientV1);
		this.registerAsType(MessageTemplatesClientFactory.HttpClientV1Descriptor, MessageTemplatesHttpClientV1);
		this.registerAsType(MessageTemplatesClientFactory.SenecaClientV1Descriptor, MessageTemplatesSenecaClientV1);
	}
	
}
