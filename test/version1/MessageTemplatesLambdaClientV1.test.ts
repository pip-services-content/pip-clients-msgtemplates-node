import { YamlConfigReader } from 'pip-services-commons-node';
import { MessageTemplatesClientFixtureV1 } from './MessageTemplatesClientFixtureV1';
import { MessageTemplatesLambdaClientV1 } from '../../src/version1/MessageTemplatesLambdaClientV1';

suite('MessageTemplatesLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: MessageTemplatesLambdaClientV1;
    let fixture: MessageTemplatesClientFixtureV1;

    setup((done) => {
        client = new MessageTemplatesLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new MessageTemplatesClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});