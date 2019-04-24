"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
class MessageTemplatesResolverV1 {
    constructor(config, references) {
        this._config = new pip_services3_commons_node_1.ConfigParams();
        this._templates = {};
        if (config != null)
            this.configure(config);
        if (references != null)
            this.setReferences(references);
    }
    configure(config) {
        this._config = config.getSection("message_templates");
    }
    setReferences(references) {
        this._client = references.getOneOptional(new pip_services3_commons_node_2.Descriptor('pip-services-msgtemplates', 'client', '*', '*', '1.0'));
    }
    put(name, template) {
        this._config[name] = template;
    }
    retrieveTemplate(name, templateName, callback) {
        if (this._client == null) {
            callback(null, null);
            return;
        }
        this._client.getTemplateByIdOrName('msg_resolve', templateName, (err, template) => {
            if (template)
                this._templates[name] = template;
            callback(err, template);
        });
    }
    createTemplate(name, config, callback) {
        if (config == null || _.isEmpty(config)) {
            callback(null, null);
            return;
        }
        let template = {
            name: name,
            subject: config.getAsObject('subject'),
            text: config.getAsObject('text'),
            html: config.getAsObject('html')
        };
        if (template.subject == null && template.text == null && template.html == null) {
            callback(null, null);
            return;
        }
        this._templates[name] = template;
        callback(null, template);
    }
    resolve(name, callback) {
        if (name == null)
            throw new Error("Dependency name cannot be null");
        // Retrieve template first
        var template = this._templates[name];
        if (template) {
            callback(null, template);
            return;
        }
        // Get configuration
        let config = this._config.getSection(name);
        let templateName = this._config.getAsNullableString(name) || config.getAsNullableString('template');
        if (templateName)
            this.retrieveTemplate(name, templateName, callback);
        else
            this.createTemplate(name, config, callback);
    }
    static fromTuples(...tuples) {
        let result = new MessageTemplatesResolverV1();
        if (tuples == null || tuples.length == 0)
            return result;
        for (let index = 0; index < tuples.length; index += 2) {
            if (index + 1 >= tuples.length)
                break;
            let name = pip_services3_commons_node_3.StringConverter.toString(tuples[index]);
            let template = tuples[index + 1];
            result.put(name, template);
        }
        return result;
    }
}
exports.MessageTemplatesResolverV1 = MessageTemplatesResolverV1;
//# sourceMappingURL=MessageTemplatesResolverV1.js.map