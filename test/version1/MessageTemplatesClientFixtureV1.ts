let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services-commons-node';

import { MessageTemplateV1 } from '../../src/version1/MessageTemplateV1';
import { MessageTemplateStatusV1 } from '../../src/version1/MessageTemplateStatusV1';
import { IMessageTemplatesClientV1 } from '../../src/version1/IMessageTemplatesClientV1';

let TEMPLATE1: MessageTemplateV1 = {
    id: '1',
    name: 'template1',
    from: null,
    subject: { en: 'Text 1' },
    text: { en: 'Text 1' },
    html: { en: 'Text 1' },
    status: MessageTemplateStatusV1.Completed
};
let TEMPLATE2: MessageTemplateV1 = {
    id: '2',
    name: 'template2',
    from: null,
    subject: { en: 'Text 2' },
    text: { en: 'Text 2' },
    html: { en: 'Text 2' },
    status: MessageTemplateStatusV1.Completed
};

export class MessageTemplatesClientFixtureV1 {
    private _client: IMessageTemplatesClientV1;
    
    constructor(client: IMessageTemplatesClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let template1, template2;

        async.series([
        // Create one template
            (callback) => {
                this._client.createTemplate(
                    null,
                    TEMPLATE1,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.text.en, TEMPLATE1.text.en);
                        assert.equal(template.name, TEMPLATE1.name);

                        template1 = template;

                        callback();
                    }
                );
            },
        // Create another template
            (callback) => {
                this._client.createTemplate(
                    null,
                    TEMPLATE2,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.text.en, TEMPLATE2.text.en);
                        assert.equal(template.name, TEMPLATE2.name);

                        template2 = template;

                        callback();
                    }
                );
            },
        // Get all templates
            (callback) => {
                this._client.getTemplates(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.isTrue(page.data.length >= 2);

                        callback();
                    }
                );
            },
        // Get template by name
            (callback) => {
                this._client.getTemplateByIdOrName(
                    null,
                    TEMPLATE1.name,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);

                        callback();
                    }
                );
            },
        // Update the template
            (callback) => {
                template1.text.en = 'Updated Content 1';

                this._client.updateTemplate(
                    null,
                    template1,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.text.en, 'Updated Content 1');
                        assert.equal(template.name, TEMPLATE1.name);

                        template1 = template;

                        callback();
                    }
                );
            },
        // Delete template
            (callback) => {
                this._client.deleteTemplateById(
                    null,
                    template1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete template
            (callback) => {
                this._client.getTemplateById(
                    null,
                    template1.id,
                    (err, template) => {
                        assert.isNull(err);
                        
                        assert.isNull(template || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
