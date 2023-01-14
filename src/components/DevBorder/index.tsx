import { BorderBottom, BorderLeft, BorderRight, BorderTop } from "./styles";

const DevBorder = () => {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <>
      <BorderTop />
      <BorderBottom />
      <BorderLeft />
      <BorderRight />
    </>
  );
};

export { DevBorder };
