//全局参数定义 ，export {};不可缺少
export { };
declare global {
    interface Window {
        editor: any;
        sessionStorage: any;
        __minderReadOnly: any;
    }
}