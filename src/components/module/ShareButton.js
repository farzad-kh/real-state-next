"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";
import styles from "@/module/ShareButton.module.css";

function ShareButton() {
  const [url, setUrl] = useState("");
  const [isCopy, setIscopy] = useState(false)
  if (isCopy) setTimeout(() => setIscopy(false), 3000)
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div>

      <CopyToClipboard onCopy={() => setIscopy(true)} text={url}>
        <div className={`${styles.container} !my-2 p-4`}>
          <LuShare2 />
          <button >اشتراک گذاری</button>

        </div>
      </CopyToClipboard>
      {isCopy && <div className="bg-green-500 text-white">کپی شد</div>}
    </div>
  );
}

export default ShareButton;
