import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToast,
  IonLabel,
  IonProgressBar,
  IonTitle,
  IonButton,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>
          <IonButton onClick={() => setShowToast1(true)} expand="block">
            Show Toast 1
          </IonButton>
          <IonProgressBar type="indeterminate" />
        </IonCard>

        <IonToast
          color="tertiary"
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Your settings have been saved."
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
