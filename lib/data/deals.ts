import { firebase as config } from '../../config';

import * as firebase from 'firebase';
import 'firebase/firestore';
export interface Deal {
  id: string;
  title: string;
  description: string;
}

const getDealsRef = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  return firebase.firestore().collection('deals');
};

export const getDeals = async () => {
  const deals = [];
  const dealCollection = await getDealsRef().get();
  dealCollection.forEach((doc) => {
    const deal = doc.data() as Deal;

    deals.push({
      id: doc.id,
      title: deal.title,
      description: deal.description,
    });
  });

  return deals;
};

export const addDeal = async (deal: Deal) => {
  getDealsRef()
    .add(deal)
    .then((a) => {
      console.log('success', a);
    });
};

export const getDeal = async (id: string) => {
  try {
    const deal = (await getDealsRef().doc(id).get()).data();
    return deal;
  } catch (error) {
    console.error('Error: getDeal', { error });
    return null;
  }
};
