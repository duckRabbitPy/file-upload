import React, { useState } from "react";
import { render } from "react-dom";
import FilerobotImageEditor, {
  TABS,
  TOOLS
} from "react-filerobot-image-editor";
function App() {
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);

  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };

  const saveImage = (editedImageObject, designState) => {
    console.log("saved", editedImageObject, designState);
  };

  function toPrecisedFloat(i) {
    return Number(i.toFixed(1));
  }

  return (
    <div>
      <button onClick={openImgEditor}>Open Filerobot image editor</button>
      {isImgEditorShown && (
        <FilerobotImageEditor
          source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
          onSave={(editedImageObject, designState) =>
            console.log("saved", editedImageObject, designState)
          }
          savingPixelRatio={4}
          onClose={closeImgEditor}
          annotationsCommon={{
            fill: "#ff0000"
          }}
          Text={{ text: "Filerobot..." }}
          Crop={{
            presetsItems: [
              {
                titleKey: "classicTv",
                descriptionKey: "4:3",
                ratio: toPrecisedFloat(4 / 3)
                // icon: CropClassicTv, // optional, CropClassicTv is a React component. Possible (React component, string or HTML Element)
              },
              {
                titleKey: "cinemascope",
                descriptionKey: "21:9",
                ratio: toPrecisedFloat(21 / 9)
                // icon: CropCinemaScope, // optional, CropCinemaScope is a React component.  Possible (React component, string or HTML Element)
              }
            ],
            presetsFolders: [
              {
                titleKey: "socialMedia", // will be translated into Social Media as backend contains this translation key
                // icon: Social, // optional, Social is a React component. Possible (React component, string or HTML Element)
                groups: [
                  {
                    titleKey: "facebook",
                    items: [
                      {
                        titleKey: "profile",
                        width: 180,
                        height: 180,
                        descriptionKey: "fbProfileSize"
                      },
                      {
                        titleKey: "coverPhoto",
                        width: 820,
                        height: 312,
                        descriptionKey: "fbCoverPhotoSize"
                      }
                    ]
                  }
                ]
              }
            ]
          }}
          tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
          defaultTabId={TABS.ADJUST} // or 'Annotate'
          //defaultToolId={TOOLS.TEXT} // or 'Text'
        />
      )}
    </div>
  );
}
render(<App />, document.getElementById("root"));
