import NavItem from "./NavItem/NavItem";

interface INavBarProps {
  items: string[];
}

export default function NavBar(props: INavBarProps) {
  return (
    <>
      {props.items.forEach((item) => (
        <NavItem title={item} />
      ))}
    </>
  );
}
