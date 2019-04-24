import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { MessageTemplatesNullClientV1 } from '../version1/MessageTemplatesNullClientV1';
import { MessageTemplatesDirectClientV1 } from '../version1/MessageTemplatesDirectClientV1';
import { MessageTemplatesHttpClientV1 } from '../version1/MessageTemplatesHttpClientV1';

export class MessageTemplatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-msgtemplates', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-msgtemplates', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-msgtemplates', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-msgtemplates', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(MessageTemplatesClientFactory.NullClientV1Descriptor, MessageTemplatesNullClientV1);
		this.registerAsType(MessageTemplatesClientFactory.DirectClientV1Descriptor, MessageTemplatesDirectClientV1);
		this.registerAsType(MessageTemplatesClientFactory.HttpClientV1Descriptor, MessageTemplatesHttpClientV1);
	}
	
}
