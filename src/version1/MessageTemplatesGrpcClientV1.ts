let _ = require('lodash');
let services = require('../../../src/protos/msgtemplates_v1_grpc_pb');
let messages = require('../../../src/protos/msgtemplates_v1_pb');

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { GrpcClient } from 'pip-services3-grpc-node';

import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
import { MessageTemplateV1 } from './MessageTemplateV1';
import { MessageTemplatesGrpcConverterV1 } from './MessageTemplatesGrpcConverterV1';

export class MessageTemplatesGrpcClientV1 extends GrpcClient implements IMessageTemplatesClientV1 {
        
    public constructor() {
        super(services.MessageTemplatesClient);
    }

    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, result: DataPage<MessageTemplateV1>) => void): void {

        let request = new messages.MessageTemplatePageRequest();

        MessageTemplatesGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(MessageTemplatesGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'msgtemplates.get_templates');

        this.call('get_templates',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MessageTemplatesGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MessageTemplatesGrpcConverterV1.toMessageTemplatePage(response.getPage())
                    : null;

                callback(err, result);
            }
        );
    }

    public getTemplateById(correlationId: string, templateId: string,
        callback: (err: any, result: MessageTemplateV1) => void): void {

        let request = new messages.MessageTemplateIdRequest();
        request.setTemplateId(templateId);

        let timing = this.instrument(correlationId, 'msgtemplates.get_template_by_id');

        this.call('get_template_by_id',
            correlationId,
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MessageTemplatesGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                    : null;

                callback(err, result);
            }
        );        
    }

    public getTemplateByIdOrName(correlationId: string, idOrName: string,
        callback: (err: any, result: MessageTemplateV1) => void): void {

        let request = new messages.MessageTemplateNameRequest();
        request.setName(idOrName);

        let timing = this.instrument(correlationId, 'msgtemplates.get_template_by_id_or_name');

        this.call('get_template_by_id_or_name',
            correlationId, 
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MessageTemplatesGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                    : null;

                callback(err, result);
            }
        );
    }

    public createTemplate(correlationId: string, template: MessageTemplateV1,
        callback: (err: any, result: MessageTemplateV1) => void): void {

        let templateObj = MessageTemplatesGrpcConverterV1.fromMessageTemplate(template);

        let request = new messages.MessageTemplateObjectRequest();
        request.setTemplate(templateObj);

        let timing = this.instrument(correlationId, 'msgtemplates.create_template');

        this.call('create_template',
            correlationId,
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MessageTemplatesGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                    : null;

                callback(err, result);
            }
        );
    }

    public updateTemplate(correlationId: string, template: MessageTemplateV1,
        callback: (err: any, result: MessageTemplateV1) => void): void {

        let templateObj = MessageTemplatesGrpcConverterV1.fromMessageTemplate(template);

        let request = new messages.MessageTemplateObjectRequest();
        request.setTemplate(templateObj);
    
        let timing = this.instrument(correlationId, 'msgtemplates.update_template');

        this.call('update_template',
            correlationId, 
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MessageTemplatesGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                    : null;

                callback(err, result);
            }
        );
    }

    public deleteTemplateById(correlationId: string, templateId: string,
        callback: (err: any, result: MessageTemplateV1) => void): void {

        let request = new messages.MessageTemplateIdRequest();
        request.setTemplateId(templateId);

        let timing = this.instrument(correlationId, 'msgtemplates.delete_template_by_id');

        this.call('delete_template_by_id',
            correlationId, 
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = MessageTemplatesGrpcConverterV1.toError(response.error);

                let result = response 
                    ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate())
                    : null;

                callback(err, result);
            }
        );
    }
  
}
