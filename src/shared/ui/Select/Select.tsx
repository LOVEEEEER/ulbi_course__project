import { ChangeEvent, FC, memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string,
  content: string
}

interface SelectProps {
  className?: string,
  label?: string,
  options?: SelectOption[],
  value?: string,
  readonly?: boolean,
  onChange?: (value: string) => void;
};

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, readonly } = props;

  const optionsList = useMemo(() => {
    return options?.map(opt => (
      <option
        key={opt.value}
        className={cls.option}
        value={opt.value}
      >
        {opt.content}
      </option>
    )
    )
  }, [options])

  const mods: Mods = {}

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  }

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
        {label && (
        <span className={cls.label}>
            {`${label}>`}
        </span>
      )}
    <select
        value={value}
        className={cls.select}
        onChange={handleChange}
        disabled={readonly}
      >
      {optionsList}
    </select>
    </div>
)  
})
