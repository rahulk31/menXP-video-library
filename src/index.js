import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { VideoProvider } from "./context/video-context"

// Call make Server
makeServer();


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Router><VideoProvider><App /></VideoProvider></Router>);
