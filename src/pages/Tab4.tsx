import React, { useState } from "react";

import {
  IonModal,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const Tab4: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonModal
          isOpen={showModal}
          cssClass="my-custom-class"
          swipeToClose={true}
        >
          <p>This is where a video will be</p>

          <video width="100%" height={450} loop src="/assets/video1.mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>

          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>

        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
