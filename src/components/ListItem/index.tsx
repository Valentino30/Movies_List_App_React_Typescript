import Text from "../Text";
import { StyledLi } from "./styles";

type ListItemProps = {
  id: string;
  year: string;
  title: string;
  image: string;
};

export default function ListItem({ id, title, year, image }: ListItemProps) {
  return (
    <StyledLi key={id}>
      <Text title={`${title} (${year})`} />
      <img src={image} alt="backdrop-img" />
    </StyledLi>
  );
}
