let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { MessageTemplatesMemoryPersistence } from 'pip-services-msgtemplates-node';
import { MessageTemplatesController } from 'pip-services-msgtemplates-node';
import { IMessageTemplatesClientV1 } from '../../src/version1/IMessageTemplatesClientV1';
import { MessageTemplatesDirectClientV1 } from '../../src/version1/MessageTemplatesDirectClientV1';
import { MessageTemplatesClientFixtureV1 } from './MessageTemplatesClientFixtureV1';

suite('MessageTemplatesDirectClientV1', ()=> {
    let client: MessageTemplatesDirectClientV1;
    let fixture: MessageTemplatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new MessageTemplatesMemoryPersistence();
        let controller = new MessageTemplatesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-msgtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-msgtemplates', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new MessageTemplatesDirectClientV1();
        client.setReferences(references);

        fixture = new MessageTemplatesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
