import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-brands-svg-icons'

import { Card } from '~/styles';
import { PortfolioData } from "~/utils";

export function PortfolioCard({ title, description, githubLink, demoLink, demoText }: PortfolioData){
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
      <footer>
        <a
          href={githubLink}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FontAwesomeIcon
            icon={Icons.faGithub}
            size="2x"
          />
        </a>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            style={{ color: 'inherit' }}
          >
            <button>{demoText}</button>
          </a>
        )}
      </footer>
    </Card>
  )
}