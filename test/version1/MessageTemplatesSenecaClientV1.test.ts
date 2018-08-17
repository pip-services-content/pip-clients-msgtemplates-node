let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';
import { SenecaInstance } from 'pip-services-seneca-node';

import { MessageTemplatesMemoryPersistence } from 'pip-services-msgtemplates-node';
import { MessageTemplatesController } from 'pip-services-msgtemplates-node';
import { MessageTemplatesSenecaServiceV1 } from 'pip-services-msgtemplates-node';
import { IMessageTemplatesClientV1 } from '../../src/version1/IMessageTemplatesClientV1';
import { MessageTemplatesSenecaClientV1 } from '../../src/version1/MessageTemplatesSenecaClientV1';
import { MessageTemplatesClientFixtureV1 } from './MessageTemplatesClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('MessageTemplatesSenecaClient', () => {
    let service: MessageTemplatesSenecaServiceV1;
    let client: MessageTemplatesSenecaClientV1;
    let fixture: MessageTemplatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new MessageTemplatesMemoryPersistence();
        let controller = new MessageTemplatesController();

        service = new MessageTemplatesSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-seneca', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-msgtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-msgtemplates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-msgtemplates', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new MessageTemplatesSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new MessageTemplatesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
