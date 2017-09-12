import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';
import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
import { MessageTemplateV1 } from './MessageTemplateV1';
export declare class MessageTemplatesDirectClientV1 extends DirectClient<any> implements IMessageTemplatesClientV1 {
    constructor();
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<MessageTemplateV1>) => void): void;
    getTemplateById(correlationId: string, id: string, callback: (err: any, template: MessageTemplateV1) => void): void;
    getTemplateByIdOrName(correlationId: string, idOrName: string, callback: (err: any, template: MessageTemplateV1) => void): void;
    createTemplate(correlationId: string, template: MessageTemplateV1, callback: (err: any, template: MessageTemplateV1) => void): void;
    updateTemplate(correlationId: string, template: MessageTemplateV1, callback: (err: any, template: MessageTemplateV1) => void): void;
    deleteTemplateById(correlationId: string, id: string, callback: (err: any, template: MessageTemplateV1) => void): void;
}
