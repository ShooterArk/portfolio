'use client';
import React, { useEffect, useRef, useState } from 'react';
import { PopupButton } from "react-calendly";

const CalendlyPopup = (props) => {
  
  return (
    <PopupButton
    url="https://calendly.com/yawar-shah/30min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=fd5b38"
    rootElement={props.rootElement}
    text={props.text}
    className={props.className}
  />
  );
};

export default CalendlyPopup;
