import { Currency } from "entities/Currency/model/types/currency";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";

interface CurrencySelectProps {
  className?: string,
  value?: string,
  onChange?: (value: Currency) => void;
  readonly?: boolean,
}

const options: SelectOption[] = [
  {value: Currency.RUB, content: Currency.RUB},
  {value: Currency.EUR, content: Currency.EUR},
  {value: Currency.USD, content: Currency.USD}
]

export const CurrencySelect = memo(({className, value, onChange, readonly }: CurrencySelectProps) => {
  const {t} = useTranslation()

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select 
        className={classNames('', {}, [className])}
        label={t("Укажите валюту")}
        options={options}
        value={value}
        onChange={handleChange}
        readonly={readonly}
    />
  )
})