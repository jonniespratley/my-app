import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonAvatar,
  IonPage,
  IonToast,
  IonLabel,
  IonProgressBar,
  IonThumbnail,
  IonTitle,
  IonButton,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonSearchbar,
  IonMenu,
  IonList,
  IonItemDivider,
  IonListHeader,
  IonChip
} from "@ionic/react";

import "./Tab1.css";

const mockNavItems = [
  { id: 1, label: "Outdoor" },
  { id: 2, label: "Indoor" },
  { id: 3, label: "Tasks" },
  { id: 4, label: "Things" },
  { id: 5, label: "Friends" },
  { id: 6, label: "Calendar" }
];

const Tab1: React.FC = ({ items = mockNavItems }) => {
  const [showToast1, setShowToast1] = useState(true);
  return (
    <IonPage className="app-dashboard-grid">
      <IonContent fullscreen>
        <img src="https://picsum.photos/500/350" alt="Large Image" />

        <IonGrid>
          <IonRow>
            {items.map((item: any) => (
              <IonCol key={item.id} size="4">
                <IonItem button detail={false}>
                  <svg>
                    <rect width="100%" height="100%" fill="pink"></rect>
                  </svg>
                  <IonLabel>{item.label}</IonLabel>
                </IonItem>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonToast
          color="dark"
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Paired successfully."
          duration={2000}
        />

        <div slot="fixed" className="app-connecting">
          <IonChip>
            <IonLabel>
              Connecting...
              <IonProgressBar type="indeterminate"></IonProgressBar>
            </IonLabel>
          </IonChip>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
