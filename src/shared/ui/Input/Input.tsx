import {
    InputHTMLAttributes, FC, memo, useState, useEffect, useRef,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    autofoсus?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        // eslint-disable-next-line react/prop-types
        className, value, onChange, type = "text", placeholder, autofoсus, ...otherProps
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

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
                    {...otherProps}
                />
                {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
            </div>
        </div>
    );
});
