import { ReactNode } from "react";

interface Props {
  labelClass?: string;
  label: string;
  children: ReactNode;
}

export default function WithInputLabel(props: Props) {
  const { labelClass, label, children } = props;

  return (
    <label className={labelClass ?? "flex flex-col my-2 w-full"}>
      <span className={"text-sm text-white mb-2"}>{label}</span>
      {children}
    </label>
  );
}
