import { useEffect, useState } from "react";

export const TodoDateandTime = () => {
  const [dateTime, setDateTime] = useState("");

  //Date and time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-IN");
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>{dateTime}</h2>
    </>
  );
};
