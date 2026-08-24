import { InputHTMLAttributes } from "react";

type LoginCadastroInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function LoginCadastroInput({ label, ...props }: LoginCadastroInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-inter text-[10px] font-bold text-white uppercase tracking-wider">
        {label}
      </label>
      <input
        className="w-full bg-white/30 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/80 outline-none focus:bg-white/40 focus:border-white/50 transition-all text-sm shadow-inner"
        {...props}
      />
    </div>
  );
}