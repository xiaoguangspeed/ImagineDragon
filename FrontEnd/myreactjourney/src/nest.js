function List(props){
  return (
    <ul>{props.children}</ul>
  )
}
List.defaultProps = {
  children:<Item>Empty</Item>
}

function Item(props){
  return (
    <li>{props.children}</li>
  )
}

var reactElement = 
<div>
  <List />
  <List>
    <Item>First</Item>
    <Item>First</Item>
    <Item>First</Item>
  </List>
</div>