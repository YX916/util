"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateDiff = exports.dateFormat = void 0;
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
var dateFormat = function (date, format) {
    var dateString = "";
    var d = date || new Date();
    var year = d.getFullYear();
    var month = (d.getMonth() + 1).toString().padStart(2, '0');
    var day = d.getDate().toString().padStart(2, '0');
    var hour = d.getHours().toString().padStart(2, '0');
    var minute = d.getMinutes().toString().padStart(2, '0');
    var second = d.getSeconds().toString().padStart(2, '0');
    if (format === 1) {
        dateString = year + '-' + month + '-' + day;
    }
    if (format === 2) {
        dateString = hour + ':' + minute + ':' + second;
    }
    if (format === 3) {
        dateString = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }
    return dateString;
};
exports.dateFormat = dateFormat;
/**
 * @author 杨永鑫
 * @param dateB Date | string | null 前一个时间
 * @param dateA Date | string 后一个时间
 * @param type  string 类型
 * @returns number 差值
 */
var dateDiff = function (dateB, dateA, type) {
    console.log(dateB, dateA);
    var dateBefore;
    var dateAfter;
    dateBefore = typeof dateB == 'string' ? new Date(dateB) : (dateB == null ? new Date() : dateB);
    dateAfter = typeof dateA == 'string' ? new Date(dateA) : dateA;
    var timestamp = dateAfter.getTime() - dateBefore.getTime();
    var result;
    switch (type) {
        case 'second':
            result = timestamp / 1000;
            break;
        case 'minute':
            result = timestamp / (60 * 1000);
            break;
        case 'day':
            result = timestamp / (24 * 60 * 1000);
            break;
    }
    return result;
};
exports.dateDiff = dateDiff;
