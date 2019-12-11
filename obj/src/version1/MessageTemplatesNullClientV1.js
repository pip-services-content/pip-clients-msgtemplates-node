"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class MessageTemplatesNullClientV1 {
    getTemplates(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getTemplateById(correlationId, id, callback) {
        callback(null, null);
    }
    getTemplateByIdOrName(correlationId, idOrName, callback) {
        callback(null, null);
    }
    createTemplate(correlationId, template, callback) {
        template.id = template.id || pip_services3_commons_node_2.IdGenerator.nextLong();
        if (callback)
            callback(null, template);
    }
    updateTemplate(correlationId, template, callback) {
        if (callback)
            callback(null, template);
    }
    deleteTemplateById(correlationId, id, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.MessageTemplatesNullClientV1 = MessageTemplatesNullClientV1;
//# sourceMappingURL=MessageTemplatesNullClientV1.js.map