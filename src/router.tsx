import React, {lazy, Suspense} from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
const PageTodo = lazy(() => import("./pages/todo/page-todo"))
const PageTodoActive = lazy(() => import("./pages/todo_active/page-todo_active"))
const PageIndex = lazy(() => import("./pages/index/page-index"))
export  const  RouteConfig:React.SFC = () =>{
    return(
        <Suspense fallback={<p>Ожидания загрузки</p>} >
                <Switch>
                    <Route  exact path="/" component={PageIndex}/>
                    <Route  exact  path="/todo" component={PageTodo}/>
                    <Route  exact  path="/todo/active" component={PageTodoActive}/>
                    <Route  path="*">
                        <div>404</div>
                    </Route>
                </Switch>

        </Suspense>
    )
}