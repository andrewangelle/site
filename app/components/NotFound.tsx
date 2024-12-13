import { strings } from "~/utils/constants";

export function NotFound(){
  return (
    <div className='section'>
      <div className="name-container">
        <div className='inner'>
          <h1 className="title not-found">
            {strings.notFound}
          </h1>
        </div>
      </div>
    </div>
  )
}