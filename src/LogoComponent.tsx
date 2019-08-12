import * as React from "react";

let Logo = "http://tortugadesign.com/assets/images/jafLinked.png";

export default class LogoComponent extends React.Component<{}> {

    render() {
        return (
            <div>
                {/* React components must have a wrapper node/element */}
                <h1>A Basic React Component (Example) with Typescript</h1>
                <div>

                    <img src={Logo} />
                </div>
                <p>This component displays the Tortuga logo. For more info on Tortuga, please visit <a target="_blank" href="http://tortugadesign.com">https://tortugadesign.com</a></p>
            </div>
        );
    }
}