import React from "react";
import "components/container/container.css"
export interface iContainerProps {
    children: React.PropsWithChildren<any>
}

export const Container = (props: iContainerProps) => {
    return (<div className="container">{props.children}</div>);
}