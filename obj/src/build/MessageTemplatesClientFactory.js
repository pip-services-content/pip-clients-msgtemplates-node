"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const MessageTemplatesNullClientV1_1 = require("../version1/MessageTemplatesNullClientV1");
const MessageTemplatesDirectClientV1_1 = require("../version1/MessageTemplatesDirectClientV1");
const MessageTemplatesHttpClientV1_1 = require("../version1/MessageTemplatesHttpClientV1");
class MessageTemplatesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(MessageTemplatesClientFactory.NullClientV1Descriptor, MessageTemplatesNullClientV1_1.MessageTemplatesNullClientV1);
        this.registerAsType(MessageTemplatesClientFactory.DirectClientV1Descriptor, MessageTemplatesDirectClientV1_1.MessageTemplatesDirectClientV1);
        this.registerAsType(MessageTemplatesClientFactory.HttpClientV1Descriptor, MessageTemplatesHttpClientV1_1.MessageTemplatesHttpClientV1);
    }
}
MessageTemplatesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'factory', 'default', 'default', '1.0');
MessageTemplatesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'null', 'default', '1.0');
MessageTemplatesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'direct', 'default', '1.0');
MessageTemplatesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'http', 'default', '1.0');
exports.MessageTemplatesClientFactory = MessageTemplatesClientFactory;
//# sourceMappingURL=MessageTemplatesClientFactory.js.map