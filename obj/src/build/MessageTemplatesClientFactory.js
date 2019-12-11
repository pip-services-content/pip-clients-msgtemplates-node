"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const MessageTemplatesNullClientV1_1 = require("../version1/MessageTemplatesNullClientV1");
const MessageTemplatesDirectClientV1_1 = require("../version1/MessageTemplatesDirectClientV1");
const MessageTemplatesHttpClientV1_1 = require("../version1/MessageTemplatesHttpClientV1");
const MessageTemplatesLambdaClientV1_1 = require("../version1/MessageTemplatesLambdaClientV1");
const MessageTemplatesCommandableGrpcClientV1_1 = require("../version1/MessageTemplatesCommandableGrpcClientV1");
const MessageTemplatesGrpcClientV1_1 = require("../version1/MessageTemplatesGrpcClientV1");
class MessageTemplatesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(MessageTemplatesClientFactory.NullClientV1Descriptor, MessageTemplatesNullClientV1_1.MessageTemplatesNullClientV1);
        this.registerAsType(MessageTemplatesClientFactory.DirectClientV1Descriptor, MessageTemplatesDirectClientV1_1.MessageTemplatesDirectClientV1);
        this.registerAsType(MessageTemplatesClientFactory.HttpClientV1Descriptor, MessageTemplatesHttpClientV1_1.MessageTemplatesHttpClientV1);
        this.registerAsType(MessageTemplatesClientFactory.LambdaClientV1Descriptor, MessageTemplatesLambdaClientV1_1.MessageTemplatesLambdaClientV1);
        this.registerAsType(MessageTemplatesClientFactory.CommandableGrpcClientV1Descriptor, MessageTemplatesCommandableGrpcClientV1_1.MessageTemplatesCommandableGrpcClientV1);
        this.registerAsType(MessageTemplatesClientFactory.GrpcClientV1Descriptor, MessageTemplatesGrpcClientV1_1.MessageTemplatesGrpcClientV1);
    }
}
exports.MessageTemplatesClientFactory = MessageTemplatesClientFactory;
MessageTemplatesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'factory', 'default', 'default', '1.0');
MessageTemplatesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'null', 'default', '1.0');
MessageTemplatesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'direct', 'default', '1.0');
MessageTemplatesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'http', 'default', '1.0');
MessageTemplatesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'lambda', 'default', '1.0');
MessageTemplatesClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'commandable-grpc', 'default', '1.0');
MessageTemplatesClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-msgtemplates', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=MessageTemplatesClientFactory.js.map