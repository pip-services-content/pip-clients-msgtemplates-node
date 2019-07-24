import { ConfigParams } from 'pip-services3-commons-node';
import { IReconfigurable } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { MessageTemplateV1 } from './MessageTemplateV1';
export declare class MessageTemplatesResolverV1 implements IReferenceable, IReconfigurable {
    private _client;
    private _config;
    private _templates;
    constructor(config?: ConfigParams, references?: IReferences);
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    put(name: string, template: any): void;
    private retrieveTemplate(name, templateName, callback);
    private createTemplate(name, config, callback);
    resolve(name: string, callback: (er: any, template: MessageTemplateV1) => void): void;
    static fromTuples(...tuples: any[]): MessageTemplatesResolverV1;
}
