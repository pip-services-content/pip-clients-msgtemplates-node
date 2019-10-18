import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { MessageTemplateV1 } from './MessageTemplateV1';
import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
export declare class MessageTemplatesHttpClientV1 extends CommandableHttpClient implements IMessageTemplatesClientV1 {
    constructor(config?: any);
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<MessageTemplateV1>) => void): void;
    getTemplateById(correlationId: string, id: string, callback: (err: any, template: MessageTemplateV1) => void): void;
    getTemplateByIdOrName(correlationId: string, idOrName: string, callback: (err: any, template: MessageTemplateV1) => void): void;
    createTemplate(correlationId: string, template: MessageTemplateV1, callback: (err: any, template: MessageTemplateV1) => void): void;
    updateTemplate(correlationId: string, template: MessageTemplateV1, callback: (err: any, template: MessageTemplateV1) => void): void;
    deleteTemplateById(correlationId: string, id: string, callback: (err: any, template: MessageTemplateV1) => void): void;
}
