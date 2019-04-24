import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
//import { IMessageTemplatesController } from 'pip-services-msgtemplates-node';
import { MessageTemplateV1 } from './MessageTemplateV1';

export class MessageTemplatesDirectClientV1 extends DirectClient<any> implements IMessageTemplatesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-msgtemplates", "controller", "*", "*", "*"))
    }

    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MessageTemplateV1>) => void): void {
        let timing = this.instrument(correlationId, 'message_templates.get_templates');
        this._controller.getTemplates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getTemplateById(correlationId: string, id: string, 
        callback: (err: any, template: MessageTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'message_templates.get_template_by_id');
        this._controller.getTemplateById(correlationId, id, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public getTemplateByIdOrName(correlationId: string, idOrName: string, 
        callback: (err: any, template: MessageTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'message_templates.get_template_by_id_or_name');
        this._controller.getTemplateByIdOrName(correlationId, idOrName, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public createTemplate(correlationId: string, template: MessageTemplateV1, 
        callback: (err: any, template: MessageTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'message_templates.create_template');
        this._controller.createTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public updateTemplate(correlationId: string, template: MessageTemplateV1, 
        callback: (err: any, template: MessageTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'message_templates.update_template');
        this._controller.updateTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public deleteTemplateById(correlationId: string, id: string,
        callback: (err: any, template: MessageTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'message_templates.delete_template_by_id');
        this._controller.deleteTemplateById(correlationId, id, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
}