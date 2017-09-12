let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { MessageTemplatesMemoryPersistence } from 'pip-services-msgtemplates-node';
import { MessageTemplatesController } from 'pip-services-msgtemplates-node';
import { MessageTemplatesHttpServiceV1 } from 'pip-services-msgtemplates-node';
import { IMessageTemplatesClientV1 } from '../../src/version1/IMessageTemplatesClientV1';
import { MessageTemplatesHttpClientV1 } from '../../src/version1/MessageTemplatesHttpClientV1';
import { MessageTemplatesClientFixtureV1 } from './MessageTemplatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('MessageTemplatesRestClientV1', ()=> {
    let service: MessageTemplatesHttpServiceV1;
    let client: MessageTemplatesHttpClientV1;
    let fixture: MessageTemplatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new MessageTemplatesMemoryPersistence();
        let controller = new MessageTemplatesController();

        service = new MessageTemplatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-msgtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-msgtemplates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-msgtemplates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new MessageTemplatesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

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
