import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login/index'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import NoMatch from './pages/nomatch/'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/BasicTable'
import HighTable from './pages/table/hightable'
import City from './pages/city/index'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
import Users from './pages/users'
export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={Buttons} />
                            <Route path="/admin/ui/modals" component={Modals} />
                            <Route path="/admin/ui/loadings" component={Loadings} />
                            <Route path="/admin/ui/notification" component={Notice} />
                            <Route path="/admin/ui/messages" component={Messages} />
                            <Route path="/admin/ui/tabs" component={Tabs} />
                            <Route path="/admin/ui/gallery" component={Gallery} />
                            <Route path="/admin/ui/carousel" component={Carousels} />
                            <Route path="/admin/form/login" component={FormLogin} />
                            <Route path="/admin/form/reg" component={FormRegister} />
                            <Route path="/admin/table/basic" component={BasicTable} />
                            <Route path="/admin/table/high" component={HighTable} />
                            <Route path="/admin/city" component={City} />
                            <Route path="/admin/order" component={Order} />
                            <Route path="/admin/user" component={Users} />
                            <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/common" render={()=>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                        </Common>
                    }/>
                    {/* <Route path="/order/detail" component={Login} /> */}
                </App>
            </HashRouter>
        );
    }
}