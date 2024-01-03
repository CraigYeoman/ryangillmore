import { useState } from "react";
import {
  APIProviider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWIndow,
} from "@vis.gl/react-google-maps";

const Map = () => {
  const postion = { lat: 53.54, lng: 10 };

  return (
    <APIProviider apiKey={process.env.GOOGLE_MAPS}>
      <div>React Google Maps</div>
    </APIProviider>
  );
};
