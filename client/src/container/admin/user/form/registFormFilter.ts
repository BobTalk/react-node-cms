import {UserRegistInfo} from "../../../../model/userRegistInfo";
import {LabelWithInputModel, IFormInputProps} from "../../../../component/form/FormInput";
import {LabelWithPassInputModel, IFormPassWordInputProps} from "../../../../component/form/FormPassWordInput";
import {AntButtonModel} from "../../../../component/form/FormSubmitButton";
import {IAntdProps,IAntdRule} from "custom-antd";
import {icon} from "../../../../utils/icon";
import {IAntdPassWordInputProps} from "custom-antd";
import {validatorType} from "../../../../utils/regex";

/**
 * Created by xiaoduan on 2016/10/27.
 */    
export const registFormBaseCls='regist-form';
export var getRegistFromFilterProps=((props:any)=>{
    //昵称参数 start
    let trueNameRules:IAntdRule[]=[{
        required:false,
        validation: {
            error:'抱歉，该用户名已被占用。',
            dataValue:'JasonWood'
        },
        errMessage:'昵称首字母必须为英文字母，长度为 2-10 个字符',
        regex:/^[a-z]\w{2,10}$/i,
    }];
    let trueName:IAntdProps={
        id:'TrueName',
        name:'TrueName',
        placeholder:'昵称',
        className:`${registFormBaseCls}-user`
    };
    let trueNameOptions:IFormInputProps={
        help:'检测中...',
        icon:{type:icon.getIConUser(),className:`${registFormBaseCls}-icon`},
    };
    //end

    //邮箱start
    let emailRules=[{
        required:true,
        validatorType:validatorType.email,
        errMessage:'请填写正确的邮箱地址'
    }];
    let email:IAntdProps={
        id:'Email',
        name:'Email',
        placeholder:'电子邮件',
        className:`${registFormBaseCls}-user`
    };
    let emailOptions:IFormInputProps={
        icon:{type:icon.getIConMail(),className:`${registFormBaseCls}-icon`}
    };
    //end

    //手机号 start
    let mobileRules:IAntdRule[]=[{
        required:true,
        validatorType:validatorType.mobile,
        errMessage:'请输入11位数字的手机号'
    }];
    let mobile:IAntdProps={
        id:'Mobile',
        name:'Mobile',
        placeholder:'手机号',
        className:`${registFormBaseCls}-user`
    };
    let mobileOptions:IFormInputProps={
        icon:{type:icon.getIConMobile(),className:`${registFormBaseCls}-icon`}
    }
    //end


    let userNameRules=[{
        required:true,
        validatorType:validatorType.username,
        errMessage:'账户名以英文字母开头，长度不少于4个字符'
    }];
    let userName:IAntdProps={
        id:'UserName',
        name:'UserName',
        placeholder:'帐号',
        className:`${registFormBaseCls}-user`
    };
    let userNameOptions:IFormInputProps={
        icon:{type:icon.getIConTeam(),className:`${registFormBaseCls}-icon`}
    }

    let passWord:IAntdPassWordInputProps={
        id:'Password',
        name:'Password',
        placeholder:'密码',
        reId:'RePassword',
        reName:'RePassword',
        className:`${registFormBaseCls}-user`
    }
    let passWordOptions:IFormPassWordInputProps={
        icon:{type:icon.getIConLock(),className:`${registFormBaseCls}-icon`},
        errMessage:'密码以字母开头，长度为6-15字符',
        regex:/^[A-z a-z]\w{6,15}$/
    }
    const filterProps=[
        new LabelWithInputModel(trueName,trueNameRules,trueNameOptions),
        new LabelWithInputModel(email,emailRules,emailOptions),
        new LabelWithInputModel(mobile,mobileRules,mobileOptions),
        new LabelWithInputModel(userName,userNameRules,userNameOptions),
        new LabelWithPassInputModel(passWord,passWordOptions),
        new AntButtonModel('注册', (fields: any)=> {
            fields.validateFieldsAndScroll((errors,value)=>{
                if (!!errors) {
                    console.log('Errors in form!!!');
                    return;
                }
                else {
                    var userRegistInfo=new UserRegistInfo();
                    userRegistInfo.email=value.Email;
                    userRegistInfo.mobile=value.Mobile;
                    userRegistInfo.userName=value.UserName;
                    userRegistInfo.userPassword=value.Password;
                    userRegistInfo.trueName=value.TrueName;
                    props.onSubmit(userRegistInfo);
                }

            })
            //
        },'tn btn-lg btn-login btn-block')
    ];
    getRegistFromFilterProps = ()=> {

        //return filterProps;
        filterProps.map((item)=>{
             //item.xx=11;
        });
        console.log(filterProps)
        return filterProps;
    };
    return filterProps;
});