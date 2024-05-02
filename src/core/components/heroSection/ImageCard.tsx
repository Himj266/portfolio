import Image from "next/image";

interface Props {
  src: string;
  altText: string;
}

export const ImageCard = ({ src, altText }: Props): JSX.Element => (
  <Image alt={altText} src={src} width={380} height={380} />
);
