
/**
 * I have no idea why vinxi and/or vite don't import the css in the production build.
 * I've spent a few hours trying to solve this.
 * Here's my solution at this point.
 */
export function writeStylesToHead() {
  const styles = document.createElement('style')
  styles.innerHTML = `
        body {
          --black: #000000;
          --white: #fafafa;
          --sky: #f0f2f5;
          --red: #8B0000;

          margin: 0;
          padding: 0;
        }

        ::-webkit-scrollbar {
          height: 0px;
          width: 0px;
        }

        ::-webkit-scrollbar-thumb {
          -webkit-border-radius: 1ex;
        }

        html {
          scroll-snap-type: both mandatory;
          margin: 0;
          padding: 0;
        }

        h1 {
          font-size: 40px;
          font-weight: 300;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
          padding: 0;
        }

        h2 {
          font-family: 'Helvetica Neue';
          font-size: 20px;
          font-weight: 500;
          margin: 0;
          padding: 0;
        }

        h3 {
          font-size: 15px;
          font-weight: 500;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
          padding: 0;
          color: var(--white);
        }

        .section {
          height: 100vh;
          position: relative;
        }

        .name-container {
          position: fixed;
          top: calc(50% - 50px);
          border: none;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 100%;

          .inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: none;
            background: transparent;
            outline-offset: 8px;
          }

          .title {
            text-transform: uppercase;
            color: var(--black);
            cursor: pointer;
            right: 30px;
            position: relative;
          }
          
          .sub-title {
            color: var(--red);
            font-family: 'Helvetica Neue';
            font-size: 20px;
            font-weight: 500;
            text-transform: lowercase;
            align-self: end;
          }


          @media (max-width: 400px) {
            .title {
              right: 10px;
              font-size: 30px;
            }

            .sub-title {
              font-size: 15px;
            }
          }
        }

        .links-container {
          width: 100%;
          bottom: 0px;
          top: 0px;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          top: calc(50% - 78px);
          position: absolute;

          .links {
            color: var(--white);
            display: flex;
            gap: 24px;
          }

          h3 {
            opacity: 0;
            min-height: 35px;
          }
        }

        .arrow {
          border: none;
          background: transparent;
          cursor: pointer;
          position: absolute;
          left: 50%;
          bottom: 24px;
        }
  `

  document.getElementsByTagName('head')[0].appendChild(styles)
}