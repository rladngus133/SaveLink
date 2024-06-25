import { FocusEvent, useState } from "react";

const useInputStatus = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    if (e.target.value) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  return {
    isFocused,
    isTyping,
    handleFocus,
    handleBlur,
  };
};

export default useInputStatus;
