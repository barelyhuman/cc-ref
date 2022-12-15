export function Conditional(props) {
  return props.if ? (props.render ? props.render() : props.children) : null;
}
