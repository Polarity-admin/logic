export interface SqrmError {
    timestamp: any;
    status: number;
    resultCode: string;
    resultParamters: any;
    resultMsg: string;
    path: string;
}
