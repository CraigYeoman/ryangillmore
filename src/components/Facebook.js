import React, { useEffect } from 'react';

const FacebookPagePlugin = ({ url, width, height }) => {
  useEffect(() => {
    // Load Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v12.0', // Change to the version you want
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <div className="fb-page" data-href={url} data-width={width} data-height={height} data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-tabs="timeline">
      <blockquote cite={url} className="fb-xfbml-parse-ignore">
        <a href={url}>Ryan Gillmore Racing</a>
      </blockquote>
    </div>
  );
};

export default FacebookPagePlugin;