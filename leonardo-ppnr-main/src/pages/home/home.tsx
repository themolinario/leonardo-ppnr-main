import { useQuery } from "@tanstack/react-query";
import { Button, Spinner } from "design-react-kit";
import React, {useEffect} from "react";

import reactLogo from "../../assets/react.svg";
import "./home.css";
import viteLogo from "/vite.svg";
import {useToastMessages} from "../../modules/managers/toast-manager";

export default function Home() {
  const { isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () =>
      new Promise((res) => {
        setTimeout(() => {
          console.log("API CALL COMPLETE");
          res(true);
        }, 2000);
      })
  });
  const { postMessage } = useToastMessages();

  useEffect(() => {
    postMessage({
      message: "Ciao sono una info",
      type: "danger",
      duration: 4000
    });
    postMessage({
      message: "Ciao sono una info",
      type: "warning",
      duration: 3000
    });
    postMessage({
      message: "Ciao sono una info asdjasdjasd asdhioashdosaihdi as pod asoihdoisahdoisad isa odppasodp sad",
      type: "success",
      duration: 2000
    });
  }, []);

  if (isLoading) return <Spinner label="Loading" active />;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Starting template</h1>
      <Button outline color="primary">
        HELLO WORLD
      </Button>
    </>
  );
}
