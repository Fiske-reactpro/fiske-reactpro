import React from 'react'
import {Card,Table,Modal,Button,message} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'
export default class BasicTable extends React.Component{
    state={
        dataSource2:[]
    }

    params = {
        page:1
    }
    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id:'0',
                userName:'fiske',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id:'0',
                userName:'kite',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            }
        ]
        data.map((item,index)=>{
            item.key = index;
        })
        this.setState({
            dataSource:data
        })
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
                    dataSource2:res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination: Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }
    onRowClick = (record,index)=>{
        let selectKey = [index];
        Modal.info({
            title:'信息',
            content:`用户名:${record.userName},用户爱好:${record.interest }`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    }
    //多选
    handleItemDelete=(()=>{
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:`您确定要删除这些数据吗？${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    })
    render(){
        const colums = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex ==1 ? '男':'女'
                }

            },
            {
                title:'状态',
                dataIndex:'state',
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
                dataIndex:'birthday'

            },
            {
                title:'地址',
                dataIndex:'address'

            },
            {
                title:'早起时间',
                dataIndex:'time'

            }
        ]
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table bordered dataSource={this.state.dataSource} columns={colums}/>
                </Card>
                <Card title="动态渲染表格" style={{margin:'10px 0'}}>
                    <Table bordered dataSource={this.state.dataSource2} columns={colums}/>
                </Card>
                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table 
                        bordered 
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                }
                            }
                        }}
                        rowSelection={rowSelection}
                        pagination={false}
                        dataSource={this.state.dataSource2} 
                        columns={colums}/>
                </Card>
                <Card title="Mock-复选" style={{margin:'10px 0'}}>
                    <div>
                        <Button onClick={this.handleItemDelete}>删除</Button>
                    </div>
                    <Table 
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                }
                            }
                        }}
                        bordered 
                        rowSelection={rowCheckSelection}
                        pagination={false}
                        dataSource={this.state.dataSource2} 
                        columns={colums}/>
                </Card>
                <Card title="Mock-表格分页" style={{margin:'10px 0'}}>
                    <Table 
                        bordered 
                        pagination={this.state.pagination}
                        dataSource={this.state.dataSource2} 
                        columns={colums}/>
                </Card>
            </div>
        );
    }
}