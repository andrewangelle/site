import { contactIcons } from "~/utils/constants";

export async function loader(){
  const body = JSON.stringify(contactIcons);
  const options = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  };

  return new Response(body, options)
}