import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Headline = ({ children }: Props) => (
  <div className="headline">
    <h2 className="gradient padding">
      <span>{children}</span>
    </h2>
  </div>
);
