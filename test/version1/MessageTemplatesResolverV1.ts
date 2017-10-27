let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';

import { MessageTemplateV1 } from '../../src/version1/MessageTemplateV1';
import { MessageTemplatesResolverV1 } from '../../src/version1/MessageTemplatesResolverV1';

suite('MessageTemplatesResolverV1', () => {
    let resolver: MessageTemplatesResolverV1;

    suiteSetup(() => {
        resolver = new MessageTemplatesResolverV1();
    });

    test('Resolve hardcoded template', (done) => {
        resolver.configure(ConfigParams.fromTuples(
            'message_templates.template1.subject', 'Subject1',
            'message_templates.template1.text', 'Text1',
            'message_templates.template1.html', 'Html1'
        ));

        resolver.resolve('template1', (err, template) => {
            assert.isNull(err);

            assert.isObject(template);
            assert.equal(template.subject, 'Subject1');
            assert.equal(template.text, 'Text1');
            assert.equal(template.html, 'Html1');
            
            done();
        });
    });

    test('Resolve missing template', (done) => {
        resolver.configure(ConfigParams.fromTuples(
            'message_templates.template1.subject', 'Subject1',
            'message_templates.template1.text', 'Text1',
            'message_templates.template1.html', 'Html1'
        ));

        resolver.resolve('template2', (err, template) => {
            assert.isNull(err);

            assert.isNull(template);
            
            done();
        });
    });

    test('Resolve template by id', (done) => {
        resolver.configure(ConfigParams.fromTuples(
            'message_templates.template1', '123'
        ));

        resolver.resolve('template2', (err, template) => {
            assert.isNull(err);

            assert.isNull(template);
            
            done();
        });
    });
    
});
