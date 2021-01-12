export default function Title({ title , ...rest}) {
  return <h1 className="text-title" {...rest} >{title}</h1>;
}
