import React from 'react';
import { Card, Table, Modal, Button, message, Badge } from 'antd';
import axios from './../../axios/index'
import Utils from './../../utils/utils';
export default class BasicTable extends React.Component {
        state = {
            
        }
        params = {
            page:1
        }
        componentDidMount(){
            this.request();
        }
        request = ()=>{
            let _this = this;
            axios.ajax({
                url:'/table/list',
                data:{
                    params:{
                        page:this.params.page
                    }
                }
            }).then((res)=>{
                if(res.code == 0){
                    res.result.list.map((item, index) => {
                        item.key = index;
                    })
                    this.setState({
                        dataSource:res.result.list
                    })
                }
            })
        }
        handleChange=(pagination,filters,sorter)=>{
            this.setState({
                sortOrder:sorter.order
            })
        }
        //删除操作
        handleDelete = (item) =>{
            let id = item.id
            Modal.confirm({
                title:'确认',
                content:'您确认要删除此条数据吗?',
                onOk:()=>{
                    message.success('删除成功');
                    this.request();
                }
            })
        }
        render(){
            const colums = [
                {
                    title:'id',
                    width:80,
                    dataIndex:'id'
                },
                {
                    title:'用户名',
                    width:80,
                    dataIndex:'userName'
                },
                {
                    title:'性别',
                    width:80,
                    dataIndex:'sex',
                    render(sex){
                        return sex ==1 ? '男':'女'
                    }
    
                },
                {
                    title:'状态',
                    dataIndex:'state',
                    width:80,
                    render(state){
                        let config = {
                            '1':'咸鱼一条',
                            '2':'北大学霸',
                            '3':'阿里巴巴大数据工程师',
                            '4':'创业者',
                            '5':'高管'
                        }
                        return config[state]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'生日',
                    width:120,
                    dataIndex:'birthday'
    
                },
                {
                    title:'地址',
                    width:120,
                    dataIndex:'address'
    
                },
                {
                    title:'早起时间',
                    width:80,
                    dataIndex:'time'
    
                }
            ]
            const colums2 = [
                {
                    title:'id',
                    width:80,
                    fixed:'left',
                    dataIndex:'id'
                },
                {
                    title:'用户名',
                    width:80,
                    fixed:'left',
                    dataIndex:'userName'
                },
                {
                    title:'性别',
                    width:80,
                    dataIndex:'sex',
                    render(sex){
                        return sex ==1 ? '男':'女'
                    }
    
                },
                {
                    title:'状态',
                    dataIndex:'state',
                    width:80,
                    render(state){
                        let config = {
                            '1':'咸鱼一条',
                            '2':'北大学霸',
                            '3':'阿里巴巴大数据工程师',
                            '4':'创业者',
                            '5':'高管'
                        }
                        return config[state]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'生日',
                    width:120,
                    dataIndex:'birthday'
    
                },
                {
                    title:'地址',
                    width:120,
                    fixed:'right',
                    dataIndex:'address'
    
                },
                {
                    title:'早起时间',
                    width:80,
                    fixed:'right',
                    dataIndex:'time'
    
                }
            ]
            const colums3 = [
                {
                    title:'id',
                    width:80,
                    dataIndex:'id'
                },
                {
                    title:'用户名',
                    width:80,
                    dataIndex:'userName'
                },
                {
                    title:'性别',
                    width:80,
                    dataIndex:'sex',
                    render(sex){
                        return sex ==1 ? '男':'女'
                    }
    
                },
                {
                    title:'年龄',
                    width:80,
                    key:'age',
                    dataIndex:'age',
                    sorter:(a,b)=>{
                        return a.age - b.age;
                    }
                },
                {
                    title:'状态',
                    dataIndex:'state',
                    width:80,
                    render(state){
                        let config = {
                            '1':'咸鱼一条',
                            '2':'北大学霸',
                            '3':'阿里巴巴大数据工程师',
                            '4':'创业者',
                            '5':'高管'
                        }
                        return config[state]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'生日',
                    width:120,
                    dataIndex:'birthday'
    
                },
                {
                    title:'地址',
                    width:120,
                    dataIndex:'address'
    
                },
                {
                    title:'早起时间',
                    width:80,
                    dataIndex:'time'
    
                }
            ]
            const colums4 = [
                {
                    title:'id',
                    width:80,
                    dataIndex:'id'
                },
                {
                    title:'用户名',
                    width:80,
                    dataIndex:'userName'
                },
                {
                    title:'性别',
                    width:80,
                    dataIndex:'sex',
                    render(sex){
                        return sex ==1 ? '男':'女'
                    }
    
                },
                {
                    title:'年龄',
                    width:80,
                    dataIndex:'age',
                    sorter:(a,b)=>{
                        return a.age - b.age;
                    }
                },
                {
                    title:'状态',
                    dataIndex:'state',
                    width:80,
                    render(state){
                        let config = {
                            '1': <Badge status="success" text="成功" />,
                            '2': <Badge status="error" text="错误" />,
                            '3': <Badge status="default" text="默认" />,
                            '4': <Badge status="processing" text="进程" />,
                            '5': <Badge status="warning" text="警告" />
                        }
                        return config[state]
                    }
    
                },
                {
                    title:'爱好',
                    dataIndex:'interest',
                    width:80,
                    render(interest){
                        let config = {
                            '1':'上网',
                            '2':'阅读',
                            '3':'游戏',
                            '4':'旅游',
                            '5':'购物',
                            '6':'音乐',
                            '7':'舞蹈',
                            '8':'美食'
                        }
                        return config[interest]
                    }
    
                },
                {
                    title:'生日',
                    width:120,
                    dataIndex:'birthday'
    
                },
                {
                    title:'地址',
                    width:120,
                    dataIndex:'address'
    
                },
                {
                    title:'操作',
                    width:80,
                    render:(text,item)=>{
                        return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                    }
                }
            ]
            return (
                <div>
                <Card title="基础表格">
                    <Table bordered 
                           dataSource={this.state.dataSource} 
                           columns={colums}
                           scroll={{y:240}}
                    />
                </Card>
                <Card title="动态渲染表格" style={{margin:'10px 0'}}>
                    <Table bordered
                           dataSource={this.state.dataSource}
                           scroll={{x:2180}}
                        columns={colums2}/>
                </Card>
                <Card title="表格排序" style={{margin:'10px 0'}}>
                    <Table bordered
                           dataSource={this.state.dataSource}
                           columns={colums3}
                           onChange={this.handleChange}
                           />
                </Card>
                <Card title="操作按钮" style={{margin:'10px 0'}}>
                    <Table bordered
                           dataSource={this.state.dataSource}
                           columns={colums4}
                           onChange={this.handleChange}
                           />
                </Card>
                </div>
            );
        }        
}
