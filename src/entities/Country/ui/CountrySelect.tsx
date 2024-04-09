import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { Country } from "../model/types/сountry";

interface CountrySelectProps {
  className?: string,
  value?: string,
  onChange?: (value: Country) => void;
  readonly?: boolean,
}

const options: SelectOption[] = [
  {value: Country.Armenia, content: Country.Armenia},
  {value: Country.Belarus, content: Country.Belarus},
  {value: Country.Kazakhstan, content: Country.Kazakhstan},
  {value: Country.Russia, content: Country.Russia},
]

export const CountrySelect = memo(({className, value, onChange, readonly }: CountrySelectProps) => {
  const {t} = useTranslation()

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select 
        className={classNames('', {}, [className])}
        label={t("Укажите страну")}
        options={options}
        value={value}
        onChange={handleChange}
        readonly={readonly}
    />
  )
})