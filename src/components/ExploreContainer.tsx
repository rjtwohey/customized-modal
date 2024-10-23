import React, { useRef } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { star, heart, home, person } from 'ionicons/icons';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const modal = useRef<HTMLIonModalElement>(null);

  const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    // Handle modal dismiss event
  }

  return (
    <div id="container">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton id="open-modal">Open Modal</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
        </IonRow>

        <IonRow>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
        </IonRow>

        <IonRow>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
        </IonRow>

        <IonRow>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
        </IonRow>

        <IonRow>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
          <IonCol><IonButton>Button</IonButton></IonCol>
        </IonRow>

      </IonGrid>
      <IonModal ref={modal} trigger="open-modal" onWillDismiss={onWillDismiss} className="custom-modal">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
            </IonButtons>
            <IonTitle  >Modal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="modal-content">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonIcon icon={star} size="large" />
              </IonCol>
              <IonCol>
                <IonIcon icon={heart} size="large" />
              </IonCol>
              <IonCol>
                <IonIcon icon={home} size="large" />
              </IonCol>
              <IonCol>
                <IonIcon icon={person} size="large" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonIcon icon={star} size="large" />
              </IonCol>
              <IonCol>
                <IonIcon icon={heart} size="large" />
              </IonCol>
              <IonCol>
                <IonIcon icon={home} size="large" />
              </IonCol>
              <IonCol>
                <IonIcon icon={person} size="large" />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default ExploreContainer;
