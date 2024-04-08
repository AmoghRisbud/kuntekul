// Core viewer
import pdfFile from '../assets/kuntekul.pdf'
import { Worker } from "@react-pdf-viewer/core";
import { Viewer, ScrollMode, SpecialZoomLevel, ViewMode } from "@react-pdf-viewer/core";
import { useState,useEffect } from 'react';
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import Toolbar from './Toolbar';
import Mahalaxmi from "../assets/Mahalaxmi.jpg";
import Parshuram from "../assets/Parshuram.jpg";
import Yogeshwari from "../assets/Yogeshwari.jpg";
import Adityanath from "../assets/Adityanath.jpg";
import jsonData from "./../assets/Constants.json";



function PDF({ pageNumber }) {
  const [defaultPdfFile] = useState(pdfFile);

  const [value, setValue] = useState(pageNumber);


  useEffect(() => {
    console.log("Value changed:", pageNumber);

    jumpToPage(pageNumber);

  }, [pageNumber]);
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage } = pageNavigationPluginInstance;
  const transform = (slot) => ({
    ...slot,
    Download: () => <></>,
    DownloadMenuItem: () => <></>,
    EnterFullScreen: () => <></>,
    EnterFullScreenMenuItem: () => <></>,
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem: () => <></>,
    Open: () => <></>,
    Print: () => <></>,
    ShowProperties: () => <></>,
  });

  const renderToolbar = (Toolbar) => (
    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      fullScreenPlugin: {
        onExitFullScreen: (zoom) => {
          defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
            ScrollMode.Vertical
          );
        },
      },
    },
    sidebarTabs: (defaultTabs) => [],
    renderToolbar,
    jumpToPage,
  });
  const { renderDefaultToolbar } =
    defaultLayoutPluginInstance.toolbarPluginInstance;

  return (
    <div className="relative flex flex-row justify-center h-screen">
      <div className="flex m-auto mt-2 flex-col  flex-nowrap justify-center">
        <img
          class="h-56 bg-cover my-4 w-56 max-w-xs"
          src={Parshuram}
          alt=" description"
        />
        <h2 className="text-white my-2 ">श्री परशुराम </h2>
        <img
          class="h-56 bg-cover my-4 w-56 max-w-xs"
          src={Adityanath}
          alt=" description"
        />
        <h2 className="text-white my-2">श्री आदित्यनाथ </h2>
      </div>

      <div className="h-dvh m-auto container max-w-3xl content-center ">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={defaultPdfFile}
            plugins={[
              defaultLayoutPluginInstance,
              pageNavigationPluginInstance,
            ]}
            theme="dark"
            defaultScale={SpecialZoomLevel.PageFit}
            // viewMode={ViewMode.DualPage}
            initialPage={1}
          />
        </Worker>
      </div>

      <div className="flex flex-col mt-2 m-auto flex-nowrap justify-center">
        <img
          class="h-56 bg-cover my-4 w-56 max-w-xs"
          src={Yogeshwari}
          alt=" description"
        />
        <h2 className="text-white my-2 justify-self-center ">
          श्री योगेश्वरी{" "}
        </h2>
        <img
          class="h-56 bg-cover my-4 w-56 max-w-xs"
          src={Mahalaxmi}
          alt=" description"
        />
        <h2 className="text-white my-2 justify-self-center">
          श्री महालक्ष्मी{" "}
        </h2>
      </div>
    </div>
  );
}

export default PDF;
