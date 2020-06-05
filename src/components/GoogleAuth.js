import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client.init({
        clientId:
          "433533422201-qn07lv71ue2cmha7f3dt8t33snea7evb.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}
export default GoogleAuth;
