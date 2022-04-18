import React, { FC, ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
  readonly className?: string;
}

const Layout: FC<Props> = ({ children, className }: Props) => (
  <div className="bg-slate-100">
    <section className={`${className} max-w-7xl mx-auto px-5`}>
      {children}
    </section>
  </div>
);

export default Layout;
