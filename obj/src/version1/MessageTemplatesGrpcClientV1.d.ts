import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { GrpcClient } from 'pip-services3-grpc-node';
import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
import { MessageTemplateV1 } from './MessageTemplateV1';
export declare class MessageTemplatesGrpcClientV1 extends GrpcClient implements IMessageTemplatesClientV1 {
    constructor();
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<MessageTemplateV1>) => void): void;
    getTemplateById(correlationId: string, templateId: string, callback: (err: any, result: MessageTemplateV1) => void): void;
    getTemplateByIdOrName(correlationId: string, idOrName: string, callback: (err: any, result: MessageTemplateV1) => void): void;
    createTemplate(correlationId: string, template: MessageTemplateV1, callback: (err: any, result: MessageTemplateV1) => void): void;
    updateTemplate(correlationId: string, template: MessageTemplateV1, callback: (err: any, result: MessageTemplateV1) => void): void;
    deleteTemplateById(correlationId: string, templateId: string, callback: (err: any, result: MessageTemplateV1) => void): void;
}
