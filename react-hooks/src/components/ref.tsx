import { useEffect, useRef, useState } from "react";

function RefComp() {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
    if (passwordRef.current) {
      passwordRef.current.type = show ? "password" : "text"
    }
  };

  useEffect(() => {
    passwordRef.current?.focus();
  }, []);

  return (
    <div>
      <input
        ref={passwordRef}
        type="password"
        placeholder="enter your password"
      />
      <button onClick={handleShow}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default RefComp;
