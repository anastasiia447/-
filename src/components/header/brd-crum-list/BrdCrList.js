import { BreadCrumbsItem } from "../brd-crum-item/BreadCrItem";

export function BreadCrumbsList(props) {
  return (
    <>
      {props.list.map((value) => (
        <BreadCrumbsItem title={value} key={value} />
      ))}
    </>
  );
}