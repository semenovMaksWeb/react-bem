import React, {lazy, Suspense} from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
// import PageTodo from "./pages/todo/page-todo";
// import PageIndex from "./pages/index/page-index";
const PageTodo = lazy(() => import("./pages/todo/page-todo"))
const PageIndex = lazy(() => import("./pages/index/page-index"))
export  const  RouteConfig:React.SFC = () =>{
    return(
        <Suspense fallback={<p>Ожидания загрузки</p>} >
                <Switch>
                    <Route  exact path="/" component={PageIndex}/>
                    <Route  exact  path="/todo" component={PageTodo}/>
                    {/*<Route  path="*">*/}
                    {/*    <div>404</div>*/}
                    {/*</Route>*/}
                </Switch>

        </Suspense>
    )
}