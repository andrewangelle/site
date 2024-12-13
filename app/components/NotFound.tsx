import { Link } from "@tanstack/react-router";
import { strings } from "~/utils/constants";

export function NotFound(){
  return (
    <div className='section'>
      <div className="name-container">
        <div className='inner'>
          <Link className="title not-found"  to='/'>
            {strings.notFound}
          </Link>
        </div>
      </div>
    </div>
  )
}