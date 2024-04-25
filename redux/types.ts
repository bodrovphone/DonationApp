export type Category = {
  id: number;
  name: string;
};

export type Donation = {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: number[];
  price: string;
};

export type StoreData = {
  user: {
    firstName: string;
    lastName: string;
    userId: number;
    profilePictureUri: string;
  };
  categories: {
    categories: Category[];
    selectedCategoryId: number | undefined;
  };
  donations: {
    items: Donation[];
    selectedDonationId: number | undefined;
    selectedDonationInfo: Donation;
  };
};
