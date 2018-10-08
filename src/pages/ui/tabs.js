import React from 'react'
import {Card,Button,message,Tabs,Icon} from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane;
export default class Buttons extends React.Component{
    newTabIndex=0; 
    handleCallback=(key)=>{
            message.info("Hi,您选择了页签:"+key)
    }
    componentWillMount(){
        const panes = [
            {
                title:'Tab 1',
                content:'Tab 1',
                key:'1' 
            },
            {
                title:'Tab 2',
                content:'Tab 2',
                key:'2'
            },
            {
                title:'Tab 3',
                content:'Tab 3',
                key:'3' 
            }
        ]
    this.setState({
            activeKey:panes[0].key,
            panes
    })
    
}
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render(){
        return (
            <div>
                <Card title="Tabs页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="带图案Tabs页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="动态添加abs页签" className="card-wrap">
                    <Tabs 
                        defaultActiveKey="1"
                        onChange={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    
                    >
                       {
                           this.state.panes.map((panel)=>{
                               return <TabPane
                                tab={panel.title}
                                key={panel.key}
                               />
                           })
                       }
                    </Tabs>
                </Card>
            </div>
        )
    }
}