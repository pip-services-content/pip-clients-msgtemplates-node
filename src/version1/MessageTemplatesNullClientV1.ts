import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { IdGenerator } from 'pip-services-commons-node';

import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
import { MessageTemplateV1 } from './MessageTemplateV1';

export class MessageTemplatesNullClientV1 implements IMessageTemplatesClientV1 {
            
    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MessageTemplateV1>) => void): void {
        callback(null, new DataPage<MessageTemplateV1>([], 0));
    }

    public getTemplateById(correlationId: string, id: string, 
        callback: (err: any, template: MessageTemplateV1) => void): void {
        callback(null, null);
    }

    public getTemplateByIdOrName(correlationId: string, idOrName: string, 
        callback: (err: any, template: MessageTemplateV1) => void): void {
        callback(null, null);
    }

    public createTemplate(correlationId: string, template: MessageTemplateV1, 
        callback: (err: any, template: MessageTemplateV1) => void): void {
        template.id = template.id || IdGenerator.nextLong();
        if (callback) callback(null, template);
    }

    public updateTemplate(correlationId: string, template: MessageTemplateV1, 
        callback: (err: any, template: MessageTemplateV1) => void): void {
        if (callback) callback(null, template);
    }

    public deleteTemplateById(correlationId: string, id: string,
        callback: (err: any, template: MessageTemplateV1) => void): void {
        if (callback) callback(null, null);
    }
}