import React, { useState } from "react";

import {
  IonModal,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const Tab4: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
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
        <IonModal isOpen={showModal2} swipeToClose={true}>
          <p>This is a modal</p>
          <IonButton onClick={() => setShowModal2(false)}>
            Close Modal
          </IonButton>
          <IonButton onClick={() => setShowModal3(true)}>
            Show Modal 3
          </IonButton>
        </IonModal>
        <IonModal isOpen={showModal3} swipeToClose={true}>
          <p>This is a modal</p>
          <IonButton onClick={() => setShowModal3(false)}>
            Close Modal
          </IonButton>
          <IonButton onClick={() => setShowModal3(true)}>
            Show Modal 3
          </IonButton>
        </IonModal>

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
        <IonButton onClick={() => setShowModal2(true)}>Show Modal 2</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
