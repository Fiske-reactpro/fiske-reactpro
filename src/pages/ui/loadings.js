import React from 'react'
import {Card,Button,Spin,Icon,Alert} from 'antd'
import './ui.less'
export default class Loadings extends React.Component{
    render(){
        const icon = <Icon type="plus" style={{fontSize:24}}/>
        const iconLoading = <Icon type="loading" style={{fontSize:24}}/>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin size="large"/>
                    <Spin style={{marginLeft:10}} indicator={icon} spinning/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert 
                        message="React"
                        description="欢迎来到React高级实战"
                        type="warning"
                    />
                    <Spin>
                        <Alert 
                            message="React"
                            description="欢迎来到React高级实战"
                            type="info"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert 
                            message="React"
                            description="欢迎来到React高级实战"
                            type="info"
                        />
                    </Spin>
                    <Spin indicator={iconLoading} tip="加载中...">
                        <Alert 
                            message="React"
                            description="欢迎来到React高级实战"
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}