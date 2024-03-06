import { onBlurField } from "@/redux/slices/resume.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { cn } from "@/utils/tailwind-merge";
import { ClassValue } from "clsx";
import React, { useRef, useEffect } from "react";

interface Props {
  value: string;
  path: string;
  placeholder?: string;
  className?: ClassValue;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBackspacePress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  maxLength?: number;
  element?: "input" | "textarea";
  type?: string;
  [x: string]: any;
  onInput: any;
  style: any;
  lineBreak?:boolean
}

function Text(props: Props, forwardedRef: React.Ref<HTMLInputElement>) {
  const dispatch = useAppDispatch();
  const {
    value,
    path,
    className,
    onFocus,
    onEnterPress,
    onBackspacePress,
    onChange,
    maxLength,
    onInput,
    readonly,
    style,
    lineBreak,
    ...rest
  } = props;
  const updateData = useAppSelector((state) => state.templateTheme);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    dispatch(onBlurField({ path, value: e.target.value }));
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(e);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(e);
  };

  const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    var bufferText = (
      ((e as any).originalEvent || e).clipboardData ||
      (window as any)?.clipboardData
    )
      .getData("Text")
      .slice(0, maxLength);
    e.preventDefault();
    document.execCommand("insertText", false, bufferText);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if(lineBreak){
        e.preventDefault()
      }
      onEnterPress && onEnterPress(e);
    }
    if (e.key === "Backspace") {
      onBackspacePress && onBackspacePress(e);
    }
  };

  const Component = props.element || ("textarea" as React.ElementType);

  const containerRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (forwardedRef) {
      if (typeof forwardedRef === "function") {
        forwardedRef(containerRef.current);
      } else if (typeof forwardedRef === "object") {
        (
          forwardedRef as React.MutableRefObject<HTMLInputElement | null>
        ).current = containerRef.current;
      }
    }
  }, [forwardedRef]);

  const adjustTextareaHeight = (textarea: any) => {
    textarea.style.height = "";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  useEffect(() => {
    adjustTextareaHeight(textRef.current);
  }, [value]);

  return (
    <Component
      {...rest}
      disabled={readonly as boolean}
      type="text"
      className={cn(
        "px-2 py-2 bg-transparent resize-none border-none rounded-md focus:outline-none block",
        className
      )}
      value={value}
      onChange={handleOnChange}
      onKeyDown={onKeyPress}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onPaste={handleOnPaste}
      style={{
        ...style,
        fontFamily: updateData?.themeConfiguration?.fontFamily,
      }}
      resize={true}
      ref={(node: any) => {
        containerRef.current = node;
        textRef.current = node;
        if (forwardedRef) {
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (typeof forwardedRef === "object") {
            (
              forwardedRef as React.MutableRefObject<HTMLInputElement | null>
            ).current = node;
          }
        }
      }}
      onInput={(e: any) => {
        e.target.style.height = "";
        e.target.style.height = e.target.scrollHeight + 1 + "px";
      }}
    />
  );
}

export default React.forwardRef(Text);
