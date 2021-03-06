import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { MessageTemplateV1 } from './MessageTemplateV1';
import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';

export class MessageTemplatesHttpClientV1 extends CommandableHttpClient implements IMessageTemplatesClientV1 {       
    
    constructor(config?: any) {
        super('v1/message_templates');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<MessageTemplateV1>) => void): void {
        this.callCommand( 
            'get_templates', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getTemplateById(correlationId: string, id: string,
        callback: (err: any, template: MessageTemplateV1) => void): void {
        this.callCommand( 
            'get_template_by_id',
            correlationId,
            {
                template_id: id
            }, 
            callback
        );        
    }

    public getTemplateByIdOrName(correlationId: string, idOrName: string,
        callback: (err: any, template: MessageTemplateV1) => void): void {
        this.callCommand( 
            'get_template_by_id_or_name',
            correlationId,
            {
                id_or_name: idOrName
            }, 
            callback
        );        
    }

    public createTemplate(correlationId: string, template: MessageTemplateV1,
        callback: (err: any, template: MessageTemplateV1) => void): void {
        this.callCommand(
            'create_template',
            correlationId,
            {
                template: template
            }, 
            callback
        );
    }

    public updateTemplate(correlationId: string, template: MessageTemplateV1,
        callback: (err: any, template: MessageTemplateV1) => void): void {
        this.callCommand(
            'update_template', 
            correlationId,
            {
                template: template
            }, 
            callback
        );
    }

    public deleteTemplateById(correlationId: string, id: string,
        callback: (err: any, template: MessageTemplateV1) => void): void {
        this.callCommand(
            'delete_template_by_id', 
            correlationId,
            {
                template_id: id
            }, 
            callback
        );
    }
    
}
