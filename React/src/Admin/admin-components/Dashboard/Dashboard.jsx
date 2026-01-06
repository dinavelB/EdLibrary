import { useEffect } from "react";

export default function Dashboard() {
  const token = localStorage.getItem("adminToken"); //take the string only or key

  const sampleVerify = async () => {
    const sendData = await fetch("/dashboard", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await sendData.json();
    console.log(data);
  };

  useEffect(() => {
    sampleVerify();
  }, []);

  return <h1>helo</h1>;
}
