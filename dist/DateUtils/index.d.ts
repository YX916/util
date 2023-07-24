/**
* @author 杨永鑫
* @param date Date | null 时间
* @param format number 输出格式
* @returns string 格式化后的日期
* @example
* dateFormat(null,1) => '2023-07-23'
* dateFormat(null,2) => '22:53:23'
* dateFormat(null,3) => '2023-07-23 22:53:23'
*/
export declare const dateFormat: (date: Date | null, format: number) => string;
/**
 * @author 杨永鑫
 * @param dateB Date | string | null 前一个时间
 * @param dateA Date | string 后一个时间
 * @param type  string 类型
 * @returns number 差值
 */
export declare const dateDiff: (dateB: Date | string | null, dateA: Date | string, type: string) => number | undefined;
