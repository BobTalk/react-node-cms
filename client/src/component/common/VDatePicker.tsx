/**
 * Created by xiaoduan on 2016/11/30.
 */
import * as React from 'react';
import {DatePicker} from 'antd';
import {IAntdProps} from "custom-antd";
import FilterPropsComponent from "../abstract/FilterPropsComponent";

export interface IVDatePickerProps {
    onChange?: (dateArr: Date, stringDateArr: string)=>void; // 时间发生变化的回调，发生在用户选择时间时
    showTime?: boolean|Object; //增加时间选择功能 refer to TimePicker Options
    disabledDate?:(currDate:Date)=>void;//不可选择的日期
    disabled?:boolean;//禁用
    style?:Object;//自定义输入框样式
    size?:'large'|'small';//输入框大小，large 高度为 32px，small 为 22px，默认是 28px
    open?:boolean;//控制弹层是否展开
    toggleOpen?:(open:boolean)=>void;//弹出日历和关闭日历的回调
    format?: string; // 展示的日期格式 default:"yyyy-MM-dd HH:mm:ss"
}

interface IVDatePickerState{
    value:string|Date;
}
export default class VDatePicker extends FilterPropsComponent<IVDatePickerProps&IAntdProps,IVDatePickerState>{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    handelChange(dateArr: Date, stringDateArr: string){
        this.props.onChange&&this.props.onChange(dateArr,stringDateArr);
        console.log( typeof stringDateArr);
        /*this.setState({
            value:stringDateArr
        })*/
    }
    public render(){
        const newProps=super.getFilterProps();
        return(
                <DatePicker
                    {...newProps}

                />
        );
    }
}