import { FormEventHandler, ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function Form({ children, onSubmit }: HeaderProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
