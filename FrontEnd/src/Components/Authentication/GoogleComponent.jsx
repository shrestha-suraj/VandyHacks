import React from 'react';
import createReactClass from 'create-react-class';
import { Google } from 'react-oauth2';

let GoogleComponent = createReactClass({
  getInitialState: function () {
    return {
      "data": {
        "id": "", "name": "", "email": "", "gender": "", "location": { "id": "", "name": "" }
      }
    };
  },

  google: function (err, res) {
    if (!err) {
      console.log(res);
      this.setState({ data: res.profile })
    } else {
      this.setState({ data: 'something happen wrong' })
    }
  },

  render: function () {
    return <div>
      <Google
        url={'http://localhost:3000'}
        clientId={'242620666426-v4r0d21ti2ksiuuv9cnpp2d4b8a7vhgk.apps.googleusercontent.com'}
        clientSecret={'LjKbGBkz_-e7DZkHAnTmrmUw'}
        redirectUri={'http://localhost:3000/'}
        scope={['https://www.googleapis.com/auth/userinfo.email']}
        width={300}
        height={300}
        callback={this.google}
        style={{ color: 'green' }}
      >
        Login With Google From component
  </Google>
      <hr />
      {JSON.stringify(this.state)}
    </div>
  }
});

export default GoogleComponent;