"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let services = require('../../../src/protos/msgtemplates_v1_grpc_pb');
let messages = require('../../../src/protos/msgtemplates_v1_pb');
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
const MessageTemplatesGrpcConverterV1_1 = require("./MessageTemplatesGrpcConverterV1");
class MessageTemplatesGrpcClientV1 extends pip_services3_grpc_node_1.GrpcClient {
    constructor() {
        super(services.MessageTemplatesClient);
    }
    getTemplates(correlationId, filter, paging, callback) {
        let request = new messages.MessageTemplatePageRequest();
        MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.fromPagingParams(paging));
        let timing = this.instrument(correlationId, 'msgtemplates.get_templates');
        this.call('get_templates', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
            let result = response
                ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplatePage(response.getPage())
                : null;
            callback(err, result);
        });
    }
    getTemplateById(correlationId, templateId, callback) {
        let request = new messages.MessageTemplateIdRequest();
        request.setTemplateId(templateId);
        let timing = this.instrument(correlationId, 'msgtemplates.get_template_by_id');
        this.call('get_template_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
            let result = response
                ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                : null;
            callback(err, result);
        });
    }
    getTemplateByIdOrName(correlationId, idOrName, callback) {
        let request = new messages.MessageTemplateNameRequest();
        request.setName(idOrName);
        let timing = this.instrument(correlationId, 'msgtemplates.get_template_by_id_or_name');
        this.call('get_template_by_id_or_name', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
            let result = response
                ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                : null;
            callback(err, result);
        });
    }
    createTemplate(correlationId, template, callback) {
        let templateObj = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.fromMessageTemplate(template);
        let request = new messages.MessageTemplateObjectRequest();
        request.setTemplate(templateObj);
        let timing = this.instrument(correlationId, 'msgtemplates.create_template');
        this.call('create_template', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
            let result = response
                ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                : null;
            callback(err, result);
        });
    }
    updateTemplate(correlationId, template, callback) {
        let templateObj = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.fromMessageTemplate(template);
        let request = new messages.MessageTemplateObjectRequest();
        request.setTemplate(templateObj);
        let timing = this.instrument(correlationId, 'msgtemplates.update_template');
        this.call('update_template', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
            let result = response
                ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                : null;
            callback(err, result);
        });
    }
    deleteTemplateById(correlationId, templateId, callback) {
        let request = new messages.MessageTemplateIdRequest();
        request.setTemplateId(templateId);
        let timing = this.instrument(correlationId, 'msgtemplates.delete_template_by_id');
        this.call('delete_template_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
            let result = response
                ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                : null;
            callback(err, result);
        });
    }
}
exports.MessageTemplatesGrpcClientV1 = MessageTemplatesGrpcClientV1;
//# sourceMappingURL=MessageTemplatesGrpcClientV1.js.map