import { IStringIdentifiable } from 'pip-services3-commons-node';
import { MultiString } from 'pip-services3-commons-node';

export class MessageTemplateV1 implements IStringIdentifiable {
    public id: string;
    public name: string;
    public from?: string;
    public subject: MultiString;
    public text: MultiString;
    public html: MultiString;
    public status: string;
}