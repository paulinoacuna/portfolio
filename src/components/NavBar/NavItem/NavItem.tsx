interface INavItemProps {
  title: string;
}

export default function NavItem(props: INavItemProps) {
  return <div>{props.title}</div>;
}
