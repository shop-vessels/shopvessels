import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SuccessBlock = ({ email, resend, changeEmail }) => {
  const [state, setState] = useState(false);
  const [timer, setTimer] = useState(0);

  async function handleResend() {
    setState(true);
    await resend(email);
    setState(false);
    setTimer(60);
  }

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (timer === 0 && interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(()=>{
    setTimer(0)
  },[])

  return (
    <div className="rounded-md border flex flex-col gap-2 mx-auto max-w-md p-5">
      <h2 className="font-bold text-lg">Did not receive the one-time link?</h2>
      <p className="text-muted-foreground">
        Please click the resend button to get the link again
      </p>
      <div className="flex gap-2 mt-5">
        <Button size="sm" disabled={state || timer > 0} onClick={handleResend}>
          {/* Resend {timer > 0 && `${timer}s`}{" "}
          {state && <Loader className="animate-spin" />} */}
          {!state && (
            <>
              Resend
              {timer > 0 && ` ${timer}s`}{" "}
              {state && <Loader className="animate-spin" />}
            </>
          ) || <Loader className="animate-spin" />}
        </Button>
        <Button size="sm" onClick={changeEmail} variant="outline">
          Change Email
        </Button>
      </div>
    </div>
  );
};

export default SuccessBlock;
