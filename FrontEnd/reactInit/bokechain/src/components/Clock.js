// 使用类就允许我们使用其它特性，例如局部状态、生命周期钩子
class Clock extends React.Component{
    render(){
        return (
            <div>
                {this.props.date.toLocaleTimeString()}
            </div>
        )
        
    }
}

