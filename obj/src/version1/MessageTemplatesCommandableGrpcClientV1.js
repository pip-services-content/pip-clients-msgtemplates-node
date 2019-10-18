"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
class MessageTemplatesCommandableGrpcClientV1 extends pip_services3_grpc_node_1.CommandableGrpcClient {
    constructor(config) {
        super('v1/message_templates');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getTemplates(correlationId, filter, paging, callback) {
        this.callCommand('get_templates', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getTemplateById(correlationId, id, callback) {
        this.callCommand('get_template_by_id', correlationId, {
            template_id: id
        }, callback);
    }
    getTemplateByIdOrName(correlationId, idOrName, callback) {
        this.callCommand('get_template_by_id_or_name', correlationId, {
            id_or_name: idOrName
        }, callback);
    }
    createTemplate(correlationId, template, callback) {
        this.callCommand('create_template', correlationId, {
            template: template
        }, callback);
    }
    updateTemplate(correlationId, template, callback) {
        this.callCommand('update_template', correlationId, {
            template: template
        }, callback);
    }
    deleteTemplateById(correlationId, id, callback) {
        this.callCommand('delete_template_by_id', correlationId, {
            template_id: id
        }, callback);
    }
}
exports.MessageTemplatesCommandableGrpcClientV1 = MessageTemplatesCommandableGrpcClientV1;
//# sourceMappingURL=MessageTemplatesCommandableGrpcClientV1.js.map