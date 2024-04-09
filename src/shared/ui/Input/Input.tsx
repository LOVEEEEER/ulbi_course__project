import {
    InputHTMLAttributes, FC, memo, useState, useEffect, useRef,
} from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string | number,
    onChange?: (value: string) => void,
    autofoсus?: boolean;
    readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        // eslint-disable-next-line react/prop-types
        className, value, onChange, type = "text", placeholder, autofoсus, readonly, ...otherProps
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofoсus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autofoсus]);

    // eslint-disable-next-line no-undef
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSelect = (e: any) => {
        setCaretPosition(e?.target.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onSelect={handleSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
            </div>
        </div>
    );
});
