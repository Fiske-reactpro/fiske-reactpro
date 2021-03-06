import React from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message,InputNumber} from 'antd'
import moment from 'moment'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends React.Component{
    state={};
    getBase64=(img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }
    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo ))

    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        const rowObject={
            minRows:4,maxRows:6
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                                {
                                    getFieldDecorator('userName', {
                                        initialValue: '',
                                        rules: [
                                            {
                                                required: true,
                                                message: '用户名不能为空'
                                            }
                                        ]
                                    })(
                                        <Input placeholder="请输入用户名" />
                                    )
                                }
                            </FormItem>
                            <FormItem label="密码" {...formItemLayout}>
                                {
                                    getFieldDecorator('userPwd', {
                                        initialValue: ''
                                    })(
                                        <Input type="password" placeholder="请输入密码" />
                                    )
                                }
                            </FormItem>
                            <FormItem label="sex" {...formItemLayout}>
                                {
                                    getFieldDecorator('gender', {
                                        initialValue: ''
                                    })(
                                        <RadioGroup>
                                            <Radio value="1">男</Radio>
                                            <Radio value="2">女</Radio>
                                        </RadioGroup>
                                    )
                                }
                            </FormItem>
                            <FormItem label="年龄" {...formItemLayout}>
                                {
                                    getFieldDecorator('age', {
                                        initialValue: '18'
                                    })(
                                        <InputNumber />
                                    )
                                }
                            </FormItem>
                            <FormItem label="当前状态" {...formItemLayout}>
                                {
                                    getFieldDecorator('state', {
                                        initialValue: '1'
                                    })(
                                        <Select>
                                            <Option value="1">咸鱼一条</Option>
                                            <Option value="2">北大学霸</Option>
                                            <Option value="3">阿里巴巴大数据工程师</Option>
                                            <Option value="4">创业者</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                            <FormItem label="爱好" {...formItemLayout}>
                                {
                                    getFieldDecorator('hobbies', {
                                        initialValue: '1'
                                    })(
                                        <Select mode="multiple">
                                            <Option value="1">上网</Option>
                                            <Option value="2">阅读</Option>
                                            <Option value="3">游戏</Option>
                                            <Option value="4">旅游</Option>
                                            <Option value="5">音乐</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                            <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName:'checked',
                                    initialValue: true
                                })(
                                    <Switch/>
                                )
                            }
                            </FormItem>
                            <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue:moment('2018-09-08')
                                })(
                                    <DatePicker 
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                            </FormItem>
                            <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',
                                { initialValue:'北京市海淀区奥林匹克'
                            
                            })(
                                   <TextArea 
                                        autosize={rowObject}
                                   />
                                )
                            }
                            </FormItem>
                            <FormItem label="早期时间" {...formItemLayout}>
                                {
                                    getFieldDecorator('time')(
                                        <TimePicker />
                                    )
                                }
                            </FormItem>
                            <FormItem label="头像" {...formItemLayout}>
                                {
                                    getFieldDecorator('userImg')(
                                       <Upload
                                            listType="picture-card"
                                            showUploadList={false}
                                            action="//jsonplaceholder.typicode.com/posts/"
                                            onChange={this.handleChange}
                                       >
                                       {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus" />}
                                       </Upload>
                                    )
                                }
                            </FormItem>
                            <FormItem {...offsetLayout}>
                                {
                                    getFieldDecorator('agreement')(
                                        <Checkbox>我已阅读并同意<a href="#">以上条款</a></Checkbox>
                                    )
                                }
                            </FormItem>
                            <FormItem {...offsetLayout}>
                                <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                            </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }

}
export default Form.create()(FormRegister);