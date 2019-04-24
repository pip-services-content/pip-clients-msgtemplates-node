"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class MessageTemplatesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-msgtemplates", "controller", "*", "*", "*"));
    }
    getTemplates(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'message_templates.get_templates');
        this._controller.getTemplates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getTemplateById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'message_templates.get_template_by_id');
        this._controller.getTemplateById(correlationId, id, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    getTemplateByIdOrName(correlationId, idOrName, callback) {
        let timing = this.instrument(correlationId, 'message_templates.get_template_by_id_or_name');
        this._controller.getTemplateByIdOrName(correlationId, idOrName, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    createTemplate(correlationId, template, callback) {
        let timing = this.instrument(correlationId, 'message_templates.create_template');
        this._controller.createTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    updateTemplate(correlationId, template, callback) {
        let timing = this.instrument(correlationId, 'message_templates.update_template');
        this._controller.updateTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    deleteTemplateById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'message_templates.delete_template_by_id');
        this._controller.deleteTemplateById(correlationId, id, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
}
exports.MessageTemplatesDirectClientV1 = MessageTemplatesDirectClientV1;
//# sourceMappingURL=MessageTemplatesDirectClientV1.js.map