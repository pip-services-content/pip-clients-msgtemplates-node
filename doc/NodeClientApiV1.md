# Client API (version 1) <br/> Message Templates Microservices Client SDK for Node.js

Node.js client API for Message templates microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [MessageTemplateV1 class](#class1)
* [IMessageTemplateClientV1 interface](#interface)
    - [getTemplates()](#operation1)
    - [getTemplateById()](#operation2)
    - [getTemplateByIdOrName()](#operation3)
    - [createTemplate()](#operation4)
    - [updateTemplate()](#operation5)
    - [deleteTemplateById()](#operation6)
* [MessageTemplatesDirectClientV1 class](#client_direct)
* [MessageTemplatesHttpClientV1 class](#client_http)
* [MessageTemplatesSenecaClientV1 class](#client_seneca)
* [MessageTemplatesLambdaClientV1 class](#client_lambda)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-msgtemplates-node": "^1.1.0",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
var sdk = new require('pip-clients-msgtemplates-node');

// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
var client = sdk.MessageTemplatesHttpClientV1(config);

// Open client connection to the microservice
client.open(null, null, function(err) {
    if (err) {
        console.error(err);
        return; 
    }
    
    console.log('Opened connection');
    
    // Create a new message template
    var template = {
        name: 'Welcome',
        subject: { en: 'Welcome to our product' },
        text: { en: 'Welcome <%= name %>!' },
        html: { en: '<h1>Welcome <%= name %>!<h1>' },
        status: 'completed'
    };

    client.createTemplate(
        null,
        template,
        function (err, template) {
            if (err) {
                console.error(err);
                return;
            }
            
            console.log('Create template is');
            console.log(template);
            
            // Get welcome template
            client.getTemplateByIdOrName(
                null, 'Welcome',
                function(err, template) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    
                    console.log('Welcome template is');
                    console.log(template);
                    
                    // Close connection
                    client.close(correlationId, ); 
                }
            );
        }
    );
});
```

### <a name="class1"></a> MessageTemplateV1 class

Represents an message template

**Properties:**
- id: string - unique template id
- name: string - template name
- from: string - sender address
- reply_to: string - sender replyto address
- subject: MultiString - message subject in different languages
- text: MultiString - message text body in different languages
- html: MultiString - message html body in different languages
- status: string - editing status of the msgtemplate: 'new', 'writing', 'translating', 'completed' (default: 'new')

## <a name="interface"></a> IMessageTemplatesClientV1 interface

If you are using Typescript, you can use IMessageTemplatesClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IMessageTemplatesClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IMessageTemplatesClientV1 {
    getTemplates(correlationId, filter, paging, callback);
    getTemplateById(correlationId, id, callback);
    getTemplateByIdOrName(correlationId, idOrName, callback);
    createTemplate(correlationId, template, callback);
    updateTemplate(correlationId, template, callback);
    deleteTemplateById(correlationId, id, callback);
}
```

### <a name="operation1"></a> getTemplates(correlationId, filter, paging, callback)

Retrieves a collection of message templates according to specified criteria

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- filter: any - filter parameters
  - name: string - (optional) template name
  - status: string - (optional) template editing status
  - search: string - (optional) free text search
- paging: any - paging parameters
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
  - paging: bool - (optional) true to enable paging and return total count
- callback: (err, page) => void - callback function
  - err: Error - occured error or null for success
  - page: DataPage<MessageTemplateV1> - retrieved msgtemplates in page format

### <a name="operation2"></a> getTemplateById(correlationId, id, callback)

Retrieves a single message template specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- id: string - unique message template id
- callback: (err, template) => void - callback function
  - err: Error - occured error or null for success
  - template: MessageTemplateV1 - retrieved message template, null if object wasn't found 

### <a name="operation3"></a> getTemplateByIdOrName(correlationId, idOrName, callback)

Retrieves the first message template specified by id or name

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- idOrName: string - unique template id or name
- callback: (err, template) => void - callback function
  - err: Error - occured error or null for success
  - template: MessageTemplateV1 - retrieved message template, null if object wasn't found 

### <a name="operation4"></a> createTemplate(correlationId, template, callback)

Creates a new message template

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- msgtemplate: MessageTemplateV1 - MessageTemplate object to be created. If object id is not defined it is assigned automatically.
- callback: (err, template) => void - callback function
  - err: Error - occured error or null for success
  - template: MessageTemplateV1 - created message template object

### <a name="operation5"></a> updateTemplate(correlationId, template, callback)

Updates message template

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- template: MessageTemplateV1 - message template object with new values
- callback: (err, template) => void - callback function
  - err: Error - occured error or null for success
  - template: MessageTemplateV1 - updated message template object 

### <a name="operation6"></a> deleteTemplateById(correlationId, msgtemplateId, callback)

Deletes message template specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- id: string - unique message template id
- callback: (err) => void - callback function
  - err: Error - occured error or null for success
 
## <a name="client_direct"></a> MessageTemplatesDirectClientV1 class

MessageTemplatesDirectClientV1 is a direct client to call controller inside microservice container

```javascript
class MessageTemplatesDirectClientV1 extends DirectClient implements IMessageTemplatesClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getTemplates(correlationId, filter, paging, callback);
    getTemplateById(correlationId, id, callback);
    getTemplateByIdOrName(correlationId, idOrName, callback);
    createTemplate(correlationId, template, callback);
    updateTemplate(correlationId, template, callback);
    deleteTemplateById(correlationId, id, callback);
}
```

**Constructor config properties:** 
- ...

## <a name="client_http"></a> MessageTemplatesHttpClientV1 class

MessageTemplatesHttpClientV1 is a client that implements HTTP protocol

```javascript
class MessageTemplatesHttpClientV1 extends CommandableHttpClient implements IMessageTemplatesClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getTemplates(correlationId, filter, paging, callback);
    getTemplateById(correlationId, id, callback);
    getTemplateByIdOrName(correlationId, idOrName, callback);
    createTemplate(correlationId, template, callback);
    updateTemplate(correlationId, template, callback);
    deleteTemplateById(correlationId, id, callback);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> MessageTemplatesSenecaClientV1 class

MessageTemplatesSenecaClientV1 is a client that implements Seneca protocol

```javascript
class MessageTemplatesSenecaClientV1 extends SenecaClient implements IMessageTemplatesClientV1 {
    constructor(config: any = null);        
    configure(config);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getTemplates(correlationId, filter, paging, callback);
    getTemplateById(correlationId, id, callback);
    getTemplateByIdOrName(correlationId, idOrName, callback);
    createTemplate(correlationId, template, callback);
    updateTemplate(correlationId, template, callback);
    deleteTemplateById(correlationId, id, callback);
}
```

**Constructor config properties:** 
- connection: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - protocol: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_lambda"></a> MessageTemplatesLambdaClientV1 class

MessageTemplatesLambdaClientV1 is a client that calls AWS Lamba functions

```javascript
class MessageTemplatesLambdaClientV1 extends LambdaClient implements IMessageTemplatesClientV1 {
    constructor(config: any = null);        
    configure(config);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getTemplates(correlationId, filter, paging, callback);
    getTemplateById(correlationId, id, callback);
    getTemplateByIdOrName(correlationId, idOrName, callback);
    createTemplate(correlationId, template, callback);
    updateTemplate(correlationId, template, callback);
    deleteTemplateById(correlationId, id, callback);
}
```

**Constructor config properties:** 
- connection: object - AWS Lambda connection properties
  - protocol: "aws"
  - region: string - AWS availability region like "us-east-1"
  - function: string - unique function name or arn like "arn:aws:lambda:us-east-1:268549927901:function:pip-services-template-node"
- credential: object - AWS Lambda access keys and additional parameters
  - access\_key\_id: string - AWS access key id
  - secret\_access\_key: string - AWS secret access key
- options: object
  - timeout: number - communication timeout in milliseconds (default: 30,000)
  