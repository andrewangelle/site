import { portfolioData } from "~/utils";

export async function loader(){
  const body = JSON.stringify(portfolioData);
  const options = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  return new Response(body, options)
}