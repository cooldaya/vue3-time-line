import { DefineComponent } from 'vue';

declare interface IOptions {
    comName?: string;
}

declare interface ITimeLine {
    install(app: any, options?: IOptions): void;
}

export declare const TimeLine: DefineComponent<    {}, {}, any>;

declare const Vue3TimeLine: ITimeLine;
export default Vue3TimeLine;

export { }
